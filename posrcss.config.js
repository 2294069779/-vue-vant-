// 移动端的自适配
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android>=4.0', 'iOS>=8']
    },
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*']
    }
  }
}
