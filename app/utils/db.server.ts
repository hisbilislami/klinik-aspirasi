import pkg from "@prisma/client";
const { PrismaClient } = pkg;
import { singleton } from "./singleton.server";

export const prisma = singleton("prisma", () => {
  return new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
});
