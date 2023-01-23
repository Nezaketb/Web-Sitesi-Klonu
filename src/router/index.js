import {createRouter, createWebHashHistory} from "vue-router";
 import App from '../App.vue'

const routes=[
{
    path:'/LogandReg',
    name:'logandred',
    component:()=>import('../views/LogandReg.vue')
 },
 {
    path:'/Register',
    name:'reg',
    component:()=>import('../components/Register')
 },
 {
    path:'/Basketviews',
    name:'basket',
    component:()=>import('../views/Basketviews.vue')
 },
 {
     path:'/ProductDetail',
     name:'ProductDetail',
     component:()=>import('../components/ProductDetail')
 },
 {
    path:'/ProductListviews',
    name:'ProductListview',
    component:()=>import('../views/ProductListviews')
},
{
    path:'/ProductList',
    name:'ProductList',
    component:()=>import('../components/ProductList')
},
{
    path:'/App',
    name:'home',
    component:()=>import('../App')
},
{
    path:'/ProductDetailview',
    name:'ProductDetailviews',
    component:()=>import('../views/ProductDetailview')
}

];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;