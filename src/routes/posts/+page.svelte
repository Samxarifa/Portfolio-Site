<script lang="ts">
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import PostListItem from "$lib/components/postListItem.svelte";
    import { formatDate } from "$lib/utils.js";
    import { Search } from "lucide-svelte";

    export let data;

    let searchVal = "";
</script>

<ContentWrapper max={1000}>
    <main>
        <hgroup>
            <h2>Posts</h2>
            <div id="div_search">
                <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search"
                    bind:value={searchVal}
                />
                <label for="search"><Search /></label>
            </div>
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

    #div_search {
        flex: 1;
        text-align: right;
        position: absolute;
        right: 0;
        width: 100%;
    }

    input {
        position: relative;
        cursor: pointer;
        max-width: 40rem;
        width: 5rem;
        height: 5rem;
        font-size: 2rem;
        padding: 1rem;
        padding-right: 5rem;
        padding-left: 0;
        overflow: hidden;
        border-radius: 1rem;
        background-color: var(--fg);
        border: none;
        color: var(--text);
        outline: none;
        transition:
            width 0.5s ease-in-out,
            padding 0s linear 0.1s,
            var(--theme-transition);
    }

    input:focus,
    input:not(:placeholder-shown) {
        width: 100%;
        cursor: text;
        padding-left: 1rem;
    }

    label {
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        color: var(--text);
        transform: translate(50%, -50%);
        cursor: pointer;
    }

    @media (max-width: 660px) {
        input {
            max-width: 100%;
        }
    }
</style>
