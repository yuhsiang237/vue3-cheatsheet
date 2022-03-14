<template>
  <div>
    <Nav></Nav>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>