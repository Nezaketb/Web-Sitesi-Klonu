<template>
<div class="js-basket-container basket__container" v-for="product in products" :key="product.id" style="display: block;">
          <div class="clear"></div>
          <div class="col-sm-9"> 
            <div class="basket__item-box">
              <h1 class="basket__title hidden-xs">
                SEPETİM
              </h1>
              <div class="basket__items js-basket-items"><div id="basket-item-39036" class="basket__item">
      <div class="basket__item__img-box">
        <a href="/product/39036">
      <img :src="product.image">
    </a>
      </div>
      <div class="basket__item__text">
        <a href="/product/39036">{{product.name}}</a><br>
        <span></span><br class="hidden-xs">
        <span>9,8X9,8X12CM</span>
      </div>
      <div class="basket__item__counter-box">
        <div class="product-counter js-counter">
          <div class="product-counter__minus ">
            <img class="minus" src="https://icons.veryicon.com/png/o/miscellaneous/standard-general-linear-icon/minus-29.png">
          </div>
          <div class="product-counter__count js-number">
            <input type="text" value="1" data-id="39036">
          </div>
          <div class="product-counter__plus">
            <img class="minus" src="https://icons.veryicon.com/png/o/miscellaneous/standard-general-linear-icon/plus-60.png">
          </div>
        </div>
        <div class="basket__item__counter-box__error hide">
          
        </div>
      </div>
      <div class="basket__item__amount">
        <div class="basket__item__price-discounted">{{product.oldprice}}</div>
        <div class="basket__item__price">{{product.price}}TL</div>
      </div>
      <div class="basket__item__delete">
        <a class="delete js-delete" href="#">x</a>
      </div>
    </div></div>
            </div>            
            <div class="text-left">
              <a href="/" class="basket__continue hidden-xs">
                Alışverişe devam et
                <img class="next" src="https://www.svgrepo.com/show/76216/right-thin-chevron.svg">
              </a>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="basket__summary js-basket-summary">
    <h1 class="basket__title">
      Sipariş Özeti <span> 1 ürün</span>
    </h1>
    <div class="basket__summary__list">
      <div class="basket__summary__item">
        <div>Ürünlerin Toplamı</div>
        <div class="basket__summary__item__number">{{product.price}} TL</div>
      </div>
    </div>
    <div class="basket__summary__list basket__summary__list--total hidden-xs">
      <div class="basket__summary__item">
        <div>Toplam</div>
        <div class="basket__summary__item__number js-basket__summary__item__number">{{product.price}} TL</div>
      </div>
    </div>
    </div>
    <form class="basket__discount-code cf js-voucher-form voucher-form" method="POST">
  <div class="basket__discount-code__title">
    İndirim Kodu
  </div>
  <div class="button-input">
  <input name="voucher_code" type="text" class="basket__discount-code__input">
  <button class="basket__discount-code__button">
   <span class="hidden-xs"> Gönder </span>
  </button>
  </div>
</form>
<a href="/orders/checkout/" class="basket__accept hidden-xs">
              <span>SEPETİ ONAYLA</span> <img class="next" src="https://expatexplore.com/assets/img/icons/Chevron.svg">
            </a>
  </div>
          </div>
          <div class="clear"></div>
        </template>
        <style >
