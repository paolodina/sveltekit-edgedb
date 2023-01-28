import type { PageServerLoad } from './$types'
import { client as db } from '$lib/server/db/edgedb'
import { selectPost } from '$blog/queries'

export const load = (async ({ params }) => {
  const postId = params.postId

  return {
    post: await selectPost(postId).run(db),
  }
}) satisfies PageServerLoad
