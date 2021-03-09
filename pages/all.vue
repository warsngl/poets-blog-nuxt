<template lang='pug'>
.w-06.mx-auto
  .border-2.gray(v-for='i,idx in posts' :key='idx' @click='showComments(i.id)')
    nuxt-link(:to="'posts/'+i.id") {{i.title}}
    p {{i.body}}
    comments(v-if='i.id==id')
</template>

<script>
export default {
  data:()=>({
    id:null
  }),
  computed:{
    posts(){
      return this.$store.state.posts
    }
  },
  methods:{
    showComments(id){
      this.$store.dispatch('fetchComments',id)
      this.id=id
    }
}
}
</script>

<style>
.w-06{
  width: 60%;
}
</style>