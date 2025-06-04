<template>
  <div class="pagina-produtos py-5">
    <div class="container">
      <h1 class="display-5 fw-bold text-center mb-5">Nossos Produtos</h1>

      <!-- Filtros de Categoria -->
      <div class="filtros-categoria text-center mb-5">
        <button 
          @click="selecionarCategoria('todos')" 
          :class="['btn', filtroAtivo === 'todos' ? 'btn-dark' : 'btn-outline-dark', 'm-1']"
        >
          Todos
        </button>
        <button 
          v-for="categoria in categorias" 
          :key="categoria.id" 
          @click="selecionarCategoria(categoria.id)"
          :class="['btn', filtroAtivo === categoria.id ? 'btn-dark' : 'btn-outline-dark', 'm-1']"
        >
          {{ categoria.nome }}
        </button>
      </div>

      <!-- Lista de Produtos -->
      <div v-if="filtroAtivo !== 'todos'">
        <div v-for="categoria in categorias" :key="`secao-${categoria.id}`">
          <div v-if="categoria.id === filtroAtivo" :id="`categoria-${categoria.id}`" class="mb-5">
            <h2 class="fw-semibold mb-4 text-start border-bottom pb-2">{{ categoria.nome }}</h2>
            <div class="row g-4">
              <div 
                class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column" 
                v-for="produto in produtosPorCategoria(categoria.id)" 
                :key="produto.id"
              >
                <div class="produto-card-novo flex-grow-1">
                  <div class="produto-imagem-wrapper">
                    <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem" 
                         onerror="this.onerror=null;this.src='https://placehold.co/400x400/cccccc/333333?text=Imagem+Indispon%C3%ADvel';"/>
                  </div>
                  <div class="produto-info-mascara">
                    <h6 class="produto-nome">{{ produto.nome }}</h6>
                    <p class="produto-preco">{{ produto.preco }}</p>
                  </div>
                </div>
                <button 
                  class="btn btn-dark btn-add-carrinho mt-2 rounded-3 fw-semibold"
                  @click="adicionarAoCarrinho(produto)"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
              <div v-if="produtosPorCategoria(categoria.id).length === 0" class="col-12">
                <p class="text-muted">Nenhum produto encontrado nesta categoria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else>
        <div v-for="categoria in categorias" :key="`secao-todos-${categoria.id}`" :id="`categoria-${categoria.id}`" class="mb-5">
          <h2 class="fw-semibold mb-4 text-start border-bottom pb-2">{{ categoria.nome }}</h2>
          <div class="row g-4">
            <div 
              class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column" 
              v-for="produto in produtosPorCategoria(categoria.id)" 
              :key="produto.id"
            >
              <div class="produto-card-novo flex-grow-1">
                <div class="produto-imagem-wrapper">
                  <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem"
                       onerror="this.onerror=null;this.src='https://placehold.co/400x400/cccccc/333333?text=Imagem+Indispon%C3%ADvel';"/>
                </div>
                <div class="produto-info-mascara">
                  <h6 class="produto-nome">{{ produto.nome }}</h6>
                  <p class="produto-preco">{{ produto.preco }}</p>
                </div>
              </div>
              <button 
                class="btn btn-dark btn-add-carrinho mt-2 rounded-3 fw-semibold"
                @click="adicionarAoCarrinho(produto)"
              >
                Adicionar ao Carrinho
              </button>
            </div>
             <div v-if="produtosPorCategoria(categoria.id).length === 0" class="col-12">
                <p class="text-muted">Nenhum produto encontrado nesta categoria.</p>
              </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import imgModelo5 from '../assets/imagens/modelo_produto5.png';
import imgModelo1 from '../assets/imagens/modelo_produtos1.png';
import imgModelo2 from '../assets/imagens/modelo_produtos2.png';
import imgModelo3 from '../assets/imagens/modelo_produtos3.png';

