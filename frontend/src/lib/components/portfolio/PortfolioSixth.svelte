<script lang="ts">
	export let bookData: any[] = [];
</script>

<div class="portfolio-sixth">
	{#each bookData as { id, title, subtitle, imageUrl }}
		<article class={`${id}`}>
			{#if imageUrl}
				<img src={imageUrl} alt="" />
			{/if}
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</article>
	{/each}
</div>
