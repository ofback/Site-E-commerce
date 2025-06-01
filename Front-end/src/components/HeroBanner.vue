<template>
  <section class="bg-light py-5 position-relative overflow-hidden">
    <div class="container d-flex flex-column flex-lg-row align-items-center gap-5 position-relative" style="z-index: 1;">
      <div class="text-center text-lg-start">
        <h1 class="fw-bold display-5">
          LET'S <span class="d-block">EXPLORE <span class="bg-warning px-2">UNIQUE</span></span>
          <span class="d-block">CLOTHES.</span>
        </h1>
        <p class="lead mt-3">
          Live for influential and innovative fashion!
        </p>
        <button type="button" class="btn btn-dark">SHOP NOW</button>
      </div>
    </div>

    <!-- Imagem da modelo fora do fluxo normal, com z-index menor -->
    <img
      :src="modelo_capa"
      alt="Fashion Model"
      class="position-absolute end-0 bottom-0 img-fluid hero-image"
    />
  </section>
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
  height: 500px;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 768px) {
  .hero-image {
    height: 400px;
    right: 50%;
    transform: translateX(0%);
    bottom: -20px;
  }
}
</style>
