---
title: Hello World!
description: My first post to my portfolio
date: 2023-12-26
published: true
---

# My first Post

This is my first post to the page. It is also a test post to see if all the functions of making a publishing a post are working...
This page was made with sveltekit and typescript. It also uses MDsveX for markdown support as well as shiki for syntax highlighting for code blocks.

---

## Typescript Code Example

This is an example of a code block with syntax highlighting

```ts
// Check if theme is stored in browser storage
const theme = localStorage.getItem("theme");

if (theme) {
    // Apply theme
    document.documentElement.setAttribute("data-theme", theme);
}
```

This is code for this website to check for manual light or dark mode on page load.

## Links

-   The source-code for this website is on [Github](https://github.com/Samxarifa/Portfolio_Svelte)
-   The [Svelte](https://kit.svelte.dev/) package
-   [MDsveX](https://mdsvex.com/) and [Shiki](https://shiki.matsu.io/) for markdown support