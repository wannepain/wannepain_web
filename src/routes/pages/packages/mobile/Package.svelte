<script lang="ts">
    import {goto} from '$app/navigation';
    import { packages, cz_packages } from "./../values";
     import {language} from "../../../values.js";
    type PackageName = keyof typeof packages;
    const { packageName} : {packageName:PackageName} = $props();
    const selectedPackage = $language=="cz"? cz_packages[packageName] : packages[packageName];
    function onclick(){
        goto(`/${packageName}`);
    }
</script>

<button class="container" onclick={onclick}>
    <h1>{selectedPackage["title"]}</h1>
    <div class="description">
        <p>{selectedPackage["description"]}</p> 
    </div>
    <div class="price">
        <div class="price_before_reduction">
            <p>{selectedPackage["price_before_reduction"]}</p>
        </div>
        <h2>{selectedPackage["price"]}</h2>
        <p>{selectedPackage["payment_type"]}</p>
    </div>
</button>

<style>
    .container{
        color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1rem;
        background-color: "#191919";
        font-family: "Cascadia Code", monospace;
        width: 380px;
        height: 400px;
        background-color: #191919;
        box-shadow: inset rgba(255, 255, 255, 0.1) 0 0 3px;
        border:none;
    }
    h1{
        font-size: 36px;
        font-weight: 600;
        margin: 0;
        text-align: center;
    }
    .description{
        padding: 0 3rem ;
        font-size: 24px;
        font-weight: 300;
        margin: 0.5rem 0;
        text-align: center;
        opacity: 0.7;
        margin: 0;
        margin-top: 0.5rem;
    }
    .description p, .price_before_reduction p, .price h2, .price p{
        margin: 0;
    }
    .price{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .price_before_reduction{
        text-decoration: line-through;
        opacity: 0.7;
        display: flex;
        width: 100%;
        justify-content: end;
        font-size: 18px;
        font-weight: 300;
        /* margin-bottom: -1rem; */
    }
    .price h2{
        font-size: 26px;
        font-weight: 600;
        margin: 0.5rem 0;
    }
    .price p{
        font-size: 16px;
        font-weight: 300;
        opacity: 0.6;
    }
    .price{
        margin-top: 1.5rem;
    }

</style>

