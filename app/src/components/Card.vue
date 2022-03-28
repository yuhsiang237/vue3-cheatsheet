<template>
  <div class="card">
    <div class="container">
      <img :src="imgUrl" style="width:100%">
      <b>{{firstName}} {{lastName}}</b>
      <div>Email:{{email}}</div> 
    </div>
  </div>
</template>
<script>
import { } from 'vue'

/**
 * 元件名稱：Card
 * 描述：顯示使用者資訊卡
 */
export default {
  name: "v-card",
  props: [
    'firstName', 
    'lastName',
    'email',
    'imgUrl'
  ],
  setup(){
  
  }
};
</script>

<style>
.card {
  clear:both;
   display: block;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 180px;
  word-break: break-all;
  margin-bottom: 15px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>