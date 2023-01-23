<template>
<div class="list__info" data-select2-id="16">
      <div class="container list__info-inner" data-select2-id="15">
        <div class="list__info__text">
          <span><a href="/">Ana Sayfa</a> &gt; </span>
                      <b>
                        <a href="/yatak-odasi/">
                          <span class="js-selected-category">
                            Yatak Odası
                          </span>
                        </a>
                      </b>
          <span> (861 ürün) </span>
        </div>
        <div class="list__info__text">
        </div>
        <div class="list__info__select-box list__info__select-box-order" data-select2-id="14">
          <select class="select2 js-order-select list__info__select select2-hidden-accessible" tabindex="-1" aria-hidden="true" data-select2-id="9">
              <option value="default" selected="" data-select2-id="11">Gelişmiş Sıralama</option>
              <option value="price" data-select2-id="22">Fiyata Göre Artan</option>
              <option value="-price" data-select2-id="23">Fiyata Göre Azalan</option>
              <option value="newcomers" data-select2-id="24">Yeni Gelenler</option>
              <option value="Best Seller" data-select2-id="25">Çok Satanlar</option>
          </select>
        </div>
        <div class="list__info__grid">
           Görüntüle
          <a href="#" class="js-grid-item grid-item active" data-grid="three"><i class="icon-uclu"></i></a>
          <a href="#" class="js-grid-item grid-item" data-grid="two"><i class="icon-ikili"></i></a>
        </div>
      </div>
    </div>
    </template>
    
    <style scoped>
        select{
            font-size: 20px;
            font-weight: normal;
            color: grey;
            border-radius: 0px solid grey;
        }
    .list__info {
    border-bottom: 1px solid #e9e9e9;
    position: absolute;
    top: 210px;
    left: 170px;
      }
      .list__info-inner {
    padding: 10px 15px;
     }
     .container {
      width: 750px;
      }
      .list__info__text:first-child {
    margin-right: 25px;
     }
    .list__info__text {
    float: left;
    padding: 7px 0;
    color: #8a8a8a;
    font-weight: 600;
    font-size: 12px;
    }
    .list__info__text b {
    color: #31363a;
    font-weight: 400;
    }
    a{
    cursor: pointer;
    text-decoration: none;
    outline: none;
    }
    
    .list__info__select {
    width: 100%;
}
.list__info__select-box i {
    display: none;
}

option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.select2-container {
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    position: relative;
    vertical-align: middle;
    z-index: 9999;
}
span.select2-selection.select2-selection--single {
    outline: none;
}
.select2-container .select2-selection--single {
    height: 34px;
}

.select2-container--default .select2-selection--single {
    border: 1px solid #9b9b9b;
    border-radius: 0;
    background-color: #fff;
}
.select2-container .select2-selection--single {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 28px;
    user-select: none;
    -webkit-user-select: none;
}


.list__info__select-box {
    float: right;
    width: 270px;
    height: 50px;
    position: absolute;
    left: 950px;
}
list__info__grid {
    float: right;
    margin-right: 20px;
    margin-top: 10px;

}
.list__info__grid .grid-item {
    position: relative;
    top: 2px;
}
    </style>