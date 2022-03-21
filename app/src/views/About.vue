<template>
 <div>
   about4
   {{ $route.params.id }}
   {{ $route.query.utm_source}}
   {{ $route.query.utm_medium}}
 </div>
</template>
<script>
import {  } from 'vue'
export default {
  name: 'app-about',
  props: {
    msg: String
  },
  setup(){
   
  }
}
</script>