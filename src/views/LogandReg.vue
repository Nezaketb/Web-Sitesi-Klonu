<template>
<div class="logandred">
  <img class="logreg" src="https://cdn-mgsm.akinon.net/cms/2021/02/11/74f0da7b-b87c-4418-9739-a132b3acc4cf.png">
    <Login/>
    <Register/>
</div>
</template>

<script>
import Login from '@/components/Login';
import Register from '@/components/Register.vue';


export default {
  name: 'App',
  
  
  components: {
     Login,
     Register
  }
};
</script>
<style>
.logreg{
  position: absolute;
  top: 200px;
  width: 2000px;
}
</style>
