import { defineConfig, generators } from "arri";

export default defineConfig({
  srcDir: "src/server",
  entry: "main.ts",
  port: 5174,
  generators: [
    generators.typescriptClient({
      clientName: "Server",
      outputFile: "src/client/composables/server/server.g.ts",
    }),
  ],
});
