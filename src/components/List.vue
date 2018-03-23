<template>
  <div>
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">待付款</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">已付款</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">退款</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 10" :title="acceptData.DishName"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>

import {getList} from '@/api/list'
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1',
      acceptData:{
      
      }
    };
  },
  methods:{
    getData(){
      let param = {DishID:'1'};
      let self = this;
      getList(param).then(function(data){
        if(data.Result == '0'){
           self.acceptData = data.ViewList;
        }
      })
    }
  },
  watch:{
    active:function(newValue){
    
    }
  },
 mounted(){
    this.getData();
 }
}
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
