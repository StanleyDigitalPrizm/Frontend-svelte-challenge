/**
 * Tabs
 * tabs to switch between
 * TODO - tab with all the in-complete todo
 * COMPLETE - tab with all the completed todo
 */
export enum Tabs {
    TODO,
    COMPLETE,
}

/**
 * Todo
 * @property {number} id id for the todo
 * @property {number} userId id of the user to whom todo belongs to
 * @property {title} title the todo description
 * @property {boolean} completed status of the todo
 */
export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}
