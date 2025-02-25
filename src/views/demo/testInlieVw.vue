<template>
  <div :style="{ width: pxToVw(100) }">Hello World</div>
  <a href="https://www.cnblogs.com/scale/p/18539376">vant中组件的css单位没有转换</a>
</template>

<script setup lang="ts">
import { pxToVw } from '@/utils/pxToVw'
</script>
