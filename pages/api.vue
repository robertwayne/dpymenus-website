<template>
  <div>
    <strong>TextMenu</strong>

    <div>
      <strong>Methods</strong>
      <ul>
        <li v-for="method in methods">
          {{ method }}
        </li>
      </ul>
    </div>

    <div>
      <strong>Attributes</strong>
      <ul>
        <li v-for="attr in attrs">
          {{ attr }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      methods: ['add_pages', 'close', 'close_session', 'flush', 'go_to'],
      attrs: ['a', 'b', 'c']
    }
  }
}
</script>

<style>

</style>
