<script lang="ts">
	import { onMount } from "svelte";
	import Package from "./Package.svelte";

	let container: HTMLDivElement;
	let currentIndex = 0;
	let autoplayInterval: ReturnType<typeof setInterval> | undefined;
	let userScrollTimeout: ReturnType<typeof setTimeout> | undefined;
	let hoverTimeout: ReturnType<typeof setTimeout> | undefined;

	// ❌ no scrollIntoView here
	const scrollToCard = (index: number) => {
		if (!container) return;
		const card = container.children[index] as HTMLElement;
		if (!card) return;

		// center the card horizontally in the container
		const offset =
			card.offsetLeft -
			(container.clientWidth - card.offsetWidth) / 2;

		container.scrollTo({ left: offset, behavior: "smooth" });
	};

	const startAutoplay = () => {
		clearInterval(autoplayInterval);
		if (!container) return;
		autoplayInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % container.children.length;
			scrollToCard(currentIndex);
		}, 4000);
	};

	const pauseAutoplay = () => {
		clearInterval(autoplayInterval);
	};

	const resumeAutoplay = (delay = 100) => {
		clearTimeout(userScrollTimeout);
		clearTimeout(hoverTimeout);
		hoverTimeout = setTimeout(() => startAutoplay(), delay);
	};

	const isContainerInView = () => {
		const rect = container.getBoundingClientRect();
		return rect.top < window.innerHeight && rect.bottom > 0;
	};

	const handleScroll = () => {
		pauseAutoplay();

		if (isContainerInView()) {
			resumeAutoplay(100);
		}

		// snap‑to‑nearest logic
		const center = container.scrollLeft + container.clientWidth / 2;
		let closestIndex = 0;
		let minDistance = Infinity;

		for (let i = 0; i < container.children.length; i++) {
			const card = container.children[i] as HTMLElement;
			const cardCenter =
				card.offsetLeft + card.offsetWidth / 2;
			const dist = Math.abs(center - cardCenter);
			if (dist < minDistance) {
				minDistance = dist;
				closestIndex = i;
			}
		}

		currentIndex = closestIndex;
	};

	onMount(() => {
		if (!container) return;

		startAutoplay();
		container.addEventListener("scroll", handleScroll);

		const onEnter = () => {
			pauseAutoplay();
			clearTimeout(hoverTimeout);
		};
		const onLeave = () => {
			if (isContainerInView()) {
				resumeAutoplay(10000);
			}
		};

		container.addEventListener("mouseenter", onEnter);
		container.addEventListener("mouseleave", onLeave);

		return () => {
			clearInterval(autoplayInterval);
			clearTimeout(userScrollTimeout);
			clearTimeout(hoverTimeout);
			container.removeEventListener("scroll", handleScroll);
			container.removeEventListener("mouseenter", onEnter);
			container.removeEventListener("mouseleave", onLeave);
		};
	});
</script>



<div class="main">
    <div class="packages-container" bind:this={container}>
        <div class="package">
            <Package packageName="managment" />
        </div>
        <div class="package">
            <Package packageName="turbo" />
        </div>
        <div class="package">
            <Package packageName="maintanance" />
        </div>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem;
        background: #191919;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(25, 25, 25, 0.5) 25%);
        height: 90vh;
        overflow-x: scroll;
    }

    .packages-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
    }

    .package {
        flex: 0 0 80%;
        margin: 0 10%;
        scroll-snap-align: center;
        scroll-snap-stop: always;
        height: fit-content;
    }

    .packages-container::-webkit-scrollbar {
        display: none;
    }
</style>
