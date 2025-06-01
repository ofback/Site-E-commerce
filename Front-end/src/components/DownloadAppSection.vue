<template>
  <section class="bg-light py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Texto centralizado -->
        <div class="col-md-6 mb-4 mb-md-0 text-center">
          <h2 class="fw-bold mb-3">Download Our App</h2>
          <p class="text-muted mb-4">Get access to exclusive offers and shop on the go.</p>

          <!-- Botões ligeiramente à direita -->
          <div class="d-flex justify-content-center" style="padding-left: -1rem;">
            <div class="d-flex gap-3 flex-wrap">
              <a href="#" class="btn btn-dark d-flex align-items-center gap-2 px-4 py-2 rounded-pill">
                <i class="bi bi-apple fs-4"></i> App Store
              </a>
              <a href="#" class="btn btn-dark d-flex align-items-center gap-2 px-4 py-2 rounded-pill">
                <i class="bi bi-google-play fs-4"></i> Google Play
              </a>
            </div>
          </div>
        </div>

        <!-- Imagem -->
        <div class="col-md-6 text-center">
          <img :src="appPhone" alt="App Preview" class="img-fluid" style="max-height: 400px;" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import appPhone from '../assets/imagens/AppMobile.png'
</script>
