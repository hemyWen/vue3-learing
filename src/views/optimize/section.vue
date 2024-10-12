<template>
  <div>
    <el-button type="primary" @click="handleQuery">直接请求10000条数据</el-button>
    <el-button type="primary" @click="handleQueryForSlice">切片渲染</el-button>
    <el-button type="primary" @click="onClear">清空</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" width="100" />
      <el-table-column prop="col1" label="字段1" />
      <el-table-column prop="col2" label="字段2" />
      <el-table-column prop="col3" label="字段3" />
      <el-table-column prop="col4" label="字段4" />
      <el-table-column prop="col5" label="字段5" />
      <el-table-column prop="col6" label="字段6" />
      <el-table-column prop="col7" label="字段7" />
      <el-table-column prop="col8" label="字段8" />
      <el-table-column prop="col9" label="字段9" />
      <el-table-column prop="col10" label="字段10" />
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
const tableData = ref<any[]>([]);
const timerID = ref<number>(0);
const mockData: () => Promise<any[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 10000 }, (_, index) => ({
          index: index + 1,
          col1: `测试${index + 1}`,
          col2: `测试${index + 1}`,
          col3: `测试${index + 1}`,
          col4: `测试${index + 1}`,
          col5: `测试${index + 1}`,
          col6: `测试${index + 1}`,
          col7: `测试${index + 1}`,
          col8: `测试${index + 1}`,
          col9: `测试${index + 1}`,
          col10: `测试${index + 1}`,
        }))
      );
    }, 1000);
  });
};
const handleQuery = async () => {
  const res = await mockData();
  console.log(res);
  tableData.value = res as any;
};
const handleQueryForSlice = async () => {
  const res = await mockData();
  setTableData(res);
};
const setTableData = (data: any[]) => {
  if (!data.length) return;
  timerID.value = requestAnimationFrame(() => {
    const num = 100;
    tableData.value.push(...data.slice(0, num));
    setTableData(data.slice(num));
  });
};
const onClear = () => {
  cancelAnimationFrame(timerID.value);
  tableData.value = [];
};
</script>
<style scoped></style>
