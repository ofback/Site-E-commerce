<template>
  <div class="card h-100 border-0 shadow-sm">
    <img :src="image" class="card-img-top" alt="Product Image" />
    <div class="card-body text-start">
      <h6 class="card-title fw-bold">{{ name }}</h6>
      <p class="card-text text-muted">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    image: String,
    name: String,
    price: String
  }
}
</script>
