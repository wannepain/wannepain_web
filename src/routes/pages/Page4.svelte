<script lang="ts">
    import ThankYou from "./utils/thank_you.svelte";
    let name = $state("")
    let email = $state("")
    let phone = $state("")
    let message = $state("")   
    let shor_error = $state(false)  
    let show_thanks = $state(false)
    
    async function check_func(event: Event){
        event.preventDefault()
        if(name == "" && email == ""){
            shor_error = true
            return
        } else{
            shor_error = false
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
            shor_error = false
            show_thanks = true
            setTimeout(() => {
                show_thanks = false
            }, 1000);
        }
        
        
    }
</script>
<section id="get_quote">
<div class="container">
    <form action="">
        <h1>get_quote</h1>
        <div class="input">
            <label for="name">* name</label>
            <input type="text" id="name" placeholder="name" bind:value={name}>
        </div>
        <div class="input">
            <label for="email">* email</label>
            <input type="email" id="email" placeholder="email" bind:value={email}>
        </div>
        <div class="input">
            <label for="phone">  phone</label>
            <input type="tel" id="tel" placeholder="phone" bind:value={phone}>
        </div>
        <div class="textarea">
            <label for="message">  message</label>
            <textarea id="message" placeholder="message" bind:value={message}></textarea>
        </div>
        <button type="submit" onclick={check_func}>submit</button>
        {#if shor_error}
            <div class="error">
                <p>please fill in all fields</p>
            </div>
        {/if}
        {#if show_thanks}
            <ThankYou message={"thank you for your message"} />
        {/if}
    </form>
    
</div>
</section>


<style>
    /* global *{
        box-sizing: border-box;
    } */
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-family: "Cascadia Code", monospace;
        color: #FFF;
        font-size: 64px;
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
            font-size: 30px;
            width: fit-content;
            font-family: "Cascadia Code", monospace;
        }
        .input{
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            font-family: "Cascadia Code", monospace;
            font-weight: 400;
        }
        input{
            background-color: #fff;
            color: #191919;
            border: none;
            font-size: 32px;
            font-family: "Cascadia Code", monospace;
            padding: 10px;
            text-align: center;
            height: fit-content;
            width: 100%;
        }
        textarea{
            background-color: #fff;
            color: #191919;
            border: none;
            font-size: 32px;
            font-family: "Cascadia Code", monospace;
            padding: 10px;
            text-align: center;
            height: fit-content;
            width: 100%;
            resize: none;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        textarea::placeholder{
            text-align: center;
        }
        .textarea{
            width: 100%;
        }
        button{
        background-color: #FFF;
        color: #191919;
        border: none;
        font-size: 32px;
        font-family: "Cascadia Code", monospace;
        padding: 10px;
        text-align: center;
        height: fit-content;
        width: 100%;
        cursor: pointer;
        margin-top: 1rem;
    }
    .error{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .error p{
        color: #FFF;
        padding: 1rem;
        font-family: "Cascadia Code", monospace;
        font-size: 24px;
        font-weight: 400;
        margin: 0;
        word-wrap: break-word;
    }
</style>
