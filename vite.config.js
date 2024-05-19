import { defineConfig } from "vite";
import { resolve } from "path";

const root = "src";

export default defineConfig({
    root,
    base: "/",
    publicDir: "../public",
    plugins: [],
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                // htmlを追加する場合にはこちらに追記
                index: resolve(root, "index.html"),
                news: resolve(root, "news.html"),
                contact: resolve(root, "contact.html"),
            },
        },
    },
    server: {
        host: true,
    },
});
