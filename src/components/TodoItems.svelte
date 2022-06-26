<!-- script here -->
<script lang="ts">
    import { TodoStore } from "../store/todo";

    import type { Todo } from "../utils/types/todo";

    import TodoItem from "./TodoItem.svelte";
    export let items: Todo[] = [];
    export let totalTodos = -1;

    let loading = false;

    const todoStore = TodoStore.getInstance();

    /**
     * fetchTodos
     * get all the todos
     */
    const fetchTodos = async () => {
        loading = true;
        try {
            await todoStore.getAllTodos();
        } catch (error) {
        } finally {
            loading = false;
        }
    };
</script>

<!-- template here -->
<div class="h-full">
    {#if totalTodos !== 0}
        {#each items as { id, title, completed }}
            <TodoItem {id} {title} {completed} />
        {/each}
    {:else}
        <div class="w-full h-full flex justify-center items-center">
            <button
                class="btn btn-xl font-bold bg-blue-800 text-blue-200"
                on:click={fetchTodos}
                disabled={loading}>Fetch Todos</button
            >
        </div>
    {/if}
</div>
