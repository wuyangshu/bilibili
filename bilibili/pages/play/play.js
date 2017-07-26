function getRandomColor() {
  var rgb = [];
  for (var i = 0; i < 3; ++i) {
    var color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}
Page({
  inputValue: '',
  data: {
    isRandomColor: true,
    src: '',
    numberColor: "#ff0000",
    danmuList: [{
      text: '这波不亏呀',
      color: '#ff0000',
      time: 1
    }, {
      text: '大神666',
      color: '#00ff00',
      time: 2
    },
    {
      text: '今生无悔入fate',
      color: '#D9D919',
      time: 3
    },
    {
      text: '吾王赛高（｡ò ∀ ó｡）',
      color: '#C0D9D9',
      time: 4
    }
    ],
    showModalStatus: false
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停 
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停 
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭抽屉 
      if (currentStatu == "close") {
        wx.createVideoContext('myVideo').play();
        this.setData(
          {
            showModalStatus: false,
          }
        );
      }
    }.bind(this), 200)

    // 显示抽屉 
    if (currentStatu == "open") {
      wx.createVideoContext('myVideo').pause();
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },
  onLoad: function onLoad() {
    var _this = this;
    wx.getSystemInfo({
      success: function success(res) {
        // video标签默认宽度300px、高度225px
        var windowWidth = res.windowWidth;
        var videoHeight = 225 / 300 * windowWidth;
        _this.setData({
          videoWidth: windowWidth,
          videoHeight: videoHeight
        });
      }
    });
  },
  onReady: function onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  onShareAppMessage: function onShareAppMessage() {
    wx.createVideoContext('myVideo').pause();
    return {
      title: '【Fate全系列】英灵乱斗: 夺回未来的战争「Grand Order」',
      desc: '【Fate全系列】英灵乱斗: 夺回未来的战争「Grand Order」',
      path: '/pages/play/play',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
          wx.createVideoContext('myVideo').play();       
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '失败',
          icon: 'fail',
          duration: 1000,
          mask: true
        })
          wx.createVideoContext('myVideo').play();
      }
    }
  },
  onShow: function onShow() {
    var _this = this;
    wx.getStorage({
      key: 'numberColor',
      success: function success(res) {
        _this.setData({
          numberColor: res.data
        });
      }
    });
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value;
  },
  bindSendDanmu: function () {
    if (this.data.isRandomColor) {
      var color = getRandomColor();
    } else {
      var color = this.data.numberColor;
    }
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: color
    });
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  },
  switchChange: function (e) {
    this.setData({
      isRandomColor: e.detail.value
    });
  },
  //跳转到选择颜色的页面
  selectColor: function () {
    wx.navigateTo({
      url: '../selectColor/selectColor',
      success: function (res) {
      },
      fail: function fail() {
      },
      complete: function () {
      }
    });
  }
}) 