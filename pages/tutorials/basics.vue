<template>
  <article>
      <NuxtContent class="prose max-w-none" :document="page" />
  </article>
</template>

<style>

</style>

<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/components/prism-python.js'

export default {
  async asyncData({ $content }) {
    const page = await $content('articles/basics_tutorial').fetch()

    return {
      page
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

