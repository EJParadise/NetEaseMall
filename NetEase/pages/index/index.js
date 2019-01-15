// pages/index/index.js
Page({
  getIndexData:function(){
    let that = this;
    wx.request({
      url: 'https://www.findfine.com.cn/api/index/index',
      success(res){
        that.setData({
          banner:res.data.data.banner,
          brandList: res.data.data.brandList,
          categoryList: res.data.data.categoryList,
          channel: res.data.data.channel,
          hotGoodsList: res.data.data.hotGoodsList,
          newGoodsList: res.data.data.newGoodsList,
          topicList: res.data.data.topicList
        });
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    brandList:[],
    categoryList:[],
    channel:[],
    hotGoodsList:[],
    newGoodsList:[],
    topicList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexData();
  }
})