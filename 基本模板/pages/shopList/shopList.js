// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[],
    pageIndex:0,
    count:10,
    hasTotal:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {pageIndex,count,shopList} = this.data
    console.log('a1:列表页-监听页面加载')
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://locally.uieee.com/categories/'+options.cate_id+'/shops',
      data:{
        _limit: count,
        _page: pageIndex
      },
      success:res=>{
        
        this.setData({
          shopList:res.data
        })
        wx.hideNavigationBarLoading()
      }
    })
    //options可以获取地址栏地址传递的参数
    console.log(options)



    wx.setNavigationBarTitle({
      title: options.cate_name,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('a1:列表页-监听页面渲染')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('a1:列表页-监听页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('a1:列表页-监听页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('a1:列表页-监听页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉了')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})