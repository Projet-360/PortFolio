<script lang="ts">
	import Git from '$lib/svg/Git.svelte';
	import Malt from '$lib/svg/Malt.svelte';
	import Linkedin from '$lib/svg/Linkedin.svelte';

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
		}
	];
</script>

<div class="logo-container">
	<img class="logo5degres" src="/img/logo5degres.webp" alt="logo">
	<img class="visage" src="/img/visage.webp" alt="visage">
	<h1 class="branding">
		<span><span>Pierre</span> FABIEN</span><br />
		<span>web développeur</span><br />
		<span>Front-end - design</span>
	</h1>
	<ul>
		{#each social as { component: IconComponent, title, link }}
			<li>
				<svelte:component this={IconComponent} />

				<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
				<span>{title}</span>
			</li>
		{/each}
	</ul>
</div>
