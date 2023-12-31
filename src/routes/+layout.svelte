<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/nav.svelte";
    import ViewTransition from "$lib/components/viewTransition.svelte";

    import { onMount } from "svelte";

    onMount(() => {
        document.documentElement.classList.remove("no-transition");
    });
</script>

<svelte:head>
    <title>Xarifa</title>
    <meta name="description" content="Sam Hay's Portfolio Website" />
    <link rel="icon" href="/profile-pic.png" />
</svelte:head>

<ViewTransition />
<Nav />
<div>
    <slot />
</div>

<style>
    div {
        height: 100%;
        margin: 4rem;
    }

    @media (max-width: 570px) {
        div {
            margin-top: 12rem;
        }
    }
</style>
