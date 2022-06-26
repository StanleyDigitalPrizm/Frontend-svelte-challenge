<!-- script here -->
<script>
    import TodoList from "./components/TodoList.svelte";
</script>

<!-- template here -->
<main class="w-full h-screen overflow-hidden bg-blue-900 px-10">
    <div class="container max-w-5xl mx-auto my-10 flex flex-col h-full">
        <h1 class="text-3xl text-center font-bold text-blue-200 uppercase">
            Todo Application
        </h1>
        <TodoList />
    </div>
</main>

<!-- style here -->
<style>
    @import "./App.css";
</style>
