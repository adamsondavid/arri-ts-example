import { ArriApp, ArriService } from "@arrirpc/server";
import greetRpc from "./greet.rpc";
import { z } from "zod";

export function initApp(unvalidatedEnv: unknown) {
  const env = z
    .object({
      // TODO: define your env vars zod schema here
    })
    .parse(unvalidatedEnv);

  const api = new ArriService("api");
  api.rpc("greet", greetRpc);

  const app = new ArriApp();
  app.use(api);
  return app;
}
