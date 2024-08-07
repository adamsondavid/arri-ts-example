import app from "../../.output/app.mjs";
import { toWebHandler } from "h3";

export const config = { path: "/api/*" };
export const handler = toWebHandler(app.h3App);
