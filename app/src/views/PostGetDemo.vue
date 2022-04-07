<template>
  <div>
    <h3>GET</h3>
    <input type="text" v-model="userId"/>
    <button @click="getUser">撈取</button>
    <div>
      {{getUserResponse}}
    </div>
    <h3>POST</h3>
    <label>名稱</label><input type="text" v-model="userName" />
    <label>職業</label><input type="text"  v-model="jobTitle"/>
    <button @click="createUser">建立</button>
    <div>
      {{createUserResponse}}
    </div>
    
  </div>
</template>

<script>
 import { ref } from 'vue'
 export default {
   name: 'app-post-get-demo',
   props: [],
   components:{
   },
   setup(){

    const userName = ref('')
    const jobTitle = ref('')
    const createUserResponse = ref('');
    const userId = ref('');
    const getUserResponse = ref('')

    function createUser(){
      fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": userName.value,
          "job": jobTitle.value
        })
      })
      .then(res=>res.json())
      .then(res=>{
        createUserResponse.value = JSON.stringify(res);
      })
    }

    
    function getUser(){
      fetch("https://reqres.in/api/users/" + userId.value)
      .then(res=>res.json())
      .then(res=>{
        getUserResponse.value = JSON.stringify(res);
      })
    }

    return {
      userName,
      jobTitle,
      createUser,
      createUserResponse,
      getUserResponse,
      userId,
      getUser
    }
   }
 }
 </script>