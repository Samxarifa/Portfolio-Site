<script lang="ts">
    import { Search } from "lucide-svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let searchInput: HTMLInputElement;
    let searchPlaceholder: string;
    let loadSearch = false;

    export let searchVal: string;

    function changePlaceholder() {
        searchPlaceholder =
            window.innerWidth > 660 ? "Search (Ctrl + K)" : "Search";
    }

    onMount(() => {
        changePlaceholder();
        loadSearch = true;
    });
</script>

<svelte:window
    on:keydown={(event) => {
        if (event.key === "k" && event.ctrlKey) {
            event.preventDefault();
            if (searchInput !== document.activeElement) {
                searchInput.focus();
                searchInput.select();
            } else {
                searchInput.blur();
            }
        } else if (event.key === "Escape" || event.key === "Enter") {
            searchInput.blur();
        }
    }}
    on:resize={() => {
        changePlaceholder();
    }}
/>

{#if loadSearch}
    <div id="div_search" in:fly={{ x: 100 }}>
        <input
            id="search"
            name="search"
            type="text"
            placeholder={searchPlaceholder}
            bind:value={searchVal}
            bind:this={searchInput}
        />
        <label for="search"><Search /></label>
    </div>
{/if}

<style>
    #div_search {
        flex: 1;
        text-align: right;
        position: absolute;
        right: 0;
        width: 100%;
    }

    input {
        position: relative;
        cursor: text;
        max-width: 40rem;
        width: 40rem;
        height: 5rem;
        font-size: 2rem;
        padding: 1rem;
        padding-right: 5rem;
        overflow: hidden;
        border-radius: 1rem;
        background-color: var(--fg);
        border: none;
        color: var(--text);
        outline: none;
        transition:
            width 0.5s ease-in-out,
            padding 0s ease-in-out 0.25s,
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
        transition: var(--theme-transition);
    }

    @media (max-width: 660px) {
        input {
            max-width: 100%;
            width: 5rem;
            padding-left: 0;
            cursor: pointer;
        }
    }
</style>
