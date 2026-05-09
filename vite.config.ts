import { defineConfig as lovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig as viteConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default async (env: any) => {
  if (env.command === "serve") {
    return lovableConfig({ cloudflare: false })(env);
  }

  return viteConfig({
    define: {
      "import.meta.env.VITE_SPA_MODE": JSON.stringify(true),
    },
    plugins: [tailwindcss(), TanStackRouterVite(), react(), tsconfigPaths()],
    build: {
      outDir: "dist",
    },
  });
};
