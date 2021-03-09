<template lang='pug'>
.relative
  fa-icon.top-0.fixed.m-1.cursor-pointer(:class="{'opacity-0':isSidebar,'opacity-100':!isSidebar}" @click="isSidebar=!isSidebar" :icon="['fas', 'align-justify']")
  .top-0.fixed.w-200.h-screen.bg-purple-800.duration-500(style='z-index:9000' :class="{'opacity-100 l-0':isSidebar, 'opacity-0 -l-200':!isSidebar}")
    .flex.justify-end.m-1.cursor-pointer
      fa-icon(@click="isSidebar=!isSidebar" :icon="['fas', 'align-justify']")
    ul.text-white.text-center
      li 1
      li 2
      li 3
</template>

<script>
export default {
  data:()=>({
    isSidebar:true
  })
}
</script>

<style>
.w-200{
  width: 200px;
}
.-l-200{
  left:-200px;
}
</style>