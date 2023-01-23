<template>
      <div id="produc">
        <div class="card" v-for="product in products" :key="product.id">
          <router-link to="/ProductDetail">
    <a class="product-item__img">
    <img :src="product.image" class="product-item-image" >
  </a>
  </router-link>
  <router-view></router-view>
    <div class="producttitle">
        <a href="#">{{product.name}}</a>
    </div>
    <div class="product-item__value">
      <div class="product-item__amount">
        <div class="product-item__amount-row">
          <div class="product-item__amount__discounted amaount-retail">
            <span>{{product.oldprice}}</span>
          </div>
          {{product.price}}
          <span>TL</span>
        </div>
        </div>
      </div>
  </div>
    </div>
</template>
<style>
.addtocart{
   display: block;
            color: white;
            width: 150px;
            height: 30px;
            margin-bottom: 18px;
            font-size: 16px;
            font-weight: 400;
            border: 0;
            background-color: #ad1111;
}
#produc{
  font-size: 14px;
  display:flex;
  position: relative;
  top: 290px;
  left:190px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1100px;
}
.card{
  width:350px;

}
.producttitle{
    height: 30px;
    overflow: hidden;
    margin-top:4px;
}
.product-item__amount {
    margin-top: 10px;
    font-size: 14px;
    flex-wrap: wrap;
    font-weight: 200;
    line-height: 1.2;
}
.product-item__amount-row {
    font-size: 24px;
}
.product-item__amount .amaount-retail {
    text-decoration: line-through;
}
.product-item__amount__discounted {
    margin-top: 0;
}
.product-item__amount__discounted {
    font-size: 20px;
    font-weight: 400;
    color: #a80000;
}


</style>
<script>



</script>