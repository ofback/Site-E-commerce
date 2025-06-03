<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios' // <-- IMPORTANTE

const nome = ref('')
const email = ref('')
const senha = ref('')
const errors = ref({})
const isLoading = ref(false)
const router = useRouter()

const validateForm = () => {
  errors.value = {}

  if (!nome.value) errors.value.nome = 'O nome é obrigatório'
  if (!email.value) {
    errors.value.email = 'O email é obrigatório'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Email inválido'
  }

  if (!senha.value) {
    errors.value.senha = 'A senha é obrigatória'
  } else if (senha.value.length < 6) {
    errors.value.senha = 'A senha deve ter no mínimo 6 caracteres'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    const response = await axios.post('http://localhost:8080/usuarios/cadastrar', {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    })

    console.log('Usuário cadastrado com sucesso:', response.data)
    alert('Usuário cadastrado com sucesso!')
    router.push('/login')
  } catch (error) {
    console.error('Erro no cadastro:', error)
    if (error.response && error.response.data && error.response.data.message) {
      alert('Erro: ' + error.response.data.message)
    } else {
      alert('Erro ao cadastrar. Tente novamente.')
    }
  } finally {
    isLoading.value = false
  }
}
</script>
