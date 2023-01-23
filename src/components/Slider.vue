<template>
     <div id="slider-wrapper">
    <div class="slider">
        <a class="img-bir">
            <img src="https://cdn-mgsm.akinon.net/cms/2021/10/27/39588272-02ef-4728-8c72-fd73314dc055.jpg">
         </a>
        <a class="img-iki">
                <img src="https://cdn-mgsm.akinon.net/cms/2021/10/29/1b59253e-602d-47d2-9b36-ba68fc04a96f.jpg">
        </a>
        <a class="img-uc">
            <img src="https://cdn-mgsm.akinon.net/cms/2021/10/27/df086a64-59c5-4a72-83c6-efb0c5cb8a0f.png">
        </a>
        <a class="img-dort">
            <img src="https://cdn-mgsm.akinon.net/cms/2021/10/21/1646ac03-b620-48db-9ea5-753e9f01e188.png">
        </a>
        <a class="img-bes">
            <img src="https://cdn-mgsm.akinon.net/cms/2021/10/27/40d9bfc9-a48e-4c6e-8eb4-26d0f19146a4.png">
        </a>
     </div>
</div>
</template>
<style>

#slider-wrapper{
  position: relative;
  width:1150px;
  height:600px;
  overflow: hidden;
  top: 200px;
  left: 193px;
}
.img-bir, .img-iki, .img-uc, .img-dort,.img-bes{
  position: absolute;
  width:1150px;
  height:600px;
}

.img-bir{left: 0px;}
.img-iki{left: 1150px;}
.img-uc{left: 2300px;}
.img-dort{left: 3450px;}
.img-bes{left: 4600px;}

#slider-wrapper > .slider{
  position: absolute;
  left:0px;
  width: 2800px;
  height: 400px;
  -webkit-animation-name: sliders;
  -webkit-animation-iteration-count:infinite;
  -moz-animation-duration: 15s;
  -moz-animation-name: sliders;
  -moz-animation-iteration-count:infinite;
  -ms-animation-duration: .7s;
  animation-name: sliders;
  -ms-animation-iteration-count:infinite;
  animation-duration: 15s;
  animation-iteration-count:infinite;
 
}
#slider-wrapper > .slider:hover{
animation-play-state:paused;
}


@-webkit-keyframes sliders{
  0% {left:0px;}
  10% {left:0px;}
  20% {left:-1150px;}
  30% {left:-1150px;}
  40% {left:-2300px;}
  50% {left:-2300px;}
  60% {left:-3450px;}
  70% {left:-3450px;}
  80% {left:-4600px;}
  90% {left:-4600px;}
}
@-moz-keyframes sliders{
  0% {left:0px;}
  10% {left:0px;}
  20% {left:-1150px;}
  30% {left:-1150px;}
  40% {left:-2300px;}
  50% {left:-2300px;}
  60% {left:-3450px;}
  70% {left:-3450px;}
  80% {left:-4600px;}
  90% {left:-4600px;}
}
@-ms-keyframes sliders {
 0% {left:0px;}
  10% {left:0px;}
  20% {left:-1150px;}
  30% {left:-1150px;}
  40% {left:-2300px;}
  50% {left:-2300px;}
  60% {left:-3450px;}
  70% {left:-3450px;}
  80% {left:-4600px;}
  90% {left:-4600px;}
}
@keyframes sliders{
 0% {left:0px;}
  10% {left:0px;}
  20% {left:-1150px;}
  30% {left:-1150px;}
  40% {left:-2300px;}
  50% {left:-2300px;}
  60% {left:-3450px;}
  70% {left:-3450px;}
  80% {left:-4600px;}
  90% {left:-4600px;}
}
</style>