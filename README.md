# 微信小程序学习  哔哩哔哩小程序（待完善）
## 项目预览图

![image](https://github.com/wuyangshu/bilibili/raw/master/GIF.gif)

## 小程序？大改变？
之前就被朋友安利使用小程序，最近接近了小程序，发现了它竟然带来了一场“大革命”。
简单说，它就是一个可以实现之前只能是原生态APP可以实现的效果和功能。比如说，一些酷炫的页面与转场，一些可以直接和手机硬件交互的功能，录音啊，拍视频啊，调用手机的重力感应啊，GPS啊等等。
专业点来说，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。
小程序的轻量化带来了app所不具有的许多优点，它同时也在向着我们的日常app“宣战”，这场战争花落谁家，就让我们拭目以待吧。

## 制作简单？
小程序作为一颗冉冉升起的新星，他之所以能被大家接受，不仅仅是因为他的轻量化，脱去了app的繁重外壳，还因为他很容易上手。在经过几天时间去熟悉小程序的构建和说明文档等，我这种初学者也能慢慢地摸到小程序的门槛，进入小程序这个新世界，完成自己的构思。

## 我们能做什么？
作为一个二次元爱好者（别看着我，我当然不是死宅(ノ=Д=)ノ┻━┻），使用最多的app当然就是我大b站了（哔哩哔哩 (゜-゜)つロ 干杯~-bilibili），所以应着自己的爱好，尝试着制作了一个哔哩哔哩的小程序，途中简直是经历了千难万险，最后因为能力问题只是制作了一个半成品，尚有很多功能尚未实现，但是我是有梦想的人，之后还是要多学习，将它慢慢完善，这次就当交流，大家互相学习（｡ò ∀ ó｡）

## 项目工具及文档
1. **微信web开发者工具：**[微信小程序官网](https://mp.weixin.qq.com/debug/wxadoc/dev/) 微信开发的小程序编辑软件，下载安装即可使用；
2. **开发文档：**[微信小程序宝典秘籍](https://www.w3cschool.cn/weixinapp/9wou1q8j.html) 这里面详细的介绍了小程序的各种信息，包括组件、框架、API等等，有很多值得我们去阅读的信息；
3. **图标库：** [Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/) 这个是网站简直是神器，什么图标都能找到，我很喜欢。

## 目录结构
    ├── app.js
    ├── app.json
    ├── app.wxss
    ├── utils
    │   └── util.js
    ├── pages
    │   ├── common
    │   │   ├── header.wxml
    │   │   └── item.wxml
    │   ├── index
    │   │   ├── index.js
    │   │   ├── index.wxml
    │   │   └── index.wxss
    │   ├── selectColor
    │   │   ├── selectColor.js
    │   │   ├── selectColor.wxml
    │   │   └── selectColor.wxss
    │   ├── play
    │   │   ├── play.js
    │   │   ├── play.json
    │   │   ├── play.wxml
    │   │   └── play.wxss
    └── resources
        └── images
        
#### 页面注册
#### app.json
        "pages":[
            "pages/index/index",
            "pages/play/play",    
            "pages/selectColor/selectColor"
          ],

  
## 项目功能
#### 已实现功能：
 * 广告轮播图
 * 视频播放
 * 弹幕功能
 * 弹窗功能
 * 分享功能
#### 未实现功能：
这个有点多。。。毕竟是我大B站，目前只实现了一些力所能及的功能，以后会完善的。

## 部分功能实现
#### 顶部导航栏
 ```<view class="nav-scroll">
        <scroll-view class="scroll-view_H" scroll-x="true" style="width: 100%">
          <text wx:for="{{section}}" wx:key="id" id="{{item.id}}" catchtap="handleTap"
                class="nav-name {{item.id == currentId ? 'nav-hover' : ''}}"
                style=" padding-right:{{topdistance}}px;padding-left:{{topdistance}}px">{{item.name}}</text>
        </scroll-view>
      </view>
    </view>
    <block wx:if="{{currentId == 1001}}">
    <view class="slider-wrapper">
    <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}"
       interval="{{interval}}" duration="{{duration}}" indicator-active-color="#EA6CAF">
          <block wx:for="{{imgUrls}}">
            <swiper-item>
               <navigator url="{{item.link}}" hover-class="navigator-hover">
                <image src="{{item.url}}" class="slide-image" width="355" height="150" />
               </navigator>
            </swiper-item>
          </block>
    </swiper>
  </view>
```
```
 onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setTopDistance();
    this.setData({
      stagePoint: util.stagePoint()
    })
    if (this.data.currentId == 1001) {
      this.Page();
    }
    else if (this.data.currentId == 1004) {
      this.channelPage();
    }
    else if (this.data.currentId == 1003) {
      this.livePage();
    }
  }
  ```
顶部导航栏实际就是利用scroll-view控件，给他绑定当前页面的id，当触发点击事件时，加载与该id匹配的信息。要注意的是一开始要给currentId一个页面的值，不然无法显示出来。

#### 弹幕功能
小程序本身具备弹幕功能，阅读api，对着原版代码进行了一些改变，实现了弹幕自己选择颜色，并且将弹幕和弹出层结合在一起使用。
```
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
  }
  }
})
```
参考了开源代码后，发现弹幕其实就是对字进行动画效果，沿着y轴滚动出现，利用计时器不停播放多组动画，抽屉效果也就是对遮罩层的利用，然后利用动画效果，将弹出栏显示出来，在制作时，记得让视频暂停，这样才能给用户一个好的体验，毕竟没有人想错过一部精彩的视频(￣y▽￣)~

#### 分享功能
其实也是对api的一种利用，（这里强调一下，api真的很重要，喜欢大家好好阅读），微信小程序也是前段时间才可以通过按钮实现分享功能。
```
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
  }
  ```
  
  这是我的写法，下面给出api内容，可以根据不同人的想法进行修改。
  
#### 分享api格式
 ```
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123'
    }
  }
 ```
  但是这个id很多人不明白是什么id，之前我也不明白，后来发现这个id就是你要分享的这篇文章的id，但是一定要注意异步与同步的问题。
  
## 踩过的坑<(｀^´)>
 1.微信小程序的编译包是不能超过2M的，一开始放了一大堆的本地图片，结果打包的时候，告诉我太大了，无奈下想办法将图片上传到云端，将图片链接化；
 2.再次强调，小程序api很重要，里面包含了很多知识，我的弹幕功能也是后来查找时发现了api，这可以让我们少走很多弯路；
 3.重要的事情说三遍，页面内跳转不能超过5级，页面内跳转不能超过5级，页面内跳转不能超过5级。_(:з」∠)_
 
## 项目地址
https://github.com/wuyangshu/bilibili
 
## 最后要说的话
 现在的自己技术还是有些不太成熟，接触小程序不久，还有很多需要学习的地方，不能很好的重现哔哩哔哩的功能，不过作为一个学生，还有很长的学习之路要走。
 最后希望能得到各位在求学路上同行的小伙伴的小星星⭐，谢谢(´∀｀)♡
