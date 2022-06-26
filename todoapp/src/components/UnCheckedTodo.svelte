<script>
    import { Info, Edit, TrashCan, Check, Cross } from 'akar-icons-svelte'
    import { todos } from '../services/State'

    let text = ""
    export var todo = {}
    export var showModal = false
    export var modalData = ""

    function deleteNote(id){
        $todos = $todos.filter(function(value){ 
			if (value.id != id) return value;
		});
    }

    function editNote(id){
        $todos = $todos.filter(function(value){ 
            value.editing = false;
			if (value.id == id) {
                value.editing = true;
                text = value.text;
            }
            return value;
		});
    }    
    
    function cancelEditingNote(id){
        $todos = $todos.filter(function(value){ 
			if (value.id == id) {
                value.editing = false;
                text = "";
            }
            return value;
		});
    }

    function updateNote(id){
        $todos = $todos.filter(function(value){ 
			if (value.id == id) {
                value.text = text;
                value.editing = false;
            }
            return value;
		});
    }

    function doneNote(id){
        $todos = $todos.filter(function(value){ 
			if (value.id == id) {
                value.completed = true;
            }
            return value;
		});
    }
    function readNote(id){
        $todos = $todos.filter(function(value){ 
			if (value.id == id) {
                showModal = true;
                modalData = value.text;
            }
            return value;
		});
    }
</script>

{#if todo.editing == true}
    <div class="bg-white col-start-3 col-span-4 p-2 pb-3 shadow">
        <div class="grid grid-cols-4 gap-2">
            <div class="col-span-3 pl-3">
                <input bind:value={text}  class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full" type="text" placeholder="Take a note ...">
            </div>
            <div class="p-1 flex flex-row-reverse gap-1">
                <button type="button" on:click={()=>cancelEditingNote(todo.id)} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-2 py-2 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <Cross size={15} />
                </button>
                <button type="button" on:click={()=>updateNote(todo.id)} class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-2 py-2 text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <Check size={15} />
                </button>
            </div>
        </div>  
    </div>
{:else}
    <div class="bg-white col-start-3 col-span-4 p-2 shadow">
        <div class="grid grid-cols-12 gap-4">
            <div class="p-1">
                <input type="checkbox" on:change={()=>doneNote(todo.id)} class="border-gray-300 rounded h-5 w-5" />
            </div>
            <div class="col-span-9 p-1">
                <h4>{todo.text}</h4>
            </div>
            <div class="col-span-2 p-1 flex flex-row-reverse gap-2">
                <button type="button" on:click={()=> deleteNote(todo.id)} class="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 dark:focus:ring-yellow-900 shadow">
                    <TrashCan size={15} />
                </button>                 
                <button type="button" on:click={()=> editNote(todo.id)} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 dark:focus:ring-yellow-900 shadow">
                    <Edit size={15} />
                </button>                    
                <button type="button" on:click={()=> readNote(todo.id)} class="focus:outline-none bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 dark:focus:ring-yellow-900 shadow">
                    <Info size={15} />
                </button>
            </div>
        </div>
    </div>
{/if}
<style>

</style>