<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
    import {language} from './values.js';

	const currentSection = writable('');
	const sections = ['mission', 'services', 'get_quote'];

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
	<div>
		<h1>wannepain</h1>
	</div>

	<nav>
		<ul>
			<li><a href="#mission" class:active={$currentSection === 'mission'}>
                {$language == "cz"? "naše_mise":"our_mission"}
            </a></li>
			<li><a href="#services" class:active={$currentSection === 'services'}>
				{$language == "cz"? "služby":"services"}
			</a></li>
			<li class="quote">
				<a href="#get_quote" class:active={$currentSection === 'get_quote'}>
					{$language == "cz"? "kontakt":"get_quote"}
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		backdrop-filter: blur(6px);
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(25, 25, 25, 0.2);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
	a {
		font-family: "Cascadia Code", monospace;
		text-decoration: none;
		color: #fff;
		opacity: 0.8;
		font-size: 36px;
		transition: color 0.3s ease;
	}
	a.active {
		/* color: #00ffff; Highlight color */
		opacity: 1;
		font-weight: bold;
	}
	h1 {
		font-size: 48px;
		font-weight: 600;
		font-family: "Cascadia Code", monospace;
		color: #fff;
		width: fit-content;
		margin: 0;
	}
	div,
	nav {
		flex: 1;
	}
	nav {
		display: flex;
		justify-content: flex-end;
	}
	li {
		margin: 0 6px;
	}
	ul {
		display: flex;
		list-style: none;
		align-items: center;
		width: fit-content;
	}
	.quote {
		border: 1.5px solid #fff;
		padding: 0.5rem 0.3rem;
	}
	.quote a {
		font-weight: 600;
		/* opacity: 1; */
	}

	/* Optional smooth scrolling */
	html {
		scroll-behavior: smooth;
	}

	/*hover effect*/
	a:hover {
		/* color: #00ffff; */
		opacity: 0.9;
	}
</style>
