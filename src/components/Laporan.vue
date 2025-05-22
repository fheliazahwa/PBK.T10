<template>
  <div class="laporan-container">
    <h2>Laporan Penjualan</h2>
    <p>Halaman laporan penjualan dan performa toko kosmetik Anda.</p>

    <div class="stats-cards">
      <div class="card">
        <h3>Total Penjualan</h3>
        <p>{{ totalPenjualan.toLocaleString() }} Produk</p>
      </div>
      <div class="card">
        <h3>Pendapatan</h3>
        <p>Rp {{ totalPendapatan.toLocaleString() }}</p>
      </div>
      <div class="card">
        <h3>Transaksi Bulan Ini</h3>
        <p>{{ transaksiBulanIni }}</p>
      </div>
    </div>

    <div class="chart-placeholder">
      <p>Grafik performa penjualan akan ditampilkan di sini.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laporan',
  data() {
    return {
      totalPenjualan: 1240,
      totalPendapatan: 183500000,
      transaksiBulanIni: 87
    }
  }
}
</script>

<style scoped>
.laporan-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 25px rgba(142, 68, 173, 0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  text-align: center;
}

h2 {
  color: #8e44ad;
  margin-bottom: 0.2rem;
}

p {
  color: #fbfafa;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.stats-cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.card {
  background: #8e44ad;
  color: white;
  padding: 1.8rem 2.5rem;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(142, 68, 173, 0.3);
  flex: 1 1 220px;
  min-width: 200px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 30px rgba(142, 68, 173, 0.5);
}

.card h3 {
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.card p {
  font-size: 1.5rem;
  font-weight: 700;
}

.chart-placeholder {
  padding: 3rem;
  border: 2px dashed #8e44ad;
  border-radius: 16px;
  color: #8e44ad;
  font-style: italic;
  font-size: 1.2rem;
  user-select: none;
}
</style>
