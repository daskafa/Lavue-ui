<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-gray-200 px-20 py-16 rounded-xl shadow-lg">
      <Logo />
      <div class="mt-5 block">
        <input
          type="text"
          class="p-3 shadow-2xl rounded-md"
          placeholder="Mail adresiniz."
          v-model="form.email"
        />
        <input
          type="password"
          class="p-3 shadow-2xl rounded-md mt-3"
          placeholder="Şifreniz."
          v-model="form.password"
        />
        <button
          class="mt-5 bg-blue-600 px-8 py-2 rounded-md shadow-lg text-white"
          type="submit"
          @click.prevent="login"
        >
          Giriş
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  components: {
    Logo,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios.post("http://lavue-api.test/api/login", this.form).then((res) => {
        localStorage.setItem("token", res.data.token);
      });
      axios
        .get("http://lavue-api.test/api/users", {
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  outline: none;
}
</style>