<script>
    import { getTodoList, createTodo, updateTodo, partiallyUpdateTodo, deleteTodo } from '../services/Todo'

    function getTodo(){
        getTodoList().then(value =>{
            console.log("success")
        });
    }    
    
    function postTodo(){
        let note = {
            "userId": 1,
            "title": "delectus aut autem",
            "completed": false
            }
        createTodo(note).then(value =>{
            console.log("success")
        });
    }    
    
    function putTodo(){
        let id = 1
        let note = {
            "userId": 1,
            "title": "delectus aut autem",
            "completed": false
            }
        updateTodo(id, note).then(value =>{
            console.log("success")
        });
    }    
    
    function patchTodo(){
        let id = 1
        let note = {
            "title": "delectus aut",
            }
        partiallyUpdateTodo(id, note).then(value =>{
            console.log("success")
        });
    }    
    function deletingTodo(){
        let id = 1
        deleteTodo(id).then(value =>{
            console.log("success")
        });
    }
</script>

<div class="flex place-content-center p-5">
        <button on:click={()=>getTodo()} type="button" class="text-white bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            GET
        </button>        
        <button on:click={()=>postTodo()} type="button" class="text-white bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            POST
        </button>        
        <button on:click={()=>putTodo()} type="button" class="text-white bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            PUT
        </button>        
        <button on:click={()=>patchTodo()} type="button" class="text-white bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            PATCH
        </button>        
        <button on:click={()=>deletingTodo()} type="button" class="text-white bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            DELETE
        </button>
</div>

<style>

</style>