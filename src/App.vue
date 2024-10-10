<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import MenuItem from "./components/menu-item.vue";
import { routes } from "@/router/index";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu>
            <menu-item v-for="(item, index) in routes" :routerRaw="item" :key="item.path" :index="index + ''" />
          </el-menu>
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
