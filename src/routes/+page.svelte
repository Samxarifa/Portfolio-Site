<ContentWrapper max={1400}>
    <hgroup>
        <div>
            <h1>Xarifa</h1>
            <h2>Sam Hay's <span bind:this={span}> </span></h2>
        </div>
        <ProfilePic />
    </hgroup> 
    <main>
        <h2>Home Page</h2>
        <p>Work in Progress...</p>
    </main>      
</ContentWrapper>

<script lang="ts">
    import { browser } from '$app/environment';
    import ContentWrapper from '$lib/components/contentWrapper.svelte';
    import ProfilePic from '$lib/components/profilePic.svelte';
    import Typewriter from 'typewriter-effect/dist/core';
    import { onMount } from 'svelte';

    let span: HTMLSpanElement;
    onMount(() => {
        browser && new Typewriter(span, {
            strings: ['Portfolio', 'Website', 'Projects','Tests','Page','Code'],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 100,
            pauseFor: 5000,
        });
    });
    
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

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes blink {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: var(--text);
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
        gap: 1rem;
        height: 40rem;
        margin-inline: 4rem;
        justify-content: space-between;
        align-items: center;
    }

    main {
        margin-inline: 4rem;
    }

    @media (max-width: 450px) {
        hgroup {
            flex-direction: column-reverse;
            justify-content: center;
        }
    }

</style>