<template>
  <section class="sobre-banner-section py-5">
    <div class="container">
      <div 
        class="text-content-area text-center text-lg-start" 
        :style="areaEstilo"
      >
        <!-- O conteúdo de texto será renderizado aqui, sobre a imagem de fundo e a cor de fundo -->
        <h1 class="fw-bold display-5 sobre-titulo">{{ titulo }}</h1>
        <div class="sobre-paragrafos mt-4">
          <p v-for="(paragrafo, index) in paragrafos" :key="index" class="lead mb-3">
            {{ paragrafo }}
          </p>
        </div>
        <!-- Você pode adicionar um slot aqui se quiser colocar botões ou outros elementos no futuro -->
        <!-- <slot name="actions"></slot> -->
      </div>
    </div>
  </section>
</template>

<script>
// Importe a sua imagem padrão que será usada como fundo
import modeloCapaPadrao from '../assets/imagens/modelo_capa.png'; 

export default {
  name: 'SobreBanner',
  props: {
    titulo: {
      type: String,
      default: 'Sobre a Nossa História' // Título padrão
    },
    paragrafos: {
      type: Array,
      default: () => [ // 5 parágrafos padrão
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
      ],
      validator: val => val.length === 5 // Garante que sempre haverá 5 parágrafos
    },
    imagemFundoSrc: {
      type: String,
      default: modeloCapaPadrao // Imagem de fundo padrão
    },
    corFundoContainer: { // Cor de fundo para a área de texto (pode ser semi-transparente)
      type: String,
      default: 'rgba(255, 255, 255, 0.85)' // Um branco semi-transparente por padrão
    },
    corTexto: {
      type: String,
      default: '#212529' // Cor de texto escura por padrão para contraste
    },
    posicaoImagemFundo: {
      type: String,
      default: 'center center' // Padrão para background-position
    }
  },
  computed: {
    areaEstilo() {
      return {
        backgroundColor: this.corFundoContainer,
        backgroundImage: `url(${this.imagemFundoSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: this.posicaoImagemFundo,
        color: this.corTexto,
        padding: '3rem 2.5rem', // Padding interno para a área de texto
        borderRadius: '0.5rem', // Cantos arredondados opcionais
        boxShadow: '0 0.5rem 1.5rem rgba(0,0,0,0.1)', // Sombra suave opcional
        position: 'relative', // Necessário se for adicionar overlays com pseudo-elementos
        overflow: 'hidden', // Para garantir que o conteúdo não escape dos cantos arredondados
      };
    }
  }
}
</script>

<style scoped>
.sobre-banner-section {
  /* Estilo para a seção principal, se necessário. 
     Pode ter uma cor de fundo diferente ou uma imagem de fundo global para a página. */
  /* background-color: #f8f9fa; */ /* Exemplo de cor de fundo para a seção inteira */
}

.text-content-area {
  /* Garante que o texto não fique muito largo em telas grandes dentro do container */
  max-width: 900px; /* Ajuste conforme necessário */
  margin-left: auto;
  margin-right: auto;
}

.sobre-titulo {
  /* Estilos específicos para o título, se necessário, além das classes Bootstrap */
  /* Exemplo: color: this.corTexto; já está no style binding, mas pode adicionar mais aqui */
}

.sobre-paragrafos p.lead {
  /* Estilos específicos para os parágrafos, se necessário */
  font-size: 1.1rem; /* Ajuste o tamanho da fonte dos parágrafos */
  line-height: 1.7;
}

/* Media queries para responsividade do padding ou outros estilos, se necessário */
@media (max-width: 767.98px) {
  .text-content-area {
    padding: 2rem 1.5rem;
  }
  .sobre-titulo {
    font-size: 2rem; /* Ajusta o tamanho do título para mobile */
  }
  .sobre-paragrafos p.lead {
    font-size: 1rem;
  }
}
</style>
