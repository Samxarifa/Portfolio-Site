<ContentWrapper max={1000}> 
    
    <main>
        <h2>Posts</h2>

        <section>
            <ul>
                {#each data.posts as post} 
                    <PostListItem post={post}/>
                {/each}
            </ul>
        </section>
    </main>
</ContentWrapper>

<script lang="ts">
    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import PostListItem from "$lib/components/postListItem.svelte";

    export let data;

</script>

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
</style>