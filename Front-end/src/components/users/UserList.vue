<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const isLoading = ref(false)
const errorMsg = ref('')

onMounted(async () => {
  isLoading.value = true
  try {
    const response = await axios.get('http://localhost:8080/usuarios')
    users.value = response.data
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    errorMsg.value = 'Falha ao carregar usuários.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <h2 class="text-2xl font-semibold mb-4">Lista de Usuários</h2>

    <div v-if="isLoading" class="text-center py-4">
      Carregando usuários...
    </div>

    <div v-else>
      <div v-if="errorMsg" class="text-red-500 mb-4">
        {{ errorMsg }}
      </div>

      <ul v-else class="space-y-2">
        <li 
          v-for="usuario in users" 
          :key="usuario.id"
          class="p-4 bg-white shadow rounded flex justify-between items-center"
        >
          <div>
            <p class="font-medium">{{ usuario.nome }}</p>
            <p class="text-sm text-gray-600">{{ usuario.email }}</p>
          </div>
          <div class="text-sm text-gray-500">ID: {{ usuario.id }}</div>
        </li>
      </ul>

      <div v-if="users.length === 0 && !errorMsg" class="text-gray-600">
        Nenhum usuário encontrado.
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #333;
}
</style>
