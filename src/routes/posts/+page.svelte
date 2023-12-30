<script lang="ts">
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import PostListItem from "$lib/components/postListItem.svelte";
    import { formatDate } from "$lib/utils.js";
    import Searchbox from "$lib/components/searchbox.svelte";
    import type { Post } from "$lib/types.js";

    let searchVal = "";
    let posts: Post[];
    export let data;

    $: {
        if (searchVal) {
            posts = [];
            data.posts.forEach((post) => {
                if (
                    post.title
                        .toLowerCase()
                        .includes(searchVal.toLowerCase()) ||
                    formatDate(post.date, "short").includes(searchVal) ||
                    post.description
                        .toLowerCase()
                        .includes(searchVal.toLowerCase())
                ) {
                    posts = [...posts, post];
                }
            });
        } else {
            posts = data.posts;
        }
    }
</script>

<ContentWrapper max={1000}>
    <main>
        <hgroup>
            <h2>Posts</h2>
            <Searchbox bind:searchVal />
        </hgroup>
        {#if searchVal}
            {#if posts.length === 0}
                <p>No results for "{searchVal}"</p>
            {:else if posts.length === 1}
                <p>1 result for "{searchVal}":</p>
            {:else if posts.length > 1}
                <p>{posts.length} results for "{searchVal}":</p>
            {/if}
        {/if}
        <section>
            <ul>
                {#each posts as post}
                    <PostListItem {post} />
                {/each}
            </ul>
        </section>
    </main>
</ContentWrapper>

<style>
    h2 {
        font-size: 5rem;
    }

    section {
        margin-top: 4rem;
    }

    ul {
        list-style: none;
    }

    hgroup {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        position: relative;
        overflow-x: hidden;
    }

    p {
        font-size: 2rem;
        margin-top: 1rem;
    }
</style>
