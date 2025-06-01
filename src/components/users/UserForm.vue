<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
    <h2 class="text-2xl font-bold mb-4 text-center">Cadastro de Usuário</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Nome</label>
        <input v-model="nome" type="text" class="w-full border p-2 rounded" placeholder="Digite seu nome" />
      </div>
      <div>
        <label class="block text-sm font-medium">Email</label>
        <input v-model="email" type="email" class="w-full border p-2 rounded" placeholder="Digite seu email" />
      </div>
      <div>
        <label class="block text-sm font-medium">Senha</label>
        <input v-model="senha" type="password" class="w-full border p-2 rounded" placeholder="Digite sua senha" />
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
      senha: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('Usuário cadastrado:', {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      });
    }
  }
}
</script>
