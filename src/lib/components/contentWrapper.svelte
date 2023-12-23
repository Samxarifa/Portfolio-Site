<div style="--max: {max}px">
    <slot></slot>
</div>


<style>
    div {
        max-width: var(--max);
        margin-inline: auto;
        height: 100%;
    }
</style>

<script>
    /**
     * @type {number} max width in pixels
     */
    export let max = 1920;
</script>