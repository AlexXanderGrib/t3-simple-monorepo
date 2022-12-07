import { test } from "./routes/test.js";
import { router } from "./trpc.js";

export const appRouter = router({
  healthCheck: test,
});

export type AppRouter = typeof appRouter;
