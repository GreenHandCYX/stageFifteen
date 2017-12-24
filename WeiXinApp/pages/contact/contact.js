// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //不能在页面中挂载一个函数
    aa:function(){
        return 123;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  //页面事件
  radioChangeHandle(event){
    // console.log(event.detail.value)

    //通过自定义属性获取函数参数
    console.log(event.target.dataset.index)
  },
  fatherHandler(){
    console.log('我是父亲')
  },
  sonHandler(e) {
    console.log('我是第'+e.target.dataset.index+'个儿子')
  }
})