/*
 * @Author: lizucheng LZCNice2021@163.com
 * @Date: 2023-09-25 20:55:25
 * @LastEditors: lizucheng LZCNice2021@163.com
 * @LastEditTime: 2023-09-25 21:24:14
 * @FilePath: \record-video\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')