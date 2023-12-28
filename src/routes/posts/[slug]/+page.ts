export async function load({ params }) {
    try {
        const post = await import(`../../../posts/${params.slug}.md`);

        return {
            meta: post.metadata,
            content: post.default,
        };
    } catch (error) {
        throw new Error(`Could not load post "${params.slug}"`);
    }
}
