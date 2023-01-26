<script lang="ts">
	import type { Post } from '../types';

	export let post: Post | null = null;
</script>

{#if post}
	<header class="post-header">
		<img width="48" height="48" alt="Author" class="post-avatar" src="https://i.pravatar.cc/48" />

		<a href={`/${post.id}`}>
			<h2 class="post-title">{post.title}</h2>
		</a>
		<p class="post-meta">
			By <a href={null} class="post-author">John Doe</a> under
			<a class="post-category post-category-pure" href={null}>Pure</a>
			<a class="post-category post-category-sveltekit" href={null}>SvelteKit</a>
			<a class="post-category post-category-edgedb" href={null}>EdgeDB</a>
		</p>
	</header>

	<div class="post-description">
		<p>{post.content}</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		</p>
	</div>
{/if}

<style>
	.post-title {
		font-size: 2em;
		color: #222;
		margin-bottom: 0.2em;
	}
	.post-avatar {
		border-radius: 50px;
		float: right;
		margin-left: 1em;
	}
	.post-description {
		font-family: Georgia, 'Cambria', serif;
		color: #444;
		line-height: 1.8em;
	}
	.post-meta {
		color: #999;
		font-size: 90%;
		margin: 0;
	}

	.post-category {
		margin: 0 0.1em;
		padding: 0.3em 1em;
		color: #fff;
		background: #999;
		font-size: 80%;
	}
	.post-category-design {
		background: #5aba59;
	}
	.post-category-pure {
		background: #4d85d1;
	}
</style>
