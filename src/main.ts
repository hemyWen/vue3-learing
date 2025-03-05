import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
const app = createApp(App);
import * as echarts from "echarts"; // 引入echarts
app.config.globalProperties.$echarts = echarts; // 全局使用
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
