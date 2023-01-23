<template>
<div class="basket">
    <img src="https://cdn-mgsm.akinon.net/cms/2021/09/01/11993a3d-5411-4a86-84ed-47db2379b576.jpe">
    <Basket/>
</div>
</template>
<script>
import Basket from '@/components/Basket.vue';

export default {
  name: 'App1',

  components: {
     Basket
  }
};
</script>
<style>

.basket{
    position: absolute;
    top: 250px;
    left: 175px;
}
</style>