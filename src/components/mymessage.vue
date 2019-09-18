<template>
    <div>
    控制我的第一个子组件的宽度：
     <el-button type="warning" icon="el-icon-plus" @click="add_px()"></el-button>
     <el-button type="warning" icon="el-icon-minus" @click="minu_px()"></el-button>

    <mycenter :add_left="left_px"></mycenter>

    </div>
</template>

<script>
import mycenter from "@/components/mycenter/mycenter"
export default {
    name:'mymessage',
    data(){
        return{
            left_px:50,           
        }
    },
    components:{
        mycenter
    },
    methods:{
        add_px(){
             this.left_px++  
        },
        minu_px(){
            this.left_px--
        }
    }
    
}
</script>



<style>
   
</style>