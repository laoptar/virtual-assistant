import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Element Plus
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";

// loading Framework
const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, { size: "small", locale: zhCn, zIndex: 3000 });
app.mount("#app");
