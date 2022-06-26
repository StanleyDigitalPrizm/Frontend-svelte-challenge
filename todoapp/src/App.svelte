<script>
	import Header from './components/Header.svelte'
	import Todo from './views/todo/Todo.svelte'
</script>

<main>
	<Header />
	<Todo />
</main>

<style>
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
	@tailwind utilities;
</style>