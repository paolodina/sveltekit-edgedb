<script lang="ts">
	import type { PageData } from './$types';
	import BlogPost from './components/BlogPost.svelte';

	export let data: PageData;

	$: posts = data.posts;
</script>

<div class="posts">
	<h1 class="content-subhead">Recent Posts</h1>
	{#each posts as post}
		<section class="post">
			<BlogPost {post} />
		</section>
	{:else}
		Loading...
	{/each}
</div>

<style>
	.content-subhead {
		text-transform: uppercase;
		color: #aaa;
		border-bottom: 1px solid #eee;
		padding: 0.4em 0;
		font-size: 80%;
		font-weight: 500;
		letter-spacing: 0.1em;
	}

	.post {
		padding-bottom: 2em;
	}
</style>
