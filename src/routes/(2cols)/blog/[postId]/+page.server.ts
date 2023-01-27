import type { PageServerLoad } from './$types';
import { createClient } from 'edgedb';
import { selectPost } from '$blog/queries';

const client = createClient();

export const load = (async ({ params }) => {
	const postId = params.postId;

	return {
		post: await selectPost(postId).run(client)
	};
}) satisfies PageServerLoad;
