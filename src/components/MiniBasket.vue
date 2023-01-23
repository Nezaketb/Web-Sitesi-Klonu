<template>
    <div v-for="product in products" :key="product.id" class="user-panel__basket__list js-header-basket">
            <div class="user-panel__basket__title">
              SEPETİM
            </div>
            <div class="user-panel__basket__scroller js-header-basket-scroller">
              <div class="user-panel__basket__products js-header-basket-list">
          <div class="user-panel__basket__product">
            <div>
            <a href="#" class="user-panel__basket__product__img" >
                <img :src="product.image">
            </a>
          </div>
            <a href="#" class="user-panel__basket__product__text">
              <div class="user-panel__basket__product__text-inner"><b>{{product.name}}</b> </div>
              <span>1 Adet</span>
            </a>
            <div class="user-panel__basket__product__price">
              <div><span>{{product.oldprice}}TL</span></div>
              <b>{{product.price}}TL</b>
            </div>
            <div class="user-panel__basket__product__close">
              <span class="fa fa-close js-remove-product basket_product_close" ></span>
            </div>
          </div>
        </div>
            </div>
            <div class="header__basket-discounts js-header-basket-discounts">
              
            </div>
            <div class="user-panel__basket__subtotal">
              ARA TOPLAM : <span class="js-header-basket-amount">{{product.price}}</span> TL
            </div>
            <a href="#" class="user-panel__basket__go" rel="nofollow">
              SEPETE GİT
            </a>
            <a href="#" class="user-panel__basket__complete">
              <span>SİPARİŞİ TAMAMLA</span> <i class="fa fa-chevron-right"></i>
            </a>
            <div class="header__basket__upsells js-header-basket-upsells"><span>Sepetinize 15.20 değerinde daha ürün ekleyin,<br><span>kargo bedava olsun.</span> </span></div>
          </div>
</template>
<style>
          .user-panel__basket__list {
    position: absolute;
    min-width: 390px;
    padding: 20px;
    right: -5px;
    transform: translateY(4px);
    background: #fff;
    border: 1px solid #000;
    z-index: 99999;
    transition: .2s;
          }
          .user-panel__basket__title {
            font-weight: 700;
            font-size:15px;
           }
           .user-panel__basket__product__price span {
        font-size: 12px;
        color: #8a8a8a;
        text-decoration: line-through;
         }
         .user-panel__basket__product__close .basket_product_close {
    cursor: pointer;
         }
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
          .user-panel__basket__scroller {
          max-height: 455px;
          overflow-y: auto;
         overflow-x: hidden;
         }
         .user-panel__basket__products {
        display: table;
         width: 100%;
        }
        .user-panel__basket__product {
        display: table-row;
      } 
      .header__basket-discounts {
    margin-top: 5px;
        }
        .user-panel__basket__subtotal {
    text-align: right;
    margin: 24px 0 19px;
      }
      span{
        margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
      }
      .user-panel__basket__go {
    float: left;
    height: 48px;
    line-height: 48px;
    width: 45%;
    text-decoration: underline!important;
}
   a{
    font: inherit;
    cursor:pointer;
    text-decoration: none;
    color: #31363a;
    
   }
   .user-panel__basket__complete {
    display: inline-block;
    width: 55%;
    height: 48px;
    line-height: 47px;
    background: #ad1111;
    font-family: open sans;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    text-align: center;
}
.user-panel__basket__complete span {
    vertical-align: middle;
}
.user-panel__basket__complete .fa {
    font-size: 12px;
}
.user-panel__basket__complete .fa {
    font-size: 12px;
}
.user-panel__basket__product__close .basket_product_close {
    cursor: pointer;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
.header__basket__upsells {
    background: #eff7df;
    padding: 10px;
    margin-top: 10px;
}
.user-panel__basket__product__img{
    display: block;
    width: 90px;
    height: 70px;
    background-size: cover;
    background-position: 50%;
}
.user-panel__basket__product__text {
    padding: 10px 15px;
    font-size: 12px;
}
.user-panel__basket__product>* {
    display: table-cell;
    padding: 10px 0;
    vertical-align: middle;
    border-bottom: 1px solid #d8dfe5;
}
.user-panel__basket__product__text-inner {
    max-height: 32px;
    overflow: hidden;
}
.user-panel__basket__product__text b {
    font-weight: 600;
}
b{
    margin: 5px;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
img{
    width: 90px;
    height: 70px;
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
