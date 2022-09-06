<script>
    import NodeDescription from "./NodeDescription.svelte";
    import NodeName from "./NodeName.svelte";

    export let node;
</script>

<div>
    <NodeName bind:node={node}/>
    <NodeDescription bind:node={node}/>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        gap: 16px;
    }    
</style>