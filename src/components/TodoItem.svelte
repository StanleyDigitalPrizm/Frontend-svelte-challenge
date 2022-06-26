<!-- script here -->
<script lang="ts">
    import DeleteIcon from "../icons/DeleteIcon.svelte";
    import EditIcon from "../icons/EditIcon.svelte";
    import { TodoStore } from "../store/todo";

    export let id: number;
    export let title: string;
    export let completed: boolean;

    let disabled = true;
    let loading = false;

    $: value = title;

    const todoStore = TodoStore.getInstance();

    /**
     * handleEdit
     * this will enable editing for input
     */
    const handleEdit = () => {
        disabled = !disabled;
        if (disabled) {
            value = title;
        }
    };

    /**
     * handleDelete
     * delete the todo of the given id
     **/
    const handleDelete = async () => {
        loading = true;
        try {
            await todoStore.deleteTodo(id);
        } catch (error) {
        } finally {
            loading = false;
        }
    };

    /**
     * handleComplete
     * complete the todo of the given id
     **/
    const handleComplete = async () => {
        loading = true;
        try {
            await todoStore.updateTodo(id, { completed: !completed });
        } catch (error) {
        } finally {
            loading = false;
        }
    };

    /**
     * handleUpdate
     * update title of the todo of the given id
     **/
    const handleUpdate = async () => {
        loading = true;
        try {
            await todoStore.updateTodo(id, { title: value });
        } catch (error) {
        } finally {
            loading = false;
            disabled = true;
        }
    };
</script>

<!-- templete here -->
<div
    class="card m-5 shadow border p-5 flex flex-row gap-4 items-center"
    class:opacity-40={loading}
    class:pointer-events-none={loading}
>
    {#key id}
        <input
            type="checkbox"
            class="toggle toggle-accent"
            checked={completed}
            on:change={handleComplete}
        />
    {/key}
    <form class="w-full " on:submit|preventDefault={handleUpdate}>
        <input
            class="w-full border rounded p-1 px-5 bg-gray-100 outline-none disabled:bg-white disabled:border-white"
            bind:value
            {disabled}
        />
    </form>
    <div class="flex gap-1">
        <div class="text-blue-500 w-8 cursor-pointer" on:click={handleEdit}>
            <EditIcon />
        </div>
        <div class="text-red-500 w-8 cursor-pointer" on:click={handleDelete}>
            <DeleteIcon />
        </div>
    </div>
</div>
