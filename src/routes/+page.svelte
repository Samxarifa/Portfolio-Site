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
    @keyframes slide-in {
        0% {
            transform-origin: bottom left;
            transform: scaleX(0);
        }
        10% {
            transform-origin: bottom left;
            transform: scaleX(1);
        }
        80% {
            transform-origin: bottom right;
            transform: scaleX(1);
        }
        90% {
            transform-origin: bottom right;
            transform: scaleX(0);
        }
        100% {
            transform-origin: bottom left;
            transform: scaleX(0);
        }
    }

    @keyframes color-scroll {
        0% {
            background-position: 0% 100%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 100%;
        }
    }

    h1 {
        background: linear-gradient(to right, var(--lightblue), var(--lightgreen),var(--yellow), var(--lightred));
        background-size: 300% 100%;
        background-clip: text;
        color: transparent;
        font-size: 7rem;
        width: fit-content;
        text-transform: uppercase;
        position: relative;
        animation: color-scroll 15s ease 0s infinite;
    }


    h1::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 1rem;
        bottom: 0;
        left: 0;
        background: linear-gradient(to right, var(--lightblue), var(--lightgreen),var(--yellow), var(--lightred));
        background-size: 300% 100%;
        animation: slide-in 10s ease-out infinite, color-scroll 15s ease 0s infinite;
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