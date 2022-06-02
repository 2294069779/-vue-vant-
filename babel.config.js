module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [["import", {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }]
      ],
      env: {
        "test": {
          "presets": ["env","stage-2"],
          "plugins": ["transform-vue-jsx", "transform-es2015-modules-commonjs", "dynamic-import-node"]
        }
      }
}
// {
//   "presets": [
//     ["env", {
//       "modules": false,
//       "targets": {
//         "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
//       }
//     }],
//     "stage-2"
//   ],
//   "plugins": ["transform-vue-jsx", "transform-runtime",["import", {
//     "libraryName": "vant",
//     "libraryDirectory": "es",
//     "style": true
//   }]
//   ],
//   "env": {
//     "test": {
//       "presets": ["env","stage-2"],
//       "plugins": ["transform-vue-jsx", "transform-es2015-modules-commonjs", "dynamic-import-node"]
//     }
//   }
// }
