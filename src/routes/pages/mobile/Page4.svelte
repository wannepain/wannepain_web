<script lang="ts">
    import ThankYou from "./../utils/thank_you.svelte";
    import {language} from "../../values.js"
	import { onMount } from "svelte";
    let name = $state("")
    let email = $state("")
    let phone = $state("")
    let message = $state("")   
    let show_error = $state(false)  
    let show_thanks = $state(false)
    let container: HTMLDivElement;
    // let styles = {
	// 	'asterix-color': "#FFF"
	// }
    let asterix_color = $state("#FFF")
	let cssVarStyles = $derived(`--asterix-color:${asterix_color}`)

    onMount(() => {
		function handleScroll() {
			show_error = false;
            asterix_color = "#FFF"
		}

		window.addEventListener('scroll', handleScroll);

		// Cleanup when component is destroyed
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	});

    async function check_func(event: Event){
        event.preventDefault()
        if(name == "" && email == ""){
            show_error = true
            asterix_color ="#F0A202"
            return
        } else{
            show_error = false
            asterix_color = "#FFF"
            console.log(name, email, phone, message)
            await fetch('/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, message: message, email: email, phone: phone })
            });
            name = ""
            email = ""
            phone = ""
            message = ""
            show_thanks = true
            setTimeout(() => {
                show_thanks = false
            }, 1000);
        }
        
        
    }
</script>
<section id="get_quote" style="{cssVarStyles}">
<div class="container" bind:this={container}>
    <form action="">
        <h1>
            {
                $language=="cz"? "kontakt":"get_quote"
            }
        </h1>
        <div class="input">
            <label for="name" class="required"><span class="asterix">*</span> {$language=="cz"?"jméno":"name"}</label>
            <input type="text" id="name" placeholder={$language=="cz"?"jméno":"name"} bind:value={name}>
        </div>
        <div class="input">
            <label for="email" class="required"><span class="asterix">*</span> {$language=="cz"?"email":"email"}</label>
            <input type="email" id="email" placeholder={$language=="cz"?"email":"email"} bind:value={email}>
        </div>
        <div class="input">
            <label for="phone">  {$language=="cz"?"telefon":"phone"}</label>
            <input type="tel" id="tel" placeholder={$language=="cz"?"telefon":"phone"} bind:value={phone}>
        </div>
        <div class="textarea">
            <label for="message">  {$language=="cz"?"zpráva_pro_nás":"message"}</label>
            <textarea id="message" placeholder={$language=="cz"?"zpráva":"message"} bind:value={message}></textarea>
        </div>
        <button type="submit" onclick={check_func}>{$language=="cz"?"poslat":"submit"}</button>
        {#if show_error}
            <div class="error">
                <p>{$language=="cz"?"Prosím vyplňte všechna povínná pole":"Please fill all required fields"}</p>
            </div>
        {/if}
        {#if show_thanks}
            <ThankYou message={$language=="cz"?"Děkujeme ":"Thank you"} />
        {/if}
    </form>
    
</div>
</section>


<style>
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
    }
    h1{
        font-family: "Cascadia Code", monospace;
        color: #FFF;
        font-size: 36px;
        margin: 0;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    .container{
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
        label{
            color: #fff;
            margin-bottom: 0.5rem;
            font-size: 14px;
            width: fit-content;
            font-family: "Cascadia Code", monospace;
        }
        .required{
            color:var(--asterix-color);
        }
        .input{
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            font-family: "Cascadia Code", monospace;
            font-weight: 400;
            margin-top: 5px;
            width: 100%;
        }
        input{
            background-color: #fff;
            color: #191919;
            border: none;
            font-size: 12px;
            font-family: "Cascadia Code", monospace;
            padding: 8px;
            text-align: center;
            height: fit-content;
            width: 100%;
        }
        input:focus{
            border: none;
            box-shadow: rgba(240, 162, 2, 1) 0 0 10px;
            outline: none;
        }
        textarea{
            background-color: #fff;
            color: #191919;
            border: none;
            font-size: 12px;
            font-family: "Cascadia Code", monospace;
            padding: 8px;
            text-align: center;
            height: fit-content;
            width: 100%;
            resize: none;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0.5rem;
        }
        textarea:focus{
            border: none;
            box-shadow: rgba(240, 162, 2, 1) 0 0 10px;
            outline: none;
        }
        textarea::placeholder{
            text-align: center;
        }
        .textarea{
            width: 100%;
            margin-top: 5px;
        }
        button{
        background-color: #FFF;
        color: #191919;
        border: none;
        font-size: 16px;
        font-family: "Cascadia Code", monospace;
        padding: 8px;
        text-align: center;
        height: fit-content;
        width: 100%;
        cursor: pointer;
        margin-top: 1rem;
    }
    .error{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        bottom: 0;
    }
    .error p{
        color: #F0A202;
         padding: 1rem;
        font-family: "Cascadia Code", monospace;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        word-wrap: break-word;
    }
    .asterix {
        color: var(--asterix-color);
       
    }
</style>
