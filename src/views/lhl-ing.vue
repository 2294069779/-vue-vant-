<template>
  <div>
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :row-height="40"
      :style="{ height: '330px' }"
      @select="sayday"
    />
    <div id="lhl">
      <van-row gutter="10" class="rowstyle">
        <van-col span="12">
          <van-tag plain type="promary">阴历</van-tag>
          {{ wl.yinli }}
        </van-col>
        <van-col span="12">
          <van-tag plain type="danger">冲煞</van-tag>
          {{ wl.chongsha }}
        </van-col>
      </van-row>

      <van-row gutter="10" class="rowstyle">
        <van-col span="12">
          <van-tag plain type="success">宜</van-tag>
          {{ wl.yi }}
        </van-col>
        <van-col span="12">
          <van-tag plain type="danger">忌</van-tag>
          {{ wl.ji }}
        </van-col>
      </van-row>

      <van-row gutter="10" class="rowstyle">
        <van-col span="12">
          <van-tag plain type="primary">五行</van-tag>
          {{ wl.wuxing }}
        </van-col>
        <van-col span="12">
          <van-tag plain type="danger">彭祖百忌</van-tag>
          {{ wl.baiji }}
        </van-col>
      </van-row>

      <van-row gutter="10" class="rowstyle">
        <van-col span="12">
          <van-tag plain type="success">吉神宜趋</van-tag>
          {{ wl.jishen }}
        </van-col>
        <van-col span="12">
          <van-tag plain type="danger">凶神宜忌</van-tag>
          {{ wl.xiongshen }}
        </van-col>
      </van-row>
    </div>
    <!-- </vant-calender> -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      wl: {}
    }
  },
  created () {
    const dd = moment(new Date()).format('YYYY-MM-DD')
    this.getlhl(dd)
  },
  methods: {
    async getlhl (dd) {
      const { data: res } = await this.axios.get(`/api0?date=${dd}&key=7b55d3610d338fa9cfac247a8a19dc4d`)
      console.log(res)
      this.wl = res.result
    },
    sayday (value) {
      const dd = moment(value).format('YYYY-MM-DD')
      this.getlhl(dd)
    }
  }
}
</script>

<style lang='less' scoped>
#lhl {
  text-align: left;
  font-size: 14px;
  padding: 10px;
  .rowstyle {
    margin: 5px 0;
    border-bottom: dotted 1px rgb(0, 255, 8);
  }
}
</style>
