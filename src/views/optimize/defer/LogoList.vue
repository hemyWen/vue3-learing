<template>
  <div class="logo-list">
    <div class="logo-list-item" v-for="index in 1000">
      <img :src="svgImg" alt="" width="10" height="10" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import svgImg from "@/assets/logo.svg";
</script>
<style scoped>
.logo-list {
  width: 500px;
  height: 400px;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
}
.logo-list-item {
  width: 10px;
  height: 10px;
}
</style>
