<template>
  <div>nav</div>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about/30">About</router-link>
    </li>
  </ul>
</template>
<script>
import {  } from 'vue'

export default {
  name: 'app-nav',
  props: {
    msg: String
  },
  setup(){
  
  }
}
</script>