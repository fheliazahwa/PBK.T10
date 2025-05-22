<template>
  <div id="app">
    <!-- Tampilkan navbar hanya jika bukan di halaman login -->
    <nav v-if="!isLoginPage" class="navbar">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/produk">Produk</router-link> |
      <router-link to="/produk/tambah">Tambah Produk</router-link> |
      <router-link to="/transaksi/riwayat">Riwayat Transaksi</router-link> |
      <router-link to="/laporan">Laporan</router-link> |
      <router-link to="/logout">Logout</router-link>
    </nav>
    <main class="main-content">
    <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoginPage() {
      return this.$route.path === '/';
    }
  }
}
</script>


<style scoped>
/* Background for entire app */
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #fefefe, #e0eafc);
  min-height: 100vh;
}

/* Navbar styling */
.navbar {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  background-color: #8e44ad;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.navbar a:hover {
  background-color: #732d91;
}

/* Main content area */
.main-content {
  padding: 2rem;
}
</style>
