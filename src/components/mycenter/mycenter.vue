<template>
    <div class="mycenter" v-bind:style="{width:left_px}">
        我是个人中心的第一个子组件
        <div>距离左侧边框:{{left_px}}</div>    
    </div>
</template>

<script>
export default {
    name:"mycenter",
    props:['add_left'],
    data(){
        return{
            left_px:`${this.add_left*10}px`
        }
    },
    methods:{

       
    },
     watch: { // 监听到数据然后赋值
      add_left (newV, oldV) {
          //debugger;
          if(newV){
                this.left_px=`${this.add_left*10}px`
          }
      }
    }


    
}
</script>



<style>

    .mycenter{
        width: 640px;
        height: 500px;
        border: 1px solid blue;
    }
   
</style>