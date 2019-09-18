const buycar= r=>{
    require.ensure([], () => r(require('@/components/buycar.vue')), 'buycar')
  }

export default [
      {
        path:'buycar',
        name :'buycar',
        component:buycar
      }
]

