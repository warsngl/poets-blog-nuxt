<template lang='pug'>
.bg-gray-200.w-06.rounded.mx-auto.mt-20
  p.text-xl.text-blue-600.text-center.uppercase.mb-20 {{post.title}}
  p.text-xl.text-center {{post.body}}
</template>

<script>
export default {
  computed:{
    post(){
      return this.$store.state.posts.filter(p=>{
        return p.id==this.$route.params.id})[0]
    }
  },
}
</script>

<style>
.w-06{
  width: 60%;
}
</style>