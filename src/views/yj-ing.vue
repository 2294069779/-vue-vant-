<template>
  <div id="yj">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="area" @change="charea" />
      <van-dropdown-item v-model="value2" :options="yh" @change="chyh" />
    </van-dropdown-menu>
    <ul v-if="flag">
      <li v-for="(item, index) in showyh" :key="index">
        {{ item.city }}:{{ item.yj}}
      </li>
    </ul>
    <ul v-else>
      <li v-for="(value, name) in showyj" :key="name">
        {{ name }}:{{ value }}+{{2}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: '92h',
      area: [],
      yh: [
        { text: '92h', value: '92h' },
        { text: '95h', value: '95h' },
        { text: '98h', value: '98h' },
        { text: '0h', value: '0h' }
      ],
      yjlist: [], // 所有油价信息
      showyj: {},
      showyh: [],
      flag: false,
      result: [
        { city: '北京', '92h': '9.01', '95h': '9.59', '98h': '10.57', ' 0h': '8.77' },
        { city: '山西', '92h': '8.95', '95h': '9.66', '98h': '10.36', ' 0h': '8.79' },
        { city: '天津', '92h': '9.01', '95h': '9.52', '98h': '10.80', ' 0h': '8.72' },
        { city: '河北', '92h': '9.01', '95h': '9.52', '98h': '10.34', ' 0h': '8.72' },
        { city: '河南', '92h': '9.02', '95h': '9.64', '98h': '10.29', ' 0h': '8.70' },
        { city: '山东', '92h': '8.99', '95h': '9.65', '98h': '10.37', ' 0h': '8.72' },
        { city: '上海', '92h': '8.97', '95h': '9.55', '98h': '10.55', ' 0h': '8.70' },
        { city: '浙江', '92h': '8.98', '95h': '9.55', '98h': '10.46', ' 0h': '8.69' },
        { city: '江苏', '92h': '8.98', '95h': '9.55', '98h': '10.23', ' 0h': '8.67' },
        { city: '安徽', '92h': '8.95', '95h': '9.56', '98h': '10.39', ' 0h': '8.76' },
        { city: '福建', '92h': '8.96', '95h': '9.57', '98h': '10.48', ' 0h': '8.70' },
        { city: '江西', '92h': '8.96', '95h': '9.62', '98h': '11.12', ' 0h': '8.77' },
        { city: '湖北', '92h': '9.03', '95h': '9.66', '98h': '10.49', ' 0h': '8.71' },
        { city: '湖南', '92h': '8.95', '95h': '9.51', '98h': '10.31', ' 0h': '8.79' },
        { city: '广东', '92h': '9.03', '95h': '9.78', '98h': '10.92', ' 0h': '8.72' },
        { city: '广西', '92h': '9.06', '95h': '9.79', '98h': '10.80', ' 0h': '8.77' },
        { city: '四川', '92h': '9.10', '95h': '9.73', '98h': '10.57', ' 0h': '8.74' },
        { city: '海南', '92h': '10.12', '95h': '10.76', '98h': '12.21', ' 0h': '8.80' },
        { city: '重庆', '92h': '9.06', '95h': '9.58', '98h': '10.79', ' 0h': '8.77' },
        { city: '云南', '92h': '9.16', '95h': '9.83', '98h': '10.51', ' 0h': '8.78' },
        { city: '贵州', '92h': '9.14', '95h': '9.66', '98h': '10.56', ' 0h': '8.81' }] // 虚拟数据
    }
  },
  created () {
    this.getyj1()
  },
  methods: {
    // async getyj () {
    // const { data: res } = await this.axios.get('/api1?key=05ae48d884d751fc126755928cdd129e')
    // console.log(res.result)
    // this.yjlist = res.result
  // }
    getyj1 () {
      this.yjlist = this.result
      this.tianjia()
    },
    charea () {
      this.showyj = this.yjlist[this.value1]
      this.flag = false
      // this.tianjia()
    },
    chyh () {
      this.showyh = []
      let item = { city: '', yj: '' }
      for (let i = 0; i < this.yjlist.length; i++) {
        item.city = this.yjlist[i].city
        item.yj = this.yjlist[i][this.value2]
        this.showyh.push(item)
        // console.log(item)
        item = { city: '', yj: '' }
        // console.log(item)
        this.flag = true
      }
    },
    // 抽离for
    tianjia () {
      let item = { text: '', value: '' }
      for (let i = 0; i < this.yjlist.length; i++) {
        item.text = this.yjlist[i].city
        item.value = i
        this.area.push(item)
        item = { text: '', value: '' }
      }
      this.showyj = this.yjlist[0]
    }

  }
}
</script>

<style lang="less" scoped>
li {
  line-height: 28px;
  font-size: 16px;
}
li:nth-of-type(2n) {
  background-color: darkseagreen;
}
</style>
