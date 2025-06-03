<template>
  <div class="card product-category-card border-0 bg-transparent text-start h-100">
    <router-link :to="exploreLink" class="text-decoration-none">
      <div class="image-container">
        <img :src="image" class="card-img-top product-image" alt="Category Image" />
      </div>
      <div class="card-body px-0 pt-3"> <h5 class="card-title fw-bold text-dark mb-2">{{ categoryName }}</h5>
        <div class="d-flex align-items-center text-secondary explore-link">
          <span>Explore Now!</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    image: String,
    categoryName: String,
    exploreLink: {  
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.product-category-card {
}

.image-container {
  overflow: hidden; 
  background-color: #f8f9fa; 
}

.product-image {
  width: 100%;
  height: 350px; 
  object-fit: cover; 
  transition: transform 0.3s ease; 
}

.product-category-card:hover .product-image {
  transform: scale(1.05); 
}

.card-title {
  font-size: 1.1rem; 
}

.explore-link {
  font-size: 0.9rem;
  font-weight: 500;
}

.explore-link svg {
  transition: transform 0.2s ease-in-out;
}

.product-category-card:hover .explore-link svg {
  transform: translateX(4px); 
}

@media (max-width: 767.98px) {
  .product-image {
    height: 280px; 
  }
  .card-title {
    font-size: 1rem;
  }
  .explore-link {
    font-size: 0.85rem;
  }
}
</style>