import e from '../../dbschema/edgeql-js';

export const selectPosts = e.select(e.BlogPost, () => {
	return {
		id: true,
		title: true,
		content: true
	};
});

export const selectPost = (postId: string) => {
	e.BlogPost;
	return e.select(e.BlogPost, (post) => {
		return {
			id: true,
			title: true,
			content: true,
			filter_single: e.op(post.id, '=', e.uuid(postId))
		};
	});
};
