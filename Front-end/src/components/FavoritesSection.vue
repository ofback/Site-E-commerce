<template>
  <section class="py-5">
    <div class="container">
      <h2 class="fw-bold mb-4 text-start">Young's Favourite</h2>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card favorite-card border-0 shadow-sm h-100">
            <div class="image-wrapper" style="background-color: #FFE0B2;"> <img src="../assets/imagens/modelos_produto4.png" class="card-img-top" alt="Trending on Instagram" />
            </div>
            <div class="card-body text-start">
              <h5 class="card-title fw-bold">Trending on Instagram</h5>
              <a href="#" class="card-text text-muted explore-now-link">
                Explore Now!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ms-1" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card favorite-card border-0 shadow-sm h-100">
            <div class="image-wrapper" style="background-color: #FFCDD2;"> <img src="../assets/imagens/modelo_produto5.png" class="card-img-top" alt="All Under $40" />
            </div>
            <div class="card-body text-start">
              <h5 class="card-title fw-bold">All Under $40</h5>
              <a href="#" class="card-text text-muted explore-now-link">
                Explore Now!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ms-1" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FavoritesSection" 
  // Se você quiser tornar as cores e os dados mais dinâmicos no futuro,
  // você pode transformar os cards em um componente filho e passar dados/cores como props.
};
</script>

<style scoped>
.favorite-card .card-img-top {
  height: 350px; /* Aumentei um pouco a altura, ajuste conforme o Figma */
  object-fit: cover; /* Mantém o cover para preencher */
  border-top-left-radius: var(--bs-card-border-radius); /* Garante que a imagem siga o arredondamento do card */
  border-top-right-radius: var(--bs-card-border-radius);
}

.favorite-card .image-wrapper {
  /* Este wrapper agora controla o fundo da imagem */
  border-top-left-radius: var(--bs-card-border-radius);
  border-top-right-radius: var(--bs-card-border-radius);
  overflow: hidden; /* Para garantir que a imagem não escape do arredondamento do wrapper */
}

.favorite-card .card-body {
  padding-top: 1rem; /* Ajuste o padding se necessário */
}

.favorite-card .card-title {
  margin-bottom: 0.25rem; /* Menor margem abaixo do título */
  font-size: 1.1rem; /* Ajuste o tamanho se o Figma for diferente */
}

.explore-now-link {
  text-decoration: none;
  display: inline-flex; /* Para alinhar o texto e a seta */
  align-items: center;
  font-size: 0.9rem; /* Ajuste o tamanho se o Figma for diferente */
}

.explore-now-link:hover {
  text-decoration: underline;
  color: var(--bs-link-hover-color); /* Cor de hover padrão do Bootstrap para links */
}

.explore-now-link .bi-arrow-right {
  transition: transform 0.2s ease-in-out;
}

.explore-now-link:hover .bi-arrow-right {
  transform: translateX(3px);
}

/* Se precisar de cantos mais arredondados do que o padrão do Bootstrap: */
/*
.favorite-card {
  border-radius: 0.75rem;  Ajuste este valor 
}
.favorite-card .image-wrapper,
.favorite-card .card-img-top {
  border-top-left-radius: 0.75rem; 
  border-top-right-radius: 0.75rem;
}
*/
</style>
