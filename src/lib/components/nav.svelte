<nav>
    <ContentWrapper>
        <div class="content">
            <h1>Xarifa</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Projects</a></li>
                <li><a href="/about">Contact Me</a></li>
            </ul>
            <button on:click={toggleTheme}>
                {#if $theme === 'dark'}
                    <div in:fly={{y: 10}}>
                        <Moon />
                        <span>Dark</span>
                    </div>
                {:else if $theme === 'light'}
                    <div in:fly={{y: 10}}>
                        <Sun />
                        <span>Light</span>
                    </div>
                {:else}
                    <div in:fly={{y: 10}}>
                        <SunMoon />
                        <span>Auto</span>
                    </div>
                {/if}
            </button>
        </div>
    </ContentWrapper>
</nav>

<script lang="ts">
    import {theme, toggleTheme} from '$lib/theme';
    import {Sun, Moon, SunMoon, Home, List, Phone} from 'lucide-svelte';
    import {fly} from 'svelte/transition';
    import ContentWrapper from './contentWrapper.svelte';
</script>

<style>
    h1 {
        text-transform: uppercase;
        margin-right: auto;
        background: linear-gradient(to right, var(--lightblue), var(--lightgreen));
        background-clip: text;
        color: transparent;
    }

    button {
        padding-inline: 2rem;
        border: none;
        background: var(--fg);
        color: var(--text);
        cursor: pointer;
        font-size: 1.5rem;
        text-transform: capitalize;
        border-radius: 1rem;
        height: 100%;
    }

    button > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    nav {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 6rem;
        padding: 1rem 2rem;
        background: var(--bg);
        color: var(--text);
        z-index: 1;
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

    a {
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
    }

    a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 5px;
        border-radius: 1rem;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to right, var(--lightblue), var(--lightgreen));
        transform-origin: bottom right;
        transition: transform 0.1s ease-out;   
    }

    a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>