import { ColumnDef } from "@tanstack/react-table";

export interface ListBudgetTracker {
  id: number;
  name: string;
  date: string;
  report: string;
}

export const columns: ColumnDef<ListBudgetTracker>[] = [
  {
    header: "Nama / Instansi / Perusahaan / Organisasi",
    accessorKey: "name",
    size: 150,
  },
  {
    header: "Tanggal",
    accessorKey: "date",
    cell: ({ row }) => {
      const date = row.original.date;
      const dateObject = new Date(date);

      const formattedDate = new Intl.DateTimeFormat("id", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(dateObject);

      return <span>{formattedDate}</span>;
    },
  },
  {
    header: "Keluhan / Aduan",
    accessorKey: "report",
  },
];
