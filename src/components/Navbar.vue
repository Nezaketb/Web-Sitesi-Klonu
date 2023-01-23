<template>
     <div id="container">
      <nav>
        <ul>
          <li class="dropdown" onmouseover="hover(this);" onmouseout="out(this);"><a href="#">YATAK ODASI</a>
            <div class="dd">
              <div id="up_arrow"></div>
            <ul>
              <router-link to="/ProductListviews">
              <li class="first"><a href="#">Nevresim</a></li>
              </router-link>
              <li><a href="#">Nevresim Takımı</a></li>
              <li><a href="#">Tek Kişilik Nevresim Takımları</a></li>
              <li><a href="#">Çift Kişilik Nevresim Takımları</a></li>
              <li><a href="#">King Size Kişilik Nevresim Takımları</a></li>
              <li><a href="#">Saten Nevresim Takımları</a></li>
            </ul>
            <img class="menuimg" src="https://cdn-mgsm.akinon.net/cms/2021/05/25/901c1964-836a-403f-bce0-74a07d81696d.png">
            </div>
          </li>
          <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">BANYO</a>
           <div class="dd">
             <div id="up_arrow"></div>
            <ul>
              <li class="first"><a href="#">Banyo Yer Grubu</a></li>
              <li><a href="#">Banyo Papasları</a></li>
              <li class="first"><a href="#">Banyo Aksesuarları</a></li>
              <li><a href="#">Banyo Setleri</a></li>
              <li><a href="#">Sabunluk</a></li>
              <li><a href="#">Çamaşır Sepetleri</a></li>
              <li><a href="#">Banyo Askıları</a></li>
            </ul>
            <img class="menuimg" src="https://cdn-mgsm.akinon.net/cms/2021/03/09/bfd6a4d3-5e62-42c8-8a6d-ed2c6ae83215.png">
            </div>
            </li>
          <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">MUTFAK</a>
           <div class="dd">
             <div id="up_arrow"></div>
            <ul>
              <li class="first"><a href="#">Pişirme</a></li>
              <li><a href="#">Tencere,Tava ve Sahan Setleri</a></li>
              <li><a href="#">Tencereler</a></li>
              <li><a href="#">Tavalar</a></li>
              <li><a href="#">Sahanlar</a></li>
              <li><a href="#">Çaydanlıklar</a></li>
              <li><a href="#">Kek Kalıpları</a></li>
            </ul>
            <img class="menuimg" src="https://cdn-mgsm.akinon.net/cms/2021/03/09/5f5be547-d8a3-43d5-bb37-5eeb8d3f6f14.png">
            </div>
            </li>
         <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">SOFRA</a>
           <div class="dd">
             <div id="up_arrow"></div>
            <ul>
              <li class="first"><a href="#">Çatal & Kaşık & Bıçak</a></li>
              <li><a href="#">Çatallar</a></li>
              <li><a href="#">Kaşıklar</a></li>
              <li><a href="#">Bıçaklar</a></li>
              <li><a href="#">Çatal Kaşık ve Bıçak Setleri</a></li>
              <li class="first"><a href="#">Tabak & Kase</a></li>
              <li><a href="#">Tabaklar</a></li>
              <li><a href="#">Kaseler</a></li>
            </ul>
            </div>
            </li>
            <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">HALI & KİLİM</a>
           <div class="dd">
             <div id="up_arrow"></div>
            <ul>
              <li class="first"><a href="#">Halılar</a></li>
              <li><a href="#">Post Halılar</a></li>
              <li><a href="#">Vintage Halılar</a></li>
              <li><a href="#">Klasik Halılar</a></li>
              <li><a href="#">Modern Halılar</a></li>
              <li><a href="#">Etnik Halılar</a></li>
              <li><a href="#">Kadife Halılar</a></li>
              <li class="first"><a href="#">Kilimler</a></li>
              <li><a href="#">Saçaklı Dokuma Kilimler</a></li>
              <li><a href="#">Çift Taraflı Şönil Kilimler</a></li>
            </ul>
            </div>
            </li>
            <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">DEKORASYON</a></li>
            <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">EV & YAŞAM</a></li>
            <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">KOZMETİK</a></li>
            <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a href="#">DERGİ</a></li>
            <li class="dropdown" onmousover="hover(this);" onmouseout="out(this);"><a class="yeniurun" href="#">YENİ ÜRÜNLER
                <img src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20210817084919447.png">
                </a></li>
        </ul>
      </nav>

    </div>
</template> 
<script>
export default {
  name: 'Navbar',
}
</script>
<style>
.yeniurun{
  color: rgb(126, 7, 0);
    padding-top: 0px;
}
.menuimg{
    width: 200px;
    height: 300px;
}
.first{
    font-weight: bold;
}
* {
  margin:0;
  padding:0;
}
#container {
  position:absolute;
  width:80%;
  margin:5% auto;
  background-color:white;
  box-shadow: -2px -2px 5px white,2px -2px 5px white;
  top: 90px;
  right: 280px;

}
#container > nav {
  width:100%;
  display:flex;
  max-height:60px;
}

#container > nav > ul {
  margin:0;
  list-style-type:none;
  display:flex;
  position:absolute;
  right:50px;
}
#container > nav > ul > li {
  line-height:30px;
  margin: 0 0px;
  padding:0;
  text-align:start;
  display:inline-block;
  min-width:10px;
} 
#container > nav > ul > li > a {
  position:relative;
  margin: 0 20px;
    color:#31363a;
}
#container > nav > ul > li:hover {
  border-bottom:  solid 2px gray;
  background-color:white;
}
#container > nav > ul > .dropdown:hover {
  border-bottom:solid 4px gray;

}
#container > nav > ul > .dropdown:hover >  .dd
{
  display:flex;
  flex-direction: row;
}
.dropdown:hover > a .fa-caret-down {
  display:none;
}
a {
  text-decoration:none;
  font-size: 13px;
}

#container > nav > ul > li > div {
  position:absolute;
  padding: 0 10px;
  background-color:black;
  display:none;
  background-color:aliceblue;
  min-width:100px;
}

#container > nav > ul > li > div > ul {
  margin:0px 0 10px 0;
  padding:0;
  list-style:none;
}
#u_a_c {
  position:relative;
  width:100%;
}
#up_arrow {
  position:relative;
  width:20px;
  height:20px;
  left:42%;
  top:-10px;
  background-color:aliceblue;
}
#container > nav > ul > li> div > ul > li:hover {
  background-color:rgba(0,0,0,0.2);
}
#container > nav > ul > li > div > ul > li > a {
  padding : 5px;
    color:black;
}

</style>