import { Server } from "./server.g";

const server = new Server();
export const useServer = () => server.api;
