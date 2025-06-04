<template>
  <div class="sobre-page">
    <BannerSobre />
    
    <!-- Seção Nossa História -->
    <section class="historia-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Nossa História</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2020</h3>
              <p>Fundação da empresa com foco em moda sustentável e design inovador.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2021</h3>
              <p>Expansão para o mercado online e lançamento da primeira coleção exclusiva.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2022</h3>
              <p>Abertura de novas lojas físicas e parcerias com designers internacionais.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2023</h3>
              <p>Reconhecimento como uma das marcas mais inovadoras do setor fashion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Valores e Missão -->
    <section class="valores-section py-5 bg-light">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="valor-card">
              <div class="valor-icon">
                <i class="bi bi-heart-fill"></i>
              </div>
              <h3>Missão</h3>
              <p>Oferecer produtos de moda que combinam estilo, qualidade e sustentabilidade, proporcionando uma experiência única aos nossos clientes.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="valor-card">
              <div class="valor-icon">
                <i class="bi bi-eye-fill"></i>
              </div>
              <h3>Visão</h3>
              <p>Ser referência no mercado de moda, reconhecida pela inovação, sustentabilidade e excelência em atendimento ao cliente.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="valor-card">
              <div class="valor-icon">
                <i class="bi bi-star-fill"></i>
              </div>
              <h3>Valores</h3>
              <p>Ética, sustentabilidade, inovação, qualidade e compromisso com nossos clientes e colaboradores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Nossa Equipe -->
    <section class="equipe-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Nossa Equipe</h2>
        <div class="row g-4">
          <div class="col-md-3">
            <div class="membro-card">
              <div class="membro-img">
                <img src="https://placehold.co/300x300/E9ECEF/6C757D?text=CEO" alt="CEO" class="img-fluid rounded-circle">
              </div>
              <h4>João Silva</h4>
              <p class="cargo">CEO</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="membro-card">
              <div class="membro-img">
                <img src="https://placehold.co/300x300/E9ECEF/6C757D?text=Designer" alt="Designer" class="img-fluid rounded-circle">
              </div>
              <h4>Maria Santos</h4>
              <p class="cargo">Designer Chefe</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="membro-card">
              <div class="membro-img">
                <img src="https://placehold.co/300x300/E9ECEF/6C757D?text=Marketing" alt="Marketing" class="img-fluid rounded-circle">
              </div>
              <h4>Pedro Costa</h4>
              <p class="cargo">Marketing</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="membro-card">
              <div class="membro-img">
                <img src="https://placehold.co/300x300/E9ECEF/6C757D?text=Vendas" alt="Vendas" class="img-fluid rounded-circle">
              </div>
              <h4>Ana Oliveira</h4>
              <p class="cargo">Diretora de Vendas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterPage />
  </div>
</template>

<script setup>
import FooterPage from '../components/FooterPage.vue'
import BannerSobre from '../components/sobre/BannerSobre.vue';
</script>

<style scoped>
/* Timeline */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 2px;
  background: #E6C744;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  padding: 2rem 0;
  position: relative;
  width: 50%;
  margin-left: 50%;
}

.timeline-item:nth-child(even) {
  margin-left: 0;
}

.timeline-content {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
  position: relative;
  margin-left: 2rem;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 0;
  margin-right: 2rem;
}

.timeline-content::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: #E6C744;
  border-radius: 50%;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-item:nth-child(even) .timeline-content::before {
  left: auto;
  right: -60px;
}

/* Valores Cards */
.valor-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
  height: 100%;
  transition: transform 0.3s ease;
}

.valor-card:hover {
  transform: translateY(-5px);
}

.valor-icon {
  font-size: 2.5rem;
  color: #E6C744;
  margin-bottom: 1rem;
}

/* Equipe Cards */
.membro-card {
  text-align: center;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.membro-card:hover {
  transform: translateY(-5px);
}

.membro-img {
  width: 200px;
  height: 200px;
  margin: 0 auto 1rem;
  overflow: hidden;
}

.membro-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.membro-card:hover .membro-img img {
  transform: scale(1.1);
}

.cargo {
  color: #6c757d;
  font-size: 0.9rem;
}

h2 {
  position: relative;
  padding-bottom: 1rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #E6C744;
}

@media (max-width: 767.98px) {
  .timeline::before {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    margin-left: 0;
  }

  .timeline-content {
    margin-left: 60px !important;
    margin-right: 0 !important;
  }

  .timeline-content::before {
    left: -45px !important;
    right: auto !important;
  }
}
</style> 