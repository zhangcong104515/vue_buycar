const mymessage= r=>{
    require.ensure([], () => r(require('@/components/mymessage.vue')), 'mymessage')
  }

export default [
      {
        path:'/mymessage',
        name :'mymessage',
        component:mymessage
      }
]

