<template>
  <section style="background-color: #E6C744;" class="text-center py-5 text-white">
    <div class="container">
      <h2 class="fw-bold mb-3 text-uppercase">
        Join Shopping Community to <br /> Get Monthly Promo
      </h2>
      <p class="mb-4 newsletter-subtitle">
        Type your email down below and be young wild generation
      </p>

      <form @submit.prevent="handleSubscription" class="d-flex justify-content-center">
        <div class="input-group" style="max-width: 480px;"> <input
            type="email"
            class="form-control newsletter-input"
            placeholder="Add your email here" aria-label="Email"
            v-model="email"
            required
          />
          <button class="btn btn-dark newsletter-button" type="submit">SEND</button> </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubscription = () => {
  if (email.value) {
    alert(`Obrigado por se inscrever com: ${email.value}`);
    email.value = ''; 
  }
};
</script>

<style scoped>
.newsletter-subtitle {
  font-size: 0.95rem;
  opacity: 0.9;
}

.input-group {
  box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
  border-radius: 0.375rem; 
  overflow: hidden; 
  align-items: stretch; 
}

.newsletter-input.form-control {
  border: none; 
  padding: 0.75rem 1rem; 
  font-size: 0.9rem;
  line-height: 1.5; 
}

.newsletter-input.form-control:focus {
  box-shadow: none; 
  border-color: transparent; 
}

.newsletter-button.btn-dark {
  padding-top: 0.6rem; 
  padding-bottom: 0.6rem;
  padding-left: 1.3rem; 
  padding-right: 1.3rem;
  
  font-weight: 600;
  letter-spacing: 0.5px;
  border-top-left-radius: 0;    
  border-bottom-left-radius: 0; 
  
  border: 3px solid white; 
  
  font-size: 0.9rem; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}

.newsletter-button.btn-dark:focus,
.newsletter-button.btn-dark:active {
  box-shadow: none; 
}
</style>
