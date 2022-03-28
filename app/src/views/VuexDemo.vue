<template>
 <div>
    數量:{{ count }}
    <input type="number" v-model="num"/>
    <button @click="addValue">增加</button>
 </div>
</template>
<script>
import { computed,ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'app-vuex-demo',
  props: [],
  setup(){
    const store = useStore()
    const num = ref('')
    // 從store來的數值
    const count = computed(() => store.state.count)

    // 增加數值
    function addValue(){
       // 利用store commit 提交更新
       store.commit('increment',Number(num.value))      
       num.value = ''
    }    

    return {
      count,
      num,
      addValue
    }
  }
}
</script>