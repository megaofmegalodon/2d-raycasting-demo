import * as esbuild from "esbuild";

async function main() {
    const ctx = await esbuild.context({
        entryPoints: ["src/index.ts"],
        bundle: true,
        minify: true,
        minifySyntax: true,
        outfile: "dist/bundle.js"
    });

    ctx.watch();
    console.log("Watching for changes...");
}

main();