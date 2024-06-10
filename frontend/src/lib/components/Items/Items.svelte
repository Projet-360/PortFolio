<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { sectionsStore } from '$stores/elementStore';


  import Arrow from './Arrow.svelte'
  import Logo from './Logo.svelte'
  import Topo from './svg/Topo.svelte'
	import Tipo from './svg/Tipo.svelte';

  // Référence pour chaque item
  let items: HTMLElement[] = []
  let itemsWrapper: HTMLElement
  let logos: HTMLElement[] = []
  let arrows: HTMLElement[] = []
  let texts: HTMLElement[] = []
  let itemsCadre: HTMLElement
  let numbers: HTMLElement[] = []
  let fullContainer: HTMLElement

  let animatedSVGTopo: boolean = false
  let animatedSVGTipo: boolean = false

  onMount(() => {    
    gsap.registerPlugin(ScrollTrigger);

    // Ajouter fullContainer au sectionsStore
    sectionsStore.update((sections) => {
      sections.set('fullContainer', fullContainer);
      return sections;
    });

    // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
    requestAnimationFrame(() => {
      setTimeout(() => {
        gsap.to(fullContainer, {
          scrollTrigger: {
            trigger: fullContainer,
            start: "top center",
            end: "bottom center",
            onEnter: () => animationItems(),
            onLeave: () => resetItems(),
            onEnterBack: () => animationItems(),
            onLeaveBack: () => resetItems()
          }
        });
      }, 100); // Ajouter un léger délai
    });
  });

  const resetItems = () => {
    items.forEach(item => {
      if (item) item.classList.remove('animated');
    });

    if (itemsCadre) itemsCadre.classList.remove('animated');
  };

  const animationItems = () => {
    // Délai personnalisé pour chaque élément en fonction de leur index
    const delays = [150, 0, 0, 150] // Delays pour les index 0, 1, 2, 3 respectivement

    // Animation de itemsWrapper avec GSAP
    gsap.fromTo(
      itemsWrapper,
      { y: 100, },
      { y: 0,  duration: 0.5, delay: Math.min(...delays) / 1000 },
    )

    // Ajouter la classe 'animated' et animer chaque item avec GSAP
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 100, },
        { y: 0,  duration: 0.5, delay: delays[index] / 1000 },
      )

      setTimeout(() => {
        item.classList.add('animated')
      }, delays[index])
    })

    logos.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        { y: -50, },
        { y: 0,  duration: 1, delay: delays[index] / 1000 + 0.2 },
      )
    })

    arrows.forEach((arrow, index) => {
      gsap.fromTo(
        arrow,
        { y: -50, },
        { y: 0,  duration: 1, delay: delays[index] / 1000 },
      )
    })

    texts.forEach((text, index) => {
      gsap.fromTo(
        text,
        { y: 50, },
        { y: 0,  duration: 1, delay: delays[index] / 1000 },
      )
    })

    numbers.forEach((number, index) => {
      gsap.fromTo(
        number,
        { y: 50, },
        { y: 0,  duration: 1, delay: delays[index] / 1000 },
      )
    })

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 100, },
        { y: 0,  duration: 0.5, delay: delays[index] / 1000 },
      )

      setTimeout(() => {
        itemsCadre.classList.add('animated')
      }, delays[index])
    })
  }

  function animatedSVGTopoMouseLeave() {
    animatedSVGTopo = false;
  }

  function animatedSVGTipoMouseLeave() {
    animatedSVGTipo = false;
  }
</script>

