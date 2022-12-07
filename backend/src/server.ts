import ws from "@fastify/websocket";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { appRouter } from "./router/index.js";
import { createContext } from "./router/context.js";

export interface ServerOptions {
  dev?: boolean;
  port?: number;
  prefix?: string;
  host?: string;
}

function createServer({
  dev = true,
  port = 3000,
  prefix = "/trpc",
  host = "0.0.0.0",
}: ServerOptions) {
  const server = fastify({ logger: dev });

  server.register(ws);
  server.register(fastifyTRPCPlugin, {
    prefix,
    useWSS: true,
    trpcOptions: { router: appRouter, createContext },
  });

  const stop = () => server.close();
  const start = async () => {
    try {
      await server.listen({ host, port });
      console.log(`Listening on http://${host}:${port}`);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };

  return { server, start, stop };
}

const server = createServer({
  port: parseInt(process.env.PORT || "") || 5000,
  prefix: "/api/rpc",
  dev: process.env.NODE_ENV !== "production",
});

await server.start();
