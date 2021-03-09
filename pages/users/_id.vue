<template lang='pug'>
.w-full
  .xxl.mx-auto User Page
  h1 {{user.name}}
  h2 {{user.username}}
  h2 {{user.email}}
  h2 {{user.phone}}
  a(:href='user.website') {{user.website}}
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