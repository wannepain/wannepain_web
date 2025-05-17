<script>
	import { onMount } from "svelte";
    import { language} from "../../values.js";
    import {fade} from 'svelte/transition';

    let fullText1 = $language == "cz"?  "vaše_firma.":"your_business.";
    let fullText2 = $language == "cz"?"online. bez_starostí.":"online. managed.";
    let show_image = $state(false);
    let typed1 = $state("");
    let typed2 = $state("");
    let index1 = 0;
    let index2 = 0;

    // Typewriter function for first line
    const typeLine1 = () => {
        if (index1 < fullText1.length) {
            typed1 += fullText1[index1++];
            setTimeout(typeLine1, 100);
            show_image = true
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
            {#if show_image}
            <img src="/w_logo_laptop_concrete.png" alt="Laptop on W concrete" transition:fade={{duration:1000}}>
            {/if}
        
    </div>
    <div class="column">
            <h1>{typed1}{#if typed1.length < fullText1.length}<span class="cursor">|</span>{/if}</h1>
            <h2>{typed2}{#if typed2.length < fullText2.length && typed1.length == fullText1.length}<span class="cursor">|</span>{/if}</h2>
    </div>
    
</div>

<style>
    
    .main {
        display: flex;
        height: 100vh;
        flex-direction: column;
        padding: 3rem 1.5rem;
        align-items: end;
        justify-content: end;
    }
    .column {
        display: flex;
        /* flex: 1; */
        flex-direction: column;
        justify-content: end;
        align-items: start;
        /* padding-bottom: 7rem; */
        width: 100%;
        padding-bottom: 3rem;
    }
    h1, h2 {
        font-family: "Cascadia Code", monospace;
        color: #FFF;
        font-size: 36px;
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
    img{
        width: 20rem;
        height: 20rem;
    }
    
</style>

