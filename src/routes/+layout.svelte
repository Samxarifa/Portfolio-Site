<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/nav.svelte";
    import { onMount } from "svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";

    export let data;

    onMount(() => {
        document.documentElement.classList.remove("no-transition");
    });
</script>

<svelte:head>
    <title>Xarifa</title>
    <meta name="description" content="Sam Hay's Portfolio Website" />
    <link rel="icon" href="/profile-pic.png" />
</svelte:head>

<Nav />
<PageTransition url={data.url}>
    <slot />
</PageTransition>
