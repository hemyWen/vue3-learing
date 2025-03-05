<template>
  <div class="list">
    <div v-for="n in 20">
      <LogoList :key="n" v-if="defer(n)" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import LogoList from "./LogoList.vue";
import { useDefer } from "./useDefer";
const defer = useDefer(100);
</script>
<style scoped>
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
