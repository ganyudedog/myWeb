<script setup>
import { set } from 'mongoose';
import { ref, computed } from 'vue';
const num = ref(-100);

const handleLeft = (event) => {
    if (event && event.target !== event.currentTarget) {
        // 防止重复执行
        return;
    }
    num.value = num.value + 100;
}

const handleRight = (event) => {
    if (event && event.target !== event.currentTarget) {
        // 防止重复执行
        return;
    }
    num.value = num.value - 100;
}

// 便于移动头像
const positions = {
    '-100': { left: 45.53571429, top: 25 },
    '0': { left: 6.95238, top: 19.34523809 },
    '-200': { left: 45.53571429, top: 5.9523809 }
};

const position = computed(() => positions[num.value]);

// 显示时间
const days = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const h = ref(""), min = ref(""), day = ref("");
setInterval(() => {
    const time = new Date();
    h.value = time.getHours() >= 10 ? time.getHours() + "" : '0' + time.getHours();
    min.value = time.getMinutes() >= 10 ? time.getMinutes() + "" : '0' + time.getMinutes();
    day.value = days[time.getDay()];
}, 1000);

//时分分割符的闪动
const flash = ref(false);

setInterval(() => {
    flash.value = !flash.value;
}, 500);

</script>

<template>

    <!-- 头像 -->
    <div class="me" :style="{ left: position.left + 'vw', top: position.top + 'vw' }">
        <img src="../../../public/resource/images/krara.jpeg" alt="" width="100%">
    </div>
    <!-- 头像结束 -->

    <div id="under" :style="{ transform: `translateX(${num}vw)` }">
        <!-- 左板块 -->
        <div id="first">
            <!-- 背景 -->
            <img src="../../../public/resource/images/moon.jpg" alt="" class="background1">
            <!-- 结束 -->

            <ul class="information">
                <li>天堂地狱都没法给你慰藉,只有我们自己,渺小,孤独,奋斗,与彼此抗争,我向自己祈祷,为自己祈祷。<br>
                    <div>---------------纸牌屋</div>
                </li>
                <li><img src="../../../public/resource/images/wolf.png" alt="" width="50%"><img
                        src="../../../public/resource/images/yes.png" alt="" width="50%"></li>
                <li><img src="../../../public/resource/images/panic.png" alt="" width="45%"><img
                        src="../../../public/resource/images/hand.png" alt="" width="55%"></li>
                <li><a href="https://space.bilibili.com/511578376?spm_id_from=333.1007.0.0" target="_blank"><img
                            src="../../../public/resource/images/blbl.png" alt="" width="100%"
                            style="margin-top: 10px;"></a></li>
                <li><a href="https://github.com/ganyudedog" target="_blank"><img
                            src="../../../public/resource/images/github.png" alt="" width="30%">
                        <p>my Github</p>
                    </a></li>
                <li><a href="javascript:;"><img src="../../../public/resource/images/qq.png" alt="" width="30%">
                        <p>my QQ</p>
                    </a></li>
            </ul>


            <!-- 时间 -->
            <div class="time"><em>{{ h }}</em><em :style="{ visibility: flash ? 'visible' : 'hidden' }">:</em><em>{{ min
            }}</em></div>
            <!-- 结束 -->

            <!-- 星期 -->
            <div class="day">{{ day }}</div>
            <!-- 结束 -->

            <!-- 我自己 -->
            <ul class="myself">
                <li>曾林锐</li>
                <li>中南大学</li>
                <li>软件工程2401</li>
            </ul>
            <!-- 结束 -->

            <div class="seek">
                大佬们别卷了,我卷不动了。
            </div>

            <span class="moveRight" @click="handleRight">
                <em v-for="i in 3" :key="i" @click="handleRight"> &lt; </em>
            </span>
        </div>

        <!-- 中间板块 -->
        <div id="second">
            <!-- 想说的话 -->
            <p class="talk">心之所向,吾之所往</p>
            <!-- 结束 -->

            <div class="ingredient">南柯一梦</div>

            <!-- 喜欢的东西 -->
            <div class="like1">飞萤扑火的绝念,是对抗命运的剑</div>
            <div class="like2">太微诡棋行,灵台示兆影</div>
            <div class="like3">愿这场跨越千年的爱恋,最终绽放出万朵鲜花</div>
            <div class="like4">当是干雩逢甘雨,愿以清心报卿心</div>
            <!-- 结束 -->

            <!-- 背景 -->
            <img src="../../../public/resource/images/firefly.jpg" alt="" class="background">
            <!-- 背景结束 -->

            <!-- 拖动块 -->
            <span class="moveRight" @click="handleRight">
                <em v-for="i in 3" :key="i" @click="handleRight"> &lt; </em>
            </span>

            <span class="moveLeft" @click="handleLeft">
                <em v-for="i in 3" :key="i" @click="handleLeft"> &gt; </em>
            </span>
        </div>
        <!-- 右板块 -->

        <div id="third">
            <img src="../../../public/resource/images/car.jpg" alt="" class="background1">
            <span class="moveLeft" @click="handleLeft">
                <em v-for="i in 3" :key="i" @click="handleLeft"> &gt; </em>
            </span>
        </div>
    </div>
