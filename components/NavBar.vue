<template>
  <nav>
    <nav class="flex items-center justify-between bg-dis-darkest flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-dis-light-grey mr-6">
          <span class="font-semibold text-2xl tracking-tight logo-text">
            learn :: dpymenus
          </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-dis-grey border-teal-400 hover:text-dis-light-grey hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow text-right">
          <nuxt-link to="https://dpymenus.rtfd.io" class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-dis-light-grey mr-4">
            API Docs
          </nuxt-link>
          <nuxt-link to="/codegen" class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-white mr-4">
            Embed Code Gen
          </nuxt-link>
          <a href="https://github.com/robertwayne/dpymenus" class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>

</script>

<style>
.logo-text {
  font-family: 'Montserrat', sans-serif;
}
</style>
