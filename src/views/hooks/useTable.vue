<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-button @click="refresh">refresh</el-button>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useTable } from "@/hooks/useTable";
import { getTableDataApi } from "@/api/api";
const [tableData, refresh] = useTable(getTableDataApi);
onMounted(refresh);
</script>
