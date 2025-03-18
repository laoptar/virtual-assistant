import { createSSRApp } from 'vue';
import App from './App.vue';

// 1. 引入你需要的组件
import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

export function createApp() {
  const app = createSSRApp(App);
  // 3. 注册你需要的组件
  app.use(Vant);

  return {
    app
  };
}
