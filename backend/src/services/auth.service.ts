import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { HttpError } from "../lib/errors.js";
import { serializeUser } from "../lib/user.js";
import { signAuthToken } from "../lib/auth.js";

export async function loginAdmin(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!user) {
    throw new HttpError(401, "Invalid email or password");
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatches) {
    throw new HttpError(401, "Invalid email or password");
  }

  const serializedUser = serializeUser(user);

  return {
    token: signAuthToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    }),
    user: serializedUser,
  };
}

export async function getCurrentAdmin(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new HttpError(404, "Admin user not found");
  }

  return serializeUser(user);
}
