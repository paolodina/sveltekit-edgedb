import type { PageServerLoad } from './$types';
import { createClient } from 'edgedb';

const client = createClient();

export const load = (async () => {
	const posts = await client.query(`select BlogPost {
		id,
		title,
		content
	}`);

	return { posts };
}) satisfies PageServerLoad;
