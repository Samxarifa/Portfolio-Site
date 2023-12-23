<ContentWrapper max={1400}>
    <hgroup>
        <h1>Xarifa</h1>
        <h2>Sam Hay's Portfolio</h2>
    </hgroup>
</ContentWrapper>

<script lang="ts">
    import {theme} from '$lib/theme';
    import ContentWrapper from '$lib/components/contentWrapper.svelte';
</script>

<style>
    h1 {
        background: linear-gradient(to right, var(--lightblue), var(--lightgreen));
        background-clip: text;
        color: transparent;
        font-size: 7rem;
        width: fit-content;
        text-transform: uppercase;
    }

    hgroup {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 40rem;
        margin-inline: 4rem;
        justify-content: center;
    }

</style>