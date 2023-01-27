import type { PageServerLoad } from './$types';
import { createClient } from 'edgedb';
import { selectPost } from '../queries';
import type { BlogPost } from '../../../dbschema/interfaces';

const client = createClient();

export const load = (async ({ params }) => {
	const postId = params.postId;

	return {
		post: <BlogPost>await selectPost(postId).run(client)
	};
}) satisfies PageServerLoad;
