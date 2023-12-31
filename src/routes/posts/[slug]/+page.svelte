<script lang="ts">
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import { formatDate } from "$lib/utils.js";
    import { ChevronLeft } from "lucide-svelte";
    import { fade } from "svelte/transition";

    export let data;
</script>

<ContentWrapper max={100}>
    <a href="/posts"
        ><div><ChevronLeft size={48} /></div>
        <span>Back</span></a
    >
    <article in:fade>
        <hgroup>
            <h1 style="--name: title-{data.slug}">{data.meta.title}</h1>
            <p class="date">
                Published on the {formatDate(data.meta.date)}
            </p>
            <h2>{data.meta.description}</h2>
        </hgroup>

        <main id="markdown">
            <svelte:component this={data.content} />
        </main>
    </article>
</ContentWrapper>

<style>
    @keyframes arrow {
        0% {
            transform: translateX(1rem);
            opacity: 0;
        }
        10% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        90% {
            opacity: 0;
        }
        100% {
            transform: translateX(-1rem);
            opacity: 0;
        }
    }

    a {
        color: var(--text);
        text-decoration: none;
        transition: var(--theme-transition);
        margin-left: -1rem;
        display: flex;
        align-items: center;
        width: fit-content;
        height: fit-content;
    }

    a:hover div {
        animation: arrow 1.5s linear infinite -0.75s;
    }

    h1 {
        font-size: 4rem;
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
        width: fit-content;
        text-transform: capitalize;
        transition: background-position 0.2s ease-in-out;
        view-transition-name: var(--name);
    }

    .date {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    hgroup {
        margin-bottom: 3rem;
    }

    hgroup::after {
        content: "";
        display: block;
        width: 100%;
        height: 5px;
        border-radius: 1rem;
        background-color: var(--fg);
        margin-top: 3rem;
        transition: var(--theme-transition);
    }

    #markdown {
        width: 100%;
        height: 100%;
    }
</style>
