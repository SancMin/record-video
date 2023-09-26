<!--
 * @Author: lizucheng LZCNice2021@163.com
 * @Date: 2023-09-25 21:07:31
 * @LastEditors: lizucheng LZCNice2021@163.com
 * @LastEditTime: 2023-09-26 14:53:51
 * @FilePath: \record-video\src\components\video.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <video ref="recordedVideo" controls autoplay id="recordedVideo" style="width: 800px;height: 500px;">
      您的浏览器不支持 video 标签。
    </video>
    <el-button type="primary" @click="startScreenRecording">开始录制</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const mediaRecorder = ref(null);
const recordedChunks = ref([]);

const startScreenRecording = () => {
  navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
    .then((stream) => {
      let recordedVideo = document.getElementById('recordedVideo');
      recordedVideo.src = ''
      mediaRecorder.value = new MediaRecorder(stream);

      mediaRecorder.value.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.value.push(event.data);
        }
      };

      mediaRecorder.value.onstop = () => {
        const blob = new Blob(recordedChunks.value, { type: 'video/webm' });
        recordedVideo.src = URL.createObjectURL(blob);
        console.log(recordedVideo, '------------------------------');
      };

      mediaRecorder.value.start();

      // 在需要停止录制时，调用 mediaRecorder.value.stop() 方法
      // 例如：setTimeout(() => mediaRecorder.value.stop(), 5000); // 停止录制在 5 秒后
    })
    .catch((error) => {
      console.error('获取屏幕共享权限失败：', error);
    });
};

// onMounted(() => {
//   const recordedVideo = document.getElementById('recordedVideo');
//   recordedVideo.src='screen-recording.webm'
//   console.log(recordedVideo, '------------------------------');
// })
// return {
//   startRecording,
// }
</script>