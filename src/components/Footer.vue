<template>
    <div class="footer">
    <div class="e-bülten">
        <span>
            <div class="subscribe">
                <h5 class="subscribe_tittle">E-Bülten</h5>
                <p>Kampanyalardan Haberdar Olmak İçin;</p>
                <form class="subscribe_form">
                 <input type="email" placeholder="E-posta Adresinizi Girin">
                 <button class="subscribe_button">GÖNDER</button>
                 <label class="subscribe_form label">
                     <input id="subscribe_contract" type="checkbox" name="subscribe_contract" oninput="setCustomValidity('')" oninvalid="this.setCustomValidity('Devam etmek istiyorsanız lütfen bu kutuyu işaretleyin.')" required="">
                     <span class="subscribe_contract"> <span> E-bülten sözleşmesini </span> kabul ediyorum. </span>
                 </label>
                 <label class="subscribe_form label">
                     <input id="subscribe_contract" type="checkbox" name="subscribe_contract" oninput="setCustomValidity('')" oninvalid="this.setCustomValidity('Devam etmek istiyorsanız lütfen bu kutuyu işaretleyin.')" required="">
                     <span class="subscribe_contract"> <span>Açık Rıza</span> ve <span>Kişisel verilerin korunması metnini</span> okudum ve onaylıyorum. </span>
                 </label>
                </form>
            </div>
        </span>
        <div class="footer__social">
          <div class="social">
  <p class="social__title">
    Madame Coco`yu Takip Edin
  </p>
  <div class="social__list cf">
    <a href="/" class="social__item fb" target="facebookWindow">
    <img class="social" >
    </a>
    <a href="https://www.instagram.com/madamecocotr/" class="social__item ins" target="instagramWindow">
    <img class="social" >
    </a>
    <a href="https://twitter.com/MadameCocoTR" class=" twt" target="twitterWindow">
    <img class="social" >
    </a>
    <a href="https://www.youtube.com/channel/UC5iXwBuIzfSWT8TrsF0bhZQ" class="social__item youtube" target="youtubeWindow">
    <img class="social" >
    </a>
    <a href="https://www.pinterest.com/madamecocotr/" class="social__item pin" target="pinterestWindow">
    <img class="social" >
    </a>
    <a href="https://www.linkedin.com/company/madame-coco" class="social__item linkedin" target="linkedinWindow">
    <img class="social">
    </a>
  </div>
</div>
         <div class="footer__mobiles">
          <a class="app-link" href="https://play.google.com/store/apps/details?id=com.akinon.madamecoco" target="_blank">
            <img  class="mobile-get-badge">
          </a>
          <a class="app-link" href="https://itunes.apple.com/tr/app/madame-coco/id1411335629?l=tr&amp;mt=8" target="_blank">
            <img  class="mobile-get-badge">
          </a>
        </div>
    </div>
   
    </div>
        
    <nav class="hakkında">
        <ul class="row footer__menu">
        <li class="col-sm-3">
            <ul class="footer__sub-menu">
        <li><a class="title" href="">MADAME COCO</a></li>
        <li><a href="#" class="footer__sub-menu__link">Hakkımızda</a></li>
     <li><a href="#" class="footer__sub-menu__link">Vizyon Misyon</a></li>
     <li><a href="#"  class="footer__sub-menu__link">Kurumsal</a></li>
      <li><a href="#"  class="footer__sub-menu__link">İcra Kurulu</a></li>
     <li><a href="#"  class="footer__sub-menu__link">Ödüllerimiz</a></li>      
    <li><a href="#"  class="footer__sub-menu__link">İnsan Kaynakları</a></li>
   <li><a href="#" class="footer__sub-menu__link">Kampanyalar</a></li>
   <li><a href="#"  class="footer__sub-menu__link">Bilgi Toplumu Hizmetleri</a></li>
    </ul>
        </li>
        <li class="col-sm-3">
            <ul class="footer__sub-menu">
          <li><a class="title">MAĞAZALARIMIZ</a> </li>        
          <li><a href="#"  class="footer__sub-menu__link">Mağazalarımız</a></li>
         <li><a href="#" class="footer__sub-menu__link">Franchising</a></li>
    </ul>
        </li>
        <li class="col-sm-3">
            <ul class="footer__sub-menu">
      <li><a class="title">ÜYELİK VE SİPARİŞ</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Yeni Üyelik</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Üye Girişi</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Hesabım</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Sepetim</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Sipariş Takip</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Satış Sözleşmesi</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Teslimat Koşulları</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Koşulsuz Kolay İade</a></li>
             </ul>
        </li>
        <li class="col-sm-3">
        <ul class="footer__sub-menu">
      <li><a class="title">DESTEK</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Sıkça Sorulan Sorular</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Kurumsal Satış</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Kişisel Verilerin Korunması</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Çerez Politikası</a></li>
      <li><a href="#"  class="footer__sub-menu__link">İşe Alım KVKK Politikası</a></li>
      <li><a href="#"  class="footer__sub-menu__link">Gizlilik ve Güvenlik</a></li>
      <li><a href="#"  class="footer__sub-menu__link">İletişim</a></li>
    </ul>
        </li>
        </ul>
    </nav>
    </div>
</template>
<style>
.e-bülten{
    float: left;
    margin-top: -25px;
    position:relative;
    left:300px;
    bottom: -200px;
    background-color: #f7f7f7;
}
.footer{
    position: absolute; 
    left:20px; 
    bottom:-1080px
}
.footer__sub-menu {
    font-weight: 200;
    color: #8a8a8a;
}
ul {
    list-style: none;
}
.title{
    margin-bottom: 5px;
    color: black;
}
.footer__sub-menu__link {
    display: inline-block;
    padding: 5px 0;
}
a {
    background-color: transparent;
    text-decoration: none;
    color: #8a8a8a;
}
.col-sm-3{
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}
.hakkında{
    left:1300px;
    bottom: 50px;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #f7f7f7;
}
.footer__menu {
    font-size: 18px;
    text-align:left;
    display: flex;
    flex-direction: row;
}
.row {
    margin-left: -600px;
    margin-right: -15px;
}
ul {
    list-style: none;
}
.social{
    width: 25px;
    height: 25px;
}
.subscribe_form label {
    display: flex;
    flex-direction: row;
    clear: both;
    margin-top: 10px;
}
.subscribe_form .subscribe_contract span {
    text-decoration: underline;
    cursor: pointer;
}
input[type=checkbox] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    padding: 0;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    width: 15px;
    height: 15px;
}
.subscribe_tittle{
    font-size: 20px;
}
.subscribe_form {
    max-width: 370px;
    position: relative;
    margin-top: 10px;
}
input{
    border: none;
    width: 100%;
    height: 49px;
    padding-left: 10px;
}
.subscribe_button {
    position: absolute;
    padding: 0 25px;
    top: 7px;
    right: 7px;
    height: 35px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    background-color: #ad1111;
    border: 0;
}
.footer__social {
    margin-top: 0;
}
.social__title {
    font-size: 14px;
}
.social__list {
    top: 100px;
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-top: 10px;
}
.social__item {
    display: inline-block;
    vertical-align: top;
    float: none;
    position: relative;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    background-color: #fff;
}

.footer__mobiles {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    position: relative;
    top: 60px;
}
</style>