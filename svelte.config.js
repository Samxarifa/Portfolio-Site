import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";
import { createCssVariablesTheme } from "shiki/core";

const shikiTheme = createCssVariablesTheme({
    name: "css-variables",
    variablePrefix: "--shiki-",
    variableDefaults: {},
    fontStyle: true,
});

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
    extensions: [".md"],
    highlight: {
        highlighter: async (code, lang = "text") => {
            const highlighter = await createHighlighter({
                themes: [shikiTheme],
                langs: [
                    "javascript",
                    "typescript",
                    "html",
                    "css",
                    "php",
                    "json",
                    "python",
                    "c#",
                    "java",
                    "bash",
                ],
            });
            const html = escapeSvelte(
                highlighter.codeToHtml(code, { lang, theme: "css-variables" })
            );
            return `{@html \`${html}\`}`;
        },
    },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
    kit: {
        adapter: adapter(),
    },
};

export default config;
