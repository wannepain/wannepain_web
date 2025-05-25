<script>
	import { onMount } from 'svelte';
    import Header from './Header.svelte';
    import HeaderMobile from "./pages/mobile/Header.svelte";
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
{@render children()}