</template>

<style scoped>
@keyframes cycleHighlight {
    0% {
        color: gray;
    }

    32% {
        color: #fff;
    }

    33% {
        color: #fff;
    }

    50% {
        color: #fff;
    }

    99% {
        color: #fff;
    }

    100% {
        color: gray;
    }
}

#under {
    width: 300vw;
    height: 100%;
    transform: translateX(-100vw);
    transition: all 1s;
}

.me {
    position: absolute;
    width: 8.92857143vw;
    height: 8.92857143vw;
    overflow: hidden;
    border-radius: 50%;
    z-index: 100;
    transition: all 0.7s;
    box-shadow: 0px 0px 20px 0px #faff72;
}

.me:hover {
    filter: contrast(150%);
}

#first {
    position: relative;
    float: left;
    width: 100vw;
    height: 100vh;
}

#second {
    position: relative;
    float: left;
    width: 100vw;
    height: 100vh;
    perspective: 500px;
    transform-style: preserve-3d;
}

.ingredient {
    position: absolute;
    opacity: 1;
    left: 46.42857143vw;
    top: 34vw;
    width: 7.14285714vw;
    font-size: 1.25vw;
    line-height: 1.48809524vw;
    color: #f05654;
    text-align: center;
    background: -webkit-linear-gradient(left, #f1eaf2, #544257, #fdfafc, #d0c9dc);
}

#third {
    position: relative;
    float: left;
    width: 100vw;
    height: 100%;
}

.talk {
    position: absolute;
    width: 23.80952381vw;
    height: 2.61904762vw;
    top: 36.78571429vw;
    opacity: 0;
    z-index: 1000;
    text-align: center;
    text-shadow: 0px 0px 3px #000;
    font: normal 400 1.78571429vw / 2.38095238vw "微软雅黑";
    left: 38.0952381vw;
    color: #fff;
    border-top: #ff3300 solid 2px;
    border-bottom: #ff3300 solid 2px;
    transition: all 0.5s;
    animation: change 1s forwards;
    animation-delay: 2s;
}

