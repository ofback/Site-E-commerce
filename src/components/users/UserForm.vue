<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
    <h2 class="text-2xl font-bold mb-4 text-center">Cadastro de Usuário</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Nome</label>
        <input v-model="nome" type="text" class="w-full border p-2 rounded" placeholder="Digite seu nome" />
        <p v-if="erros.nome" class="text-red-500 text-sm mt-1">{{ erros.nome }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium">Email</label>
        <input v-model="email" type="email" class="w-full border p-2 rounded" placeholder="Digite seu email" />
        <p v-if="erros.email" class="text-red-500 text-sm mt-1">{{ erros.email }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium">Senha</label>
        <input v-model="senha" type="password" class="w-full border p-2 rounded" placeholder="Digite sua senha" />
        <p v-if="erros.senha" class="text-red-500 text-sm mt-1">{{ erros.senha }}</p>
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
        Cadastrar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      erros: {}
    }
  },
  methods: {
    validarCampos() {
      this.erros = {}

      if (!this.nome || this.nome.length < 3) {
        this.erros.nome = 'Nome deve ter pelo menos 3 caracteres.'
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.email || !emailRegex.test(this.email)) {
        this.erros.email = 'Informe um email válido.'
      }

      const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/
      if (!this.senha || !senhaRegex.test(this.senha)) {
        this.erros.senha = 'Senha deve ter pelo menos 6 caracteres, incluindo letras e números.'
      }

      return Object.keys(this.erros).length === 0
    },

    handleSubmit() {
      if (this.validarCampos()) {
        console.log('Usuário cadastrado:', {
          nome: this.nome,
          email: this.email,
          senha: this.senha
        })
        alert('Cadastro realizado com sucesso!')
        // Resetar formulário
        this.nome = ''
        this.email = ''
        this.senha = ''
      }
    }
  }
}
</script>
