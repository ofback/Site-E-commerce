// Simula um serviço de autenticação
const adminCredentials = {
  email: 'admin@fashion.com',
  password: 'admin123'
};

export const auth = {
  user: null,
  isAdmin: false,

  login(email, password) {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      this.user = { email, role: 'admin' };
      this.isAdmin = true;
      localStorage.setItem('user', JSON.stringify(this.user));
      return true;
    }
    return false;
  },

  logout() {
    this.user = null;
    this.isAdmin = false;
    localStorage.removeItem('user');
  },

  checkAuth() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
      this.isAdmin = this.user.role === 'admin';
      return true;
    }
    return false;
  },

  isAuthenticated() {
    return !!this.user;
  },

  isAdminUser() {
    return this.isAdmin;
  }
}; 