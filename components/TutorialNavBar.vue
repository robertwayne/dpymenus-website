<template>
  <nav class="flex flex-wrap pb-3 xl:container xl:mx-auto">
    <div class="w-9/12 mx-auto">
      <ul class="lg:flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-center">
        <li v-for="btn in buttons" :key="btn.name" class="inline -mb-px mr-2 last:mr-0 flex-auto text-center">
          <nuxt-link class="text-xs font-bold uppercase px-1 lg:px-5 py-2 outline-none focus:outline-none"
                     tag="button"
                     :to="{ path: `/tutorials/${btn.link}`} "
                     @click.native="setTab(btn.tab)"
                     v-bind:class="{'text-dis-light-grey': openTab !== btn.tab, 'text-white border-b-2 border-dis-light-grey': openTab === btn.tab}">
            {{ btn.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openTab: 1,
      buttons: [
        { name: 'Basics', tab: 1, link: 'basics' },
        { name: 'Text Menu', tab: 2, link: 'text' },
        { name: 'Paginated Menu', tab: 3, link: 'paginated' },
        { name: 'Poll', tab: 4, link: 'poll' },
        { name: 'Button Menu', tab: 5, link: 'button' },
        { name: 'Custom Menu', tab: 6, link: 'custom' }
      ],
      internalHistory: []
    }
  },
  methods: {
    setTab: function(tabNumber) {
      this.openTab = tabNumber
      this.saveTabHistory(tabNumber)
    },
    setCurrentTab: function() {
      let route = this.$route.name.substring(10)
      for (const btn of this.buttons) {
        if (btn.link === route) {
          this.openTab = btn.tab
          this.saveTabHistory(btn.tab)
        }
      }
    },
    setTabOnBack: function() {
      let next = this.internalHistory.pop()

      if (this.openTab === next) {
        this.openTab = this.internalHistory.pop()
      } else if (next === undefined) {
        this.setCurrentTab()
      } else {
        this.openTab = next
      }
    },
    saveTabHistory: function(n) {
      this.internalHistory.push(n)
    }
  },
  created() {
    this.setCurrentTab()
    this.saveTabHistory(this.openTab)
  },
  mounted() {
    window.onpopstate = this.setTabOnBack
  }
}
</script>
