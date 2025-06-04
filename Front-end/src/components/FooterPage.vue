<template>
  <footer class="footer bg-black text-white pt-5 pb-4">
    <div class="container text-center text-md-left">
      <!-- Admin Section -->
      <div class="row mb-4 justify-content-center" v-if="isAdmin">
        <div class="col-12 text-center">
          <router-link to="/admin/produtos/cadastrar" class="btn btn-admin">
            <i class="bi bi-plus-circle me-2"></i>
            Cadastrar Produtos
          </router-link>
        </div>
      </div>
      <hr class="border-secondary mb-4" v-if="isAdmin">
      
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
    </div>
  </footer>
</template>

<script>
import { auth } from '../services/auth';

export default {
  name: 'AppFooter',
  data() {
    return {
      isAdmin: false
    }
  },
  created() {
    // Verifica se é admin quando o componente é criado
    this.checkAdmin();
    // Adiciona listener para mudanças no localStorage
    window.addEventListener('storage', this.checkAdmin);
  },
  beforeUnmount() {
    // Remove o listener quando o componente é destruído
    window.removeEventListener('storage', this.checkAdmin);
  },
  methods: {
    checkAdmin() {
      this.isAdmin = auth.isAdminUser();
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #000000; 
}

.footer-link {
  text-decoration: none;
  color: #ffffff; 
  font-size: 0.9rem;
}

.footer-link:hover {
  text-decoration: underline !important;
  color: #f0c14b !important;
}

.btn-social-icon-img {
  background-color: #ebd96b;
  border-radius: 50%; 
  width: 38px;
  height: 38px;  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  padding: 0; 
}

.btn-social-icon-img img {
  max-width: 60%; 
  object-fit: contain; 
}

.btn-social-icon-img:hover {
  background-color: #e0b03b; 
}

.list-unstyled li { 
  margin-bottom: 0.5rem;
}

h5, h6 {
  color: #ffffff;
}

.col-lg-4 p { 
  max-width: 300px; 
  margin-left: auto; 
  margin-right: auto; 
  text-align: left; 
}

.btn-admin {
  background-color: #E6C744;
  color: #000;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-admin:hover {
  background-color: #d4b73e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 199, 68, 0.3);
}

@media (max-width: 767.98px) {
  .col-lg-4.col-md-6 { 
    text-align: center;
  }
  .col-lg-4.col-md-6 p {
     margin-left: auto;
     margin-right: auto;
  }
  .col-lg-4.col-md-6 .mt-4 { 
    text-align: center;
  }
}
</style>