<template>
  <section style="background-color: #E6C744;" class="py-3">
    <div class="container d-flex flex-wrap justify-content-around align-items-center gap-md-5 gap-4">
      <img :src="hm" alt="H&M" class="brand-logo" style="height: 30px;" />
      <img :src="obey" alt="Obey" class="brand-logo" style="height: 50px;" />
      <img :src="shopify" alt="Shopify" class="brand-logo" style="height: 30px;" />
      <img :src="lacoste" alt="Lacoste" class="brand-logo" style="height: 30px;" />
      <img :src="levis" alt="Levi's" class="brand-logo" style="height: 50px;" />
      <img :src="amazon" alt="Amazon" class="brand-logo" style="height: 30px;" />
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

<style scoped>
.brand-logo {
  /* Para garantir que os logos não encolham demais e mantenham um bom espaçamento visual */
  flex-shrink: 0;
  object-fit: contain; /* Garante que o logo inteiro apareça, mantendo a proporção, dentro da altura definida */
}

/* Opcional: Se quiser um espaçamento mínimo maior em telas muito pequenas onde o wrap acontece */
@media (max-width: 576px) {
  .container {
    /* gap: 1rem; Você pode ajustar o gap para telas menores se o gap-4 (1.5rem) for muito */
  }
}
</style>