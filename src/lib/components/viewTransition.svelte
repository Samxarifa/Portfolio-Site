<script lang="ts">
    import { onNavigate } from "$app/navigation";

    onNavigate((navigation) => {
        // @ts-expect-error - startViewTransition is not yet in types (Experimental)
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            // @ts-expect-error - startViewTransition is not yet in types (Experimental)
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>
