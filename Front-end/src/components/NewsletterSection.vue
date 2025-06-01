<template>
  <section style="background-color: #E6C744;" class="text-center py-5 text-white">
    <div class="container">
      <h2 class="fw-bold mb-3 text-uppercase">
        Join Shopping Community to <br /> Get Monthly Promo
      </h2>
      <p class="mb-4">
        Type your email down below and be young wild generation
      </p>

      <!-- Input com botão embutido -->
      <form @submit.prevent class="d-flex justify-content-center">
        <div class="input-group" style="max-width: 400px;">
          <input
            type="email"
            class="form-control"
            placeholder="Enter your email"
            aria-label="Email"
            required
          />
          <button class="btn btn-dark" type="submit">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
// Nada aqui por enquanto
</script>
