<template>
  <nav>
    <div
      class="flex items-center justify-between bg-dis-darkest flex-wrap p-6 max-w-screen z-10 mx-auto inset-x-0 top-0 flex justify-between items-center">
      <div class="flex items-center flex-shrink-0 text-dis-light-grey mr-6">
        <nuxt-link to="/">
            <span class="font-semibold text-2xl tracking-tight logo-text">
              learn :: dpymenus
            </span>
        </nuxt-link>
      </div>

      <div class="block lg:invisible">
        <button
          class="flex items-center px-3 py-2 border rounded text-dis-grey border-teal-400 hover:text-dis-light-grey hover:border-white"
          @click="showMenu()">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      <div id="buttonMenu" class="hidden">
        <ul>
          <li>
            <nuxt-link v-if="!$route.path.includes('tutorials')"
                       to="/tutorials/basics"
                       class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-dis-light-grey mr-4">
              Tutorials
            </nuxt-link>
            <span v-else class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-dis-light-grey mr-4">
                Tutorials
            </span>
          </li>
          <li>
            <a href="https://dpymenus.rtfd.io"
               class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-dis-light-grey mr-4">
              API Docs
            </a>
          </li>
          <li>
            <nuxt-link to="/codegen" class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-white mr-4">
              Embed Code Gen
            </nuxt-link>
          </li>
          <li>
            <a href="https://github.com/robertwayne/dpymenus"
               class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-white">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow text-right">
          <nuxt-link v-if="!$route.path.includes('tutorials')"
                     to="/tutorials/basics"
                     class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-dis-light-grey mr-4">
            Tutorials
          </nuxt-link>
          <span v-else class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-dis-light-grey mr-4">
                Tutorials
              </span>
          <a href="https://dpymenus.rtfd.io"
             class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-dis-light-grey mr-4">
            API Docs
          </a>
          <nuxt-link to="/codegen" class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-white mr-4">
            Embed Code Gen
          </nuxt-link>
          <a href="https://github.com/robertwayne/dpymenus"
             class="block mt-4 lg:inline-block lg:mt-0 text-dis-grey hover:text-white">
            GitHub
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<script lang="ts">
export default {
  methods: {
    showMenu() {
      let el = document.getElementById('buttonMenu')
      el?.classList.contains('hidden') ? el?.classList.remove('hidden') : el?.classList.add('hidden')
    }
  }
}
</script>

<style>
.logo-text {
  font-family: 'Montserrat', sans-serif;
}
</style>
