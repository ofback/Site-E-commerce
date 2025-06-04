<template>
  <div class="item-favorito-card d-flex align-items-center p-3 mb-3 bg-white rounded shadow-sm">
    <!-- Imagem do Produto à Esquerda -->
    <div class="imagem-produto-wrapper me-3">
      <img :src="produto.imagem" :alt="produto.nome" class="imagem-produto"
           onerror="this.onerror=null;this.src='https://placehold.co/100x100/cccccc/333333?text=Img';" />
    </div>

    <!-- Informações do Produto (Nome, Categoria) -->
    <div class="info-produto flex-grow-1">
      <h5 class="nome-produto mb-1">{{ produto.nome }}</h5>
      <p class="categoria-produto text-muted small mb-0">{{ produto.categoriaNome }}</p>
    </div>

    <!-- Preço e Botão Comprar à Direita -->
    <div class="acao-produto text-end ms-3">
      <p class="preco-produto fw-bold mb-1">{{ produto.preco }}</p>
      <button class="btn btn-dark btn-sm rounded-3 fw-semibold px-3" @click="adicionarAoCarrinho">
        Comprar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemFavoritoCard',
  props: {
    produto: {
      type: Object,
      required: true,
      default: () => ({ // Estrutura de exemplo para o objeto produto
        id: 0,
        nome: 'Nome do Produto',
        categoriaNome: 'Categoria',
        preco: '0,00 €',
        imagem: 'https://placehold.co/100x100/E6C744/333333?text=Produto'
      })
    }
  },
  methods: {
    adicionarAoCarrinho() {
      // Emitir um evento para a página pai lidar com a adição ao carrinho
      this.$emit('adicionar-ao-carrinho', this.produto);
      // Ou, se você tiver um store (Vuex/Pinia), pode chamar uma action aqui
      console.log('Adicionar ao carrinho (do ItemFavoritoCard):', this.produto);
    }
  }
}
</script>

<style scoped>
.item-favorito-card {
  border: 1px solid #e9ecef; /* Borda sutil */
  min-height: 120px; /* Altura mínima para o card */
}

.imagem-produto-wrapper {
  width: 80px; /* Largura do container da imagem */
  height: 80px; /* Altura do container da imagem, para fazer um quadrado */
  overflow: hidden;
  border-radius: 0.375rem; /* Cantos arredondados para o container da imagem */
}

.imagem-produto {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem cubra o espaço */
}

.info-produto {
  /* O flex-grow-1 já faz ele ocupar o espaço disponível */
}

.nome-produto {
  font-size: 1.1rem;
  color: #343a40;
}

.categoria-produto {
  font-size: 0.85rem;
}

.acao-produto {
  min-width: 100px; /* Largura mínima para a área de preço e botão */
}

.preco-produto {
  font-size: 1rem;
  color: #212529;
}

.btn-dark {
  /* Estilo similar aos outros botões retangulares */
  /* padding: 0.375rem 0.75rem; /* Bootstrap btn-sm padding */
  font-size: 0.875rem;
}
</style>
