// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import FastClick from 'fastclick';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import router from './router';
import { Flexbox, FlexboxItem } from 'vux';

FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  components: { App },
  template: '<App/>'
});
