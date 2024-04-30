<script lang="ts">
	// Structure de données pour les portfolioFourth
	export let formationData: any[] = [];
</script>

<div class="portfolio-fourth">
	{#each formationData as { key, headline, description }}
		<article class={`${key}`}>
			<h2>{@html headline}</h2>
			<p>{@html description}</p>
		</article>
	{/each}
</div>