<div class="itemsContainer" id="itemsContainer" bind:this={fullContainer}>
  <div class="background-overlay"></div>

  <div class="itemsCadre" bind:this="{itemsCadre}">
    <Tipo animated="{animatedSVGTipo}" />
    <Topo {animatedSVGTopo} />
  </div>
  <div class="itemsWrapper" bind:this="{itemsWrapper}">
    <div class="item" bind:this="{items[0]}">
      <div class="background-overlay"></div>
      <div class="content">
        <div class="imageContainer">
          <img
            class="image"
            src="https://img.freepik.com/free-vector/topographic-map-concept_23-2148598310.jpg?t=st=1717471874~exp=1717475474~hmac=eff7b42c9cb7f1c05d35efc2388178916c3e3aefc541da0857d9e9cebb2d3e6f&w=1380"
            alt=""
            srcset=""
          />
        </div>

        <div class="arrowContainer">
          <span bind:this="{arrows[0]}">
            <Arrow />
          </span>
        </div>
        <div class="logoContainer" bind:this="{logos[0]}">
          <Logo />
        </div>
        <span>.</span>
        <div class="textWrapper">
          <h1>
            <span bind:this="{texts[0]}"> Design </span>
          </h1>
          <div class="numberContainer">
            <p class="number" bind:this="{numbers[0]}">01</p>
          </div>
        </div>
      </div>
    </div>
    <div class="item" bind:this="{items[1]}">
      <div class="background-overlay"></div>
      <div class="content">
        <div class="imageContainer">
          <img
            class="image"
            src="https://img.freepik.com/free-vector/topographic-map-concept_23-2148598310.jpg?t=st=1717471874~exp=1717475474~hmac=eff7b42c9cb7f1c05d35efc2388178916c3e3aefc541da0857d9e9cebb2d3e6f&w=1380"
            alt=""
            srcset=""
          />
        </div>
        <div class="arrowContainer">
          <span bind:this="{arrows[1]}">
            <Arrow />
          </span>
        </div>
        <div class="logoContainer" bind:this="{logos[1]}">
          <Logo />
        </div>
        <span>.</span>
        <div class="textWrapper">
          <h1>
            <span bind:this="{texts[1]}"> FrontEnd </span>
          </h1>
          <div class="numberContainer">
            <p class="number" bind:this="{numbers[1]}">02</p>
          </div>
        </div>
      </div>
    </div>
    <div class="item" bind:this="{items[2]}"       on:mouseenter="{() => animatedSVGTipo = true}"
      on:mouseleave="{animatedSVGTipoMouseLeave}"
      role="button"
      tabindex="4">
      <div class="background-overlay"></div>
      <div class="content">
        <div class="imageContainer">
          <img
            class="image"
            src="https://img.freepik.com/free-vector/topographic-map-concept_23-2148598310.jpg?t=st=1717471874~exp=1717475474~hmac=eff7b42c9cb7f1c05d35efc2388178916c3e3aefc541da0857d9e9cebb2d3e6f&w=1380"
            alt=""
            srcset=""
          />
        </div>
        <div class="arrowContainer">
          <span bind:this="{arrows[2]}">
            <Arrow />
          </span>
        </div>
        <div class="logoContainer" bind:this="{logos[2]}">
          <Logo />
        </div>
        <span>.</span>
        <div class="textWrapper">
          <h1>
            <span bind:this="{texts[2]}"> BackEnd </span>
          </h1>
          <div class="numberContainer">
            <p class="number" bind:this="{numbers[2]}">03</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="item"
      bind:this="{items[3]}"
      on:mouseenter="{() => animatedSVGTopo = true}"
      on:mouseleave="{animatedSVGTopoMouseLeave}"
      role="button"
      tabindex="4"
    >
      <div class="background-overlay"></div>
      <div class="content">
        <div class="imageContainer">
          <img
            class="image"
            src="https://img.freepik.com/free-vector/topographic-map-concept_23-2148598310.jpg?t=st=1717471874~exp=1717475474~hmac=eff7b42c9cb7f1c05d35efc2388178916c3e3aefc541da0857d9e9cebb2d3e6f&w=1380"
            alt=""
            srcset=""
          />
        </div>
        <div class="arrowContainer">
          <span bind:this="{arrows[3]}">
            <Arrow />
          </span>
        </div>
        <div class="logoContainer" bind:this="{logos[3]}">
          <Logo />
        </div>
        <span>.</span>
        <div class="textWrapper">
          <h1>
            <span bind:this="{texts[3]}"> SoftSkills </span>
          </h1>
          <div class="numberContainer">
            <p class="number" bind:this="{numbers[3]}">04</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
