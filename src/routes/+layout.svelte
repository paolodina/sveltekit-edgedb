<script lang="ts">
	import Footer from './components/Footer.svelte';
	import SideBar from './components/SideBar.svelte';
</script>

<div class="layout pure-g">
	<SideBar />

	<div class="content pure-u-1 pure-u-md-3-4">
		<slot />

		<Footer />
	</div>
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css';
	@import 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css';

	:global(a) {
		text-decoration: none;
		color: rgb(61, 146, 201);
	}

	:global(a:hover),
	:global(a:focus) {
		text-decoration: underline;
	}

	:global(h3) {
		font-weight: 100;
	}

	:global(.pure-img-responsive) {
		max-width: 100%;
		height: auto;
	}

	.layout {
		padding: 0;
	}

	.content {
		padding: 2em 1em 0;
	}

	@media (min-width: 48em) {
		.content {
			padding: 2em 3em 0;
			margin-left: 25%;
		}
	}
</style>
