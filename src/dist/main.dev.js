"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _Widget = _interopRequireDefault(require("./views/Widget.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vueJsModal = _interopRequireDefault(require("vue-js-modal"));

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");

var _vueTheMask = _interopRequireDefault(require("vue-the-mask"));

var _flatpickr = _interopRequireDefault(require("flatpickr"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

var _vueTippy = _interopRequireDefault(require("vue-tippy"));

var _vueCustomElement = _interopRequireDefault(require("vue-custom-element"));

require("document-register-element/build/document-register-element");

var _Geometria = _interopRequireDefault(require("./assets/fonts/Geometria.ttf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_vue["default"].use(_vueCustomElement["default"]);

_vue["default"].use(_vueJsModal["default"], {
  dynamicDefaults: {
    draggable: true,
    resizable: true
  }
});

_vue["default"].use(_vueTheMask["default"]);

_vue["default"].use(_flatpickr["default"]);

_vue["default"].use(_vuelidate["default"]);

_vue["default"].use(_vueTippy["default"]);

_Widget["default"].router = _router["default"];

_vue["default"].customElement('vue-widget', _Widget["default"]); // new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')