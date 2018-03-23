<template>
  <div class="page-cell">
    <div class="page-title">基础信息</div>
    <mt-cell title="标题文字" @click.native="popupVisible4 = true" is-link>
      <span style="color: green">{{inputValue}}</span>
    </mt-cell>
    <mt-cell title="标题文字" @click.native="popupVisible4 = true" is-link>
      <span style="color: green">{{inputValue}}</span>
    </mt-cell>
    <mt-cell title="标题文字" @click.native="popupVisible4 = true" is-link>
      <span style="color: green">{{inputValue}}</span>
    </mt-cell>
    <mt-cell title="标题文字" @click.native="popupVisible4 = true" is-link>
      <span style="color: green">{{inputValue}}</span>
    </mt-cell>
    <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4 mint-datetime">
      <div class="picker-toolbar">  
            <span class="mint-datetime-action mint-datetime-cancel" @click="cancle">取消</span>  
            <span class="mint-datetime-action mint-datetime-confirm" @click="select">确定</span>  
      </div>  
      <mt-picker ref='pickerObj' :slots="dateSlots"></mt-picker>
    </mt-popup>
  </div>
</template>

<style>
  .page-title{
    padding: 10px 0;
  }
  .mint-cell-title{
    text-align:left;
  }
  .mint-popup-4 {
      width: 100%;
      .picker-slot-wrapper, .picker-item {
        backface-visibility: hidden;
      }
  }
</style>
<script>
  export default {
    data(){
      return {
        popupVisible4:false,
        inputValue:'',
        dateSlots: [
          {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
            className: 'slot3',
            textAlign: 'center'
          }
        ]
      }
    },
    methods: {
      cancle(){
        this.popupVisible4 = false;
      },
      select(){
         this.popupVisible4 = false;
         this.inputValue = this.$refs.pickerObj.getValues()[0];
      }
    },
  }
</script>


