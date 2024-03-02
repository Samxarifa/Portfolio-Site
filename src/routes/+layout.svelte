<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/nav.svelte";
    import { onMount } from "svelte";
    import PageTransition from "$lib/components/pageTransition.svelte";

    export let data;

    async function detectSWUpdate() {
        const registration = await navigator.serviceWorker.ready;

        registration.addEventListener("updatefound", () => {
            const newSW = registration.installing;
            newSW?.addEventListener("statechange", () => {
                if (newSW.state === "installed") {
                    if (confirm("New Update Available! Reload to update?")) {
                        newSW.postMessage({ type: "SKIP_WAITING" });
                        window.location.reload();
                    }
                }
            });
        });
    }

    onMount(() => {
        detectSWUpdate();
        document.documentElement.classList.remove("no-transition");
    });
</script>

<svelte:head>
    <title>Xarifa</title>
    <meta name="description" content="Sam Hay's Portfolio Website" />
    <link
        rel="icon"
        href="https://samxarifa.github.io/Static/Portfolio/profile-pic.png"
    />
</svelte:head>

<Nav />
<PageTransition url={data.url}>
    <slot />
</PageTransition>
