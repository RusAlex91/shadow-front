import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { firebase } from '@firebase/app'
require('firebase/firestore')
require('firebase/app')

import VueResource from "vue-resource"

Vue.use(VueResource);
Vue.http.options.root = "https://vue-http-e8d07.firebaseio.com/data.json"

firebase.initializeApp({
    apiKey: "AIzaSyD-yvknN76TkoeJY-0zYg1KwL-t-eBRlXk",
    authDomain: "shadow-front-40495.firebaseapp.com",
    databaseURL: "https://shadow-front-40495-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "shadow-front-40495",
    storageBucket: "shadow-front-40495.appspot.com",
    messagingSenderId: "271846309827",
    appId: "1:271846309827:web:ec166a8c6a83c3b33c0776",
    measurementId: "G-VS943DJ8RZ"
});

Vue.prototype.$firebaseDatabase = firebase.default.firestore()
new Vue({
    render: h => h(App),
}).$mount('#app')