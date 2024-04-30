export let PortfolioMenuData: any[] = [
	{
		id: 'profile',
		title: 'Profil',
		position: 'a',
		content: 'Découvrez les informations générales sur mon profil.'
	},
	{
		id: 'experiences',
		title: 'Expérience',
		position: 'b',
		content:
			"Explorez mon parcours professionnel et les rôles clés que j'ai occupés au fil des ans."
	},
	{
		id: 'formations',
		title: 'Formation',
		position: 'c',
		content:
			'Un aperçu de mon parcours académique et des formations en ligne qui ont enrichi mes compétences.'
	},
	{
		id: 'competences',
		title: 'Compétences',
		position: 'd',
		content:
			'Découvrez les compétences techniques et interpersonnelles qui me définissent en tant que professionnel.'
	},
	{
		id: 'book',
		title: 'Book',
		position: 'e',
		content:
			'Feuilletez une sélection de mes travaux qui illustrent mon expertise et mon approche créative.'
	}
];

export let profilData = [
	{
		id: 'a',
		title: 'Front-end',
		paragraphs: []
	},
	{
		id: 'b',
		title: 'Générale',
		paragraphs: [
			'<b>Nom:</b> FABIEN',
			'<b>Prénom:</b> Pierre',
			'<b>Sex:</b> Masculin',
			'<b>Date de naissance:</b> 22.07.1993',
			'<b>Nationalité:</b> Française',
			'<b>Lieu de naissance:</b> Montauban',
			'<b>Lieu habitation:</b> Toulouse, Jolimont',
			'<b>Permis:</b> catégorie B',
			'<b>Loisir:</b> Skate/Snow, production musicale'
		]
	},
	{
		id: 'c',
		title: 'Le chemin vers le front-end:',
		paragraphs: [
			`Ma trajectoire professionnelle, débutée en 2010, illustre une quête inlassable de l'innovation à la confluence de la technologie et de la créativité. Mes débuts avec Photoshop, Illustrator et After Effect ont allumé en moi une passion pour la création numérique, mais c'est véritablement dans le développement web que ma vocation a pris forme. De WordPress à Symfony, en passant par ReactJs et récemment SvelteKit/NodeJs, chaque nouvelle technologie a affiné ma maîtrise et alimenté ma passion créative.`,
			`Mon engagement pour l'innovation ne s'arrête pas là. Mes explorations récentes avec Three.js, guidées par l'expertise de Bruno Simon, ont ouvert un nouveau champ des possibles dans l'art de fusionner l'expérience utilisateur avec des créations 3D immersives. Cette approche ne vise pas seulement à élargir mon éventail de compétences ; elle représente ma volonté de repousser les limites conventionnelles de l'interaction utilisateur sur le web, en mariant esthétique visuelle et fonctionnalité de manière inattendue.`,
			`Rejoindre Cinq degrés signifie pour moi poursuivre cette aventure au sein d'une équipe qui valorise la créativité, l'innovation et l'amélioration continue. Mon rôle de développeur frontend chez Hubeecar, où j'ai approfondi ma maîtrise de TypeScript, ReactJs, et GraphQL, a renforcé ma conviction qu'une approche intégrée du développement est cruciale pour créer des solutions web qui non seulement répondent aux besoins des utilisateurs mais les anticipent.`,
			`Avec le développement d'un boilerplate créatif, j'ai posé les bases d'un développement web holistique, conjuguant expertise front-end et back-end pour donner vie à des applications web complètes, performantes et sécurisées. Chez Cinq degrés, je suis enthousiaste à l'idée de mettre à profit cette expérience, de collaborer avec des esprits aussi passionnés que moi et de contribuer à des projets qui redéfinissent l'excellence en matière d'expérience utilisateur.`
		]
	}
];

