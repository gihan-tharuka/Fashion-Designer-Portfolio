import { prisma } from "../lib/prisma.js";
import { HttpError } from "../lib/errors.js";

export async function getSiteSettings() {
  const [siteSettings, designerProfile] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.designerProfile.findFirst({
      include: {
        skills: {
          orderBy: [{ type: "asc" }, { displayOrder: "asc" }],
        },
      },
    }),
  ]);

  if (!siteSettings) {
    throw new HttpError(404, "Site settings not found");
  }

  return {
    siteSettings,
    designerProfile,
  };
}
