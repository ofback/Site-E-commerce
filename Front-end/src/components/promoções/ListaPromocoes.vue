<template>
  <div class="pagina-promocoes py-5">
    <div class="container">
      <h1 class="display-5 fw-bold text-center mb-5">Nossas Promoções</h1>

      <!-- Filtros de Categoria (mantidos para organizar as promoções) -->
      <div class="filtros-categoria text-center mb-5">
        <button 
          @click="selecionarCategoria('todos')" 
          :class="['btn', filtroAtivo === 'todos' ? 'btn-dark' : 'btn-outline-dark', 'm-1']"
        >
          Todas
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

      <!-- Lista de Produtos em Promoção -->
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
                    <!-- Botão de Favorito -->
                    <button 
                      class="btn-favorito"
                      @click.stop="toggleFavorito(produto)"
                      :class="{ 'favoritado': isFavorito(produto.id) }"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </button>
                  </div>
                  <div class="produto-info-mascara">
                    <h6 class="produto-nome">{{ produto.nome }}</h6>
                    <div class="precos-wrapper">
                      <span v-if="produto.precoAntigo" class="preco-antigo me-2">{{ produto.precoAntigo }}</span>
                      <span class="preco-promocional">{{ produto.preco }}</span>
                    </div>
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
                <p class="text-muted">Nenhuma promoção encontrada nesta categoria.</p>
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
                  <!-- Botão de Favorito -->
                  <button 
                    class="btn-favorito"
                    @click.stop="toggleFavorito(produto)"
                    :class="{ 'favoritado': isFavorito(produto.id) }"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </button>
                </div>
                <div class="produto-info-mascara">
                  <h6 class="produto-nome">{{ produto.nome }}</h6>
                   <div class="precos-wrapper">
                      <span v-if="produto.precoAntigo" class="preco-antigo me-2">{{ produto.precoAntigo }}</span>
                      <span class="preco-promocional">{{ produto.preco }}</span>
                    </div>
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
                <p class="text-muted">Nenhuma promoção encontrada nesta categoria.</p>
              </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// Importe as suas imagens de produtos locais
import imgModelo1 from '../../assets/imagens/imagem_1.png';
import imgModelo2 from '../../assets/imagens/imagem_2.png';
import imgModelo3 from '../../assets/imagens/imagem_3.png';
import imgModelo4 from '../../assets/imagens/imagem_4.png';
import imgModelo5 from '../../assets/imagens/imagem_5.png';
import imgModelo6 from '../../assets/imagens/imagem_6.png';

export default {
  name: 'PaginaPromocoes', // Nome do componente alterado
  components: {},
  data() {
    return {
      filtroAtivo: 'todos', 
      categorias: [ // Categorias podem ser tipos de promoção ou manter as categorias de produto
        { id: 'ofertas_semana', nome: 'Ofertas da Semana' },
        { id: 'queima_stock', nome: 'Queima de Estoque' },
      ],
      produtos: [ // Produtos de exemplo com precoAntigo
        { id: 1, nome: 'Produto em Promoção 1', precoAntigo: '69,99 €', preco: '49,99 €', imagem: imgModelo1, categoriaId: 'ofertas_semana' },
        { id: 2, nome: 'Super Desconto Modelo 2', precoAntigo: '59,99 €', preco: '39,99 €', imagem: imgModelo2, categoriaId: 'ofertas_semana' },
        { id: 3, nome: 'Últimas Unidades Modelo 3', precoAntigo: '99,99 €', preco: '79,99 €', imagem: imgModelo3, categoriaId: 'queima_stock' },
        { id: 4, nome: 'Promoção Imperdível Modelo 4', precoAntigo: '49,99 €', preco: '29,99 €', imagem: imgModelo4, categoriaId: 'queima_stock' },
        { id: 5, nome: 'Destaque Promocional Extra', precoAntigo: '120,00 €', preco: '99,99 €', imagem: imgModelo5, categoriaId: 'ofertas_semana' },
        { id: 6, nome: 'Queima Total de Estoque', precoAntigo: '85,50 €', preco: '65,50 €', imagem: imgModelo6, categoriaId: 'queima_stock' },
      ],
      favoritos: [], // Array para armazenar IDs dos produtos favoritos
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
      alert(`"${produto.nome}" adicionado ao carrinho! (Preço Promocional: ${produto.preco})`);
      console.log('Adicionando ao carrinho:', produto);
    },
    toggleFavorito(produto) {
      const index = this.favoritos.indexOf(produto.id);
      if (index === -1) {
        // Adiciona aos favoritos
        this.favoritos.push(produto.id);
        // Salva no localStorage
        this.salvarFavoritos();
        // Emite evento para atualizar outros componentes
        this.$emit('adicionar-favorito', produto);
      } else {
        // Remove dos favoritos
        this.favoritos.splice(index, 1);
        // Salva no localStorage
        this.salvarFavoritos();
        // Emite evento para atualizar outros componentes
        this.$emit('remover-favorito', produto.id);
      }
    },
    isFavorito(produtoId) {
      return this.favoritos.includes(produtoId);
    },
    salvarFavoritos() {
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    },
    carregarFavoritos() {
      const favoritosStorage = localStorage.getItem('favoritos');
      if (favoritosStorage) {
        this.favoritos = JSON.parse(favoritosStorage);
      }
    }
  },
  created() {
    // Carrega os favoritos quando o componente é criado
    this.carregarFavoritos();
  }
};
</script>

<style scoped>
.pagina-promocoes { /* Nome da classe alterado */
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

.produto-card-novo {
  position: relative;
  overflow: hidden; 
  border-radius: 0.375rem; 
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); 
  aspect-ratio: 3 / 4; /* Mantendo a proporção vertical */
  background-color: #e9ecef; 
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
}

.produto-imagem-wrapper {
  position: relative; /* Adicionado para posicionar o botão de favorito */
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.produto-imagem {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Voltamos para cover mas com ajustes na posição */
  object-position: top center; /* Foca a parte superior da imagem onde geralmente está o rosto */
  transition: transform 0.3s ease-in-out;
  padding: 0; /* Removemos o padding */
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
  margin-bottom: 0.35rem; /* Aumentei um pouco a margem para os preços */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}

.precos-wrapper {
  display: flex;
  align-items: baseline; /* Alinha os preços pela base */
}

.preco-antigo {
  font-size: 0.8rem; /* Tamanho menor para o preço antigo */
  text-decoration: line-through;
  color: #adb5bd; /* Cor cinza claro para o preço antigo */
  margin-right: 0.5rem;
}

.preco-promocional {
  font-size: 0.9rem; /* Tamanho do preço promocional */
  font-weight: bold;
  color: #E6C744; /* Cor amarela para o preço promocional */
}

.btn-add-carrinho {
  padding: 0.5rem 1rem; 
  font-size: 0.9rem;
  width: 100%; 
}

.btn-favorito {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  color: #adb5bd;
  padding: 0;
}

.btn-favorito:hover {
  transform: scale(1.1);
  background: white;
}

.btn-favorito.favoritado {
  color: #E6C744; /* Cor amarela quando favoritado */
}

.btn-favorito svg {
  transition: all 0.3s ease;
}

.btn-favorito:hover svg {
  transform: scale(1.1);
}

</style>
