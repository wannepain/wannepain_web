<script>
	import { onMount } from 'svelte';
    import Header from './Header.svelte';
    import HeaderMobile from "./pages/mobile/Header.svelte";
	import { showOverlay } from './writables/showOverlay';
	import _showOverlay from "./[packageId]/_formOverlay.svelte";
	const Overlay = _showOverlay;
    let width = $state(0)
	let height = $state(0)
    let { children } = $props();

	onMount(async () => {
		width = window.innerWidth;
		height = window.innerHeight;
	});
</script>
{#if width > 800 && height > 800}
		<Header />
{:else}
    <HeaderMobile />
{/if}
{#if $showOverlay}
	<Overlay />
{/if}
{@render children()}