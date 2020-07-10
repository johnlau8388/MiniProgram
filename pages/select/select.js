//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        ScrollToId: '',
        tabIndex: 0,
        // 统计商品数量和价格
        orderCount: {
            num: 0, 
        },
        bottomFlag: false,
        // 提交的订单
        orders: true,
        //菜单列表
        menus: [{
            id: '1',
            menu: '热菜'
        }, {
            id: '23',
            menu: '凉菜'
        }, {
            id: '25',
            menu: '主食'
        }, {
            id: '28',
            menu: '甜点'
        }, {
            id: '29',
            menu: '饮料'
        }],
        // 商品列表
        items: [{
            id: '1',
            title: '水煮肉片',
            active: false,
            num: 1
        }, {
            id: '2',
            title: '干焙洋芋丝',
            active: false,
            num: 1
        }, {
            id: 3,
            title: '回锅肉',
            active: false,
            num: 1
        }, {
            id: 4,
            title: '地三鲜',
            active: false,
            num: 1
        }, {
            id: 5,
            title: '清蒸鲈鱼',
            active: false,
            num: 1
        }, {
            id: 6,
            title: '小炒黄牛肉',
            active: false,
            num: 1
        }, {
            id: 7,
            title: '紅三剁',
            active: false,
            num: 1
        }, {
            id: 8,
            title: '麻婆豆腐',
            active: false,
            num: 1
        }, {
            id: 9,
            title: '黄焖辣子鸡',
            active: false,
            num: 1
        }, {
            id: 10,
            title: '五香鸡翅',
            active: false,
            num: 1
        }, {
            id: 11,
            title: '肉末茄子',
            active: false,
            num: 1
        }, {
            id: 12,
            title: '蒜蓉粉丝娃娃菜',
            active: false,
            num: 1
        }, {
            id: 13,
            title: '泡椒鸡胗',
            active: false,
            num: 1
        }, {
            id: 14,
            title: '红油大虾',
            active: false,
            num: 1
        }, {
            id: 15,
            title: '茄汁鱼片',
            active: false,
            num: 1
        }, {
            id: 16,
            title: '椒麻鸡',
            active: false,
            num: 1
        }, {
            id: 17,
            title: '刘氏红烧肉',
            active: false,
            num: 1
        }, {
            id: 18,
            title: '清炒时蔬',
            active: false,
            num: 1
        }, {
            id: 19,
            title: '甜椒玉米粒',
            active: false,
            num: 1
        }, {
            id: 20,
            title: '韭菜鸡蛋',
            active: false,
            num: 1
        }, {
            id: 21,
            title: '干煸四季豆',
            active: false,
            num: 1
        }, {
            id: 22,
            title: '辣炒花蛤',
            active: false,
            num: 1
        }, {
            id: 23,
            title: '凉拌茄子',
            active: false,
            num: 1
        }, {
            id: 24,
            title: '五香毛豆',
            active: false,
            num: 1
        }, {
            id: 25,
            title: '白米饭',
            active: false,
            num: 1
        }, {
            id: 26,
            title: '各式水饺',
            active: false,
            num: 1
        }, {
            id: 27,
            title: '重庆小面',
            active: false,
            num: 1
        }, {
            id: 28,
            title: '包谷粑粑',
            active: false,
            num: 1
        }, {
            id: 29,
            title: '自制冷饮',
            active: false,
            num: 1
        }],
    },

    //左联动右

    // 下拉刷新
    onPullDownRefresh: function () {
        setTimeout(() => {
            wx.showToast({
                title: '成功加载数据',
                icon: 'success',
                duration: 500
            });
            wx.stopPullDownRefresh()
        }, 500);
    },

    //
    tabMenu: function (event) {
        let that = this;
        let index = event.target.dataset.index;
        var id = event.currentTarget.dataset.id;
        that.setData({
            tabIndex: index,
            ScrollToId: id
        })
    },
    // 点击去购物车结账
    cart: function () {
        let that = this;
        // 判断是否有选中商品
        if (that.data.orderCount.num !== 0) {
            // 跳转到购物车订单也
            wx.navigateTo({
                url: '../order/order'
            });
        } else {
            wx.showToast({
                title: '您什么都还没点呢',
                icon: 'none',
                duration: 2000
            })
        }
    },

    addOrder: function (event) {
        let that = this;
        let id = event.target.dataset.id;
        let index = event.target.dataset.index;
        let param = this.data.items[index];
        let subOrders = []; // 购物单列表存储数据
        param.active ? param.active = false : param.active = true;
        // 改变添加按钮的状态
        this.data.items.splice(index, 1, param);
        that.setData({
            items: this.data.items
        });
        // 将已经确定的菜单添加到购物单列表
        this.data.items.forEach(item => {
            if (item.active) {
                subOrders.push(item);
            }
        });
        // 判断底部提交菜单显示隐藏
        if (subOrders.length == 0) {
            that.setData({
                bottomFlag: false
            });
        } else {
            that.setData({
                bottomFlag: true
            });
        }
        let num = subOrders.length;
        let orderCount = {
            num
        }
        // 设置显示对应的总数和全部价钱
        this.setData({
            orderCount
        });
        // 将选中的商品存储在本地
        wx.setStorage({
            key: "orders",
            data: subOrders
        });
    },
    onLoad: function () {

    }
})