export let experienceData = [
	{
		date: 'sept.2017 - nov.2018',
		title: ' Amadeus Mobile',
		poste: 'Web designer - intégrateur',
		items: ['PhotoShop - Wordpress - Prestashop - Symfony', 'HTML - SCSS - JQuery - PHP']
	},
	{
		date: 'mar.2019',
		title: ' Auto-Entrepreneur',
		poste: 'Développeur Fullstack',
		items: [
			'Création site Projet360.com',
			'Synfony 4, jQuery, JS',
			'Découverte de ReactJs, Meteor, GSAP'
		]
	},
	{
		date: 'dec.2020 - oct.2022',
		title: ' Caplaser',
		poste: 'Développeur web - intégrateur',
		items: ['Wordpress, Prestashop, Intégration', 'HTML, JS, PHP, SCSS']
	},
	{
		date: 'fev.2022',
		title: ' Awards',
		poste: 'Développeur créatif - Inkorporation.fr',
		items: [
			'Inkorporation.fr',
			'Awwwards - 7.39',
			'cssdesignawards - Special Kudos award, Best UI-UX-Innovation',
			'cssWinner: Site of the Day',
			'cssNectar: Site of the Day',
			'designNominees: Site of the Day'
		]
	},
	{
		date: 'sept.2022 - oct.2022',
		title: 'La jungle',
		poste: 'Développeur web, intégrateur',
		items: ['Twig, JS, BEM CSS, HTML, JS, SCSS']
	},
	{
		date: 'mar.2023 - sept.2023',
		title: 'Hubeecar',
		poste: 'Développeur web front-end',
		items: ['ReactJs - Typescript - MaterialUI - GraphQl', 'Methode Agile - Git ']
	},
	{
		date: 'fev.2024',
		title: 'Awards',
		poste: 'Développeur créatif - XplicitDrink.com',
		items: ['XplicitDrink.com', 'cssWinner: Site of the Day', 'cssNectar: Site of the Day']
	},
	{
		date: 'sept.2023 - fev.2024',
		title: 'Boilerplate',
		poste: 'Développeur Fullstack',
		items: [
			'SvelteKit - GraphQL - NodeJs',
			'FrontEnd: cursor, darkmode, notifications, transition de page, preloader, PWA, smoothScroll, traduction, ThreeJs',
			'BackEnd: account, role, handleError, session cookies, token, rateLimite, black listed token, websocket',
			'PlayWright, Docker, GraphQL'
		]
	}
];

// Structure de données pour les portfolioFourth
export let formationData = [
	{
		key: 'a',
		headline: 'FormaSup82',
		description: `
		Bac+ 2, Design de pages Web, des ressources numériques / multimédia et d'information Septembre 2016 à 2017.<br><br>
		Web designer, intégrateur, développeur web.<br><br>
		Une promo exceptionnelle ! Nous étions tous soudés pour apprendre les bases du développement web. Nous avons découvert le HTML et le CSS ainsi que Wordpress. Durant cette reconversion, j'ai réalisé un stage chez RezoPouce, avec Olivier Fillol comme maître de stage. Il m'a initié à Twig et m'a expliqué les fondamentaux de PHP avec Symfony. RezoPouce est une association basée à Moissac, qui facilite la mise en relation dans le domaine rural pour le covoiturage.
		`
	},
	{
		key: 'b',
		headline: '56',
		description: 'Cours sur Udémy: Sveltekit, React, NextJs, NodeJs, threeJs, MeteorJs, GSAP,...'
	},
	{
		key: 'c',
		headline: '2',
		description:
			'Cours sur Awwwards: <br>-Merging WebGL and HTML worlds, <br>-Building an immersive creative website from scratch without frameworks'
	},
	{
		key: 'd',
		headline: 'ThreeJs Journey ',
		description: `Le meilleurs pédagogue pour comprendre la 3D. J'ai nommé Bruno Simon.`
	}
];

export let competencesData: any[] = [
	{
		id: 'a',
		title: 'FrontEnd',
		content: `
		<b>Langages</b>:<br/>
			HTML - JSX<br/>
			Javascript<br/>
			PHP<br/>
			SCSS<br/>
			<b>Librairies & frameworks</b>:<br/>
			React<br/>
			PlayWright<br/>
			SvelteKit<br/>
			ThreeJs<br/>
			GSAP<br/>
			`,
		imageUrl:
			'/img/competences/frontend.webp'
	},
	{
		id: 'b',
		title: 'BackEnd',
		content: `
			NodeJs<br/>
			GraphQL<br/>
			`,
		imageUrl:
			'/img/competences/backend.webp'
	},
	{
		id: 'c',
		title: 'Design',
		content: `
			Photoshop<br/>
			Illustrator<br/>
			Figma
			`,
		imageUrl:
			'/img/competences/design.webp'
	},
	{
		id: 'd',
		title: 'Gestion',
		content: `
			Git<br/>
			GitHub<br/>
			GitLab<br/>
			Docker<br/>
			ClickUp<br/>
			`,
		imageUrl:
			'/img/competences/gestion.webp'
	}
];

export let bookData = [
	{
		id: 'a',
		title: 'Inkorporation.fr',
		subtitle: `Le premier site que j'ai présenter aux compétitions de design web !`,
		imageUrl: '/img/book/ink.webp'
	},
	{
		id: 'b',
		title: 'xplicitdrink.com',
		subtitle: 'Mon premier projet 3D visant à personnaliser une cannette !',
		imageUrl: '/img/book/xpli.webp'
	},
	{
		id: 'c',
		title: 'Boilerplate Sveltekit/NodeJs',
		subtitle: `Je suis tombé amoureux de sveltekit, c'est pourquoi j'ai réalisé un boilerplate avec celui-ci`,
		imageUrl: 'https://nexago.fr/wp-content/uploads/2019/09/informatique_infrastructure.jpg'
	},
	{
		id: 'd',
		title: 'Mon portfolio',
		subtitle: 'Le voici, vous être devant actuellement.',
		imageUrl: '/img/book/act.webp'
	}
];
