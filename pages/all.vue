<template lang='pug'>
.w-06.mx-auto
  .border-2.rounded.px-2.py-2.cursor-pointer(v-for='i,idx in posts' :key='idx' @click='showComments(i.id)')
    nuxt-link.text-xl.text-blue-300(:to="'posts/'+i.id") {{i.title}}
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
      if(this.id==id){
        this.id=null
      }else{
      this.$store.dispatch('fetchComments',id)
      this.id=id
      }
    }
}
}
</script>

<style>
.w-06{
  width: 60%;
}
</style>