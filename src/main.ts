import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify, type VuetifyOptions } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { ar } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

import './assets/main.scss'

const vuetifyOptions: VuetifyOptions = {
  blueprint: md3,
  components: components,
  directives: directives,
  locale: {
    locale: 'ar',
    messages: { ar }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
}

const vuetify = createVuetify(vuetifyOptions)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueAnimXyz)

app.mount('#app')
