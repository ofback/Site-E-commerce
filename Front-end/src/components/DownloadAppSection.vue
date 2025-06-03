<template>
  <section class="bg-light py-5 download-section position-relative overflow-hidden">
    <div class="decorative-circle circle-1"></div>
    <div class="decorative-circle circle-2"></div>
    <div class="decorative-circle circle-3"></div>
    
    <div class="container position-relative" style="z-index: 2;">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <h2 class="fw-bold mb-3 text-uppercase">DOWNLOAD APP &amp; <br> GET THE VOUCHER!</h2>
          <p class="text-muted mb-4">
            Get 30% off for first transaction using<br class="d-none d-md-block"/>
            Rondovision mobile app for now.
          </p>

          <div class="d-flex justify-content-center justify-content-md-start">
            <div class="d-flex gap-3 flex-wrap">
              <a href="#" class="btn btn-dark d-flex align-items-center gap-2 px-4 py-2 rounded-3">
                <i class="bi bi-apple fs-4"></i><strong>APP STORE</strong>
              </a>
              <a href="#" class="btn btn-dark d-flex align-items-center gap-2 px-4 py-2 rounded-3">
                <i class="bi bi-google-play fs-4"></i><strong>GOOGLE PLAY</strong>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 text-center position-relative"> 
          <div class="decorative-lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <img :src="appPhone" alt="App Preview" class="img-fluid app-mockup" style="max-height: 450px;" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import appPhone from '../assets/imagens/AppMobile.png'
</script>

<style scoped>
.download-section {
  min-height: 550px; 
}

.app-mockup {
  position: relative; 
  z-index: 1; 
}

.decorative-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0; 
}

.circle-1 { 
  width: 25px; 
  height: 25px; 
  background-color: #4A4A4A; 
  top: 25%; 
  right: 37%; 
}

.circle-2 { 
  width: 50px; 
  height: 50px; 
  background-color: #E6C744; 
  top: 45%;  
  right: 10%; 
}

.circle-3 { 
  width: 20px; 
  height: 20px; 
  background-color: #E6C744; 
  bottom: 25%; 
  left: 62%;  
}

.decorative-lines {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  width: 320px; 
  height: 320px; 
  z-index: 0; 
  opacity: 0.4;
}

.decorative-lines .line {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  border: 1px solid #cccccc; 
  border-radius: 50%;
  box-sizing: border-box;
}

.decorative-lines .line:nth-child(1) {
  width: 100%; 
  height: 100%; 
  transform: translate(-50%, -50%) scale(1);
}
.decorative-lines .line:nth-child(2) {
  width: 80%; 
  height: 80%; 
  transform: translate(-50%, -50%) scale(0.8); 
}
.decorative-lines .line:nth-child(3) {
  width: 60%; 
  height: 60%; 
  transform: translate(-50%, -50%) scale(0.6);
}

.btn-dark {
  text-align: left;
  line-height: 1.2;
}
.btn-dark strong {
  font-size: 0.9em;
}

@media (max-width: 767.98px) {
  .download-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .col-md-6.mb-4.mb-md-0.text-center.text-md-start { 
    text-align: center !important; 
  }
  .d-flex.justify-content-center.justify-content-md-start { 
    justify-content: center !important; 
  }
  .decorative-circle, .decorative-lines {
    display: none; 
  }
  .app-mockup {
    max-height: 350px; 
    margin-top: 2rem;
  }
}
</style>
