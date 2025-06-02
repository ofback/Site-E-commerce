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
  /* Desktop: Ajustes para tentar replicar o Figma */
  height: 550px; /* Aumentei um pouco a altura, ajuste conforme necessário */
  width: auto; /* Deixa a largura ser automática baseada na altura e proporção */
  /* object-fit: cover;  Experimente com cover */
  object-fit: contain; /* Se 'contain' for melhor, mantenha, mas ajuste o posicionamento */
  object-position: right bottom; /* Tenta focar na parte direita/inferior da imagem */
  
  position: absolute; /* Garante que está absoluto */
  bottom: -75px; /* Ajuste a posição inferior para que a imagem não fique cortada */
  right: -30px; /* Tente um valor negativo para 'empurrar' a imagem para a direita */
                /* Ou, se a imagem já tiver o corte/espaço, right: 0; pode ser suficiente */
  
  z-index: 0;
  pointer-events: none; /* Mantém a imagem não clicável */
}

/* Ajustes para telas de tablet/laptop menores, antes do mobile */
@media (max-width: 992px) { /* Bootstrap LG breakpoint */
  .hero-image {
    height: 450px;
    right: -20px; /* Ajuste o 'right' para telas menores */
  }
  .text-center.text-lg-start h1 { /* Exemplo de ajuste no texto para não sobrepor */
    font-size: 2.8rem; /* Reduz um pouco o tamanho da fonte */
  }
}


@media (max-width: 767.98px) { /* Bootstrap MD breakpoint (mobile) */
  #hero-section {
    padding-bottom: 300px; /* Aumenta o padding inferior para dar espaço para a imagem */
                            /* se ela vazar para baixo */
  }
  .hero-image {
    height: 350px; /* Altura reduzida para mobile */
    width: 80%; /* Faz a imagem ocupar uma porcentagem da largura */
    max-width: 300px; /* Um limite máximo para não ficar enorme */
    
    /* Para centralizar a imagem no mobile: */
    left: 50%;
    transform: translateX(-50%);
    right: auto; /* Sobrescreve o 'right' do desktop */
    bottom: 20px; /* Ajuste a posição inferior se necessário */
    
    /* Se preferir manter à direita no mobile, mas ajustada: */
    /* right: 10px; */
    /* left: auto; */
    /* transform: translateX(0); */
    /* width: auto; */ /* Para que a altura dite a largura com object-fit: contain */
    /* max-width: 60%; */
    object-fit: contain; /* 'contain' pode ser melhor no mobile para ver a modelo inteira */
  }

  .text-center.text-lg-start {
    margin-bottom: 2rem; /* Adiciona uma margem abaixo do texto no mobile se a imagem estiver abaixo */
  }
  .text-center.text-lg-start h1 {
    font-size: 2.2rem; /* Reduz mais a fonte no mobile */
  }
}
</style>