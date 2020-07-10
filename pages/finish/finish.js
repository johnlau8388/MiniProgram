// pages/finish/finish.js
Page({
	//结束语
	data: {
		color:"window",
		content:"信号不好，请重新开始"
	},
	logOutBtn: function () {
		wx.reLaunch({
			url: '../index/index',
		})
	},
	/**
	 * Lifecycle function--Called when page load
	 */
	onLoad: function (options) {
		wx.vibrateLong({
			success: function () {
				console.log('Loaded');
			}
		});

	},

	/**
	 * Lifecycle function--Called when page is initially rendered
	 */
	onReady: function () {

	},

	/**
	 * Lifecycle function--Called when page show
	 */
	onShow: function () {

	},

	/**
	 * Lifecycle function--Called when page hide
	 */
	onHide: function () {

	},

	/**
	 * Lifecycle function--Called when page unload
	 */
	onUnload: function () {

	},

	/**
	 * Page event handler function--Called when user drop down
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * Called when page reach bottom
	 */
	onReachBottom: function () {

	},

	/**
	 * Called when user click on the top right corner to share
	 */
	onShareAppMessage: function () {

	}
})