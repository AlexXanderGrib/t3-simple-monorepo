import { publicProcedure } from "../trpc.js";

export const test = publicProcedure.query(() => {
  return {
    status: "ok",
  };
});
