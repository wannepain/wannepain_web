<script lang="ts">
    import Header from './Header.svelte';
    import Page1 from './pages/Page1.svelte';
    import Page2 from './pages/Page2.svelte';
	import Page3 from './pages/Page3.svelte';
    import Page4 from './pages/Page4.svelte';
	import HeaderMobile from "./pages/mobile/Header.svelte";
	import { onMount } from 'svelte';
	import {language} from './values.js';

	let width = $state(0)
	let height = $state(0)

	onMount(async () => {
		const country = await getUserCountryCode();
		if (country && country !== 'CZ') {
			language.set('en');
		}
		width = window.innerWidth;
		height = window.innerHeight;
		console
	});

	async function getUserCountryCode() {
		try {
			const res = await fetch('https://ipapi.co/json/');
			const data = await res.json();
			return data.country_code;
		} catch (err) {
			console.error('Geo lookup failed', err);
			return null;
		}
	}
</script>

<div>
	{#if width > 800 && height > 800}
		<Header />
		<main>
			<Page1 />
			<Page2 />
			<Page3 />
			<Page4 />
		</main>
	{:else}
		<HeaderMobile />
	{/if}
    
</div>
<style>
    div{
        background-color: #191919;
    }
    main{
        display: flex;
        flex-direction: column;
    }

</style>