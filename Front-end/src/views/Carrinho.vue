<template>
  <div class="container my-5">
    <h2 class="mb-4">Meu Carrinho</h2>

    <div v-if="loading">Carregando...</div>
    <div v-else-if="!carrinho.itens || carrinho.itens.length === 0">
      <p>Seu carrinho está vazio.</p>
    </div>
    <div v-else>
      <div class="card mb-3" v-for="item in carrinho.itens" :key="item.id">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title">{{ item.produto_id.nome }}</h5>
            <p class="card-text">Quantidade: {{ item.quantidade }}</p>
          </div>
          <p class="fw-bold mb-0">
            R$ {{ (item.produto_id.preco * item.quantidade).toFixed(2) }}
          </p>
        </div>
      </div>

      <div class="text-end mt-4">
        <p class="fw-bold fs-5">Total: R$ {{ total.toFixed(2) }}</p>
        <button class="btn btn-success px-4 py-2 fw-semibold" @click="finalizarCompra">
          Finalizar Compra
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'


const usuarioId = 5

const carrinho = ref({})
const loading = ref(true)

const total = computed(() => {
  if (!carrinho.value.itens) return 0
  return carrinho.value.itens.reduce((acc, item) => {
    return acc + item.produto_id.preco * item.quantidade
  }, 0)
})

onMounted(async () => {
  try {
    const response = await axios.get(`/api/carrinho/${usuarioId}`)
    carrinho.value = response.data
  } catch (error) {
    console.error('Erro ao buscar carrinho:', error)
    alert('Erro ao carregar o carrinho')
  } finally {
    loading.value = false
  }
})

const finalizarCompra = async () => {
  try {
    await axios.post('/api/compras', {
      carrinhoId: carrinho.value.id
    })
    alert('Compra finalizada com sucesso!')
    carrinho.value.itens = [] // limpa visualmente
  } catch (error) {
    console.error('Erro ao finalizar compra:', error)
    alert('Erro ao finalizar compra')
  }
}
</script>
