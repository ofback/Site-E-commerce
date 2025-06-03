<template>
  <section id="hero-section" class="bg-light py-5 position-relative overflow-hidden">
    <div class="container d-flex flex-column flex-lg-row align-items-center gap-5 position-relative" style="z-index: 1;">
      <div class="text-center text-lg-start">
        <h1 class="fw-bold display-5">
          LET'S <span class="d-block">EXPLORE <span style="background-color: #E6C744; color: black;" class="px-2">UNIQUE</span></span>
          <span class="d-block">CLOTHES.</span>
        </h1>
        <p class="lead mt-3">
          Live for influential and innovative fashion!
        </p>
        <button type="button" class="btn btn-dark">SHOP NOW</button>
      </div>
    </div>

    <img
      :src="modelo_capa"
      alt="Fashion Model"
      class="position-absolute hero-image" 
    /> </section>
</template>

<script>
import modelo_capa from '../assets/imagens/modelo_capa.png';
export default {
  name: 'HeroBanner',
  data() {
    return {
      modelo_capa
    }
  }
}
</script>

<style scoped>
.hero-image {
  height: 550px; 
  width: auto; 
  object-fit: contain; 
  object-position: right bottom; 
  
  position: absolute; 
  bottom: -75px; 
  right: -30px; 
  z-index: 0;
  pointer-events: none; 
}

@media (max-width: 992px) { 
  .hero-image {
    height: 450px;
    right: -20px; 
  }
  .text-center.text-lg-start h1 { 
    font-size: 2.8rem; 
  }
}


@media (max-width: 767.98px) { 
  #hero-section {
    padding-bottom: 300px; 
  }
  .hero-image {
    height: 350px; 
    width: 80%; 
    max-width: 300px; 
    left: 50%;
    transform: translateX(-50%);
    right: auto; 
    bottom: 20px;  
    object-fit: contain; 
  }

  .text-center.text-lg-start {
    margin-bottom: 2rem; 
  }
  .text-center.text-lg-start h1 {
    font-size: 2.2rem; 
  }
}
</style>