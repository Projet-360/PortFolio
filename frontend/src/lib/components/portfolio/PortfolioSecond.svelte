<script lang="ts">
	import { onMount } from 'svelte';

	export let profilData: any[] = [];

	// Fonction pour formater un nombre en ajoutant un zéro devant si < 10
	const pad = (number: number) => (number < 10 ? `0${number}` : number);

	// Fonction pour calculer la différence précise entre deux dates
	function calculateAgeDifference(birthdate: Date): string {
		const now = new Date();
		let diff = now.getTime() - birthdate.getTime();

		const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
		diff -= years * (1000 * 60 * 60 * 24 * 365);
		const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
		diff -= months * (1000 * 60 * 60 * 24 * 30);
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		diff -= days * (1000 * 60 * 60 * 24);
		const hours = Math.floor(diff / (1000 * 60 * 60));
		diff -= hours * (1000 * 60 * 60);
		const minutes = Math.floor(diff / (1000 * 60));
		diff -= minutes * (1000 * 60);
		const seconds = Math.floor(diff / 1000);

		return `${years} ans, ${months} mois, ${days} jours, ${pad(hours)}:${pad(minutes)}:${pad(
			seconds
		)}`;
	}

	// Fonction pour mettre à jour l'âge dans le portfolio
	function updateAge() {
		profilData = profilData.map((item) => {
			if (item.id === 'second') {
				const birthdate = new Date(1993, 6, 22, 20, 10); // Juillet 22, 1993 à 20:10
				const xpWork = new Date(2016, 7, 1, 12, 0); // Juillet 22, 1993 à 20:10
				const ageString = calculateAgeDifference(birthdate);
				const xpString = calculateAgeDifference(xpWork);
				item.paragraphs[2] = `<b>Age:</b> ${ageString}`;
				item.paragraphs[6] = `<b>Expérience Web dev:</b> ${xpString}`;
			}
			return item;
		});
	}

	onMount(() => {
		updateAge();
		const interval = setInterval(updateAge, 1000); // Mise à jour chaque seconde

		return () => clearInterval(interval); // Nettoyage lors de la destruction du composant
	});
</script>

<div class="portfolio-second">
	{#each profilData as { id, title, paragraphs }}
		<article class={`${id}`}>
			<h2>{@html title}</h2>
			<div class="portfolio-second-container">
				{#each paragraphs as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</div>
		</article>
	{/each}
</div>
