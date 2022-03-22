<template>
  <input type="text"  class="form-control" v-bind:value="number" v-on:change="handlerChange" />
</template>
<script>
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
    data: function () {
      return {
        
      };
    },
    setup(){
        // 離開輸入視窗時更新
       function handlerChange (event) {
        this.number = parseFloat(event.target.value).toFixed(this.fixedDigit);
        emit('update:value', this.number)

        
        this.$emit("", );
        console.log("離開輸入框 number:", this.number);
      }
      return{
        handlerChange
      }
    },
    watch: {
      // 監聽父元件數值變動刷新
      value: function (newVal) {
        this.number = newVal;
        this.number = parseFloat(this.number).toFixed(this.fixedDigit);
        this.$emit("update:value", this.number);
        console.log("父層props更新 number:", this.number);
      },
    },
    mounted: function () {
      // 第一次載入初始化
      this.number = parseFloat(this.number).toFixed(this.fixedDigit);
      this.$emit("update:value", this.number);
      console.log("初始載入 number:", this.number);
    }
  };
  </script>