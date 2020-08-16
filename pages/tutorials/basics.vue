<template>
  <article>
      <NuxtContent class="prose max-w-none" :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('articles/basics_tutorial').fetch()

    return {
      page
    }
  }
}
</script>

