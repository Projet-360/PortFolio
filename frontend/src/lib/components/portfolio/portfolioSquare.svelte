<script lang="ts">
	export let experienceData: any[] = [];
</script>

<div class="portfolio-square">
	{#each experienceData as { title, poste, date, items }}
		<div class="portfolio-square-container">
			<div class="portfolio-square-container-top">
				<h2>{@html date}</h2>
				<h3>{@html title}</h3>
				<h4>{@html poste}</h4>
			</div>

			<ul>
				{#each items as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
