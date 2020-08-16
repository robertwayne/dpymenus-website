<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3" v-on:click="toggleTabs(1)" v-bind:class="{'text-dis-light-grey': openTab !== 1, 'text-white border-b-2 border-dis-light-grey': openTab === 1}">
            Basics
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-dis-light-grey': openTab !== 2, 'text-white border-b-2 border-dis-light-grey': openTab === 2}">
            Text Menu
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-dis-light-grey': openTab !== 3, 'text-white border-b-2 border-dis-light-grey': openTab === 3}">
            Paginated Menu
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-dis-light-grey': openTab !== 4, 'text-white border-b-2 border-dis-light-grey': openTab === 4}">
            Poll
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 leading-normal" v-on:click="toggleTabs(5)" v-bind:class="{'text-dis-light-grey': openTab !== 5, 'text-white border-b-2 border-dis-light-grey': openTab === 5}">
            Button Menu
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 leading-normal" v-on:click="toggleTabs(6)" v-bind:class="{'text-dis-light-grey': openTab !== 6, 'text-white border-b-2 border-dis-light-grey': openTab === 6}">
            Custom Menu
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words text-dis-light-grey bg-dis-darker w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <TextMenuTutorial />
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
                Completely synergize resource taxing relationships via
                premier niche markets. Professionally cultivate one-to-one
                customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 6, 'block': openTab === 6}">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {TextMenuTutorial} from '~/components/TextMenuTutorial.vue'

export default {
  name: "tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
