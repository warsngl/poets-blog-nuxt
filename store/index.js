export const state=()=>({
  posts:[],
  comments:[],
  user:{}
})
export const actions={
  async nuxtServerInit({commit}){
    await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/').then(r=>
    commit('uploadStore',r))
  },
  async fetchComments({commit},id){
    await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').then(r=>
    commit('fetchComments',r))
  },
  async getUser({commit},id){
    await this.$axios.$get('https://jsonplaceholder.typicode.com/users/'+id).then(r=>
    commit('getUser',r))
  }
}
export const mutations={
  uploadStore(state,p){
    state.posts=p
  },
  fetchComments(state,p){
    state.comments=p
  },
  getUser(state,p){
    state.user=p
  }
}