<template>
<div class="ProductListviews">
<Listinfo/>
<ProductList/>
</div>
</template>
<script>
import Listinfo from '@/components/Listinfo';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'App',

  components: {
     Listinfo,
     ProductList
  }
};
</script>
<style>
.ProductListviews{
    position: absolute;
}
</style>


