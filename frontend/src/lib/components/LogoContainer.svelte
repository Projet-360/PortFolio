<script lang="ts">
	import { get } from 'svelte/store';
	import smoothScrollStore from '$stores/scrollStore';
	import { sectionsStore } from '$stores/elementStore';

	import Git from '$lib/svg/Git.svelte';
	import Malt from '$lib/svg/Malt.svelte';
	import Linkedin from '$lib/svg/Linkedin.svelte';
	import PDF from '$lib/svg/PDF.svelte';
	import Arrow from '$lib/svg/Arrow.svelte';
	import SvgLogo from './SvgLogo.svelte';

	let social = [
		{
			component: Git,
			title: 'Github',
			link: 'https://github.com/Pierre-FABIEN',
			position: 1
		},
		{
			component: Linkedin,
			title: 'Linkedin',
			link: 'https://www.linkedin.com/in/pierre-fabien/',
			position: 2
		},
		{
			component: PDF,
			title: 'PDF',
			link: './CV_Pierre-FABIEN.pdf',
			position: 2
		}
	];

	function scrollTo(section: string) {
		const sectionElement = $sectionsStore.get(section);

		const smoothScroll = get(smoothScrollStore);

		if (section && smoothScroll) {
			const sectionTop = sectionElement.offsetTop - 150; // Ajustement de 150px
			smoothScroll.scrollTo(0, sectionTop, 1000); // 1000 est la durée en ms
		} else {
			console.warn(`Section non trouvée ou smoothScroll non initialisé.`);
		}
	}
</script>

<div class="logo-container">

	<ul>
		{#each social as { component: IconComponent, title, link }}
			<li>
				<svelte:component this={IconComponent} />

				<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
				<span>{title}</span>
			</li>
		{/each}
	</ul>
	<img class="visage" src="/img/visage.webp" alt="visage" width="auto" height="80vh">
	<h1 class="branding">
		<span><span>Pierre</span> FABIEN</span><br />
		<span>web développeur</span><br />
		<span>Front-end - design</span>
	</h1>
	<button class="button-circle" on:click={(event) => { scrollTo('profile'); }} >
		<Arrow	/>
		<div class="circle-container">
			<div class="circle-text">
				<span>J</span>
				<span>e</span>
				<span> </span>
				<span>v</span>
				<span>o</span>
				<span>u</span>
				<span>s</span>
				<span> </span>
				<span>f</span>
				<span>a</span>
				<span>i</span>
				<span>s</span>
				<span> </span>
				<span>l</span>
				<span>e</span>
				<span> </span>
				<span>t</span>
				<span>o</span>
				<span>u</span>
				<span>r</span>
				<span> </span>
				<span>d</span>
				<span>e</span>
				<span> </span>
				<span>m</span>
				<span>o</span>
				<span>n</span>
				<span> </span>
				<span>C</span>
				<span>V</span>
				<span> </span>
				<span>!</span>
				<span> </span>
				<span>X</span>
				<span>)</span>
			</div>
		</div>
	</button>
</div>

<style lang="scss">

</style>