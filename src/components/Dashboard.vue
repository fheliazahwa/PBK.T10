<template>
  <div class="dashboard-container">
    <div class="card">
      <h2>Dashboard</h2>
      <p>Selamat datang di <strong>Dashboard Toko Kosmetik</strong> Toko Kosmetik.</p>
      <p>Kelola produk, transaksi, dan laporan dengan mudah dari satu tempat.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}

.card {
  background: white;
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 600px;
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #8e44ad;
  margin-bottom: 1rem;
  font-size: 2rem;
}

p {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
