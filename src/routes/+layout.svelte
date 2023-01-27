<slot />

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
</style>
