<script>
    import {language} from "../values.js"

</script>

<section id="mission">
    <div>
        <h1>
            {$language == "cz" ? "naše_mise" : "our_mission"}
        </h1>
            {#if $language == "cz"}
             <p>
                Naším posláním je <strong>posilovat firmy a jednotlivce</strong> pomocí moderních, výkonných webů, aplikací a digitálních nástrojů.
            </p>
            <p>
                Věříme, že <strong>skvělá technologie by měla být jednoduchá, efektivní a dostupná</strong> — ne ohromující. Proto <strong>vytváříme a spravujeme řešení na míru</strong>, která pomáhají našim klientům růst bez stresu a starostí.
            </p>
            {:else}
                <p>
                    At <strong>wannepain</strong>, our mission is to <strong>empower businesses and individuals</strong> with modern, high-performing websites, apps, and digital tools. 
                </p>
                <p>
                    We believe that <strong>great technology should be simple, effective, and accessible</strong> — not overwhelming. That’s why we <strong>build and manage custom solutions</strong> that help our clients grow, without the stress of handling it all alone.
                </p>
            {/if}
    </div>
</section>
<style>
    section{
        padding-top: 7rem;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        box-shadow: inset 0 0  35px rgba(25, 25, 25, 1);
        padding: 1rem;
    }
    h1{
        font-family: "Cascadia Code", monospace;
        color: #191919;
        font-size: 96px;
        margin: 0;
        font-weight: 600;
        margin-bottom: 0.4rem;
    }
    p{
        margin: 0;
        text-align: center;
        font-size: 32px;
        opacity: 0.8;
          font-family: "Cascadia Code", monospace;
        color: #191919;
        font-weight: 300;
    }
    strong{
        font-weight: 600;
    }
</style>