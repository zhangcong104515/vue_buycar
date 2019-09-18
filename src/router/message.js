const message= r=>{
    require.ensure([], () => r(require('@/components/message.vue')), 'message')
  }

  
export default[{
    path:'message',
    name :'message',
    component:message
  }
]
