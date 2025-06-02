<template>
  <div class="card product-category-card border-0 bg-transparent text-start h-100">
    <router-link :to="exploreLink" class="text-decoration-none">
      <div class="image-container">
        <img :src="image" class="card-img-top product-image" alt="Category Image" />
      </div>
      <div class="card-body px-0 pt-3"> <h5 class="card-title fw-bold text-dark mb-2">{{ categoryName }}</h5>
        <div class="d-flex align-items-center text-secondary explore-link">
          <span>Explore Now!</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    image: String,
    categoryName: String,
    exploreLink: { // Link para onde o "Explore Now" vai levar
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.product-category-card {
  /* Opcional: Adicionar uma leve sombra se o Figma tiver */
  /* box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); */
}

.image-container {
  overflow: hidden; /* Garante que a imagem não exceda os limites do container */
  /* Defina uma proporção para as imagens se necessário, ex: 4:3, 1:1 */
  /* aspect-ratio: 4 / 5;  Ajuste esta proporção para corresponder ao Figma */
  background-color: #f8f9fa; /* Cor de fundo caso a imagem não carregue ou tenha transparência */
}

.product-image {
  width: 100%;
  /* Defina uma altura fixa ou min-height para as imagens terem o mesmo tamanho */
  height: 350px; /* Ajuste esta altura conforme o design do Figma */
  object-fit: cover; /* Faz a imagem cobrir toda a área, cortando se necessário */
  transition: transform 0.3s ease; /* Efeito suave no hover */
}

.product-category-card:hover .product-image {
  transform: scale(1.05); /* Leve zoom na imagem ao passar o mouse */
}

.card-title {
  font-size: 1.1rem; /* Ajuste o tamanho da fonte do nome da categoria */
}

.explore-link {
  font-size: 0.9rem;
  font-weight: 500;
}

.explore-link svg {
  transition: transform 0.2s ease-in-out;
}

.product-category-card:hover .explore-link svg {
  transform: translateX(4px); /* Move a seta um pouco para a direita no hover */
}

/* Ajuste de responsividade se necessário para os cards */
@media (max-width: 767.98px) {
  .product-image {
    height: 280px; /* Altura menor para imagens no mobile */
  }
  .card-title {
    font-size: 1rem;
  }
  .explore-link {
    font-size: 0.85rem;
  }
}
</style>