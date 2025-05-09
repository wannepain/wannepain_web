<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { language } from '../../values.js';

	let show_links = false;
	const currentSection = writable('');
	const sections = ['mission', 'services', 'get_quote'];

	function toggleMenu() {
		show_links = !show_links;
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSection.set(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 }
		);

		sections.forEach((id) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<header>
	<div class="top-bar">
		<h1>wannepain</h1>
		<button on:click={toggleMenu}>
			<img
				src={show_links ? "/icons/cross.svg" : "/icons/menu.svg"}
				alt={show_links ? "Close menu" : "Open menu"}
			/>
		</button>
	</div>

	{#if show_links}
		<div class="dropdown" transition:slide={{ duration: 300 }}>
			<nav>
				<ul>
					<li>
						<a href="#mission" class:active={$currentSection === 'mission'} on:click={()=>{setTimeout(()=>{show_links=false},  100)}}>
							{ $language === "cz" ? "naše_mise" : "our_mission" }
						</a>
					</li>
					<li>
						<a href="#services" class:active={$currentSection === 'services'} on:click={()=>{setTimeout(()=>{show_links=false},  100)}}>
							{ $language === "cz" ? "služby" : "services" }
						</a>
					</li>
					<li class="quote">
						<a href="#get_quote" class:active={$currentSection === 'get_quote'} on:click={()=>{setTimeout(()=>{show_links=false},  100)}}>
							{ $language === "cz" ? "kontakt" : "get_quote" }
						</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</header>

<style>
	header {
		backdrop-filter: blur(6px);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #191919;
		width: 100%;
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1rem;
	}

	h1 {
		font-size: 48px;
		font-weight: 600;
		font-family: "Cascadia Code", monospace;
		color: #fff;
		margin: 0;
	}

	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	.dropdown {
		width: 100%;
		background-color: #191919;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	ul {
		width: 100%;
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
        margin-bottom: 12px;
	}

	li {
		margin: 10px 0;
		width: 80%;
		text-align: center;
	}

	a {
		font-family: "Cascadia Code", monospace;
		text-decoration: none;
		color: #fff;
		opacity: 0.8;
		font-size: 36px;
		transition: opacity 0.3s ease;
		display: block;
	}

	a:hover {
		opacity: 0.9;
	}

	a.active {
		opacity: 1;
		font-weight: bold;
	}

	.quote {
		border: 1.5px solid #fff;
		padding: 0.5rem 0.3rem;
	}

	.quote a {
		font-weight: 600;
	}

	html {
		scroll-behavior: smooth;
	}
</style>
