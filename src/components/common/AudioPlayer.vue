<!-- components/AudioPlayer.vue -->
<template>
    <audio ref="bgm" :src="audioSrc" loop @play="onPlay" @pause="onPause"></audio>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import usePlayStore from '../../context.ts'

const playStore = usePlayStore()
const bgm = ref(null)
const audioSrc = ref('../public/resource/audio/huapu.mp3')

const onPlay = () => {
    playStore.setBgmRef(bgm.value)
    console.log('Audio is playing')
}

const onPause = () => {
    console.log('Audio is paused')
}

onMounted(() => {
    if (bgm.value) {
        playStore.setBgmRef(bgm.value)
        bgm.value.play()
    }
})
</script>