<template>
  <div>
    <NuxtLink class="nuxt-link" to="/">Home</NuxtLink>
    <NuxtLink class="nuxt-link" to="/demo/page1">page1</NuxtLink>
    <NuxtLink class="nuxt-link" to="/demo/page2">page2</NuxtLink>
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
  .nuxt-link {
    text-decoration: none;
    margin: 0 10px;
  }
</style>
