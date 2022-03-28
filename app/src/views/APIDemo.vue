<template>
  <div>
    <h3>使用Fetch</h3>    
    <Card 
    v-for="item in responseByFetch.data" :key="item.id"
      :imgUrl="item.avatar" 
      :firstName="item.first_name"
      :lastName="item.last_name"
      :email="item.email"
    />
    <h3>使用Axios</h3>
    <Card 
      v-for="item in responseByAxios.data" :key="item.id"
      :imgUrl="item.avatar" 
      :firstName="item.first_name"
      :lastName="item.last_name"
      :email="item.email"
    />
  </div>
</template>

<script>
 import { ref } from 'vue'
 import axios from 'axios';
 import Card from '@/components/Card'
 export default {
   name: 'app-api-demo',
   props: [],
   components:{
     Card
   },
   setup(){
     const responseByFetch = ref({})
     const responseByAxios = ref({})
    
     // eslint-disable-next-line  
     function getDataByFetch(){      
       fetch('https://reqres.in/api/users')
       .then(response => response.json())
       .then(data =>{
         responseByFetch.value = data
       })
     }
     
      // eslint-disable-next-line 
      function getDataByAxios(){      
       axios.get('https://reqres.in/api/users')
       .then(response =>{
         responseByAxios.value = response.data
       })
     }
     
    // 照順序撈API
    // eslint-disable-next-line 
    async function getByOrder(){
      await fetch('https://reqres.in/api/users')
       .then(response => response.json())
       .then(data =>{
          console.log("我第一個",data)
       })
       console.log("印一行字1")
       await fetch('https://reqres.in/api/users')
       .then(response => response.json())
       .then(data =>{
          console.log("我第二個",data)
       })
       console.log("印一行字2")
       await fetch('https://reqres.in/api/users')
       .then(response => response.json())
       .then(data =>{
          console.log("我第三個",data)
       })
       console.log("印一行字3")
    } 

    // 不照順序撈API
    // eslint-disable-next-line 
    function getByRandomOrder(){
       fetch('https://reqres.in/api/users')
       .then(response => response.json())
       .then(data =>{
          console.log("我第一個",data)
       })
       console.log("印一行字1")
       fetch('https://reqres.in/api/users')
       .then(response => response.json())
       .then(data =>{
          console.log("我第二個",data)
       })
       console.log("印一行字2")
       fetch('https://reqres.in/api/users')
       .then(response => response.json())
       .then(data =>{
          console.log("我第三個",data)
       })
       
       console.log("印一行字3")
    } 

    // 一次併發撈所有API
    // eslint-disable-next-line 
    function getByPromiseAll(){
      Promise.all([
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users')
      ])
      .then(res => Promise.all( res.map(r => r.text()) ))
      .then(res=>{
        const data1 = res[0]
        const data2 = res[1]
        const data3 = res[2]

        console.log(data1,data2,data3)
      });
    }

    getDataByFetch()
    getDataByAxios()
    
    // getByOrder()
    // getByRandomOrder()
    // getByPromiseAll()
    
    return {
       responseByFetch,
       responseByAxios
     }
   }
 }
 </script>