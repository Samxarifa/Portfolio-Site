{#key url}
<div in:fade>
    <slot />
</div>
{/key}

<script lang="ts">
    import { fade } from "svelte/transition";
    export let url = '';
</script>

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