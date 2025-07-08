import { parseWithZod } from "@conform-to/zod";
import { ActionFunctionArgs } from "@remix-run/node";
import { BadRequestError } from "~/utils/error.server";
import { createToastHeaders, redirectWithToast } from "~/utils/toast.server";
import { schema } from "./constant";
import { prisma } from "~/utils/db.server";

export const actionHandler = async (request: ActionFunctionArgs["request"]) => {
  try {
    const formData = await request.formData();
    const submission = parseWithZod(formData, { schema: schema });

    if (submission.status !== "success") {
      return submission.reply();
    }

    await prisma.aspiration.create({
      data: {
        name: submission.value.name,
        date: new Date(),
        report: submission.value.report,
      },
    });

    return redirectWithToast("/app?success=true", {
      title: "Data submitted.",
      type: "success",
      description: "Data successfully submitted.",
    });
  } catch (error) {
    let response: Response;
    let message = null;

    if (error instanceof Error) {
      console.log(error.stack);
      message = error.message;
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
        description: "Try again in a few minutes" + message,
      }),
    });

    return response;
  }
};
