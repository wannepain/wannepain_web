<script lang="ts">
    import Header from './Header.svelte';
    import Page1 from './pages/Page1.svelte';
    import Page2 from './pages/Page2.svelte';
	import Page3 from './pages/Page3.svelte';
    import Page4 from './pages/Page4.svelte';
	import { onMount } from 'svelte';
	import {language} from './values.js';

	onMount(async () => {
		const country = await getUserCountryCode();
		if (country && country !== 'CZ') {
			language.set('en');
		}
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
    <Header />
    <main>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
    </main>
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