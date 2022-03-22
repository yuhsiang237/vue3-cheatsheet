<template>
  <div>home
    <FloatInput
    v-bind:value="number"
    v-bind:fixed-digit="2"
    @update:value="(x) => number = x"
  />
  {{number}}
    a:{{a}}<br/>
    c:{{c}}<br/>
    123
    <div>sum:{{a + c}}</div>
    <div>sum:{{sum}}</div>
    <div v-for="item in b.list" :key="item.id">
      {{item.id}}{{item.name}} {{item.price}}
    </div>
    <button @click="test">123</button>
  </div>

</template>
<script>
import { ref , reactive, computed } from 'vue'
import FloatInput from "@/components/FloatInput.vue";

export default {
  name: 'app-home',
  props: {
    msg: String
  },
  components:{
    FloatInput
  },
  setup(){
    const number = ref(100);

    const a = ref(100);
    const b = reactive({
      list:[
        {id:1,name:'y',count:3,price:20},
        {id:2,name:'n',count:5,price:15}
      ]
    })
    const c = ref(50)
    const sum = computed(()=>{
      return a.value+c.value
    })
    function test()
    {
      alert('test')
    }
    return {
      a,
      b,
      test,
      c,
      sum,
      number
    }
  }
}
</script>
