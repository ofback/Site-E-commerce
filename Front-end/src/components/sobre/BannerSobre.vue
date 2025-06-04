<template>
  <section class="sobre-banner-section">
    <div class="banner-overlay"></div>
    <div class="container position-relative">
      <div class="row justify-content-center min-vh-75">
        <div class="col-lg-8 text-center d-flex align-items-center">
          <div class="banner-content text-white w-100">
            <h1 class="display-4 fw-bold mb-4">Fashion: Estilo & Inovação</h1>
            <p class="lead mb-4">Desde 2020, nossa marca tem se dedicado a trazer o melhor da moda com sustentabilidade e design inovador. Conheça nossa história de sucesso e compromisso com a qualidade.</p>
            <div class="banner-stats d-flex flex-wrap justify-content-center gap-4 mt-5">
              <div class="stat-item">
                <h3 class="fw-bold mb-2">4+</h3>
                <p class="mb-0">Anos no Mercado</p>
              </div>
              <div class="stat-item">
                <h3 class="fw-bold mb-2">10k+</h3>
                <p class="mb-0">Clientes Satisfeitos</p>
              </div>
              <div class="stat-item">
                <h3 class="fw-bold mb-2">500+</h3>
                <p class="mb-0">Produtos Únicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreBanner'
}
</script>

<style scoped>
.sobre-banner-section {
  position: relative;
  background-image: url('../../assets/imagens/modelo_capa.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 0;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
}

.min-vh-75 {
  min-height: 75vh;
}

.banner-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 0.5rem;
  min-width: 150px;
}

.stat-item h3 {
  color: #E6C744;
  font-size: 2rem;
}

.banner-content .lead {
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 991.98px) {
  .sobre-banner-section {
    padding: 4rem 0;
  }

  .min-vh-75 {
    min-height: 60vh;
  }

  .banner-content {
    margin: 2rem 1rem;
    padding: 1.5rem;
  }

  .stat-item {
    min-width: 120px;
  }
}

@media (max-width: 767.98px) {
  .banner-content {
    text-align: center;
  }

  .banner-stats {
    justify-content: center;
  }

  .stat-item {
    min-width: 140px;
  }
}
</style>
