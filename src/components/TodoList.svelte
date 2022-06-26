<!-- script here -->
<script lang="ts">
    import { TodoStore } from "../store/todo";

    import { Tabs } from "../utils/types/todo";
    import TodoCreate from "./TodoCreate.svelte";
    import TodoItems from "./TodoItems.svelte";
    import TodoTabs from "./TodoTabs.svelte";

    let active: Tabs = Tabs.TODO;

    const todoStore = TodoStore.getInstance();

    const todos = todoStore.store;

    /** completed todos computed accending order of the id **/
    $: completedTodos = $todos
        .filter((todo) => todo.completed)
        .sort((todoA, todoB) => todoA.id - todoB.id);

    /** inCompleteTodos todos computed decending order of the id **/
    $: inCompleteTodos = $todos
        .filter((todo) => !todo.completed)
        .sort((todoA, todoB) => todoB.id - todoA.id);

    $: totalTodos = $todos.length;

    /**
     * toggleTab
     * dispatch custom event with tab as data
     * @param {CustomEvent<Tabs>} event the custom event with the tab in detail
     **/
    const toggleTab = (event: CustomEvent<Tabs>) => {
        active = event.detail;
    };
</script>

<!-- template here -->
<TodoCreate />
<TodoTabs {active} on:active-tab={toggleTab} />
<div
    class="w-full h-full overflow-auto p-5 border-b border-x border-gray-300 rounded-b-lg bg-white overlow-hidden flex-1 mb-10"
    class:rounded-tr-lg={active === Tabs.TODO}
    class:rounded-tl-lg={active === Tabs.COMPLETE}
>
    {#if active === Tabs.TODO}
        <TodoItems items={inCompleteTodos} {totalTodos} />
    {:else if active === Tabs.COMPLETE}
        <TodoItems items={completedTodos} />
    {/if}
</div>
j``
