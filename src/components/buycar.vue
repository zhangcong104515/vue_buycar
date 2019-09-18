<template>
<div class="buycar">
   <el-row :gutter="50" class="row_1">
      <el-col :span="2"><div class="grid-content bg-purple-none ">张聪</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">商品名称</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">分类</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">价格</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">数量</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">操作</div></el-col>
   </el-row>
      <ul class="grid-content3">
         <li class="grid-content2" v-for="item in list" :key="item.id">
           <el-row :gutter="50">
               <el-col :span="2"><div class="grid-content bg-purple3"> <el-checkbox :label="item.id" v-model="selectchecked" @change="item.checked=!item.checked"></el-checkbox> </div></el-col>
               <el-col :span="4"><div class="grid-content bg-purple3">{{item.name}}</div></el-col>
               <el-col :span="4"><div class="grid-content bg-purple3">{{item.type_l}}</div></el-col>
               <el-col :span="4"><div class="grid-content bg-purple3">{{item.price*item.count}}</div></el-col>
               <el-col :span="4"><div class="grid-content bg-purple3"><el-input-number v-model="item.count" @change="gettotalprice()" :min="0" :max="100" ></el-input-number></div></el-col>
               <el-col :span="4"><div class="grid-content bg-purple3 el-icon-delete-solid" @click="del_shop(item)"></div></el-col>
           </el-row>
         </li>
      </ul>
   
  
      <div class="bottom1">合计：{{totalprice}}元</div>
</div>


</template>

<script>
export default {
    
    data(){
        return{
          list:'',
          selectchecked:[],
          totalprice:0
        }
    },
    methods:{
        del_shop(item){
             let index=this.list.findIndex(haha=>(haha.id==item.id))  
             if(index>=0) {
                this.list.splice(index,1)
             } 
             this.gettotalprice();
        },
        gettotalprice(){
           let totalprice1=0;
             this.list.forEach(item=>{
                if(item.checked==true){
                   totalprice1=totalprice1+item.price*item.count;
                }
             })
             this.totalprice=totalprice1;
        },
        getshoplist(){
           let list1=[
              {
                 name:"Macbook",
                 type_l:"笔记本",
                 price:"12000",
                 count:"2",
                 id:"1"
              },
              {
                 name:"洗衣机",
                 type_l:"家电",
                 price:"2000",
                 count:"12",
                 id:"2"
              },
              {
                 name:"空调",
                 type_l:"家电",
                 price:"2000",
                 count:"2",
                 id:"3"
              },
              {
                 name:"钢笔",
                 type_l:"学习用品",
                 price:"90",
                 count:"22",
                 id:"4"
              },
              {
                 name:"鼠标",
                 type_l:"学习用品",
                 price:"90",
                 count:"12",
                 id:"5"
              },
              {
                 name:"ipad mini",
                 type_l:"学习用品",
                 price:"1990",
                 count:"2",
                 id:"6"
              },
              {
                 name:"变形金刚",
                 type_l:"玩具",
                 price:"190",
                 count:"4",
                 id:"7"
              },
              {
                 name:"文具盒",
                 type_l:"学习用品",
                 price:"19",
                 count:"1",
                 id:"8"
              }
           ]
           list1.forEach(item=>{
              item.checked=false;
           })
           this.list=list1;
        }
        },
    mounted(){
       this.getshoplist();



    },
    watch:{
         selectchecked (newV, oldV) {
          //debugger;
          this.gettotalprice()
          
      }





    }

}
</script>

<style>
  .bg-purple1 {
    background:rgb(128, 125, 125);
  }
  .bg-purple3 {
    background:none;
  }
   .grid-content1 {
    min-height: 36px;
    line-height:36px;
  }  
   .grid-content2 {
    list-style: none;
  }  
   .grid-content3 {
    margin: 0px;
    padding:0px;

  }  
  .bg-purple {
    background:darkgrey;
  }
  .bg-purple-none {
    backgroun:white;
  }
   .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height:36px;
    margin-top: 10px;
  }  
  .bottom1{
     height:46px;
     background:yellow;
     position:fixed;
     bottom: 0;
     width: 100%;
  }
 .buycar{
    overflow-x:hidden;
 }
 .row2{

    margin-left: 100px;
 }
 

  
</style>