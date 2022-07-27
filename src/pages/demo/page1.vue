<script setup>
const { data } = await useFetch('/api/pageview')

console.log(data);

const time = useTimeAgo(computed(() => data.value.startAt))
</script>

<template>
  <div>
    <span>{{ data.pageview }}</span>
    page views since
    <span>{{ time }}</span>
  </div>
</template>
