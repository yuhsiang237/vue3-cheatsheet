<template>
  <nav>Nav</nav>
  <ul>
    <li>  <router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
 
</template>

<script>
export default {
  name: 'v-nav'
}
</script>

<style>
  nav{
    text-align: center;
  }
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    padding: 8px;
  }
</style>