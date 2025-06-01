<template>
  <section class="bg-warning py-3">
    <div class="container d-flex flex-wrap justify-content-center align-items-center gap-4">
      <img :src="hm" alt="H&M" height="30" />
      <img :src="obey" alt="Obey" height="50" />
      <img :src="shopify" alt="Shopify" height="30" />
      <img :src="lacoste" alt="Lacoste" height="30" />
      <img :src="levis" alt="Levi's" height="50" />
      <img :src="amazon" alt="Amazon" height="30" />
    </div>
  </section>
</template>
  
<script>
  import hm from '../assets/imagens/hm.svg'
  import obey from '../assets/imagens/Obey.png'
  import shopify from '../assets/imagens/shopfy.svg'
  import lacoste from '../assets/imagens/lacoste.svg'
  import levis from '../assets/imagens/levis.png'
  import amazon from '../assets/imagens/amazon.svg'
  export default {
    name: 'BrandStrip',
    data() {
      return {
        hm,
        obey,
        shopify,
        lacoste,
        levis,
        amazon
      }
    }
  }
</script>
