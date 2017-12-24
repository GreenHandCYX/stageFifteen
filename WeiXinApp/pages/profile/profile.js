// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{}
  },

  // 登录
  loginHandler() {
    var $this = this
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },
  //
  getUserInfo(){
    var $this = this
    wx.getUserInfo({
      withCredentials:false,
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(res)
        $this.setData({ userInfo:res.userInfo })
      }
    })
  },
  checkLogin(){
    var $this = this;
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
        $this.getUserInfo()
      },
      fail: function () {
        //登录态过期

        wx.showToast({
          title: '请登录',
          success: function () {
            $this.loginHandler() //重新登录
            $this.checkLogin()
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    this.checkLogin()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})