.plus{
  width: 15px;
  height: 15px;
  position: absolute;
  top: -40px;
}
.minus{
  width: 15px;
  height: 15px; 
  display: flex;
  position: relative;
  left: 30px;
  top: -40px;
}
   .next{
    width: 20px;
    height: 20px;
   }       
          .button-input{
            display: flex;
            flex-direction: row;
          }
        .basket__container {
        float: left;
        margin-top: 15px;
        margin-bottom: 50px;
          }
         

    .col-sm-12 {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
    }
    div{
        margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    .basket__discount-code {
    display: flex;
    flex-direction:column;
    margin-bottom: 15px;
    padding: 13px;
    border: 1px solid #e9e9e9;
    position: relative;
    }
    input{
      width:10px;
    border-radius: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    }
    .basket__discount-code__title {
    margin-bottom: 5px;
    }
    .voucher-code-remove {
    display: none;
    float: right;
    color: #e74c3c!important;
    font-size: 12px;
    text-decoration: underline;
    }
    .basket__discount-code__input {
    border: 1px solid gray;
    float: left;
    width: 63%;
    height: 30px;
    margin-right: 2%;
    padding-left: 5px;
    }
    .basket__discount-code__button {
    float: left;
    width: 35%;
    height: 30px;
    padding: 0;
    color: #4e4e4e;
    background: transparent;
    border: 1px solid #ad1111;
}
.col-sm-9 {
    float: left;
    width: 100%;
    position: relative;
    right: 70px;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}
.basket__item-box {
    zoom: 1;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid #e9e9e9;
}
.basket__title {
    font-size: 24px;
}
.basket__items {
    display: table;
    width: 100%;
    margin-top: 10px;
}
.basket__item {
    display: table-row;
}
.basket__item__img-box {
    width: 120px;
    text-align: left;
}
.basket__item__img-box img {
    width: 100%;
}
img {
    max-width: 100%;
}
.basket__item>* {
    display: table-cell;
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid #e9e9e9;
    vertical-align: middle;
}
.basket__item__text {
    padding: 0 25px;
    text-align: left;
    font-weight: 600;
    word-break: break-word;
}
.basket__item__counter-box {
    position: relative;
    min-width: 180px;
}
.product-counter {
    display: inline-block;
    vertical-align: middle;
    padding: 1px;
    height: 40px;
    background: #e8e8e8;
}
.basket__item__amount {
    line-height: 1.2;
    white-space: nowrap;
}
.basket__item__price-discounted {
    color: #8a8a8a;
    text-decoration: line-through;
}
.basket__item__price {
    font-size: 20px;
    font-weight: 600;
}
.basket__item__delete {
    font-size: 20px;
    width: 50px;
}
.text-left {
    text-align: left;
}
a.basket__continue {
    display: inline-block;
    margin-bottom: 10px;
    height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 35px;
    text-decoration: none;
    background-color: #f1f1f1;
    text-transform: uppercase;
    border-radius: 5px;
}
a.basket__continue em {
    margin-left: 5px;
    text-transform: uppercase;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
a{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    color: inherit;
}
.col-sm-3 {
    width: 35%;
    position: relative;
    top: -200px;
    left: 840px;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;

}
.basket__summary {
  margin-top: 0px;
    margin-bottom: 5px;
    padding: 16px 13px;
    color: #31363a;
    border: 1px solid #e9e9e9;
}
h1{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.basket__title span {
    font-size: 14px;
    color: #8a8a8a;
    display: block;
}
.basket__summary__list {
    display: table;
    width: 100%;
    color: #31363a;
}
.basket__summary__item {
    display: table-row;
}
.basket__summary__item>* {
    display: table-cell;
    padding: 6px 0;
    vertical-align: middle;
}
.basket__summary__item>:nth-child(2) {
    text-align: right;
    white-space: nowrap;
}
.basket__summary__item__number {
    font-size: 20px;
    font-weight: 600;
}
.basket__summary__line {
    margin-top: 10px;
    border-top: 1px solid #e9e9e9;
}


.basket__accept {
    margin-top: 17px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    font-family: Open Sans;
    text-align: center;
    color: #fff;
    background: #ad1111;
    text-transform: uppercase;
    position:relative; 
}
.row{
    margin-left: -15px;
    margin-right: -15px;
}

</style>
<script>
import axios from 'axios';


export default{
  name:"produc",
  data(){
    return{
      products : [],
      name:""
    };
  },

  async created() {
    try{
      const res = await axios.get('http://localhost:3000/products')
      this.products = res.data;
    }
    catch (e)
    {
      console.error(e);
    }
  },
  
};
</script>