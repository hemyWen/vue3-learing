<template>
  <div class="container"><div :style="imgStyle" class="earth"></div></div>
</template>
<script setup>
import { ref, onMounted, reactive, onUnmounted } from "vue";
const imgStyle = reactive({ transform: "rotate(0deg)" });
let rafId = null;
// 请求动画帧方法
function animate(time) {
  const angle = (time % 10000) / 5; // 控制转的速度
  imgStyle.transform = `rotate(${angle}deg)`;
  rafId = window.requestAnimationFrame(animate);
}
// 开始动画
onMounted(() => {
  rafId = window.requestAnimationFrame(animate);
});
// 卸载时生命周末停止动画
onUnmounted(() => {
  if (rafId) {
    window.cancelAnimationFrame(rafId);
  }
});
</script>
<style scoped>
body {
  box-sizing: border-box;
  background-color: #ccc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.earth {
  height: 100px;
  width: 100px;
  background-size: cover;
  border-radius: 50%;
  background-image: url("@/assets/images/as.jpg"); /* 替换为实际的路径 */
}
</style>
