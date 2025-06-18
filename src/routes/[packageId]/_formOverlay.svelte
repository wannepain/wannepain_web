<script>
    import Overlay from "../pages/utils/overlay.svelte";
    import { language } from "../values.js";
    import { showOverlay } from "../writables/showOverlay";

    var email = $state("");
    function close(){
        $showOverlay = false;
    }
</script>

<Overlay>
    <div class="card">
        <div class="header">
            <h1>{$language == "cz" ? "kontaktujte_nás" : "contact_us"}</h1>
            <button class="close" onclick={close}>&times;</button>
        </div>
        <div class="input">
            <label for="email" class="required"><span class="asterix">*</span> {$language=="cz"?"email":"email"}</label>
            <input type="email" id="email" placeholder={$language=="cz"?"email":"email"} bind:value={email}>
        </div>
        <button type="submit" onclick={()=>{}}>{$language=="cz"?"poslat":"submit"}</button>
    </div>
</Overlay>

<style>
.card{
    background-color: #191919;
    padding: 1rem; 
    box-shadow: rgba(25, 25, 25, 1) 0 0 50px;  
}
.close{
    color: #fff;
    font-size: 36px;
    cursor: pointer;
    width: fit-content;
    margin: 0;
    padding: 0;
    height: fit-content;
}
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin: 0 0.5rem; */
    width: 100%;
    color: #fff;
    font-family: "Cascadia Code", monospace;
    align-items: center;
}
.header h1{
    font-size: 30px;
}
.header button{
    background-color: transparent;
    border: none;

}

.input{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    font-family: "Cascadia Code", monospace;
    font-weight: 400;
    margin-top: 5px;
}
label{
    color: #fff;
    margin-bottom: 0.5rem;
    font-size: 24px;
    width: fit-content;
    font-family: "Cascadia Code", monospace;
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
input:focus{
    border: none;
    box-shadow: rgba(240, 162, 2, 1) 0 0 10px;
    outline: none;
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
</style>