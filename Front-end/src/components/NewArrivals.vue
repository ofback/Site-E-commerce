<template>
    <section class="py-5">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">NEW ARRIVALS</h2>
        <div class="row g-4 justify-content-center">
          <div class="col-6 col-md-4 col-lg-3" v-for="(product, index) in products" :key="index">
            <ProductCard :image="product.image" :name="product.name" :price="product.price" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue'

  import tshirt from '../assets/imagens/modelo_produtos1.png'
  import jeans from '../assets/imagens/modelo_produtos2.png'
  import jacket from '../assets/imagens/modelo_produtos3.png'
    
  export default {
    name: 'NewArrivals',
    components: { ProductCard },
    data() {
      return {
        products: [
          {
            image: tshirt,
            name: 'T-Shirt With Tape Details',
            price: '$120'
          },
          {
            image: jeans,
            name: 'Skinny Fit Jeans',
            price: '$150'
          },
          {
            image: jacket,
            name: 'Black Leather Jacket',
            price: '$220'
          }
        ]
      }
    }
  }
  </script>
  