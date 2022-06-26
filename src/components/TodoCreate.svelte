<script lang="ts">
    import { TodoStore } from "../store/todo";

    let value = "";
    let loading = false;

    const todoStore = TodoStore.getInstance();

    /**
     * onSubmit
     * handle submit and create a new todo
     **/
    const onSubmit = async () => {
        loading = true;
        try {
            await todoStore.createTodo({
                id: 999, // random id that will be delete in the service
                title: value,
                completed: false,
                userId: 1,
            });
        } catch (error) {
        } finally {
            loading = false;
            value = "";
        }
    };
</script>

<!-- template here -->
<div
    class="card bg-white my-10 p-10"
    class:opacity-40={loading}
    class:pointer-events-none={loading}
>
    <form class="w-full" on:submit|preventDefault={onSubmit}>
        <input
            type="text"
            class="w-full p-5 color-gray-900 outline-none rounded-xl border border-gray-300"
            placeholder="What would you like to achieve?"
            bind:value
            disabled={loading}
        />
    </form>
</div>
