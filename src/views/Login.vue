<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-gray-200 px-20 py-16 rounded-xl shadow-lg">
      <Logo />
      <div class="mt-5 block">
        <input
          type="text"
          class="p-3 shadow-2xl rounded-md"
          placeholder="Mail adresiniz."
        />
        <input
          type="password"
          class="p-3 shadow-2xl rounded-md mt-3"
          placeholder="Şifreniz."
        />
        <button
          class="mt-5 bg-blue-600 px-8 py-2 rounded-md shadow-lg text-white"
          type="button"
        >
          Giriş
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style scoped>
input {
  display: block;
  outline: none;
}
</style>