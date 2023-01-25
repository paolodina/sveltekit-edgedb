<script lang="ts">
	import { page } from '$app/stores';

	$: ({ postId } = $page.params);
</script>

post id: {postId}
