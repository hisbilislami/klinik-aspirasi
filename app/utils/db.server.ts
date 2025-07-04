import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma";

const adapter = new PrismaBetterSQLite3({
  // url: process.env.DATABASE_URL
  url: "file:./prisma/dev.db",
});

const prisma = new PrismaClient({ adapter });

export { prisma };
