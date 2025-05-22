<template>
  <div class="produk-detail">
    <h2>Detail Produk {{ id }}</h2>
    <p>Informasi lengkap tentang produk kosmetik nomor {{ id }}.</p>
    <router-link to="/produk">Kembali ke Daftar Produk</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProdukDetail',
  props: ['id']
}
</script>

<style scoped>
.produk-detail {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #2c3e50;
}

h2 {
  color: #8e44ad;
  margin-bottom: 1rem;
}
</style>
