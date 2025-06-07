<script setup>
import { reactive } from 'vue';

const position = reactive({ x: 0, y: 0 });

addEventListener('mousemove', (e) => {
    position.x = e.clientX - 50;
    position.y = e.clientY - 50;
});
</script>


<template>
    <!-- 鼠标图标 -->
    <img src="../../../public/resource/images/cursor.png" id="mouse" alt=""
        :style="{ left: position.x + 'px', top: position.y + 'px' }">
    <!-- 结束 -->
</template>

<style scoped>
#mouse {
    position: fixed;
    z-index: 10000;
    pointer-events: none;
    width: 5.95238095vw;
}
</style>