import e from '../../dbschema/edgeql-js';

export const selectPosts = e.select(e.BlogPost, () => {
	return {
		id: true,
		title: true,
		content: true
	};
});
