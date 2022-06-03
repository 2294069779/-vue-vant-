<template>
  <div>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in ppai" :key="item.id">
        <van-image :src="item.brand_logo" />
        <van-cell :title="item.brand_name" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ppai: [{ brand_login: '', brand_name: '' }]
    }
  },
  created () {
    this.gitppai()
  },
  methods: {
    async gitppai () {
      const { data: res } = await this.axios.get('/pp?key=a5be32ba274a8cfbffca621352825084')
      this.ppai = res.result
    }
  }
}
</script>

<style>
</style>
