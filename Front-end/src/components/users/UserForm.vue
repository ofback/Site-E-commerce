<template>
  <div class="register-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div class="register-card shadow p-5 w-100" style="max-width: 500px;">
      <h2 class="text-center mb-4 title">Cadastro</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="nome" class="form-label fs-5">Nome</label>
          <input
            type="text"
            id="nome"
            v-model="nome"
            :class="{ 'is-invalid': errors.nome }"
            class="form-control form-control-lg"
            placeholder="Seu nome"
          />
          <div class="invalid-feedback" v-if="errors.nome">
            {{ errors.nome }}
          </div>
        </div>

        <div class="mb-4">
          <label for="email" class="form-label fs-5">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            :class="{ 'is-invalid': errors.email }"
            class="form-control form-control-lg"
            placeholder="seu@email.com"
          />
          <div class="invalid-feedback" v-if="errors.email">
            {{ errors.email }}
          </div>
        </div>

        <div class="mb-4">
          <label for="senha" class="form-label fs-5">Senha</label>
          <input
            type="password"
            id="senha"
            v-model="senha"
            :class="{ 'is-invalid': errors.senha }"
            class="form-control form-control-lg"
            placeholder="Sua senha"
          />
          <div class="invalid-feedback" v-if="errors.senha">
            {{ errors.senha }}
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-dark w-100 py-3 mb-4 fs-5"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
          {{ isLoading ? 'Cadastrando...' : 'Cadastrar' }}
        </button>
      </form>

      <div class="text-center fs-5">
        Já tem uma conta?
        <router-link to="/login" class="text-warning text-decoration-none fw-semibold ms-1">
          Faça login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const nome = ref('')
const email = ref('')
const senha = ref('')
const errors = ref({})
const isLoading = ref(false)
const router = useRouter()

const validateForm = () => {
  errors.value = {}

  if (!nome.value || nome.value.length < 3) {
    errors.value.nome = 'Nome deve ter pelo menos 3 caracteres.'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value || !emailRegex.test(email.value)) {
    errors.value.email = 'Informe um email válido.'
  }

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/
  if (!senha.value || !senhaRegex.test(senha.value)) {
    errors.value.senha = 'Senha deve ter pelo menos 6 caracteres, incluindo letras e números.'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    const response = await axios.post('http://localhost:8080/usuarios/cadastrar', {
      nome: nome.value,
      email: email.value,
      senha: senha.value
    })

    console.log('Usuário cadastrado com sucesso:', response.data)
    alert('Usuário cadastrado com sucesso!')
    router.push('/login')
  } catch (error) {
    console.error('Erro no cadastro:', error)
    if (error.response?.data?.message) {
      alert('Erro: ' + error.response.data.message)
    } else {
      alert('Erro ao cadastrar. Tente novamente.')
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.register-wrapper {
  background-color: #f8f9fa;
  padding: 1rem;
}

.register-card {
  border-radius: 1.5rem;
  background-color: white;
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

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875rem;
}
</style>
