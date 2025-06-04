<template>
  <div class="pagina-favoritos py-5">
    <div class="container">
      <h1 class="display-5 fw-bold text-center mb-5">Meus Favoritos</h1>

      <div v-if="itensFavoritos && itensFavoritos.length > 0" class="lista-favoritos">
        <ItemFavoritoCard 
          v-for="item in itensFavoritos" 
          :key="item.id" 
          :produto="item"
          @adicionar-ao-carrinho="handleAdicionarAoCarrinho"
        />
      </div>
      <div v-else class="text-center">
        <img src="https://placehold.co/200x200/E9ECEF/6C757D?text=Sem+Favoritos+:(" alt="Sem favoritos" class="mb-3 rounded-circle" 
             onerror="this.onerror=null;this.src='https://placehold.co/200x200/cccccc/333333?text=Placeholder';">
        <p class="lead text-muted">Você ainda não adicionou nenhum item aos seus favoritos.</p>
        <router-link to="/produtos" class="btn btn-dark rounded-3 mt-3">Explorar Produtos</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ItensFavorites from '../components/ItensFavorites.vue'; // Ajuste o caminho se necessário

// Importe suas imagens de exemplo para os favoritos
import imgModelo5 from '../assets/imagens/modelo_produto5.png';
import imgModelo1 from '../assets/imagens/modelo_produtos1.png';
import imgModelo3 from '../assets/imagens/modelo_produtos3.png';

export default {
  name: 'PaginaFavoritos',
  components: {
    ItensFavorites
  },
  data() {
    return {
      // Dados de exemplo para itens favoritos
      // Na aplicação real, estes dados viriam de um store (Vuex/Pinia), localStorage ou API
      itensFavoritos: [
        { 
          id: 1, 
          nome: 'Produto Favorito Exemplo 1', 
          categoriaNome: 'Destaques', 
          preco: '49,99 €', 
          imagem: imgModelo5 
        },
        { 
          id: 2, 
          nome: 'Outro Produto Favorito', 
          categoriaNome: 'Novidades', 
          preco: '39,99 €', 
          imagem: imgModelo1 
        },
        { 
          id: 4, 
          nome: 'Favorito Especial Modelo 3', 
          categoriaNome: 'Promoções', 
          preco: '29,99 €', 
          imagem: imgModelo3 
        },
         { 
          id: 7, 
          nome: 'Item Favoritado Placeholder', 
          categoriaNome: 'Acessórios', 
          preco: '15,00 €', 
          imagem: 'https://placehold.co/100x100/333333/FFFFFF?text=Fav'
        },
      ]
    };
  },
  methods: {
    handleAdicionarAoCarrinho(produto) {
      // Lógica para adicionar o produto ao carrinho global da aplicação
      alert(`"${produto.nome}" (favorito) adicionado ao carrinho!`);
      console.log('Adicionando favorito ao carrinho (da PaginaFavoritos):', produto);
      // Aqui você integraria com o seu sistema de carrinho (Vuex, Pinia, API, etc.)

      // Opcional: remover o item dos favoritos após adicionar ao carrinho
      // this.removerDosFavoritos(produto.id);
    },
    removerDosFavoritos(produtoId) {
      // Lógica para remover um item dos favoritos
      this.itensFavoritos = this.itensFavoritos.filter(item => item.id !== produtoId);
      console.log('Produto removido dos favoritos:', produtoId);
      // Atualizar o store/localStorage
    }
    // Você também precisará de métodos para adicionar itens aos favoritos em outras partes do site.
  },
  // created() {
  //   // Carregar itens favoritos do store ou localStorage quando a página for criada
  // }
};
</script>

<style scoped>
.pagina-favoritos {
  background-color: #f8f9fa; /* Fundo claro para a página */
  min-height: calc(100vh - 200px); /* Altura mínima para empurrar o rodapé */
}

.lista-favoritos {
  max-width: 800px; /* Limita a largura da lista de favoritos */
  margin: 0 auto; /* Centraliza a lista */
}

/* O estilo do ItemFavoritoCard está no seu próprio componente */
</style>
