const Hero = `
<picture>
  <source srcset="./images/hero-image_2-320.jpg" media="(max-width: 320px)" />
  <source srcset="./images/hero-image_2-640.jpg" media="(max-width: 640px)" />
  <source srcset="./images/hero-image_2-768.jpg" media="(max-width: 768px)" />
  <source srcset="./images/hero-image_2-1024.jpg" media="(max-width: 1024px)" />
  <img
    src="./images/hero-image_2-1200.jpg" 
    alt="hero image" 
    class="hero__image" 
  />
</picture>
`

export default Hero
