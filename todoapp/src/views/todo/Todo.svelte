<script>
    import { Plus } from 'akar-icons-svelte'
    import CheckedTodo from '../../components/CheckedTodo.svelte'
    import UnCheckedTodo from '../../components/UnCheckedTodo.svelte'
    import Modal from '../../components/Modal.svelte'
    import ApiTestButtons from '../../components/ApiTestButtons.svelte'
    import { todos } from '../../services/State'

    let todoList = []
    let text = ""
    let showModal = false
    let modalData = ""

    function addNote(id){
        if(text != ""){
            let note = {
                "id": id,
                "text": text,
                "completed": false
            }
            $todos = [note, ...$todos]
            text = ""
        }
    }
</script>
<div class="grid grid-cols-8 gap-1 pt-10">
    <div class="bg-white col-start-3 col-span-4 p-2 pb-3 mb-5 shadow">
        <div class="grid grid-cols-4 gap-2">
            <div class="col-span-3 pl-3">
                <input bind:value={text} class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full" type="text" placeholder="Take a note ...">
            </div>
            <div class="p-1 flex flex-row-reverse gap-2 pr-3">
                <button on:click={()=>addNote($todos.length+1)} type="submit" class="inline-flex items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                    <Plus size={15} /> &nbsp;Add 
                </button>
            </div>
        </div>  
    </div>
    {#each $todos as todo}
        {#if todo.completed == false}
            <UnCheckedTodo bind:todo={todo} bind:showModal={showModal} bind:modalData={modalData}/>
        {:else}
            <CheckedTodo bind:todo={todo} />
        {/if}
    {/each}
    <div class="bg-white col-start-3 col-span-4 mt-5 content-center shadow"> 
        <ApiTestButtons />
    </div>
</div>

{#if showModal == true }
    <Modal bind:showModal={showModal} bind:modalData={modalData}/>
{/if}

<style>

</style>