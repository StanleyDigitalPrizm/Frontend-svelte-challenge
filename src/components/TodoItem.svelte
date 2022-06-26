<!-- script here -->
<script lang="ts">
    import DeleteIcon from "../icons/DeleteIcon.svelte";
    import EditIcon from "../icons/EditIcon.svelte";

    export let title: string;
    export let completed: boolean;

    let disabled = true
    let value = title

    /**
    * handleEdit
    * this will enable editing for input
    */ 
    const handleEdit = () => {
        disabled = !disabled
        if (disabled){ 
            value = title
        }
    }
</script>

<!-- templete here -->
<div class="card m-5 shadow border p-5 flex flex-row gap-4 items-center">
    <input type="checkbox" class="toggle toggle-accent" checked={completed} />
    <input class="w-full border rounded p-1 px-5 bg-gray-100 outline-none disabled:bg-white disabled:border-white" bind:value={value} disabled={disabled} />
    <div class="flex gap-1">
        <div class="text-blue-500 w-8 cursor-pointer" on:click={handleEdit}>
            <EditIcon />
        </div>
        <div class="text-red-500 w-8 cursor-pointer">
            <DeleteIcon />
        </div>
    </div>
</div>
