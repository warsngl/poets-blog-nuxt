<template lang='pug'>
.text-center.rounded-2xl.border-2.bg-gray-200.w-06.mx-auto.mt-40
  p.text-6xl {{user.username}} Page
  p Real name: {{user.name}}
  p Email: {{user.email}}
  p Phone: {{user.phone}}
  a(:href='user.website') Website: {{user.website}}
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.state.user
    }
  },
  async fetch({store,params}){
    console.log(params.id);
    await store.dispatch('getUser',params.id)
  }
}
</script>

<style>

</style>