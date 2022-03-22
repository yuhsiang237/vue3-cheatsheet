<template>
  <input type="text"  class="form-control" v-bind:value="number" v-on:change="handlerChange" />
</template>
<script>
   import { ref } from 'vue'
 
  /**
   * 元件名稱：浮點數輸入框
   * 描述：輸入的數字後面會補上固定位數小數點
   */
  export default {
    name: "FloatInput",
    props: [
      'value', //數值
      'fixedDigit' //固定小數點位數
    ],
    emits: ['update:value'],
    setup(props,context){
      
      const number = ref(props.value.toFixed(props.fixedDigit));
      // 第一次載入初始化
      context.emit("update:value", number.value);
      console.log("初始載入 number:", number.value);

      // 更新父層
      function handlerChange () {
        number.value = parseFloat(event.target.value).toFixed(props.fixedDigit);
        context.emit('update:value',number.value)
        console.log("離開輸入框 number:", number.value);
      }

      return{
        number,
        handlerChange
      }
    }
  };
  </script>
