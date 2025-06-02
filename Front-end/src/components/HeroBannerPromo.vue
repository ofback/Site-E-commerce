<template>
  <section class="py-5 position-relative overflow-hidden hero-promo-section">
    <div class="stars-background" v-if="showStars">
      </div>

    <div class="container d-flex flex-column flex-lg-row-reverse align-items-center gap-5 position-relative" style="z-index: 1;">
      <div class="text-center text-lg-start adjust-text-position">
        <h1 class="fw-bold display-5">
          <span class="highlight-payday px-2">PAYDAY</span><span class="d-block">SALE NOW </span>
        </h1>
        <p class="lead mt-3 promo-text">
          Spend minimal $100 get 30% off<br />
          voucher code for your next purchase<br />
          <strong class="fw-bold d-block mt-2">1 June - 10 June 2021</strong>
          <em class="d-block mt-1 fw-bold">*Terms & Conditions apply</em>
        </p>
        
        <button type="button" class="btn btn-dark mt-3">SHOP NOW</button>
        
      </div>
    </div>

    <img
      :src="modelo_promocao"
      alt="Payday model"
      class="position-absolute start-0 bottom-0 img-fluid hero-image"
    />
  </section>
</template>

<script>
import modelo_promocao from '../assets/imagens/modelo_promoção.png'; // Certifique-se que o nome do arquivo está correto
export default {
  name: 'HeroBannerPromo',   
  data() {
    return {
      modelo_promocao,
      showStars: true // Defina como true para mostrar o fundo com estrelas (requer CSS adicional)
    }
  }
}
</script>

<style scoped>
.hero-promo-section {
  background: linear-gradient(to left, #E6C744 70%, #f3da58 100%);
  min-height: 450px; 
}

.highlight-payday {
  background-color: white;
  color: black; 
  padding-left: 0.5rem; 
  padding-right: 0.5rem;
  display: inline; 
  box-decoration-break: clone; 
  -webkit-box-decoration-break: clone;
}

.promo-text strong,
.promo-text em {
  font-size: 0.9em; 
  color: #333; 
}

.hero-image {
  height: 480px; 
  object-fit: contain; 
  object-position: left bottom; 
  z-index: 0; 
  pointer-events: none;
}

/* Default (mobile-first) styles for the text block */
.adjust-text-position {
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem; /* Espaço acima do texto no mobile, caso a imagem fique abaixo */
  width: 100%; /* Ocupa a largura disponível */
  max-width: 550px; /* Limita a largura máxima em telas menores para melhor leitura */
  margin-left: auto; /* Centraliza o bloco se o container for mais largo */
  margin-right: auto;
  position: relative; /* Garante que o z-index funcione corretamente se sobreposto */
  z-index: 1; /* Para garantir que o texto fique acima de ::before e .stars-background */
}

/* Desktop (lg and up) overrides for the text block */
@media (min-width: 992px) {
  .adjust-text-position {
    width: 48%;         /* Ocupa 48% da largura do container (lado direito) */
    margin-left: auto;  /* Empurra este bloco para a direita */
    margin-right: 0;    /* Garante que ele se ancore à direita quando margin-left é auto */
    margin-top: 0;      /* Reseta a margem superior do mobile */
    padding-left: 2.5rem; /* Padding interno à esquerda do texto */
    padding-right: 2.5rem;/* Padding interno à direita do texto */
    max-width: none;    /* Remove a limitação de max-width do mobile */
  }
}

.hero-promo-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 45%; 
  background: linear-gradient(to right, #fce55c 0%, #fce55c 30%, transparent 100%); 
  z-index: 0; 
  pointer-events: none;
}

.stars-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%; 
  height: 100%;
  overflow: hidden;
  z-index: 0; 
  pointer-events: none;
}

/* Mobile adjustments for image and section padding */
@media (max-width: 767.98px) { 
  .hero-promo-section {
    padding-bottom: 280px; 
    min-height: auto;
  }
  .hero-image {
    height: 300px; 
    width: 70%; 
    max-width: 280px;
    left: 50%;
    transform: translateX(-50%);
    right: auto; 
    bottom: 20px; 
  }
  
   .highlight-payday {
    font-size: 0.8em; 
  }
  .hero-promo-section h1 {
    font-size: 2.2rem; 
  }
}

/* Tablet-specific adjustments (se necessário, entre mobile e desktop) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .adjust-text-position {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .hero-promo-section::before {
    width: 0%; 
  }
  .stars-background {
    width: 0%; 
  }
  .hero-image {
    height: 400px; 
  }
}
</style>
