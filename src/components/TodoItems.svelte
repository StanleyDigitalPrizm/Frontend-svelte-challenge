<!-- script here -->
<script lang="ts">
import TodoItem from "./TodoItem.svelte";
    interface TodoItem {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }
    export let items: TodoItem[] = [];
</script>

<!-- template here -->
<div>
    {#each items as { title, completed }}
        <TodoItem title={title} completed={completed}  />
    {/each}
</div>
