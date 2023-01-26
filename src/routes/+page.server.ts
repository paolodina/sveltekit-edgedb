import type { PageServerLoad } from './$types';
import { createClient } from 'edgedb';
import { selectPosts } from './queries';

const client = createClient();

export const load = (async () => {
	return {
		posts: await selectPosts.run(client)
	};
}) satisfies PageServerLoad;
