import path from "node:path";
import { fileURLToPath } from "node:url";
import "dotenv/config";
import { defineConfig } from "prisma/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  schema: path.join(__dirname, "prisma", "schema.prisma"),
  migrations: {
    seed: "node --import tsx prisma/seed.ts",
  },
});
