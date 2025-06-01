<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom py-3">
    <div class="container">
      <router-link class="navbar-brand fw-bold text-dark" to="/">
        <div class="d-flex align-items-center gap-2">
          <img :src="logo" alt="Logo" style="height: 24px;" />
          <span class="fw-bold">FASHION</span>
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav gap-4">
          <li class="nav-item"><router-link class="nav-link text-dark fw-semibold" to="/catalogue">CATALOGUE</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-dark fw-semibold" to="/fashion">FASHION</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-dark fw-semibold" to="/favourite">FAVOURITE</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-dark fw-semibold" to="/lifestyle">LIFESTYLE</router-link></li>
        </ul>
      </div>
      <div class="d-none d-lg-block">
        <router-link to="/login" class="btn btn-dark rounded-pill px-4 fw-semibold">SIGN IN</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '../assets/imagens/vetor_logo.png'
</script>

<style scoped>
.navbar-nav .nav-link:hover {
  color: #f39c12;
}
</style>
