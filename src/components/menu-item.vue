<template>
  <el-sub-menu v-if="props.routerRaw.children && props.routerRaw.children.length" :index="index">
    <template #title>
      <span>{{ props.routerRaw.name }}</span>
    </template>
    <menu-item
      v-for="(item, idx) in props.routerRaw.children"
      :key="index"
      :routerRaw="item"
      :index="index + '-' + idx"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="index" @click="router.push({ name: props.routerRaw.name })">
    <span>{{ props.routerRaw.name }}</span>
  </el-menu-item>
</template>
<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
interface MenuItemProps {
  routerRaw: RouteRecordRaw;
  index: string;
}
const props = defineProps<MenuItemProps>();
</script>
<style scoped></style>
