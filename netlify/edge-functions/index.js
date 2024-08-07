import { initApp } from "../../src/server/main";
import { toWebHandler } from "h3";

export const config = { path: "/api/*" };
// eslint-disable-next-line
export default toWebHandler(initApp(Netlify.env.toObject()).h3App);
