import type { Post } from "$lib/types";

async function getPosts() {
    let posts: Post[] = [];

    const paths = import.meta.glob("/src/posts/*.md", {
        eager: true,
    });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && slug && typeof file === "object" && "metadata" in file) {
            const meta = file.metadata as Omit<Post, "slug">;
            const post = { ...meta, slug } satisfies Post;
            post.published && posts.push(post);
        }
    }

    posts = posts.sort(
        (first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
    );
    return posts;
}

export async function load() {
    const posts = await getPosts();
    return { posts };
}
