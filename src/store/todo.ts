import { writable, Writable } from "svelte/store";
import { Axios } from "../utils/axios";
import type { Todo } from "../utils/types/todo";

/**
 * @class TodoStore
 * @property {Writable<Todo[]>} store the store that contains all the todo
 * @property {TodoStore} _instance a private instance for maintaining singleton
 */
export class TodoStore {
    private static _intance: TodoStore;
    store: Writable<Todo[]>;

    private constructor() {
        this.store = writable<Todo[]>([]);
    }

    /**
     * getInstance
     * create instance if does not exist and the return in
     * @returns TodoStore
     */
    static getInstance() {
        if (!this._intance) {
            this._intance = new TodoStore();
        }
        return this._intance;
    }

    /**
     * getAllTodos
     * get all todos and update the store
     */
    async getAllTodos() {
        try {
            const response = await Axios.get("todos", {
                params: {
                    userId: 1,
                },
            });
            if (response.statusText !== "OK") {
                throw new Error(response.data);
            }
            this.store.set(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * deleteTodo
     * delete the todo of the given id
     * @param {number} id id of the todo
     */
    async deleteTodo(id: number) {
        try {
            const response = await Axios.delete(`todos/${id}`);
            if (response.statusText !== "OK") {
                throw new Error(response.data);
            }
            this.store.update((currentTodos) =>
                currentTodos.filter((todo) => todo.id !== id)
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * updateTodo
     * update the todo
     * @param {number} id id of the todo
     * @param {Partial<Todo>} todo partial of todo that needs to update
     */
    async updateTodo(id: number, todo: Partial<Todo>) {
        try {
            const response = await Axios.patch(`todos/${id}`, todo);
            if (response.statusText !== "OK") {
                throw new Error(response.data);
            }
            this.store.update((currentTodos) =>
                currentTodos.map((mapTodo) =>
                    mapTodo.id === id ? { ...mapTodo, ...todo } : mapTodo
                )
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * createTodo
     * create a new todo
     * @param {Partial<Todo>} todo partial of todo that needs to update
     */
    async createTodo(todo: Todo) {
        try {
            const response = await Axios.post(`todos`, todo);
            if (response.statusText !== "Created") {
                throw new Error(response.data);
            }
            this.store.update((currentTodos) => [
                { ...response.data, id: Math.floor(Math.random() * 800) + 200 },
                ...currentTodos,
            ]);
        } catch (error) {
            console.log(error.message);
        }
    }
}
