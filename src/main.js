import Vue from 'vue'
import App from './App.vue'
import Widget from './views/Widget.vue'
import router from './router'
import VModal from 'vue-js-modal'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import VueTheMask from 'vue-the-mask'
import flatpickr from "flatpickr"
import Vuelidate from 'vuelidate'
import vueTippy from 'vue-tippy'
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'
import Geometria from './assets/fonts/Geometria.ttf';

Vue.config.productionTip = false

Vue.use(vueCustomElement)
Vue.use(VModal, {
  dynamicDefaults: {
    draggable: true,
    resizable: true
  }
})
Vue.use(VueTheMask)
Vue.use(flatpickr)
Vue.use(Vuelidate)
Vue.use(vueTippy)

Widget.router = router

Vue.customElement('vue-widget', Widget)
