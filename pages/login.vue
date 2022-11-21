<template>
  <div>
    <button @click="login">Azure Login</button>
  </div>
</template>


<script setup>
async function login() {
   const loginUrl = useBaseFetch('/auth/azure')
   console.log("🚀 ~ file: login.vue ~ line 12 ~ login ~ loginUrl", loginUrl)
}
</script>