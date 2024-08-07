import { initApp } from "./server/main";
import { toWebHandler } from "h3";

export const config = { path: "/api/*" };
// @ts-ignore
export default toWebHandler(initApp(Netlify.env.toObject()));