export default {
  name: 'PaginaProdutos',
  components: {},
  data() {
    return {
      filtroAtivo: 'todos', 
      categorias: [
        { id: 'destaques', nome: 'Destaques' },
        { id: 'novidades', nome: 'Novidades' },
      ],
      produtos: [
        { id: 1, nome: 'Produto Exemplo 1', preco: '49,99 €', imagem: imgModelo5, categoriaId: 'destaques' },
        { id: 2, nome: 'Produto Exemplo 2', preco: '39,99 €', imagem: imgModelo1, categoriaId: 'destaques' },
        { id: 3, nome: 'Produto Exemplo 3', preco: '79,99 €', imagem: imgModelo2, categoriaId: 'novidades' },
        { id: 4, nome: 'Produto Exemplo 4', preco: '29,99 €', imagem: imgModelo3, categoriaId: 'novidades' },
        { id: 5, nome: 'Produto Destaque Extra', preco: '99,99 €', imagem: 'https://placehold.co/400x400/E6C744/333333?text=Destaque+5', categoriaId: 'destaques' },
        { id: 6, nome: 'Novidade Especial', preco: '65,50 €', imagem: 'https://placehold.co/400x400/333333/FFFFFF?text=Novidade+6', categoriaId: 'novidades' },
      ]
    };
  },
  methods: {
    produtosPorCategoria(categoriaId) {
      return this.produtos.filter(produto => produto.categoriaId === categoriaId);
    },
    selecionarCategoria(categoriaId) {
      this.filtroAtivo = categoriaId;
      this.$nextTick(() => { 
        if (categoriaId === 'todos' && this.categorias.length > 0) {
          this.scrollToElement(`categoria-${this.categorias[0].id}`);
        } else if (categoriaId !== 'todos') {
          this.scrollToElement(`categoria-${categoriaId}`);
        } else {
           window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    },
    scrollToElement(elementId) {
      const elemento = document.getElementById(elementId);
      if (elemento) {
        const offset = 100; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = elemento.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    adicionarAoCarrinho(produto) {
      // Lógica para adicionar o produto ao carrinho
      // Por enquanto, apenas um alerta como exemplo
      alert(`"${produto.nome}" adicionado ao carrinho!`);
      console.log('Adicionando ao carrinho:', produto);
      // Aqui você integraria com o seu sistema de carrinho (Vuex, Pinia, API, etc.)
    }
  }
};
</script>

<style scoped>
.pagina-produtos {
  background-color: #f8f9fa; 
}

.filtros-categoria .btn {
  transition: all 0.3s ease;
  border-radius: 20px; 
  padding: 0.5rem 1.2rem;
}

.filtros-categoria .btn-dark {
  background-color: #343a40;
  border-color: #343a40;
}

.filtros-categoria .btn-outline-dark:hover {
  background-color: #343a40;
  color: white;
}

h2.fw-semibold {
  color: #333;
  scroll-margin-top: 100px; 
}

/* Estilo para o card de produto e botão */
.produto-card-novo {
  position: relative;
  overflow: hidden; 
  border-radius: 0.375rem; 
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); 
  aspect-ratio: 1 / 1; 
  background-color: #e9ecef; 
  display: flex; /* Adicionado para o wrapper da imagem preencher */
}

.produto-imagem-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden; 
}

.produto-imagem {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: transform 0.3s ease-in-out;
}

.produto-card-novo:hover .produto-imagem {
  transform: scale(1.1); 
}

.produto-info-mascara {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6); 
  color: white;
  padding: 0.75rem;
  text-align: left;
  transition: opacity 0.3s ease-in-out;
}

.produto-nome {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}

.produto-preco {
  font-size: 0.85rem;
  margin-bottom: 0;
}

.btn-add-carrinho {
  /* Estilo similar aos botões SIGN UP / SIGN IN */
  /* background-color: #212529; /* Bootstrap btn-dark */
  /* border-color: #212529; */
  /* color: white; */
  padding: 0.5rem 1rem; /* Ajuste o padding conforme necessário */
  font-size: 0.9rem;
  width: 100%; /* Para o botão ocupar toda a largura da coluna */
}

/* Para garantir que o card e o botão ocupem o espaço vertical corretamente */
.col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column {
  /* O d-flex flex-column já ajuda, o flex-grow-1 no card faz ele esticar */
}
</style>
