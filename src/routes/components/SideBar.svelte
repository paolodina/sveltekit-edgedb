<div class="sidebar pure-u-1 pure-u-md-1-4">
	<div class="header">
		<h1 class="brand-title">A Sample Blog</h1>
		<h2 class="brand-tagline">Creating a blog</h2>

		<nav class="nav">
			<ul class="nav-list">
				<li class="nav-item">
					<a class="pure-button" href="https://purecss.io">Pure.CSS</a>
				</li>
				<li class="nav-item">
					<a class="pure-button" href="https://kit.svelte.dev/">SvelteKit</a>
				</li>
				<li class="nav-item">
					<a class="pure-button" href="https://www.edgedb.com/">EdgeDB</a>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style>
	.header {
		text-align: center;
		top: auto;
		margin: 3em auto;
	}
	.sidebar {
		background: rgb(61, 79, 93);
		color: #fff;
	}
	.brand-title,
	.brand-tagline {
		margin: 0;
	}
	.brand-title {
		text-transform: uppercase;
	}
	.brand-tagline {
		font-weight: 300;
		color: rgb(176, 202, 219);
	}

	.nav-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.nav-item {
		display: inline-block;
		*display: inline;
		zoom: 1;
	}
	.nav-item a {
		background: transparent;
		border: 2px solid rgb(176, 202, 219);
		color: #fff;
		margin-top: 1em;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-size: 85%;
	}
	.nav-item a:hover,
	.nav-item a:focus {
		border: 2px solid rgb(61, 146, 201);
		text-decoration: none;
	}
	@media (min-width: 48em) {
		.header {
			margin: 80% 2em 0;
			text-align: right;
		}

		.sidebar {
			position: fixed;
			top: 0;
			bottom: 0;
		}
	}
</style>
