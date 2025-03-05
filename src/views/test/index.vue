<template>
  <div></div>
</template>
<script lang="ts" setup>
import { reactive, toRaw } from "vue";

const state = reactive({ count: 0 });

// 获取响应式转为原始对象
const rawState = toRaw(state);

// 修改原始对象不会触发响应式更新
rawState.count = 10;
// 仍然输出 0，因为 state 是响应式代理，未被修改
console.log(state.count);
</script>
