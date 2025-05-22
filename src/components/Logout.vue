<template>
  <div>
    <p>Anda telah logout. Mengalihkan ke halaman login...</p>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  mounted() {
    this.$router.push('/');
  }
}
</script>

<style scoped>
p {
  text-align: center;
  margin-top: 100px;
  font-size: 18px;
}
</style>
