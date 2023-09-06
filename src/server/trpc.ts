import { inferAsyncReturnType, initTRPC } from "@trpc/server";

export const createContext = async () => {
  return {};
};

type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;

//procedures
export const publicProcedure = t.procedure;
