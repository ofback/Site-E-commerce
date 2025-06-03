<template>
  <div class="container my-5">
    <h2 class="mb-4">Meu Carrinho</h2>

    <!-- Lista de itens do carrinho -->
    <div class="card mb-3" v-for="item in carrinho" :key="item.id">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 class="card-title">{{ item.nome }}</h5>
          <p class="card-text">Quantidade: {{ item.quantidade }}</p>
        </div>
        <p class="fw-bold mb-0">R$ {{ item.preco.toFixed(2) }}</p>
      </div>
    </div>

    <!-- Total -->
    <div class="text-end fw-bold fs-5">
      Total: R$ {{ total.toFixed(2) }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const carrinho = ref([
  { id: 1, nome: 'Produto 1', quantidade: 2, preco: 50.0 },
  { id: 2, nome: 'Produto 2', quantidade: 1, preco: 80.0 },
])

const total = computed(() =>
  carrinho.value.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
)
</script>
