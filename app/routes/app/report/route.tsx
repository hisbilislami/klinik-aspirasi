import { useEffect } from "react";
import { Table, Text } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");

  if (!start || !end) {
    throw new Response("Missing start or end date", { status: 400 });
  }

  const data = await prisma.aspiration.findMany({
    where: {
      date: {
        gte: new Date(start),
        lte: new Date(end),
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return { start, end, data };
}

export default function ReportPreview() {
  const { start, end, data } = useLoaderData<typeof loader>();

  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 300); // short delay ensures styles are applied
  }, []);

  return (
    <div className="max-h-screen min-h-screen overflow-hidden w-full">
      {/* Your report content here */}
      <div
        style={{ padding: "2rem", fontFamily: "sans-serif" }}
        className="text-center"
      >
        <Text size="xl" fw={700}>
          Klinik Aspirasi - Report
        </Text>
        <Text size="sm" variant="dimmed">
          Periode: {start} sampai {end}
        </Text>

        <Table
          mt="md"
          striped
          className="break-inside-avoid print:break-inside-avoid"
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Aspirasi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: unknown, index: number) => {
              const report = item as {
                id: number;
                name: string;
                description: string;
                date: string;
              };

              const date = new Date(report.date);

              const formattedDate = new Intl.DateTimeFormat("id", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(date);

              return (
                <tr
                  key={report.id}
                  className="break-inside-avoid print:break-inside-avoid"
                >
                  <td>{index + 1}</td> {/* 👈 Numbering starts from 1 */}
                  <td>{formattedDate}</td>
                  <td>{report?.name}</td>
                  <td>{report?.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <p className="text-right text-xs text-gray-400 fixed bottom-2 right-2">
        Generated by Hisbil&apos;s Genius System™
      </p>
    </div>
  );
}
