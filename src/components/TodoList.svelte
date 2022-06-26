<!-- script here -->
<script lang="ts">
    import { Tabs } from "../utils/types/todo";
    import TodoItems from "./TodoItems.svelte";
    import TodoTabs from "./TodoTabs.svelte";

    let active: Tabs = Tabs.TODO;

    /**
    * toggleTab
    * dispatch custom event with tab as data
    * @param {CustomEvent<Tabs>} event the custom event with the tab in detail
    **/
    const toggleTab = (event: CustomEvent<Tabs>) => {
        active = event.detail;
    };
</script>

<!-- template here -->
<div class="card bg-white my-10 p-10">
    <input type="text" class="p-5 color-gray-900 outline-none rounded-xl border border-gray-300" placeholder="What would you like to achieve?">
</div>
<TodoTabs {active} on:active-tab={toggleTab} />
<div
    class="w-full p-5 border-b border-x border-gray-300 rounded-b-lg bg-white overlow-hidden flex-1 mb-10"
    class:rounded-tr-lg={active === Tabs.TODO}
    class:rounded-tl-lg={active === Tabs.COMPLETE}
>
    {#if active === Tabs.TODO}
        <TodoItems />
    {:else if active === Tabs.COMPLETE}
        <div>COMPLETE</div>
    {/if}
</div>j``
