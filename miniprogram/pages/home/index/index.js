import {
  getNowDate, getWeekDay
} from "../../../utils/utils.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowDate: "",//今日时间
    todayslogan: "",//每日寄语 非学无以广才，非志无以成学
    weekDay: "",
    showAdd: true,//是否显示新建图标
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nowDate: getNowDate(),//获取当前时间-格式YYYY-MM-DD
      weekDay: "周\n" + getWeekDay(),
    })
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