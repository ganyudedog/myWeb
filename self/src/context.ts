import { defineStore } from 'pinia'

const usePlayStore = defineStore('play', {
  state: () => ({
    bgm: null as HTMLAudioElement | null,
  }),
  actions: {
    playBgm() {
      if (this.bgm) {
        this.bgm.loop = true;
        this.bgm?.play()
      }
    },
    setBgmRef(ref: HTMLAudioElement | null) {
      this.bgm = ref
    },
    }
})
export default usePlayStore;