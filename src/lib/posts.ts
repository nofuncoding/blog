export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
}

export async function getPosts(): Promise<Post[]> {
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts: Post[] = [];

	for (const path in modules) {
		const mod = modules[path] as { metadata: Omit<Post, 'slug'> };
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';
		posts.push({ slug, ...mod.metadata });
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
