import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  base: "/landify/",
  plugins: [
    Unfonts({
      google: {
        families: ["Inter"],
      },
    }),
    imagetools(),
  ],
});
