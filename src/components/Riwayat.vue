<template>
  <div class="riwayat-container">
    <h2>Riwayat Transaksi</h2>
    <p>Menampilkan riwayat transaksi pembelian pelanggan.</p>

    <table class="riwayat-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Pelanggan</th>
          <th>Tanggal</th>
          <th>Jumlah Produk</th>
          <th>Total Harga (Rp)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaksi, index) in transaksiList" :key="transaksi.id">
          <td>{{ index + 1 }}</td>
          <td>{{ transaksi.namaPelanggan }}</td>
          <td>{{ transaksi.tanggal }}</td>
          <td>{{ transaksi.jumlahProduk }}</td>
          <td>{{ transaksi.totalHarga.toLocaleString() }}</td>
          <td :class="{'status-selesai': transaksi.status === 'Selesai', 'status-pending': transaksi.status === 'Pending'}">
            {{ transaksi.status }}
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="transaksiList.length === 0" class="empty-message">
      Belum ada riwayat transaksi.
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransaksiRiwayat',
  data() {
    return {
      transaksiList: [
        {
          id: 1,
          namaPelanggan: 'Anna Wijaya',
          tanggal: '2025-05-15',
          jumlahProduk: 3,
          totalHarga: 450000,
          status: 'Selesai'
        },
        {
          id: 2,
          namaPelanggan: 'Budi Santoso',
          tanggal: '2025-05-18',
          jumlahProduk: 1,
          totalHarga: 150000,
          status: 'Pending'
        },
        {
          id: 3,
          namaPelanggan: 'Citra Dewi',
          tanggal: '2025-05-20',
          jumlahProduk: 5,
          totalHarga: 750000,
          status: 'Selesai'
        }
      ]
    }
  }
}
</script>

<style scoped>
.riwayat-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(142, 68, 173, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

h2 {
  color: #8e44ad;
  margin-bottom: 0.25rem;
  text-align: center;
}

p {
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
}

.riwayat-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(142, 68, 173, 0.05);
}

.riwayat-table th,
.riwayat-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.riwayat-table thead {
  background-color: #8e44ad;
  color: white;
  font-weight: 600;
}

.riwayat-table tbody tr:hover {
  background-color: #f4e9fc;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.status-selesai {
  color: #27ae60;
  font-weight: 700;
}

.status-pending {
  color: #e67e22;
  font-weight: 700;
}

.empty-message {
  text-align: center;
  font-size: 1.1rem;
  color: #999;
  margin-top: 3rem;
  font-style: italic;
}
</style>
