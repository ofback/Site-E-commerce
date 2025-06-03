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
import hoodiesImage from '../assets/imagens/modelo_produtos1.png' 
import coatsImage from '../assets/imagens/modelo_produtos2.png'   
import teesImage from '../assets/imagens/modelo_produtos3.png'     
  
export default {
  name: 'NewArrivals',
  components: { ProductCard },
  data() {
    return {
      
      categories: [
        {
          image: hoodiesImage, 
          name: 'Hoodies & Sweatshirt',
          link: '/category/hoodies' 
        },
        {
          image: coatsImage, 
          name: 'Coats & Parkas',
          link: '/category/coats'
        },
        {
          image: teesImage,
          name: 'Tees & T-Shirt',
          link: '/category/tees'
        }
      ]
    }
  }
}
</script>