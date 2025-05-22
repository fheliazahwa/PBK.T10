<template>
  <div class="tambah-produk-container">
    <h2>Tambah Produk</h2>
    <p>Form untuk menambahkan produk baru.</p>

    <form @submit.prevent="submitForm" class="produk-form">
      <div class="form-group">
        <label for="nama">Nama Produk</label>
        <input
          type="text"
          id="nama"
          v-model="produk.nama"
          placeholder="Masukkan nama produk"
          required
        />
      </div>

      <div class="form-group">
        <label for="deskripsi">Deskripsi Produk</label>
        <textarea
          id="deskripsi"
          v-model="produk.deskripsi"
          placeholder="Masukkan deskripsi produk"
          required
          rows="4"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="harga">Harga Produk (Rp)</label>
        <input
          type="number"
          id="harga"
          v-model.number="produk.harga"
          placeholder="Masukkan harga produk"
          min="0"
          required
        />
      </div>

      <button type="submit" class="btn-submit">Tambah Produk</button>
    </form>

    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdukTambah",
  data() {
    return {
      produk: {
        nama: "",
        deskripsi: "",
        harga: null,
      },
      successMessage: "",
    };
  },
  methods: {
    submitForm() {
      // Simulasi penyimpanan data produk (bisa dikembangkan ke API)
      console.log("Produk ditambahkan:", this.produk);

      // Reset form
      this.produk.nama = "";
      this.produk.deskripsi = "";
      this.produk.harga = null;

      // Tampilkan pesan sukses
      this.successMessage = "Produk berhasil ditambahkan!";

      // Hilangkan pesan sukses setelah 3 detik
      setTimeout(() => {
        this.successMessage = "";
      }, 3000);
    },
  },
};
</script>

<style scoped>
.tambah-produk-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(142, 68, 173, 0.15);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

h2 {
  color: #8e44ad;
  margin-bottom: 0.5rem;
  text-align: center;
}

p {
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
}

.produk-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #6a1b9a;
}

input[type="text"],
input[type="number"],
textarea {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: 1.5px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  border-color: #8e44ad;
  outline: none;
}

button.btn-submit {
  background-color: #8e44ad;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  align-self: center;
  width: 50%;
}

button.btn-submit:hover {
  background-color: #732d91;
}

.success-message {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 10px;
  color: #155724;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(21, 87, 36, 0.15);
}
</style>
