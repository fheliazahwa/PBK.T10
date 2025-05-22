<template>
  <div class="login-container">
    <h2>Login Toko Kosmetik</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push('/dashboard');
      } else {
        alert('Username atau password salah!');
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background: #8e44ad;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #732d91;
}
</style>
