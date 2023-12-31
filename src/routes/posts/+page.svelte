<script lang="ts">
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import PostListItem from "$lib/components/postListItem.svelte";
    import { formatDate } from "$lib/utils.js";
    import Searchbox from "$lib/components/searchbox.svelte";
    import type { Post } from "$lib/types.js";

    let searchVal = "";
    let filter: string;
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
        if (!filter || filter === "nto") {
            posts = posts.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
        } else if (filter === "otn") {
            posts = posts.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
        } else if (filter === "atz") {
            posts = posts.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
        } else if (filter === "zta") {
            posts = posts.sort((a, b) => {
                return b.title.localeCompare(a.title);
            });
        }
    }
</script>

<ContentWrapper max={100}>
    <main>
        <hgroup>
            <h2>Posts</h2>
            <Searchbox bind:searchVal />
        </hgroup>
        <div>
            <p>
                {#if searchVal}
                    {#if posts.length === 0}
                        No results for "{searchVal}"
                    {:else if posts.length === 1}
                        1 result for "{searchVal}":
                    {:else if posts.length > 1}
                        {posts.length} results for "{searchVal}":
                    {/if}
                {/if}
            </p>
            <select
                name="filter"
                id="filter"
                on:change={(event) => {
                    filter = event.currentTarget.value;
                }}
            >
                <option selected value="nto">New to Old</option>
                <option value="otn">Old to New</option>
                <option value="atz">A to Z</option>
                <option value="zta">Z to A</option>
            </select>
        </div>
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

    div {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1rem;
        margin-top: 1rem;
        font-size: 2rem;
        max-height: 3rem;
        padding-block: 0.5rem;
    }

    select {
        font-size: inherit;
        border-radius: 0.5rem;
        border: none;
        background-color: var(--bg);
        color: var(--text);
        cursor: pointer;
        transition: var(--theme-transition);
        text-align-last: right;
    }

    option {
        direction: ltr;
    }

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
