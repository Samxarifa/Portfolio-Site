<script lang="ts">
    import { browser } from "$app/environment";
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import ProfilePic from "$lib/components/profilePic.svelte";
    import Typewriter from "typewriter-effect/dist/core";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let loaded = false;

    let span: HTMLSpanElement;
    onMount(() => {
        loaded = true;
        setTimeout(() => {
            browser &&
                new Typewriter(span, {
                    strings: [
                        "Portfolio",
                        "Website",
                        "Projects",
                        "Tests",
                        "Page",
                        "Code",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 100,
                    pauseFor: 5000,
                });
        }, 1000);
    });
</script>

{#if loaded}
    <ContentWrapper max={1400}>
        <hgroup>
            <div in:fly={{ x: -100 }}>
                <h1>Xarifa</h1>
                <h2 id="tagline">Sam Hay's <span bind:this={span}> </span></h2>
            </div>
            <ProfilePic />
        </hgroup>
    </ContentWrapper>
    <ContentWrapper max={1000}>
        <main in:fly={{ y: 100, delay: 500 }}>
            <h2>Who am I?</h2>
            <p>
                I am a student developer, currently learning my way into the
                industry. I am currently studying Computer Science at the UHI
                (University of Highlands and Islands), but am also learning and
                creating in my spare time.
            </p>
            <br />
            <p>
                An example of this is... this website. It has been created using
                sveltekit with typescript. I chose to use svelte as it seemed
                easy and fun to pick up and learn. I wasn't originally planning
                to do anything with svelte other than play around, but as I went
                further with this site, I thought I might aswell use it. This is
                my first time using svelte but I have also breifly placed around
                with React/NextJS in the past. I have also made sites with PHP,
                as well as use other languages in non-web projects.
            </p>
            <br />
            <ul>
                <li>
                    For more examples of what I have done, please click <a
                        href="/posts">here</a
                    >.
                </li>
                <li>
                    To get into contact with me, or to see my github, please
                    click <a href="/links">here</a>.
                </li>
            </ul>
        </main>
    </ContentWrapper>
{/if}

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
        background: linear-gradient(
            to right,
            var(--lightblue),
            var(--lightgreen),
            var(--yellow),
            var(--lightred)
        );
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
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 1rem;
        bottom: 0;
        left: 0;
        background: linear-gradient(
            to right,
            var(--lightblue),
            var(--lightgreen),
            var(--yellow),
            var(--lightred)
        );
        background-size: 300% 100%;
        animation:
            slide-in 10s ease-out infinite,
            color-scroll 15s ease 0s infinite;
    }

    h2:not(#tagline) {
        font-size: 5rem;
    }

    hgroup {
        display: flex;
        gap: 1rem;
        height: 40rem;
        justify-content: space-between;
        align-items: center;
    }

    main p {
        text-align: justify;
    }

    main a {
        color: #2f81f7;
        text-decoration: none;
    }

    @media (max-width: 570px) {
        hgroup {
            height: 25rem;
        }
    }

    @media (max-width: 450px) {
        hgroup {
            flex-direction: column-reverse;
            justify-content: center;
            margin-bottom: 5rem;
        }
    }
</style>
