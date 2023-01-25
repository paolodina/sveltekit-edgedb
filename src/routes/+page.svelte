<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: posts = data.posts;
</script>

{#each posts as post}
	<pre><a href={`/${post.id}`}>see details</a></pre>
	<pre>
{JSON.stringify(post, null, 4)}
</pre>
{/each}
