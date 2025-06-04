<script>
import { auth } from '../services/auth';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    handleLogin() {
      this.error = '';
      
      if (auth.login(this.email, this.password)) {
        // Login bem sucedido
        this.$router.push('/');
      } else {
        this.error = 'Email ou senha inválidos';
      }
    }
  }
}
</script>

<template>
  <div class="login-page py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="card border-0 shadow-lg">
            <div class="card-body p-5">
              <h2 class="text-center mb-4">Login</h2>
              
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="email"
                    required
                  >
                </div>
                
                <div class="mb-4">
                  <label for="password" class="form-label">Senha</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    v-model="password"
                    required
                  >
                </div>

                <div v-if="error" class="alert alert-danger" role="alert">
                  {{ error }}
                </div>

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">
                    Entrar
                  </button>
                </div>

                <div class="text-center mt-4">
                  <p class="mb-0">
                    Não tem uma conta? 
                    <router-link to="/usuarios/cadastrar" class="text-decoration-none">
                      Cadastre-se
                    </router-link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  background-color: #f8f9fa;
  min-height: calc(100vh - 100px);
}

.card {
  border-radius: 1rem;
}

.form-control {
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #dee2e6;
}

.form-control:focus {
  border-color: #E6C744;
  box-shadow: 0 0 0 0.25rem rgba(230, 199, 68, 0.25);
}

.btn-primary {
  background-color: #E6C744;
  border-color: #E6C744;
  color: #000;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #d4b73e;
  border-color: #d4b73e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 199, 68, 0.3);
}

a {
  color: #E6C744;
}

a:hover {
  color: #d4b73e;
}
</style>
