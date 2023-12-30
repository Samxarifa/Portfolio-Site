<script lang="ts">
    /**
     * @type {number} max width in pixels
     */
    export let max = 192;
</script>

<div style="--max: {max}rem">
    <slot />
</div>

<style>
    div {
        max-width: var(--max);
        margin-inline: auto;
        height: 100%;
    }
</style>
