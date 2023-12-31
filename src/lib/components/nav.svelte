<script lang="ts">
    import { theme, toggleTheme } from "$lib/theme";
    import { Sun, Moon, SunMoon } from "lucide-svelte";
    import { fly } from "svelte/transition";
    import ContentWrapper from "./contentWrapper.svelte";

    let focused = false;

    const toggleNav = () => {
        focused = !focused;
    };

    const closeNav = () => {
        focused = false;
    };
</script>

<svelte:window
    on:keydown={(event) => {
        if (event.key === ";" && event.ctrlKey) {
            event.preventDefault();
            toggleTheme();
        }
    }}
/>

<nav class={focused ? "focused" : ""}>
    <button id="menu-toggle" on:click={toggleNav}>
        <div>
            <span />
        </div>
    </button>
    <ContentWrapper>
        <div class="content">
            <h1><a on:click={closeNav} href="/">Xarifa</a></h1>
            <ul>
                <li><a on:click={closeNav} href="/">Home</a></li>
                <li><a on:click={closeNav} href="/posts">Posts</a></li>
                <li><a on:click={closeNav} href="/links">Links</a></li>
            </ul>
            <button on:click={toggleTheme} id="theme-toggle">
                {#if $theme === "dark"}
                    <div in:fly={{ y: 10 }}>
                        <Moon />
                        <span>Dark</span>
                    </div>
                {:else if $theme === "light"}
                    <div in:fly={{ y: 10 }}>
                        <Sun />
                        <span>Light</span>
                    </div>
                {:else}
                    <div in:fly={{ y: 10 }}>
                        <SunMoon />
                        <span>Auto</span>
                    </div>
                {/if}
            </button>
        </div>
    </ContentWrapper>
</nav>

<style>
    #menu-toggle {
        display: none;
        width: 7rem;
        height: 7rem;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        background: transparent;
        border: none;
        color: var(--text);
    }

    #menu-toggle > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #menu-toggle > div > span {
        width: 3rem;
        height: 3px;
        background: var(--text);
        border-radius: 1rem;
        transition:
            width 0.2s ease,
            transform 0.2s ease,
            var(--theme-transition);
        margin-top: 4px;
        transform: scale(0.95);
    }

    nav.focused #menu-toggle > div > span {
        width: 0;
        transform: translateX(-1.5rem);
    }

    #menu-toggle > div > span::before,
    #menu-toggle > div > span::after {
        content: "";
        position: absolute;
        width: 3rem;
        height: 3px;
        background: var(--text);
        border-radius: 1rem;
    }

    #menu-toggle > div > span::before {
        transform: translate(-1.5rem, -1rem);
        transition:
            transform 0.2s ease,
            var(--theme-transition);
    }

    #menu-toggle > div > span::after {
        transform: translate(-1.5rem, 1rem);
        transition:
            transform 0.2s ease,
            var(--theme-transition);
    }

    nav.focused #menu-toggle > div > span::before {
        transform: rotate(45deg);
    }

    nav.focused #menu-toggle > div > span::after {
        transform: rotate(-45deg);
    }

    h1 {
        text-transform: uppercase;
        margin-right: auto;
        height: 100%;
    }

    h1 a {
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
        text-decoration: none;
        padding-inline: 1rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-position 0.2s ease;
    }

    h1 a:hover {
        background-position: 100% 100%;
    }

    #theme-toggle {
        padding-inline: 2rem;
        border: none;
        background: var(--fg);
        color: var(--text);
        transition: var(--theme-transition);
        cursor: pointer;
        font-size: 1.5rem;
        text-transform: capitalize;
        border-radius: 1rem;
        height: 100%;
        width: 10rem;
    }

    #theme-toggle > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    nav {
        top: 0;
        left: 0;
        width: 100%;
        height: 6rem;
        padding: 1rem;
        background: var(--bg);
        color: var(--text);
        z-index: 10;
        transition: var(--theme-transition);
        position: relative;
    }

    .content {
        display: flex;
        justify-content: end;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    li {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li a {
        color: var(--text);
        text-decoration: none;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: inherit;
        padding: 1rem;
        height: 100%;
        position: relative;
        transition: var(--theme-transition);
        width: 8rem;
    }

    @media (min-width: 570px) {
        li a {
            transition:
                var(--theme-transition),
                background-color 0s;
        }

        li a::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 5px;
            border-radius: 1rem;
            bottom: 0;
            left: 0;
            background-color: var(--fg);
            transform-origin: bottom right;
            transition: transform 0.2s ease;
        }

        li a:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

    @media (max-width: 570px) {
        #menu-toggle {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h1 {
            font-size: 3rem;
        }

        nav {
            overflow: hidden;
            position: fixed;
            transition:
                height 0.2s ease-in-out,
                var(--theme-transition);
            height: 8rem;
        }

        h1 {
            font-size: 3rem;
            height: fit-content;
            margin-right: 0;
            margin-top: 1rem;
        }

        .focused {
            height: 100dvh;
        }

        .content {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        ul {
            flex-direction: column;
            height: fit-content;
            position: unset;
            transform: unset;
            margin-bottom: auto;
            margin-top: 8rem;
            width: 100%;
        }

        li {
            width: 100%;
            justify-content: center;
            height: 10rem;
        }

        li a {
            width: 100%;
            background-color: var(--fg);
            border-radius: 1rem;
            margin-inline: 1rem;
            font-size: 2rem;
        }

        #theme-toggle {
            height: 5rem;
        }
    }
</style>
