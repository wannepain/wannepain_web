
<script lang="ts">
	import { onMount } from "svelte";
	import { language } from "../../values.js";
	let scrollContainer: HTMLDivElement | null = null;

    export let services = $language == "cz" ?
    [
        { name: "návrh webů", description: "Navrhujeme vizuálně atraktivní a uživatelsky přívětivé weby, které odrážejí vaši značku a zaujmou návštěvníky." },
        { name: "návrh aplikací", description: "Moderní a intuitivní UI/UX design pro Android aplikace, zaměřený na efektivní používání." },
        { name: "tvorba webů", description: "Od nápadu až po spuštění — stavíme rychlé, responzivní a bezpečné weby na míru vašim potřebám." },
        { name: "tvorba aplikací", description: "Vyvíjíme spolehlivé a optimalizované Android aplikace, které fungují skvěle na různých zařízeních." },
        { name: "full-stack web", description: "Kompletní vývoj od A do Z — frontend, backend a databáze — pro dynamické a interaktivní weby." },
        { name: "full-stack aplikace", description: "Zajišťujeme celý vývojový proces Android aplikací včetně backendových služeb a správy dat." },
        { name: "správa webů/aplikací", description: "Průběžná údržba, aktualizace a optimalizace, aby vaše digitální produkty běžely hladce." }
    ]
    :
    [
        { name: "website design", description: "We craft visually appealing and user-friendly website designs that reflect your brand and keep your visitors engaged." },
        { name: "app design", description: "Modern and intuitive UI/UX design for Android apps, focused on smooth user experiences and efficient user flows." },
        { name: "website creation", description: "From idea to launch, we build fast, responsive, and secure websites tailored to your needs." },
        { name: "app creation", description: "We develop reliable and optimized Android apps built to perform well on a wide range of devices." },
        { name: "full-stack website", description: "Complete end-to-end development — frontend, backend, and database — for dynamic and interactive websites." },
        { name: "full-stack app", description: "We handle the entire development process for Android apps, including backend services and data handling." },
        { name: "app/website management", description: "Ongoing maintenance, updates, and optimization to ensure your digital products run smoothly and stay secure." }
    ];


	onMount(() => {
		let scrollAmount = 0;
		let direction = 1; // 1 for right, -1 for left
		const scrollStep = 0.8;

		const loopScroll = () => {
			if (!scrollContainer) return;

			scrollAmount += scrollStep * direction;
			scrollContainer.scrollLeft = scrollAmount;

			const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

			if (scrollAmount >= maxScroll || scrollAmount <= 0) {
				direction *= -1; // Reverse direction
			}

			requestAnimationFrame(loopScroll);
		};

		requestAnimationFrame(loopScroll);
	});

</script>


<section id="services">
    <div class="main">
        <h1 class="title">our_services</h1>
        <div class="scroll" bind:this={scrollContainer}>
            <div class="container">
                {#each services as { name, description }}
                    <div class="service">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
<style>
    .main{
        margin :0 1rem; 
        /* margin-top: 7rem; */
    }
    #services{
        padding-top: 7rem;
    }
    .scroll{
        overflow-x: scroll;
        overflow-y: hidden;
        width: 100%;
        /* scrollbar-color: rgba(255, 255, 255, 0.7) transparent;
        scrollbar */
    }
    
    .container{
        display: flex;
        flex-direction: row;
        width: fit-content;
        padding-left: 1rem;
        padding-bottom: 1rem;
    }
    .service {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 200px;
        margin-right: 2rem;
        /* border: 2px solid red; */
    }
    .title{
        font-family: "Cascadia Code", monospace;
        color: #FFF;
        font-size: 36px;
        margin: 0;
        font-weight: 600;
        margin-bottom: 1rem;
        
    }
    h1 {
        font-family: "Cascadia Code", monospace;
        color: #FFF;
        font-size: 32px;
        margin: 0;
        font-weight: 400;
        margin-bottom: 0.4rem;
    }
    p {
        margin: 0;
        text-align: start;
        font-size: 14px;
        opacity: 0.8;
        font-family: "Cascadia Code", monospace;
        color: #FFF;

    }


    ::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: transparent;
    display: none;
}

    ::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
        /* background-color: rgba(255, 255, 255, 0.5); */
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb:hover,::-webkit-scrollbar-thumb:active  {
        border-radius: 0;
        /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
        /* background-color: rgba(255, 255, 255, 0.9); */
        background-color: transparent;
    }
</style>