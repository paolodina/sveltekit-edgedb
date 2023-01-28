import type { PageServerLoad } from './$types'
import { client as db } from '$lib/server/db/edgedb'
import { selectPosts } from './queries'

export const load = (async () => {
  return {
    posts: await selectPosts.run(db),
  }
}) satisfies PageServerLoad
