// pages/catalog/catalog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList:[],
    currentCategory:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCatalog();
  },

  getCatalog:function(){
    let that = this;
    wx.request({
      url: 'https://www.findfine.com.cn/api/catalog/index',
      success(res){
        that.setData({
          categoryList: res.data.data.categoryList,
          currentCategory:res.data.data.currentCategory
        });
        
      }
    })
  }
})