import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const post = await import('../../posts/about.md');
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		throw error(404, 'Page not found');
	}
}
