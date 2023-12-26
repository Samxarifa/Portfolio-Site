<ContentWrapper max={1000}> 
    <main>
        <h2>Posts</h2>

        <section>
            <ul>
                {#each data.posts as post}
                    <li>
                        <a href='posts/{post.slug}'>
                            <h3>{post.title}</h3>
                            <p class='date'>{formatDate(post.date,'short')}</p>
                            <p class="description">{post.description}</p>
                        </a>
                    </li>
                {/each}
            </ul>
        </section>
    </main>
</ContentWrapper>

<script lang="ts">
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import { formatDate } from "$lib/utils.js";

    export let data;


</script>

<style>
    h2 {
       font-size: 3rem;
    }
    
    section {
        margin-top: 4rem;
    }
    
    ul {
        list-style: none;
    }

    li {
        margin-bottom: 2rem;
    }

    li::after {
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        background-color: var(--fg);
        transition: var(--theme-transition);
        border-radius: 1rem;
        margin-top: 1rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        width: 100%;
        display: grid;
        grid-template-columns: 5fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2rem;
        padding: 1rem;
        border-radius: 1rem;
    }

    a:hover h3 {
        background-position: 100% 50%;
    }

    h3 {
        grid-row: 1/2;
        grid-column: 1/2;
        font-size: 4rem;
        background: linear-gradient(to right, var(--lightblue), var(--lightgreen), var(--yellow), var(--lightred));
        background-size: 300% 100%;
        background-clip: text;
        color: transparent;
        width: fit-content;
        text-transform: capitalize;
        transition: background-position 0.2s ease-in-out;
    }

    .date {
        grid-row: 1/2;
        grid-column: 2/3;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .description {
        grid-row: 2/3;
        grid-column: 1/-1;
    }
</style>