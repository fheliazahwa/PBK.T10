import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../components/Dashboard.vue';
import ProdukList from '../components/List.vue';
import ProdukDetail from '../components/ProdukDetail.vue';
import ProdukTambah from '../components/Tambah.vue';
import TransaksiRiwayat from '../components/Riwayat.vue';
import Laporan from '../components/Laporan.vue';
import Login from '../components/Login.vue';
import Logout from '../components/Logout.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {
    path: '/produk',
    name: 'ProdukList',
    component: ProdukList
  },
  {
    path: '/produk/tambah',
    name: 'ProdukTambah',
    component: ProdukTambah
  },
  {
    path: '/produk/:id',
    name: 'ProdukDetail',
    component: ProdukDetail,
    props: true
  },
  {
    path: '/transaksi/riwayat',
    name: 'TransaksiRiwayat',
    component: TransaksiRiwayat
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: Laporan
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