.talk:hover {
    background: -webkit-linear-gradient(left, #b0a4e3, #4c8dae);
    transform: translateY(-0.5952381vw);
}

.information {
    position: absolute;
    color: #fff;
    font: normal 400 1.78571429vw '微软雅黑';
    left: 30vw;
    top: 19.3452381vw;
    width: 54.16666667vw;
    height: 36.01190476vw;
}

.information li {
    float: left;
    text-align: center;
    padding-top: 2px;
    margin: 1px;
    width: 17.85714286vw;
    height: 11.9047619vw;
    background-color: #000000af;
}

.information li a {
    display: block;
    width: 100%;
    height: 100%;
}

.information li a p {
    color: #fff;
    margin: 1.19047619vw;
}

.information li:hover {
    transform: translateY(-1.19047619vw);
    background-color: #44cef673;
    transition: all 0.3s;
}

.information li:nth-child(1) {
    text-align: left;
    text-indent: 2em;
    line-height: 6vw;
    width: 35.83333333vw;
    height: 23.9vw;
    padding: 3px;
}

.information li:nth-child(1) div {
    float: right;
}

.time {
    position: absolute;
    font: normal 400 8.92857143vw '宋体';
    color: #3eede7;
    top: 1.78571429vw;
    left: 50vw;
    transform: translateX(-50%);
}

.day {
    position: absolute;
    font: normal 400 2.97619048vw '宋体';
    color: #3eede7;
    top: 7.14285714vw;
    left: 70vw;
    transform: translateX(-50%);
}

.seek {
    position: absolute;
    width: 23.80952381vw;
    top: 31.54761905vw;
    left: 0.952381vw;
    text-align: center;
    color: #fff;
    font: normal 800 1.78571429vw '\5B8B\4F53';
    border-top: #ff3300 solid 2px;
    border-bottom: #ff3300 solid 2px;
    transition: all 0.5s;
    animation: change 1s forwards;
    animation-delay: 1s;
}

.seek:hover {
    background: -webkit-linear-gradient(left, #b0a4e3, #4c8dae);
    transform: translateY(-0.5952381vw);
}

.myself {
    position: absolute;
    left: 4.952381vw;
    top: 36.72619048vw;
    color: #fff;
    text-align: center;
}

.myself li {
    font: italic 600 2.38095238vw '\5B8B\4F53';
    margin-top: 0.5952381vw;
    border-top: #ff3300 solid 2px;
    transition: all 0.5s;
}

.myself li:hover {
    background: -webkit-linear-gradient(left, #b0a4e3, #4c8dae);
    transform: translateY(-0.5952381vw);
}

div[class^=like] {
    position: absolute;
    box-sizing: border-box;
    border: #edd1d8 solid 2px;
    opacity: 0;
    color: #fff;
    border-radius: 0.41666667vw;
    font-size: 1.19047619vw;
    height: 1.78571429vw;
    background: -webkit-linear-gradient(left, #b0a4e3, #4c8dae);
    animation: change 1s forwards;
    animation-delay: 2s;
}

.like1 {
    top: 41.66666667vw;
    left: 20.23809524vw;
    transform: rotate(5deg);
}

.like2 {
    top: 41.66666667vw;
    left: 49.4047619vw;
    transform: rotate(3deg);
}

.like3 {
    top: 44.64285714vw;
    left: 52.97619048vw;
    transform: rotate(-5deg);
}

.like4 {
    top: 48.92857143vw;
    left: 32.14285714vw;
    transform: rotate(-8deg);
}

.background {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100vh;
    filter: contrast(120%);
    z-index: -10000;
    animation: change 1s forwards;
    animation-fill-mode: forwards;
}

.background1 {
    width: 100%;
    filter: contrast(120%);
    z-index: -10000;
}

span[class^=move] {
    display: block;
    position: absolute;
    width: 6.25vw;
    right: -1.5vw;
    top: 50vh;
    color: gray;
    transform: translateY(-50%);
    font: normal 400 2.08333333vw '微软雅黑';
}

span[class^=move]:hover {
    cursor: pointer;
}

.moveLeft {
    left: 0 !important;
}

.moveRight {
    right: 0 !important;
}

span.moveRight em,
span.moveLeft em {
    display: inline-block;
    color: gray;
    animation: cycleHighlight 3s ease-in-out infinite;
    pointer-events: auto !important;
}

/* 每个 <em> 设置不同的起始延迟 */
.moveRight em:nth-child(1),
.moveLeft em:nth-child(3) {
    animation-delay: 0s;
}

.moveRight em:nth-child(2),
.moveLeft em:nth-child(2) {
    animation-delay: 1s;
}

.moveRight em:nth-child(3),
.moveLeft em:nth-child(1) {
    animation-delay: 2s;
}
</style>