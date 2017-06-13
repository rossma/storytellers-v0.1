import Vue from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebaseApp'

var config = require('config');

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("user exists")
  } else {
    console.log("user doesnt exist:" + config.FIREBASE.API_KEY)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
