import QmButton from "@/packages/qm-button/index.vue"; // 引入封装好的组件
const coms = [QmButton]; // 将来如果有其它组件,都可以写到这个数组里
// import { CompatVue } from "vue";
// 批量组件注册
const install = function (Vue: any) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用
