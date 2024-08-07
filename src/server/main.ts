import { ArriApp, ArriService } from "@arrirpc/server";
import { initGreet } from "./greet.rpc";
import { z } from "zod";

export function initApp(unvalidatedEnv: unknown) {
  const env = z
    .object({
      salutation: z.string().optional(),
    })
    .parse(unvalidatedEnv);

  const api = new ArriService("api");
  api.rpc("greet", initGreet(env.salutation));

  const app = new ArriApp();
  app.use(api);
  return app;
}
