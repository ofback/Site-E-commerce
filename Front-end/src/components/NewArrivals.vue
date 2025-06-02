<template>
  <section class="py-5">
    <div class="container"> <h2 class="fw-bold mb-5 text-start">NEW ARRIVALS</h2> <div class="row g-4"> <div class="col-12 col-md-6 col-lg-4" v-for="(category, index) in categories" :key="index">
          <ProductCard 
            :image="category.image" 
            :categoryName="category.name" 
            :exploreLink="category.link" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'

// Novas imagens para categorias - substitua pelos caminhos corretos
import hoodiesImage from '../assets/imagens/modelo_produtos1.png' // Exemplo: imagem do Figma para Hoodies
import coatsImage from '../assets/imagens/modelo_produtos2.png'   // Exemplo: imagem do Figma para Coats
import teesImage from '../assets/imagens/modelo_produtos3.png'     // Exemplo: imagem do Figma para Tees
  
export default {
  name: 'NewArrivals',
  components: { ProductCard },
  data() {
    return {
      // Dados atualizados para categorias, conforme o Figma
      categories: [
        {
          image: hoodiesImage, // Use a imagem correspondente do Figma
          name: 'Hoodies & Sweatshirt',
          link: '/category/hoodies' // Exemplo de link
        },
        {
          image: coatsImage, // Use a imagem correspondente do Figma
          name: 'Coats & Parkas',
          link: '/category/coats'
        },
        {
          image: teesImage, // Use a imagem correspondente do Figma
          name: 'Tees & T-Shirt',
          link: '/category/tees'
        }
      ]
    }
  }
}
</script>