<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script>
export default {
  name: 'singer-detail'
}
</script>

<style scoped lang="stylus">
.singer-detail
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #58a;

.slide-enter-active, .slide-leave-active
  transition: all 0.3s;
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0);
</style>

