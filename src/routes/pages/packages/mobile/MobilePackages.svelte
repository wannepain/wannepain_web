<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import Package from "./Package.svelte";

    let container: HTMLDivElement;
    let currentIndex = 0;
    let autoplayInterval: string | number | NodeJS.Timeout | undefined;
    let userScrollTimeout;
    let hoverTimeout: string | number | NodeJS.Timeout | undefined;

    const scrollToCard = (index: number) => {
        const card = container.children[index];
        if (card) {
            // card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        }
    };

    const startAutoplay = () => {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % container.children.length;
            scrollToCard(currentIndex);
        }, 4000);
    };

    const pauseAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    const resumeAutoplay = (delay = 1000) => {
        clearTimeout(userScrollTimeout);
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            startAutoplay();
        }, delay);
    };

    const handleScroll = () => {
        pauseAutoplay();
        resumeAutoplay(1000); // after scroll

        const center = container.scrollLeft + container.offsetWidth / 2;
        let closestIndex = 0;
        let minDistance = Infinity;

        for (let i = 0; i < container.children.length; i++) {
            const card = container.children[i];
            const cardCenter = (card as HTMLElement).offsetLeft + (card as HTMLElement).offsetWidth / 2;
            const distance = Math.abs(center - cardCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }

        currentIndex = closestIndex;
    };

    onMount(() => {
        startAutoplay();
        container.addEventListener('scroll', handleScroll);
        container.addEventListener('mouseenter', () => {
            pauseAutoplay();
            clearTimeout(hoverTimeout);
        });
        container.addEventListener('mouseleave', () => {
            resumeAutoplay(10000); // resume after 10s
        });
    });

    onDestroy(() => {
        clearInterval(autoplayInterval);
        clearTimeout(userScrollTimeout);
        clearTimeout(hoverTimeout);
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('mouseenter', pauseAutoplay);
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
