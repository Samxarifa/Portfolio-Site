<svelte:head>
    <title>Xarifa</title>
    <meta name="description" content="Sam Hay's Portfolio Website" />
    <link rel="icon" href="/profile-pic.png" />
</svelte:head>

<Nav />
<main>
    <slot />
</main>

<script lang="ts">
    import '../app.css';
    import Nav from '$lib/components/nav.svelte';
    import {onMount} from 'svelte';

    onMount(() => {
        document.documentElement.classList.remove('no-transition');
    });
</script>