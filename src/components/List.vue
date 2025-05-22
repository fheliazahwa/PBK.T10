<template>
  <div class="produk-container">
    <div class="header">
      <h2>Daftar Produk</h2>
      <p>Menampilkan daftar produk kosmetik yang tersedia di toko.</p>
    </div>

    <div class="produk-list">
      <div class="produk-card" v-for="(produk, i) in produkList" :key="i">
        <img class="produk-logo" :src="produk.gambar" :alt="'Logo ' + produk.nama" />
        <h3>{{ produk.nama }}</h3>
        <p>{{ produk.deskripsi }}</p>
        <button @click="$router.push({ name: 'ProdukDetail', params: { id: i + 1 } })">
          Lihat Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import produk1 from '../assets/produk/produk1.jpg'
import produk2 from '../assets/produk/produk2.jpg'
import produk3 from '../assets/produk/produk3.jpg'
import produk4 from '../assets/produk/produk4.jpeg'

export default {
  name: 'ProdukList',
  data() {
    return {
      produkList: [
        { nama: 'Lipstik Matte', deskripsi: 'Lipstik tahan lama dengan warna elegan.', gambar: produk1 },
        { nama: 'Lose Powder', deskripsi: 'Memberikan efek blur pada wajah.', gambar: produk2 },
        { nama: 'Eyeshadow', deskripsi: 'Mempercantik Pada Kelopak Mata.', gambar: produk3 },
        { nama: 'Micellar Water', deskripsi: 'Membersihkan Kotoran Pada Wajah.', gambar: produk4 }
      ]
    }
  }
}
</script>

<style scoped>
.produk-container {
  padding: 2rem;
  background: linear-gradient(to right, #fdfbfb, #ebedee);
  min-height: 80vh;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h2 {
  font-size: 2rem;
  color: #8e44ad;
}

.header p {
  color: #555;
  font-size: 1.1rem;
}

.produk-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

.produk-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.produk-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.produk-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(142, 68, 173, 0.3);
  background-color: #fff;
}

.produk-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.produk-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.produk-card button {
  background-color: #8e44ad;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.produk-card button:hover {
  background-color: #732d91;
}
</style>
