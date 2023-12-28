<script lang="ts">
    /**
     * @type {number} max width in pixels
     */
    export let max = 1920;
</script>

<div style="--max: {max}px">
    <slot />
</div>

<style>
    div {
        max-width: var(--max);
        margin-inline: auto;
        height: 100%;
    }
</style>
