<script>
    // import "/styles.css";
    import Package from "./Package.svelte";
    // import "./../../../../static/styles.css";
</script>
<div class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 after:shrink-0 before:w-[30vw] after:w-[30vw]">
    <div class="shrink-0 snap-center">
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