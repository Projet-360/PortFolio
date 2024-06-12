<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { sectionsStore } from '$stores/elementStore';


  import Arrow from './Arrow.svelte'
  import Logo from './Logo.svelte'
  import First from './svg/First.svelte'
  import Fourth from './svg/Fourth.svelte'
	import Third from './svg/Third.svelte';
	import Second from './svg/Second.svelte';
	import Design from './icon/Design.svelte';
	import Frontend from './icon/Frontend.svelte';
	import Backend from './icon/Backend.svelte';
	import SoftSkill from './icon/SoftSkill.svelte';

  // Référence pour chaque item
  let items: HTMLElement[] = []
  let itemsWrapper: HTMLElement
  let logos: HTMLElement[] = []
  let arrows: HTMLElement[] = []
  let texts: HTMLElement[] = []
  let itemsCadre: HTMLElement
  let numbers: HTMLElement[] = []
  let fullContainer: HTMLElement

  let animatedSVGFirst: boolean = false
  let animatedSVGSecond: boolean = false
  let animatedSVGFourth: boolean = false
  let animatedSVGThird: boolean = false

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
            start: "top 100%",
            end: "bottom -100%",
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

  function animatedSVGFirstMouseLeave() {
    animatedSVGFirst = false;
  }

  function animatedSVGSecondMouseLeave() {
    animatedSVGSecond = false;
  }

  function animatedSVGFourthMouseLeave() {
    animatedSVGFourth = false;
  }

  function animatedSVGThirdMouseLeave() {
    animatedSVGThird = false;
  }
</script>

<div class="itemsContainer" id="itemsContainer" bind:this={fullContainer}>
  <div class="itemsCadre" bind:this="{itemsCadre}">
    <div class="itemsCadreContainer"> <First animated={animatedSVGFirst} /> </div>
    <div class="itemsCadreContainer"> <Second animated={animatedSVGSecond} /> </div>
    <div class="itemsCadreContainer"> <Third animated={animatedSVGThird} /> </div>
    <div class="itemsCadreContainer"> <Fourth animated={animatedSVGFourth} /> </div>
  </div>

  <div class="itemsWrapper">
    <div class="itemsWrapperFlex" bind:this="{itemsWrapper}">
      <div class="item" bind:this="{items[0]}" on:mouseenter="{() => animatedSVGFirst = true}"
        on:mouseleave="{animatedSVGFirstMouseLeave}"
        role="button"
        tabindex="1">
        <div class="background-overlay"></div>
        <div class="content">
          <div class="imageContainer">
            <img
              class="image"
              src="/img/items/design.png"
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
            <Design />
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
          <div class="contentBand"></div>
        </div>
      </div>

      <div class="item" bind:this="{items[1]}" on:mouseenter="{() => animatedSVGSecond = true}"
        on:mouseleave="{animatedSVGSecondMouseLeave}"
        role="button"
        tabindex="2">
        <div class="background-overlay"></div>
        <div class="content">
          <div class="imageContainer">
            <img
              class="image"
              src="/img/items/frontend.png"
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
            <Frontend />
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
          <div class="contentBand"></div>
        </div>
      </div>

      <div class="item" bind:this="{items[2]}" on:mouseenter="{() => animatedSVGThird = true}"
        on:mouseleave="{animatedSVGThirdMouseLeave}"
        role="button"
        tabindex="3">
        <div class="background-overlay"></div>
        <div class="content">
          <div class="imageContainer">
            <img
              class="image"
              src="/img/items/backend.png"
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
            <Backend />
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
          <div class="contentBand"></div>
        </div>
      </div>

      <div class="item" bind:this="{items[3]}" on:mouseenter="{() => animatedSVGFourth = true}"
        on:mouseleave="{animatedSVGFourthMouseLeave}"
        role="button"
        tabindex="4"
      >
        <div class="background-overlay"></div>
        <div class="content">
          <div class="imageContainer">
            <img
              class="image"
              src="/img/items/softSkill.png"
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
            <SoftSkill />
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
          <div class="contentBand"></div>
        </div>
      </div>
    </div>
  </div>
</div>
