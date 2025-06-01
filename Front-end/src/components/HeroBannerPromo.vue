<template>
  <section class="py-5 position-relative overflow-hidden" style="background: linear-gradient(to left, #E6C744 60%, #f3da58 100%);">
    <div class="container d-flex flex-column flex-lg-row-reverse align-items-center gap-5 position-relative" style="z-index: 1;">
      <div class="text-center text-lg-start adjust-text-position">
        <h1 class="fw-bold display-5">
          <span class="bg-warning px-2">PAYDAY</span><span class="d-block">SALE NOW </span>
        </h1>
        <p class="lead mt-3">
          Spend minimal $100 get 30% off<br />
          voucher code for your next purchase<br />
          <strong>1 June - 10 June 2021</strong><br />
          *Terms & Conditions apply
        </p>
        
        <button type="button" class="btn btn-dark">SHOP NOW</button>
        
      </div>
    </div>

    <!-- Imagem da modelo fora do fluxo normal, com z-index menor -->
    <img
      :src="modelo_promocao"
      alt="Payday model"
      class="position-absolute start-0 bottom-0 img-fluid hero-image"
    />
  </section>
</template>

<script>
import modelo_promocao from '../assets/imagens/modelo_promoção.png';
export default {
  name: 'HeroBannerPromo',  
  data() {
    return {
      modelo_promocao
    }
  }
}
</script>

<style scoped>
.hero-image {
  height: 450px;
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

.adjust-text-position {
  padding-right: 4rem; /* ou 3rem, ajuste conforme o necessário */
}

section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40%;
  background: linear-gradient(to right, #fce55c 0%, transparent 100%);
  z-index: 0;
  pointer-events: none;
}

</style>
