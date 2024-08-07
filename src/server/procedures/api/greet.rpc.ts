import { defineRpc } from "@arrirpc/server";
import { a } from "@arrirpc/schema";

export default defineRpc({
  method: "get",
  params: a.object({
    name: a.string(),
  }),
  response: a.object({
    message: a.string(),
  }),
  handler({ params }) {
    return { message: `Hello ${params.name}` };
  },
});
