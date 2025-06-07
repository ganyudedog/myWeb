<template>
  <router-link to="/"></router-link>
  <router-link to="/home"></router-link>
  <router-link to="/anime"></router-link>
  <AudioPlayer></AudioPlayer>
  <MouseMove></MouseMove>
  <router-view />
</template>

<script setup>
import AudioPlayer from './components/common/AudioPlayer.vue'
import MouseMove from './components/common/MouseMove.vue'
import usePlayStore from './context.ts'
import { onMounted, ref } from 'vue';

const play = usePlayStore();
</script>

<style scoped></style>