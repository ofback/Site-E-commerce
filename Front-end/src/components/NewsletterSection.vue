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
    // Lógica para lidar com a subscrição do email
    // console.log('Email para subscrição:', email.value);
    // Exemplo: exibir uma mensagem, enviar para um backend, etc.
    alert(`Obrigado por se inscrever com: ${email.value}`);
    email.value = ''; // Limpa o campo após o envio
  }
};
</script>

<style scoped>
.newsletter-subtitle {
  font-size: 0.95rem;
  opacity: 0.9;
}

.input-group {
  box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Sombra sutil como no Figma */
  border-radius: 0.375rem; /* Bootstrap padrão para input-group */
  overflow: hidden; /* Para garantir que a sombra e o border-radius funcionem bem */
  /* Para alinhar verticalmente o input e o botão caso suas alturas divirjam um pouco */
  align-items: stretch; /* Faz com que o input e o botão estiquem para a mesma altura */
}

.newsletter-input.form-control {
  border: none; /* Remove borda padrão para integrar melhor com o botão */
  padding: 0.75rem 1rem; /* Padding interno do input mantido */
  font-size: 0.9rem;
  line-height: 1.5; 
  /* Garante que o input não tenha altura extra que desalinhe com o botão */
  /* O Bootstrap geralmente cuida da altura, mas align-items: stretch no pai ajuda */
}

.newsletter-input.form-control:focus {
  box-shadow: none; /* Remove o box-shadow do Bootstrap no foco */
  border-color: transparent; /* Garante que não haja borda no foco */
}

.newsletter-button.btn-dark {
  /* Padding interno ajustado para compensar a borda mais espessa */
  padding-top: 0.6rem; 
  padding-bottom: 0.6rem;
  padding-left: 1.3rem; 
  padding-right: 1.3rem;
  
  font-weight: 600;
  letter-spacing: 0.5px;
  border-top-left-radius: 0;    
  border-bottom-left-radius: 0; 
  
  /* Borda branca mais espessa */
  border: 3px solid white; 
  
  font-size: 0.9rem; /* Para manter o tamanho da fonte consistente com o input */
  /* line-height é herdado ou pode ser ajustado se necessário para alinhamento vertical do texto */
  display: flex; /* Para permitir o alinhamento vertical do texto dentro do botão */
  align-items: center; /* Alinha o texto verticalmente no centro */
  justify-content: center; /* Alinha o texto horizontalmente no centro */
}

.newsletter-button.btn-dark:focus,
.newsletter-button.btn-dark:active {
  box-shadow: none; 
}
</style>
