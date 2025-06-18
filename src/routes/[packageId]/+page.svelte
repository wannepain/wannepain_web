<script>
    const { data } = $props();
    import {showOverlay} from "../../routes/writables/showOverlay.js";
    import {language} from "../values.js";
    console.log(data.packageId);
    import { packages, cz_packages } from "../pages/packages/values.js";
    const selectedPackage = $language=="cz"? cz_packages[data.packageId] : packages[data.packageId];

    function onclick() {
        // This function can be used to handle any click events if needed
        $showOverlay = true;
    }
</script>
<div class="container">
    <div class="card">
        <h1>{selectedPackage["title"]}</h1>
        <p>{selectedPackage["long_description"]}</p>
        <button class="price" onclick={onclick}>
            <div class="price_before_reduction">
                <p>{selectedPackage["price_before_reduction"]}</p>
            </div>
            <h2>{selectedPackage["price"]}</h2>
            <p>{selectedPackage["payment_type"]}</p>
        </button>
    </div>
</div>
<style>
    .container{
        background-color: #191919;
        width: 100%;
        height: 100vh;
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFF;
        font-family: "Cascadia Code", monospace;
        
    }
    .card {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card h1{
        font-size: 64px;
        font-weight: 600;
        text-align: center;
        margin: 0;
    }
    .card p {
        font-size: 24px;
        font-weight: 300;
        text-align: center;
        opacity: 0.7;
        margin: 0.5rem 0;
    }
    .price{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1.5px solid #FFF;
        width: 100%;
        padding: 6px 5rem ;
        background-color: transparent;
        font-family: "Cascadia Code", monospace;
        user-select: none;
    }
    .price_before_reduction{
        text-decoration: line-through;
        opacity: 0.7;
        display: flex;
        width: 100%;
        justify-content: end;
        font-size: 20px;
        font-weight: 300;
        margin-bottom: -1rem;
        padding-right: 5rem;
        color: #FFF;
    }
    .price h2{
        font-size: 40px;
        font-weight: 600;
        margin: 0.5rem 0;
        color: #FFF;
    }
    .price p{
        font-size: 20px;
        font-weight: 300;
        opacity: 0.6;
        color: #FFF;
    }
    .price{
        margin-top: 1.5rem;
    }
    .price:hover {
        /* background-color: rgba(255, 255, 255, 0.1); */
        box-shadow: rgba(255, 255, 255, 0.3) 0 0 5px;
        cursor: auto;
    }
</style>