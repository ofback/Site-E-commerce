<template>
  <footer class="footer bg-black text-white pt-5 pb-4">
    <div class="container text-center text-md-left">
      <div class="row gy-4">

        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 text-start">
          <h5 class="text-uppercase fw-bold mb-4" style="font-size: 1.8rem;">FASHION</h5>
          <h7 class="text-start" style="font-size: 0.9rem; color: #adb5bd;">
            Complete your style with awesome <br>clothes from us.
          </h7>
          <div class="mt-4">
            <a href="#" class="btn-social-icon-img me-2" role="button">
              <img src="../assets/imagens/facebook.png" alt="Facebook" />
            </a>
            <a href="#" class="btn-social-icon-img me-2" role="button">
              <img src="../assets/imagens/instagram.png" alt="Instagram" />
            </a>
            <a href="#" class="btn-social-icon-img me-2" role="button">
              <img src="../assets/imagens/tweeter.png" alt="Twitter" />
            </a>
            <a href="#" class="btn-social-icon-img" role="button">
              <img src="../assets/imagens/linkedin.png" alt="Linkedin" />
            </a>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
          <h6 class="text-uppercase fw-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a href="#" class="text-white footer-link">About</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Contact us</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Support</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Careers</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
          <h6 class="text-uppercase fw-bold mb-4">Quick Link</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Share Location</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Orders Tracking</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Size Guide</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white footer-link">FAQs</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="text-uppercase fw-bold mb-4 text-start">Legal</h6>
          <ul class="list-unstyled mb-0 text-start">
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Terms & conditions</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white footer-link">Privacy Policy</a>
            </li>
          </ul>
        </div>

      </div>

      <!--
      <hr class="my-4" style="border-color: rgba(255,255,255,0.1);">
      <div class="row">
        <div class="col-12 text-center">
          <p style="font-size: 0.875rem; color: #adb5bd;">
            &copy; {{ new Date().getFullYear() }} FASHION. Todos os direitos reservados.
          </p>
        </div>
      </div>
      -->

    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
  // Nenhuma lógica específica necessária para este exemplo.
}
</script>

<style scoped>
.footer {
  background-color: #000000; /* Fundo preto, conforme a imagem */
}

.footer-link {
  text-decoration: none;
  color: #ffffff; /* Cor padrão dos links */
  font-size: 0.9rem;
}

.footer-link:hover {
  text-decoration: underline !important;
  color: #f0c14b !important; /* Amarelo para hover, ajuste conforme a cor exata do Figma */
}

/* Estilo para os botões/links que contêm as imagens das redes sociais */
.btn-social-icon-img {
  background-color: #ebd96b; /* Cor de fundo amarela para os círculos */
  border-radius: 50%; /* Deixa os contêineres redondos */
  width: 38px;   /* Largura do círculo */
  height: 38px;  /* Altura do círculo */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  padding: 0; /* Remove padding para a imagem preencher melhor */
}

.btn-social-icon-img img {
  max-width: 60%; /* Ajusta o tamanho da imagem dentro do círculo. Experimente com este valor. */
  max-height: 60%;
  object-fit: contain; /* Garante que a imagem inteira apareça, mantendo a proporção */
}

.btn-social-icon-img:hover {
  background-color: #e0b03b; /* Um tom de amarelo um pouco mais escuro para o hover */
}

/* Removido: Comentários sobre Font Awesome, pois estamos usando imagens locais agora */

/* Ajustes para espaçamento e alinhamento responsivo */
.list-unstyled li { /* Aplicando diretamente ao li para melhor controle */
  margin-bottom: 0.5rem;
}

h5, h6 {
  color: #ffffff; /* Garante que os títulos das seções sejam brancos */
}

/* Para a coluna "FASHION", o texto é um pouco menor e mais claro */
.col-lg-4 p { /* Seletor mais específico se necessário */
  max-width: 300px; /* Limita a largura do texto descritivo */
  margin-left: auto; /* Centraliza o bloco de texto se a coluna for mais larga */
  margin-right: auto; /* Centraliza o bloco de texto se a coluna for mais larga */
  text-align: left; /* Mantém o texto alinhado à esquerda dentro do seu bloco */
}
/* Se a coluna FASHION precisar ser totalmente centralizada no mobile: */
@media (max-width: 767.98px) {
  .col-lg-4.col-md-6 { /* Target FASHION column on smaller screens */
    text-align: center;
  }
  .col-lg-4.col-md-6 p {
     margin-left: auto;
     margin-right: auto;
  }
  .col-lg-4.col-md-6 .mt-4 { /* Container dos ícones sociais */
    text-align: center;
  }
}


/* Bootstrap 5 usa gy-4 (gutter y) para espaçamento vertical entre colunas em telas menores.
   Se estiver usando uma versão anterior do Bootstrap, pode precisar de classes como mb-md-0.
*/
</style>