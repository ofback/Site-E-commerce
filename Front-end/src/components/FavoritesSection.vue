<template>
  <section class="py-5">
    <div class="container">
      <h2 class="fw-bold mb-4 text-start">Young's Favourite</h2>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card border-0 shadow-sm">
            <img src="../assets/imagens/modelos_produto4.png" class="card-img-top" alt="Trending on Instagram" />
            <div class="card-body text-start">
              <h5 class="card-title">Trending on Instagram</h5>
              <p class="card-text text-muted">Explore Now!</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card border-0 shadow-sm">
            <img src="../assets/imagens/modelo_produto5.png" class="card-img-top" alt="All Under $40" />
            <div class="card-body text-start">
              <h5 class="card-title">All Under $40</h5>
              <p class="card-text text-muted">Explore Now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FavoritesSection"
};
</script>

<style scoped>
.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
