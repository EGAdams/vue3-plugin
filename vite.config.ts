
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig( {
    plugins: [
        vue(),
        typescript2( {
            check: false,
            include: [ "src/components/*.vue" ],  // build type definition.  you can also setup pk json to run config and copy manually.
            tsconfigOverride: {
                compilerOptions: {
                    sourceMap: true,
                    declaration: true,
                    declarationMap: true,
                },
                exclude: [ "vite.config.ts" ],
            },
        } ),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath( new URL( "./src", import.meta.url ) ),
        },
    },
    build: {
        cssCodeSplit: false,
        lib: {
            entry: "./src/ViewerPlugin.ts",
            formats: [ "es", "cjs" ], // ECMA script module format and CommonJS format // !! this might be important !! cjs is for older? browsers.
            name: "ViewerPlugin",
            fileName: ( format ) => ( format === "es" ? "index.js" : "index.cjs" ),
        },
        rollupOptions: {
            external: [ "vue" ],  // avoid vnode and vnode symbol errors because of trying to load vue twice.  plus avoids size problems.
            output: {
                globals: {
                    vue: "Vue", // Erik not sure what this does.
                },
            },
        },
    },
} );
