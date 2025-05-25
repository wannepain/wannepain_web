<script>
    import Package from "./Package.svelte";
</script>
<div>
    <Package 
        packageName="managment"
        />
        <Package 
        packageName="turbo"
        />
        <Package 
        packageName="maintanance"
        />
</div>

<style>
    div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        padding: 1rem;
        background: #191919;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(25, 25, 25, 0.5) 25%);
        height: 90vh;
    }
</style>