<template>
<div class="head">
    <div  class="header">
    <div class="logo">
        <router-link to="/App">
        <a class="header-logo">
            <img src="https://cdn-mgsm.akinon.net/static_omnishop/coco179/assets/img/logo.png">
        </a>
        </router-link>
    </div>
    <router-link to="/LogandReg">
    <div class="icon-text">
        <a class="fav">
            <img src="https://img2.pngindir.com/20180531/vzt/kisspng-computer-icons-like-5b101209c29a66.5401104715277798497971.jpg" alt>
            <p>FAVORİLER</p>
        </a>
    </div>
    </router-link>
    <div class="icon">
        <img src="https://img.visilabs.net/banner/uploaded_images/3_3_20201222155543418.png">
    </div>
    <router-link to="/LogandReg">
    <div class="icon-text">
        <a  class="giris">
            <img>
            <p>GİRİŞ YAP | ÜYE OL</p>
        </a>
    </div>
    </router-link>
    <router-link to="/Basketviews">
    <div class="icon-text">
        <a  class="sepet">
            <img>
            <p> SEPETİM</p>
        </a>
    </div>
    </router-link>
    <router-link to="/App">
    <div class="icon-text">
        <a  @click="signOut" class="cıkıs">
            <img>
            <p> ÇIKIŞ YAP</p>
        </a>
    </div>
    </router-link>
    </div>
    <router-view></router-view>
    <div class="header_search">
    <form class="search">
    <input class="search_input" v-model="query" @keypress.enter="handleSearch" type="text" placeholder="Ürün ya da özellik ara">
    <button @click="handleSearch" class="search_button">
        <img src="https://fashionsista.co/downloadpng/png/20201004/search-search-button-searching-icon.jpg">
    </button>
    </form>
    <img class="headimg" src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20211206180645064.png" alt>
    </div>
    </div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";


export default {
    data() {
        return{
            query:''
        }
    },
    methods:{
        handleSearch(){
            this.$emit('SearchRequested',this.query);
        },
        signOut(){
            const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            });
        }
    }
}
</script>

<style>
.cıkıs{
    right:800px;
    margin-right: 0; 
    top: 11px;
}
.headimg{
    position: absolute;
    top: 100px;
    right: 370px;
}
.search_button {
    position: absolute;
    padding: 0;
    right: 0px;
    top: 5px;
    background-color: transparent;
    background-position: -102px -135px;
    width: 30px;
    height: 30px;
    object-fit:fill;
}
.search_input {
    background-color: #f9f9f9;
    border: 1px solid #e9e9e9;
    padding: 0 10px;
    height: 40px;
    width: 380px;
}
.header_search {
    margin: 8px -15px 0;
    padding: 7px 15px;
}
.search{
margin-top: 0;
display: flex;
position: absolute;
right: 390px;
top: 40px;
}
a{
    text-decoration: none;
    color: #333;
}
.sepet{
   display:flex;
    font: normal normal normal 14px/1 FontAwesome;
    position: absolute;
    right:400px;
    margin-right: 0; 
    top: 11px;
}
.giris{
   display:flex;
    font: normal normal normal 14px/1 FontAwesome;
    position: absolute;
    right:500px;
    margin-right: 0;
    top: 11px;
}
.icon{
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    position: absolute;
    top: 13px;
    right:655px;
    margin-right: 0;
}
.fav{
    display:flex;
    flex-direction: row;
    font: normal normal normal 14px/1 FontAwesome;
    position: absolute;
    right: 700px;
    margin-right: 0;
    text-align: center;
    top: 11px;
}
.fav img{
    top: 20px;
    width: 17px;
    height: 17px;   
}
.sepet img{
    top: 20px;
    width: 17px;
    height: 17px;
}

.header{
    display: flex;
    flex-direction: row;
    padding:0;
}
.logo{
    position: absolute;
    left: 200px;
    top: 25px;
}
.header-logo{
    display: inline-block;
    width: 165px;
    margin-left: 6px;
    margin-top: 9px;
}
.header-logo img{
    vertical-align:middle;
    width: 500px;
    height: 50px;
}
img{
    max-width: 100%;
    border: #f9f9f9;
}

.giris img{
    top: 20px;
    width: 17px;
    height: 17px;
   }

</style>