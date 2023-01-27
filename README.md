[SvelteKit](https://kit.svelte.dev/) + [EdgeDB](https://www.edgedb.com/)
testdrive project.

---

## Requirements

- Node.js
- EdgeDB ([install](https://www.edgedb.com/install))
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
  ```

## Setup

```bash
$ cd /some/path
$ git clone git@github.com:paolodina/sveltekit-edgedb.git
$ cd sveltekit-edgedb
```

Install project packages.

```bash
pnpm install
```

Generate EdgeDB types.

```bash
pnpm edgedb:gen interfaces
```

Generate EdgeDB query builder.

```bash
pnpm edgedb:gen edgeql-js
```

Load fixtures (opt).

```bash
$ # todo
```

## Developing

Once you've created a project and installed dependencies, start a development
server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Refs.

- [SvelteKit](https://kit.svelte.dev/)
- [EdgeDB](https://www.edgedb.com/)
- [Build a Next.js blog backed by EdgeDB](https://www.youtube.com/watch?v=G17Xc8cnSI0) (YouTube)
- [Building a simple blog application with EdgeDB and Next.js](https://www.edgedb.com/docs/guides/tutorials/nextjs) (blog post)
