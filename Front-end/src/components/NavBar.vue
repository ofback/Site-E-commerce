<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom py-3">
    <div class="container">
      <router-link class="navbar-brand fw-bold text-dark" to="/">
        <div class="d-flex align-items-center gap-2">
          <img :src="logo" alt="Logo" style="height: 24px;" />
          <span class="fw-bold text-dark">FASHION</span>
        </div>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav gap-3 mx-auto">
          <li class="nav-item">
            <router-link class="nav-link text-dark fw-semibold" to="/catalogue">CATALOGUE</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark fw-semibold" to="/fashion">FASHION</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark fw-semibold" to="/favourite">FAVOURITE</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark fw-semibold" to="/lifestyle">LIFESTYLE</router-link>
          </li>
        </ul>

        <div class="d-flex gap-2 mt-3 mt-lg-0">
          <router-link to="/usuarios/cadastrar" class="btn btn-dark rounded-3 px-4 fw-semibold">SIGN UP</router-link>
          <router-link to="/login" class="btn btn-dark rounded-3 px-4 fw-semibold">SIGN IN</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '../assets/imagens/vetor_logo.png'
</script>

<style scoped>
.navbar-nav .nav-link:hover {
  color: hsl(37, 90%, 51%); /* Cor original do hover mantida */
}
.router-link-active {
  /* Esta regra ainda se aplicará aos outros links de navegação, o que é bom */
  color: #f1c916 !important; 
}
/* Se quiser ser mais específico para que .router-link-active não afete a marca de forma alguma,
   você poderia tentar algo como:
   .navbar-nav .nav-item .router-link-active {
     color: #f1c916 !important;
   }
   Mas adicionar text-dark ao span da marca é geralmente mais simples e eficaz.
*/
</style>
