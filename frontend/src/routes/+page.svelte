<script lang="ts">
	import { onMount } from 'svelte';

	import { setTransitionLoader } from '$lib/stores/transitionLoaderStore';
	import { enter, exit } from './transition';
	import { onNavigate } from '$app/navigation';
	import LogoContainer from '$components/LogoContainer.svelte';
	import PortfolioSecond from '$components/portfolio/PortfolioSecond.svelte';
	import PortfolioSquare from '$components/portfolio/portfolioSquare.svelte';
	import PortfolioFifth from '$components/portfolio/PortfolioFifth.svelte';
	import PortfolioSixth from '$components/portfolio/PortfolioSixth.svelte';
	import PortfolioFooter from '$components/portfolio/PortfolioFooter.svelte';
	import PortfolioFourth from '$components/portfolio/PortfolioFourth.svelte';
	import {
		competencesData,
		formationData,
		profilData,
		bookData,
		experienceData
	} from '$lib/data/data';
	import { sectionsStore } from '$stores/elementStore';

	const linkUrl: string = 'https://kit.svelte.dev';
	let title: HTMLElement;
	let text: HTMLElement;
	let link: HTMLElement;
	let path: string;

	onNavigate((navigation) => {
		path = navigation.to?.route.id;
	});

	let profileTitle: HTMLElement;
	let experiencesTitle: HTMLElement;
	let formationsTitle: HTMLElement;
	let competencesTitle: HTMLElement;
	let bookTitle: HTMLElement;

	onMount(() => {
		setTransitionLoader(false);

		sectionsStore.update((sections) => {
			sections.set('profile', profileTitle);
			sections.set('experiences', experiencesTitle);
			sections.set('formations', formationsTitle);
			sections.set('competences', competencesTitle);
			sections.set('book', bookTitle);
			return sections;
		});
	});
</script>

<svelte:head>
	<title>Pierre FABIEN Web-Dev</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<div
	class="home"
	in:enter={{ duration: 1, title, text, link }}
	out:exit={{ duration: 1, title, text, link }}
>
	<LogoContainer />

	<h1 class="title axo">Les performances sur ce site ?</h1>

	<p class="paragraph-custom">
		Notez que ce site n'est pas <b>garni de technologies</b>, mais si vous souhaitez voir un
		<b>projet plus gourmand</b>, je vous invite à visiter le site
		<a href="http://xplicitdrink.com" target="_blank" rel="noopener noreferrer">xplicitdrink</a>.
		Cela consiste à ouvrir <b>l'inspecteur</b> du navigateur <b>chrome</b> et à réaliser une analyse
		sur l'onglet
		<b>Lighthouse</b>. Xplicitdrink dispose de technologies comme <b>ThreeJs</b> et d'autres outils
		qui prouvent que même avec les outils les plus groumands, nous pouvons obtenir de
		<b>bons scores</b>. Il y a aussi la possiblité de réaliser une <b>PWA</b>.
	</p>

	<img
		class="lighthouse"
		src="/img/LightHouse.webp"
		alt="Analyse Lightouse le 03/04/2024"
		width="100%"
		height="100%"
	/>

	<h2 class="title" bind:this={profileTitle}>Profile</h2>

	<PortfolioSecond {profilData} />

	<h3 class="title" bind:this={experiencesTitle}>Experiences</h3>

	<PortfolioSquare {experienceData} />

	<h3 class="title" bind:this={competencesTitle}>Compétences</h3>

	<PortfolioFifth {competencesData} />

	<h3 class="title" bind:this={formationsTitle}>Formations</h3>

	<PortfolioFourth {formationData} />

	<h3 class="title" bind:this={bookTitle}>Book</h3>
	<h4 class="subtitle">Mes réalisations</h4>

	<PortfolioSixth {bookData} />

	<PortfolioFooter />
</div>

