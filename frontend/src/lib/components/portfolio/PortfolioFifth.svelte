<script lang="ts">
	export let competencesData: any[] = [];
</script>

<div class="portfolio-fifth">
	{#each competencesData as { id, title, content, imageUrl }, index}
		<article class={`portfolio-card ${id}`}>
			{#if imageUrl}
				<img src={imageUrl} alt="" />
			{/if}
			<h3 class="portfolio-card-h3">{title}</h3>
			<h4 class="portfolio-card-h4">{@html content}</h4>
		</article>
	{/each}
</div>
