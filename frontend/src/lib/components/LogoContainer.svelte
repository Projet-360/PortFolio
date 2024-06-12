<script lang="ts">
	import { get } from 'svelte/store';
	import smoothScrollStore from '$stores/scrollStore';
	import { sectionsStore } from '$stores/elementStore';

	import Git from '$lib/svg/Git.svelte';
	import Linkedin from '$lib/svg/Linkedin.svelte';
	import PDF from '$lib/svg/PDF.svelte';
	import Arrow from '$lib/svg/Arrow.svelte';
	
	let buttonText = "Découvrez mon Curriculum vitæ ! XD";

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
			const sectionTop = sectionElement.offsetTop + 70
			smoothScroll.scrollTo(0, sectionTop, 500); // 1000 est la durée en ms
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
	<button class="button-circle" on:click={(event) => { scrollTo('fullContainer'); }} >
		<Arrow	/>
		<div class="circle-container">
			<div class="circle-text">
				{#each buttonText.split('') as char}
					<span>{char}</span>
				{/each}
			</div>
		</div>
	</button>
</div>
