<template>
  <div>
    <h1>{{myTitle}}</h1>
    <div>nav</div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about/30">About</router-link>
      </li>
      <li>
        <router-link to="/providerInjectExample">ProviderInjectExample</router-link>
      </li>
    </ul>
</div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'app-nav',
  props: ['title'],
  setup(props){
    const myTitle = ref(props.title)
    return {
      myTitle
    }
  }
}
</script>