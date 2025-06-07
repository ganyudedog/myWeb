<script setup lang="ts">
import { onMounted, ref } from 'vue';
import usePlayStore from '../../context';

// 上下文引入
const play = usePlayStore();

// 允许按下
const canClick = ref(false)
onMounted(() => {
    setTimeout(() => {
        canClick.value = true;
    }, 3000)
})

// 播放全局bgm
const handlePlay = () => setTimeout(() => play.playBgm(), 500);

</script>

<template>
    <!-- 开场 -->
    <div class="mask">
        <img src="../../../public/resource/images/exmako.jpg" alt="" class="ex">
        <img src="../../../public/resource/images/exmurasame.jpg" alt="" class="ex">
        <img src="../../../public/resource/images/exyosine.jpg" alt="" class="ex">
        <div class="btn" :style="{ pointerEvents: canClick ? 'auto' : 'none' }" @click="handlePlay">
            <a href="/anime" style="color: white;">点此进入</a>
        </div>
        <div id="xixi"><img src="../../../public/resource/images/jinxi.jpg" alt="" width="100%"></div>
        <div id="chun"><img src="../../../public/resource/images/chun.jpg" alt="" width="100%"></div>
    </div>
    <!-- 结束 -->
</template>

<style scoped>
@import "../../style.css";

.mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
}

.mask .ex {
    position: absolute;
    width: 25%;
    opacity: 0;
    animation: change 1.5s ease 2 alternate;
}

.mask .ex:nth-child(1) {
    top: 1.78571429vw;
    left: 30%;
}

.mask .ex:nth-child(2) {
    top: 17.85714286vw;
    left: 0;
}

.mask .ex:nth-child(3) {
    top: 5.95238095vw;
    right: 5.95238095vw;
}

.mask .btn {
    position: absolute;
    height: 11.9047619vw;
    width: 23.80952381vw;
    top: 17.85714286vw;
    left: 38.0952381vw;
    opacity: 0;
    text-align: center;
    font: italic 900 5.35714286vw / 11.9047619vw '微软雅黑';
    color: #fff;
    z-index: 2000;
    border-radius: 1.19047619vw;
    background: -webkit-linear-gradient(left, #88ada6, #3de1ad);
    transition: all 0.5s;
    animation: change 1s forwards;
    animation-delay: 4s;
}

.mask .btn:hover {
    box-shadow: 0 0px 5px 0.5px #3eede7;
    text-shadow: 0.5px 0.5px 1px #000;
    transform: scale(1.5);
    cursor: pointer;
}

.mask #xixi {
    position: absolute;
    opacity: 0;
    width: 33%;
    left: 0;
    top: 0;
    animation: change 1s forwards;
    animation-delay: 3s;
}

.mask #chun {
    position: absolute;
    overflow: hidden;
    opacity: 0;
    width: 33%;
    height: 78%;
    right: 0;
    top: 0;
    animation: change 1s forwards;
    animation-delay: 3s;
}
</style>