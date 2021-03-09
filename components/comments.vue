<template lang='pug'>
.bg-green-100
  .border-2-gray.py-2.px-2(v-for='i,idx in comments' :key='idx')
    nuxt-link.text-blue-400(:to="'users/'+i.id") {{i.name}} - {{i.email}}
    p {{i.body}}
</template>

<script>
export default {
  computed:{
    comments(){
      return this.$store.state.comments
    }
  }
}
</script>

<style>

</style>