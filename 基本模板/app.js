App({
// 全局生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('A:小程序初始化完成')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('B:当小程序从后台进入前台显示')
    //options指进入小程序的场景
    //options.scene可以识别用户是以什么方式进入我们的小程序的
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('C:当小程序从前台进入后台')
  }
})
