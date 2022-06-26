<script>
    import { Info, Edit, TrashCan } from 'akar-icons-svelte'
    import { todos } from '../services/State'

    export var todo = {}

    function doneNote(id){
        $todos = $todos.filter(function(value){ 
			if (value.id == id) {
                value.completed = false;
            }
            return value;
		});
    }
</script>

<div class="bg-white col-start-3 col-span-4 p-2 shadow">
    <div class="grid grid-cols-12 gap-4">
        <div class="p-1">
            <input type="checkbox" on:change={()=>doneNote(todo.id)} checked class="border-gray-300 rounded h-5 w-5 text-gray-400" />
        </div>
        <div class="col-span-9 p-1">
            <h4 class="line-through text-gray-400">{todo.text}</h4>
        </div>
        <div class="col-span-2 p-1 flex flex-row-reverse gap-2">
            <button type="button" class="focus:outline-none text-white bg-gray-300 hover:bg-gray-300 disable focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 dark:focus:ring-yellow-900 shadow">
                <TrashCan size={15} />
            </button>                 
            <button type="button" class="focus:outline-none text-white bg-gray-300 hover:bg-gray-300 disable focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 dark:focus:ring-yellow-900 shadow">
                <Edit size={15} />
            </button>                    
            <button type="button" class="focus:outline-none text-white bg-gray-300 hover:bg-gray-300 disable focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 dark:focus:ring-yellow-900 shadow">
                <Info size={15} />
            </button>
        </div>
    </div>
</div>

<style>

</style>