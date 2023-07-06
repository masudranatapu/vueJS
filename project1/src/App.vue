<template>
  <div>
    <app-header></app-header>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Headers from './Components/layouts/Header.vue';
  import Footers from './Components/layouts/Footer.vue';
  export default {
    data() {
      return {
        name: "Masud Rana Tapu",
        age: 25,
      }
    },
    components: {
      'app-header': Headers,
      'app-footer': Footers,
    }
  }
</script>

<style>
  
</style>