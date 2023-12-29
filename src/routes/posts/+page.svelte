<script lang="ts">
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import PostListItem from "$lib/components/postListItem.svelte";
    import { formatDate } from "$lib/utils.js";
    import Searchbox from "$lib/components/searchbox.svelte";
    let searchVal = "";

    export let data;
</script>

<ContentWrapper max={1000}>
    <main>
        <hgroup>
            <h2>Posts</h2>
            <Searchbox bind:searchVal />
        </hgroup>
        <section>
            <ul>
                {#each data.posts as post}
                    {#if !searchVal || post.title
                            .toLowerCase()
                            .includes(searchVal.toLowerCase()) || formatDate(post.date, "short").includes(searchVal) || post.description
                            .toLowerCase()
                            .includes(searchVal.toLowerCase())}
                        <PostListItem {post} />
                    {/if}
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
    }
</style>
