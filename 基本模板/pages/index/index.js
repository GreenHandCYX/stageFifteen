Page({

  /**
   * 页面的初始数据
   */
  data: {
   message:'JS的数据' ,
   sliderList:[],
   cateList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('a:首页-监听页面加载 onLoad');
    //微信小程序请求用wx对象的API
    //通过this.data访问data中的数据
    console.log(this.data)
    wx.request({
      url: "https://locally.uieee.com/slides",
      data: {},
      header: {},//请求头
      method: 'GET',
      dataType: 'json',//返回数据格式
      success: (res) =>{
        //默认情况下只更新数据而不会刷新视图
        // this.data. sliderList = res.data
        /**
         * this.setData有两个功能:
         * 更新数据,更新视图
        */
        this.setData({ sliderList: res.data})
      },
      fail: function(res) {},
      complete: function(res) {},
    })



    //cate
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success:res=>{
        this.setData({cateList:res.data})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('b:首页-监听页面渲染onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('c:首页-监听页面显示 onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('d:首页-监听页面隐藏 onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('e:首页-监听页面卸载onUnload')
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