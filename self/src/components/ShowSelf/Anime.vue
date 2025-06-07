<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
setTimeout(() => {
    router.push('/home');
}, 7000);

</script>

<template>

    <!-- 头像 -->
    <div class="me"><img src="../../../public/resource/images/krara.jpeg" alt="" width="100%"></div>
    <!-- 头像结束 -->

    <!-- 开始语言 -->
    <div class="start">你好!欢迎进入我的主页<img
            src="https://img-static.mihoyo.com/communityweb/upload/4d41193fa02ac31e2daf7436ba5e12cf.png" alt=""><img
            src="https://img-static.mihoyo.com/communityweb/upload/4d41193fa02ac31e2daf7436ba5e12cf.png" alt=""><img
            src="https://img-static.mihoyo.com/communityweb/upload/4d41193fa02ac31e2daf7436ba5e12cf.png" alt="">
    </div>
    <!-- 结束 -->

    <!-- 成分 -->
    <div class="ingredient">
        <div class="thing1">yuzusoft</div>
        <div class="thing2">甘雨的狗</div>
        <div class="thing3">南柯一梦</div>
    </div>
    <!-- 成分结束 -->

    <!-- 填充 -->
    <div class="right"><img src="../../../public/resource/images/xiaogong.png" alt="" width="100%"></div>
    <div class="left"><img src="../../../public/resource/images/lookright.png" alt="" width="100%"></div>
    <div class="right1"><img src="../../../public/resource/images/fuxuan.png" alt="" width="100%"></div>
    <div class="location1"><img src="../../../public/resource/images/generous_06.png" alt="" width="100%">
    </div>
    <div class="location2"><img src="../../../public/resource/images/pencil_03.png" alt="" width="100%">
    </div>
    <div class="location3"><img src="../../../public/resource/images/happy_03.png" alt="" width="100%">
    </div>
    <div class="location4"><img src="../../../public/resource/images/wink_03.png" alt="" width="100%">
    </div>
    <div class="location5"><img src="../../../public/resource/images/think_03.png" alt="" width="100%">
    </div>
    <!-- 填充结束 -->

    <!-- 成分 -->
    <div class="ingredient">
        <div class="thing1">yuzusoft</div>
        <div class="thing2">甘雨的狗</div>
        <div class="thing3">南柯一梦</div>
    </div>
    <!-- 成分结束 -->

    <!-- logo开始 -->
    <div class="logo"><img src="../../../public/resource/images/background_03.png" alt="" width="100%">
    </div>
    <!-- logo结束 -->

    <!-- 排列 -->
    <img src="../../../public/resource/images/leina_03.png" alt="" class="senleina">
    <img src="../../../public/resource/images/mako_03.png" alt="" class="senmako">
    <img src="../../resource/imfages/yosine_03.png" alt="" class="senyosine">
    <img src="../../../public/resource/images/murasame_03.png" alt="" class="senmurasame">
    <img src="../../../public/resource/images/luhua_03.png" alt="" class="senluhua">
    <img src="../../../public/resource/images/spring2_03.png" alt="" class="senspring">
    <!-- 排列结束 -->

</template>

<style scoped>
@import "../../style.css";

.me {
    position: absolute;
    left: 45.53571429vw;
    top: -29.76190476vw;
    width: 8.92857143vw;
    height: 8.92857143vw;
    overflow: hidden;
    border-radius: 50%;
    z-index: 100;
    box-shadow: 0px 0px 20px 0px #faff72;
    transform: translateZ(-29.76190476vw);
    transition: all 0.7s;
    animation: key 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1 normal;
    animation-delay: 3s;
    animation-fill-mode: forwards;
}

.me:hover {
    filter: contrast(150%);
}

.start {
    position: absolute;
    width: 66.66666667vw;
    height: 4.86190476vw;
    top: 5.95238095vw;
    left: 20.23809524vw;
    opacity: 1;
    overflow: hidden;
    text-align: center;
    font: italic 600 4.76190476vw "宋体";
    animation: type 3s steps(14) forwards;
}

.start img {
    width: 4.76190476vw;
    vertical-align: top;
}

div[class^=right] {
    float: right;
    width: 32%;
    opacity: 0;
    animation: change 1s 2 alternate;
    animation-delay: 5s;
}

.right1 {
    width: 36% !important;
}

.left {
    float: left;
    width: 32%;
    margin-top: 15.71428571vw;
    opacity: 0;
    animation: change 1s 2 alternate;
    animation-delay: 5s;
}

div[class^=location] {
    position: absolute;
    z-index: -10;
    animation: change1 1s forwards;
    animation-delay: 6s;
}

.location1 {
    width: calc(32% / 3);
    top: 0;
    left: 0;
}

.location2 {
    width: calc(32% / 3);
    top: 0;
    left: calc(32% / 3);
}

.location3 {
    width: calc(32% / 3);
    top: 0;
    left: calc(32% / 3 * 2);
}

.location4 {
    width: calc(32% / 2);
    top: 29.76190476vw;
    right: 0;
}

.location5 {
    width: 16%;
    top: 23.80952381vw;
    right: 16%;
}

.logo {
    position: absolute;
    left: 40.73571429vw;
    top: 22.61904762vw;
    width: 8.92857143vw;
}

.logo img {
    position: absolute;
    opacity: 0;
    animation: change 1s 2 alternate;
    animation-delay: 5s;
    z-index: 1000;
}

img[class^=sen] {
    position: absolute;
    width: 11.9047619vw;
    left: 44.04761905vw;
    top: 17.85714286vw;
    transform: translateX(-50%);
    opacity: 0;
    z-index: 1;
}

img[class$=leina] {
    transform: rotate(-45deg);
    animation: walk1 1s ease 2 alternate;
    animation-delay: 4s;
}

img[class$=mako] {
    transform: rotate(45deg);
    animation: walk2 1s ease 2 alternate;
    animation-delay: 4s;
}

img[class$=yosine] {
    left: 49.70238095vw;
    animation: walk3 1s ease 2 alternate;
    animation-delay: 4s;
}

img[class$=murasame] {
    transform: rotate(-45deg);
    animation: walk4 1s ease 2 alternate;
    animation-delay: 4s;
}

img[class$=luhua] {
    animation: walk5 1s ease 2 alternate;
    animation-delay: 4s;
}

img[class$=spring] {
    animation: walk6 1s ease 2 alternate;
    animation-delay: 4s;
}

.ingredient {
    position: absolute;
    opacity: 1;
    top: 33.92857143vw;
    width: 100%;
    height: 1.48809524vw;
    perspective: 500px;
    z-index: 1;
    transform-style: preserve-3d;
}

.ingredient [class^=thing] {
    position: absolute;
    opacity: 0;
    left: 46.42857143vw;
    width: 7.14285714vw;
    font-size: 1.25vw;
    line-height: 1.48809524vw;
    color: #f05654;
    text-align: center;
    background: -webkit-linear-gradient(left, #f1eaf2, #544257, #fdfafc, #d0c9dc);
}

.ingredient div:nth-child(n+2) {
    transform-origin: bottom center;
    transform: rotateX(90deg);
}

.ingredient div:nth-child(1) {
    animation: move1 0.3s ease-in 1 normal forwards;
    animation-delay: 4s;
}

.ingredient div:nth-child(2) {
    animation: move2 0.4s ease-in 1 normal forwards;
    animation-delay: 4.3s;
}

.ingredient div:nth-child(3) {
    animation: move3 1s ease-in 1 normal forwards;
    animation-delay: 4.7s;
}
</style>