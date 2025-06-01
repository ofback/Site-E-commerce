<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const errors = ref({});
const isLoading = ref(false);

const validateForm = () => {
  errors.value = {};
  
  // Validação de email
  if (!email.value) {
    errors.value.email = 'O email é obrigatório';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Por favor, insira um email válido';
  }
  
  // Validação de senha
  if (!password.value) {
    errors.value.password = 'A senha é obrigatória';
  } else if (password.value.length < 6) {
    errors.value.password = 'A senha deve ter pelo menos 6 caracteres';
  }
  
  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (!validateForm()) return;
  
  try {
    isLoading.value = true;
    // Aqui você implementará a lógica de autenticação
    console.log('Form submitted:', { email: email.value, password: password.value });
    
    // Simular delay de requisição
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // TODO: Implementar chamada à API de autenticação
    
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow">
          <div class="card-body p-5">
            <h2 class="text-center mb-4 title">Entrada</h2>
            
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="email" class="form-label fs-5">Email</label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': errors.email }"
                  id="email"
                  v-model="email"
                  placeholder="seu@email.com"
                >
                <div class="invalid-feedback" v-if="errors.email">
                  {{ errors.email }}
                </div>
              </div>
              
              <div class="mb-4">
                <label for="password" class="form-label fs-5">Senha</label>
                <input
                  type="password"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': errors.password }"
                  id="password"
                  v-model="password"
                  placeholder="Sua senha"
                >
                <div class="invalid-feedback" v-if="errors.password">
                  {{ errors.password }}
                </div>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-dark w-100 py-3 mb-4 fs-5"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                {{ isLoading ? 'Entrando...' : 'Entrar' }}
              </button>
            </form>
            
            <div class="text-center">
              <a href="#" class="forgot-password fs-5">Esqueceu sua senha?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1.5rem;
  border: none;
}

.btn {
  border-radius: 0.8rem;
  font-weight: 500;
}

.form-control {
  padding: 1rem;
  border-radius: 0.8rem;
  font-size: 1.1rem;
}

.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(243, 156, 18, 0.15);
  border-color: #f39c12;
}

.title {
  color: #f39c12;
  font-size: 2.5rem;
  font-weight: bold;
}

.forgot-password {
  color: #f39c12;
  text-decoration: none;
  font-weight: 500;
}

.forgot-password:hover {
  color: #e67e22;
  text-decoration: underline;
}

.btn:hover {
  background-color: #f39c12;
  border-color: #f39c12;
}

.form-label {
  font-weight: 500;
}
</style> 