import type { PageServerLoad } from './$types';
import type { Post } from './types';

export const load = (async () => {
	const posts: Post[] = [
		{
			id: 'post1',
			title: ' This 1...',
			content: 'Some content first post'
		},
		{
			id: 'post2',
			title: ' This 2...',
			content: 'Some content 2nd post'
		}
	];

	return { posts };
}) satisfies PageServerLoad;
