<script>
	import { showOverlay } from "../../writables/showOverlay";
    import { fade } from "svelte/transition";

</script>

<button class="container" on:click={() => $showOverlay = false} transition:fade={{ duration: 100 }}>
    <div class="content" on:click|stopPropagation>
        <slot />
    </div>
</button>

<style>
    .container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(25, 25, 25, 0.25);
        backdrop-filter: blur(5px);
        border: none;

    }
    .content {
        padding: 2rem;
    }
</style>