import { z } from "zod";

export const formLabel = {
  name: {
    name: "name",
    label: "Nama / Instansi / Perusahaan / Organisasi",
    placeholder: "Nama / Instansi / Perusahaan / Organisasi",
    withAsterisk: true,
  },
  date: {
    name: "date",
    label: "Tanggal",
    placeholder: "xx-xx-xxxx",
    withAsterisk: true,
  },
  report: {
    name: "report",
    label: "Keluhan / Aduan",
    placeholder: "...",
    withAsterisk: true,
  },
};

export const schema = z.object({
  name: z.string().min(2),
  date: z.string(),
  report: z.string().min(3),
});
