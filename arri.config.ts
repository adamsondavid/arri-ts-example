import { defineConfig, generators } from "arri";

export default defineConfig({
  entry: "main.dev.ts",
  port: 5174,
  generators: [
    generators.typescriptClient({
      clientName: "Server",
      outputFile: "src/client/composables/server/server.g.ts",
    }),
  ],
});
