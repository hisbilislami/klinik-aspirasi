import { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/utils/db.server";
import { BadRequestError } from "~/utils/error.server";
import { createToastHeaders } from "~/utils/toast.server";

export const loaderHandler = async (request: LoaderFunctionArgs["request"]) => {
  try {
    const searchParams = new URL(request.url).searchParams;
    const size = Number(searchParams.get("size")) || 10;
    const page = Number(searchParams.get("page")) || 0;
    const offset = page * size;

    const search = searchParams.get("q");

    const where = {
      deletedAt: null,
      ...(search && {
        name: {
          contains: search,
        },
      }),
    };

    const ka = await prisma.aspiration.findMany({
      where,
      take: size,
      skip: offset,
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = await prisma.aspiration.count({ where });

    return new Response(
      JSON.stringify({
        result: {
          data: ka,
          totalCount: Number(total),
          pageInfo: {
            hasNextPage: (page + 1) * size < total,
            hasPreviousPage: page > 0,
          },
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    let response: Response;

    if (error instanceof Error) {
      console.log(error.stack);
    }

    if (error instanceof BadRequestError) {
      response = new Response(JSON.stringify(request), {
        headers: await createToastHeaders({
          ...error.details,
          type: "error",
        }),
      });

      return response;
    }

    response = new Response(JSON.stringify(request), {
      headers: await createToastHeaders({
        type: "error",
        title: "Failed",
        description: "Try again in a few minutes",
      }),
    });

    return response;
  }
};
