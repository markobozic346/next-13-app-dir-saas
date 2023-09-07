import { auth as getAuth } from "@clerk/nextjs/app-beta";

import { appRouter } from "@/server/routers/root";
import { createContextInner } from "@/server/trpc";
import "server-only";

export const serverClient = async () =>
  appRouter.createCaller(await createContextInner({ auth: getAuth() }));
