<template>
  <div>
    {{ location }}
    <input v-model="location" />
    <button @click="updateLocation">調用更改</button>
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'app-provider-inject-example',
  props: {
  },
  setup(){
    const location  = inject('location')
    const updateLocation = inject('updateLocation')

    return { location , updateLocation }
  }
}
</script>