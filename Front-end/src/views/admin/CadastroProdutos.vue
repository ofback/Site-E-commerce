<template>
  <div class="cadastro-produtos py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card border-0 shadow-lg">
            <div class="card-body p-5">
              <h1 class="text-center mb-4">Cadastro de Produtos</h1>
              
              <form @submit.prevent="cadastrarProduto" class="needs-validation" novalidate>
                <!-- Nome do Produto -->
                <div class="mb-4">
                  <label for="nome" class="form-label">Nome do Produto</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="nome" 
                    v-model="produto.nome" 
                    required
                  >
                </div>

                <!-- Preço -->
                <div class="row mb-4">
                  <div class="col-md-6">
                    <label for="preco" class="form-label">Preço</label>
                    <div class="input-group">
                      <span class="input-group-text">€</span>
                      <input 
                        type="number" 
                        class="form-control" 
                        id="preco" 
                        v-model="produto.preco"
                        step="0.01"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="precoPromocional" class="form-label">Preço Promocional (opcional)</label>
                    <div class="input-group">
                      <span class="input-group-text">€</span>
                      <input 
                        type="number" 
                        class="form-control" 
                        id="precoPromocional" 
                        v-model="produto.precoPromocional"
                        step="0.01"
                      >
                    </div>
                  </div>
                </div>

                <!-- Categoria -->
                <div class="mb-4">
                  <label for="categoria" class="form-label">Categoria</label>
                  <select class="form-select" id="categoria" v-model="produto.categoria" required>
                    <option value="">Selecione uma categoria</option>
                    <option value="destaques">Destaques</option>
                    <option value="novidades">Novidades</option>
                    <option value="promocoes">Promoções</option>
                  </select>
                </div>

                <!-- Descrição -->
                <div class="mb-4">
                  <label for="descricao" class="form-label">Descrição</label>
                  <textarea 
                    class="form-control" 
                    id="descricao" 
                    v-model="produto.descricao" 
                    rows="4"
                    required
                  ></textarea>
                </div>

                <!-- Upload de Imagem -->
                <div class="mb-4">
                  <label for="imagem" class="form-label">Imagem do Produto</label>
                  <input 
                    type="file" 
                    class="form-control" 
                    id="imagem" 
                    @change="handleImagemUpload"
                    accept="image/*"
                    required
                  >
                  <div class="preview-imagem mt-3" v-if="previewImagem">
                    <img :src="previewImagem" alt="Preview" class="img-preview">
                  </div>
                </div>

                <!-- Estoque -->
                <div class="mb-4">
                  <label for="estoque" class="form-label">Quantidade em Estoque</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    id="estoque" 
                    v-model="produto.estoque"
                    min="0"
                    required
                  >
                </div>

                <!-- Botões -->
                <div class="d-flex gap-3 justify-content-end mt-5">
                  <button type="button" class="btn btn-outline-secondary px-4" @click="limparFormulario">
                    Limpar
                  </button>
                  <button type="submit" class="btn btn-primary px-4">
                    Cadastrar Produto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CadastroProdutos',
  data() {
    return {
      produto: {
        nome: '',
        preco: '',
        precoPromocional: '',
        categoria: '',
        descricao: '',
        estoque: 0,
        imagem: null
      },
      previewImagem: null
    }
  },
  methods: {
    handleImagemUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.produto.imagem = file;
        this.previewImagem = URL.createObjectURL(file);
      }
    },
    limparFormulario() {
      this.produto = {
        nome: '',
        preco: '',
        precoPromocional: '',
        categoria: '',
        descricao: '',
        estoque: 0,
        imagem: null
      };
      this.previewImagem = null;
      // Limpa o input de arquivo
      const inputFile = document.getElementById('imagem');
      if (inputFile) inputFile.value = '';
    },
    cadastrarProduto() {
      // Aqui você implementará a lógica de cadastro
      console.log('Produto a ser cadastrado:', this.produto);
      // Por enquanto apenas mostra um alerta
      alert('Produto cadastrado com sucesso!');
      this.limparFormulario();
    }
  }
}
</script>

<style scoped>
.cadastro-produtos {
  background-color: #f8f9fa;
  min-height: calc(100vh - 100px);
}

.card {
  border-radius: 1rem;
}

.form-control, .form-select {
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #dee2e6;
}

.form-control:focus, .form-select:focus {
  border-color: #E6C744;
  box-shadow: 0 0 0 0.25rem rgba(230, 199, 68, 0.25);
}

.btn-primary {
  background-color: #E6C744;
  border-color: #E6C744;
  color: #000;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #d4b73e;
  border-color: #d4b73e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 199, 68, 0.3);
}

.btn-outline-secondary {
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  font-weight: 600;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}

.img-preview {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.preview-imagem {
  display: flex;
  justify-content: center;
}

/* Estilização do input file */
input[type="file"] {
  padding: 0.5rem;
}

input[type="file"]::file-selector-button {
  background-color: #E6C744;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #000;
  font-weight: 600;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

input[type="file"]::file-selector-button:hover {
  background-color: #d4b73e;
}

/* Responsividade */
@media (max-width: 767.98px) {
  .card-body {
    padding: 2rem !important;
  }
}
</style> 