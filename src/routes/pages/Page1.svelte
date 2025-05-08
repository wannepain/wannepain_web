<!-- 
<div class="main">
    <div class="column">
        <div class="row">
            <h1>your_business.</h1>
            <h2>online. managed.</h2>
        </div>
    </div>
    <div class="column"></div>
</div>
<style>
    .main{
        display: flex;
        height: 100vh;
        flex-direction: row;
        padding: 0 2.5rem;
    }
    .column{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        padding-bottom: 7rem;
    }
    
    h1,h2{
        font-family: "Cascadia Code", monospace;
        color: #FFF;
        font-size: 64px;
        margin: 0;
        font-weight: 300;
    }
    h2{
        font-weight: 600;
    }

</style> -->
<script>
	import { onMount } from "svelte";

    let fullText1 = "your_business.";
    let fullText2 = "online. managed.";
    let typed1 = "";
    let typed2 = "";
    let index1 = 0;
    let index2 = 0;

    // Typewriter function for first line
    const typeLine1 = () => {
        if (index1 < fullText1.length) {
            typed1 += fullText1[index1++];
            setTimeout(typeLine1, 100);
        } else {
            // Start second line typing after the first line is complete
            setTimeout(typeLine2, 500);
        }
    };

    // Typewriter function for second line
    const typeLine2 = () => {
        if (index2 < fullText2.length) {
            typed2 += fullText2[index2++];
            setTimeout(typeLine2, 100);
        }
    };

    // Start typing on mount
    onMount(() => {
        typeLine1();
    });
</script>

<div class="main">
    <div class="column">
        <div class="row">
            <h1>{typed1}{#if typed1.length < fullText1.length}<span class="cursor">|</span>{/if}</h1>
            <h2>{typed2}{#if typed2.length < fullText2.length && typed1.length == fullText1.length}<span class="cursor">|</span>{/if}</h2>
        </div>
    </div>
    <div class="column"></div>
</div>

<style>
    .main {
        display: flex;
        height: 100vh;
        flex-direction: row;
        padding: 0 2.5rem;
    }
    .column {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        padding-bottom: 7rem;
    }
    h1, h2 {
        font-family: "Cascadia Code", monospace;
        color: #FFF;
        font-size: 64px;
        margin: 0;
        font-weight: 300;
    }
    h2 {
        font-weight: 600;
    }
    .cursor {
        display: inline-block;
        width: 1ch;
        animation: blink 0.7s steps(1) infinite;
        color: #FFF;
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
</style>

