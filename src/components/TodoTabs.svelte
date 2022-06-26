<!-- script here -->
<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { Tabs } from "../utils/types/todo";

    const dispatch = createEventDispatcher();

    /**
    * toggleTab
    * dispatch custom event with tab as data
    * @param {Tabs} tab the tab clicked
    **/
    const toggleTab = (tab: Tabs) => {
        dispatch("active-tab", tab);
    };

    export let active: Tabs;
</script>

<!-- template here -->
<div class="tabs w-full flex mt-5">
    <div
        class="tab tab-lg flex-1 tab-lifted font-bold text-blue-200"
        class:tab-active={active === Tabs.TODO}
        class:text-blue-900={active === Tabs.TODO}
        on:click={() => toggleTab(Tabs.TODO)}
    >
        TODO
    </div>
    <div
        class="tab tab-lg flex-1 tab-lifted font-bold text-blue-200"
        class:tab-active={active === Tabs.COMPLETE}
        class:text-blue-900={active === Tabs.COMPLETE}
        on:click={() => toggleTab(Tabs.COMPLETE)}
    >
        COMPLETE
    </div>
</div>
