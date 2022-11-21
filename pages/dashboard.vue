<template>
  <NuxtLayout :name="layout">
    Dashboard
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi incidunt blanditiis labore consequatur officiis, accusamus numquam animi aperiam delectus!</p>

    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
// You might choose this based on an API call or logged-in status
const layout = "dashboard";



</script>