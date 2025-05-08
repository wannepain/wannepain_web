<script lang="ts">
    let { message }: { message: string } = $props();
</script>


<div class="overlay">
    <h1>{message}</h1>
    <p>You will be redirected back soon</p>
</div>

<style>
    .overlay {
        position: fixed; /* key change: fixed instead of absolute */
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999; /* ensure it overlays everything */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(25, 25, 25, 0.5);
        backdrop-filter: blur(10px);
        flex-direction: column;
    }

    h1 {
        color: #FFF;
        font-family: "Cascadia Code", monospace;
        font-size: 32px;
        font-weight: 400;
        margin: 0;
        word-wrap: break-word;
        text-align: center;
        padding: 1rem;
    }
    p{
        color: #FFF;
        font-family: "Cascadia Code", monospace;
        font-size: 24px;
        font-weight: 400;
        margin: 0;
        word-wrap: break-word;
        text-align: center;
        padding: 1rem;
    }
</style>
