import * as esbuild from "esbuild";

async function main() {
    await esbuild.build({
        entryPoints: ["src/index.ts"],
        bundle: true,
        minify: true,
        minifySyntax: true,
        outfile: "dist/bundle.js"
    });
}

main();