<template>
  <div>
    <h3>Dashboard</h3>
    <button @click="signOut">Sign Out</button>
    {{ $store.state }}
  </div>
</template>

<script>
  import { firebaseApp } from '../firebaseApp'

  export default {
    data() {
      return {
        tst: ''
      }
    },
    methods: {
      signOut() {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    }
  }
</script>