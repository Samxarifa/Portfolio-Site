<ContentWrapper max={1000}>
    <article>
        <hgroup>
            <h1>{data.meta.title}</h1>
            <p class='date'>Published on the {formatDate(data.meta.date)}</p>
            <h2>{data.meta.description}</h2>
        </hgroup>
    
        <main id='markdown'>
            <svelte:component this={data.content} />
        </main>
    </article>
</ContentWrapper>

<script lang="ts">
    import ContentWrapper from '$lib/components/contentWrapper.svelte';
    import { formatDate } from '$lib/utils.js';

    export let data;
</script>

<style>
    h1 {
        font-size: 5rem;
        margin-bottom: 1rem;
    }

    .date {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    hgroup {
        margin-bottom: 5rem;
    }

    hgroup::after {
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        border-radius: 1rem;
        background-color: var(--fg);
        margin-top: 2rem;
        transition: var(--theme-transition);
    }

    #markdown {
        width: 100%;
        height: 100%;
    }
</style>