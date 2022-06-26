import { writable } from 'svelte/store';

const todos = writable([
    { 
        id: 1,
        text: 'The list be stored in an open format',
        completed: false,
        editing: false
    },
    { 
        id: 2,
        text: 'Priority is by list order',
        completed: false,
        editing: false
    },
    { 
        id: 3,
        text: 'One list to rule them all',
        completed: false,
        editing: false
    }
])

export { todos }