<script lang="ts">
export default { name: "qm-button" };
</script>
<script lang="ts" setup>
import { ref } from "vue";
const text = ref("按钮");
</script>
<template>
  <div>
    <button>我是测试按钮{{ text }}</button>
  </div>
</template>

<style scoped>
button {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
