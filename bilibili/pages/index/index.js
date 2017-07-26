//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    section: [
      { name: '推荐', id: '1001' },
      { name: '追番', id: '1002' },
      { name: '直播', id: '1003' },
      { name: '分区', id: '1004' },
      { name: '我的', id: '1005' }
    ],
      imgUrls: [
       {
          link:'/pages/index/index',
          url:'http://i1.ciimg.com/602162/bddd7b3c771c3398.jpg'
       },{
          link:'/pages/index/index',
          url:'http://i1.ciimg.com/602162/e21a851a96a79f73.jpg'
       },{
          link:'/pages/index/index',
          url:'http://i1.ciimg.com/602162/5035a3feb91221cf.jpg'
       },{
          link:'/pages/index/index',
          url:'http://i1.ciimg.com/602162/7cf2a3d3c37417ad.jpg'
       }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    currentId: 1001,
    hotList: [
      {
        coverImg: 'http://i1.ciimg.com/602162/46c98042f65ac49d.jpg',
        title: 'bilibili Moe 2017 动画角色人气大赏国产动画场宣传PV',
        playNum: '21.3万',
        commentNum: '8638',
        avid: 'av1'
      },
      {
        coverImg: 'http://i1.ciimg.com/602162/087c6fdd55790380.jpg',
        title: '【1月】小林家的龙女仆 10',
        playNum: '403.7万',
        commentNum: '14.0万',
        avid: 'av2'
      },
      {
        coverImg: 'http://i1.ciimg.com/602162/1415c200401d8d5b.jpg',
        title: '【7月】Fate/Apocrypha 01【独家正版】',
        playNum: '440.7万',
        commentNum: '12.3万',
        avid: 'av3'
      },
      {
        coverImg: 'http://i1.ciimg.com/602162/c16ea84b00da044d.jpg',
        title: '【Fate全系列】英灵乱斗: 夺回未来的战争「Grand Order」',
        playNum: '74.9万',
        commentNum: '9773',
        avid: 'av4',
        link: '/pages/play/play'
      }
    ],
      // 正在直播
    liveList: [
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/96025d17ed05961230a7d1401ca1fe3b79cc12db.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '尤樱',
        desp: '你女朋友在直播你不来看看吗？',
        online: '877',
        avid: 'av5'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/a1678768dd9c7023af7ab0f3de2a2df2c525e741.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/d1bec5ec111987537ecf3e7f43a8b3678ed3c5c3.jpg',
        name: '我是小麦伊哦哦',
        desp: '告别:我爱你们',
        online: '877',
        avid: 'av6'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/89047f3faee35d0cb095d7dfb01ec4d3a8ec4434.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/1e31ac069058528e26b9be60b26d86c9c9a99f62.jpg',
        name: '坂本叔',
        desp: '【坂本】非洲黑客',
        online: '877',
        avid: 'av7'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/24dbcc68325ff5fb3d235af97ad075dc5087733a.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: 'miriちゃん',
        desp: '日语点歌姬',
        online: '877',
        avid: 'av8'
      }
    ],
    // 番剧更新
    bangumiList: [
      {
        coverImg: 'http://i0.hdslb.com/bfs/bangumi/4d06e660b8da9cb5335552f4ebde89bbcb2e9d4f.jpg',
        bangumiTitle: '双星之阴阳师',
        bangumiPage: '更新至第34话',
        avid: 'av9'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/bangumi/0e6bce5d018796dda7782aa5c97bfdd14691348a.jpg',
        bangumiTitle: '口水三国',
        bangumiPage: '更新至第 关羽篇话',
        avid: 'av10'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/bangumi/367387d69ac43c160a453d14cb34256abaca3b4a.jpg',
        bangumiTitle: '生死回放',
        bangumiPage: '更新至第34话',
        avid: 'av11'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/bangumi/4937bf71a4a5a6a426d09e9a78d27696b4746507.jpg',
        bangumiTitle: '罗小黑战记',
        bangumiPage: '更新至第34话',
        avid: 'av12'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/bangumi/2ed6be9050dfa4afe6e2651741d81843a0e81c67.jpg',
        bangumiTitle: '黑白来看守所',
        bangumiPage: '更新至第9话',
        avid: 'av13'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/bangumi/2673ac643b48eb5bda64c960a2ca850fbebb839d.jpg',
        bangumiTitle: '夏目友人帐 伍',
        bangumiPage: '更新至第8话',
        avid: 'av14'
      }
    ],
    animationList: [
      {
        coverImg: 'http://i2.hdslb.com/bfs/archive/1239539a2f262d933bca7c2c1e290139420ba76a.jpg_320x200.jpg',
        title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av15'
      },
      {
        coverImg: 'http://i1.hdslb.com/bfs/archive/ecce95b426faf188e6c28f9d3a0bdc63c5a72bb3.jpg_320x200.jpg',
        title: '【斗图歌】装逼不如斗图',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av16'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/archive/11bf8d41fffcad31976317760e301e2db64be8c8.png_320x200.png',
        title: '【胖胖球】【双子星】【獒龙】荒岛 - El transcurrir de las horas',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av17'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/archive/e73a92b0ed615b4d6568888906d09f84d0835674.jpg_320x200.jpg',
        title: '撩人净土系列【红菱歌舞伎初音】极乐净土【大神犬PV付】MME配布',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av18'
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
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
  },
  setTopDistance: function () {
    var stagewidth = util.stagePoint().stageWidth;
    var distance = (stagewidth / this.data.section.length - 42) / 2;
    this.setData({
      topdistance: distance       //每个标签的间距
    })
  },
  //上方选项点击
  handleTap: function (e) {
    let id = e.currentTarget.id;
    if (id) {
      this.setData({ currentId: id })
      this.onLoad();
    }

  },
  channelPage: function () {
    var stagewidth = util.stagePoint().stageWidth;
    var distance = (stagewidth / 4);
    var titlename = [{ name: "直播", icon: "../../resources/images/直播.png" },  
      { name: "番剧", icon: "../../resources/images/番剧.png" },   
      { name: "动画", icon: "../../resources/images/动画.png" },   
    { name: "国创", icon: "../../resources/images/国创.png" },    
    { name: "音乐", icon: "../../resources/images/音乐.png" }, 
    { name: "舞蹈", icon: "../../resources/images/舞蹈.png" },  
    { name: "游戏", icon: "../../resources/images/游戏.png" },   
    { name: "科技", icon: "../../resources/images/科技.png" },    
    { name: "生活", icon: "../../resources/images/生活.png" },    
    { name: "鬼畜", icon: "../../resources/images/鬼畜.png" },   
    { name: "时尚", icon: "../../resources/images/时尚.png" },       
    { name: "广告", icon: "../../resources/images/广告.png" },
    { name: "娱乐", icon: "../../resources/images/娱乐.png" },
    { name: "电影", icon: "../../resources/images/电影.png" },
    { name: "电视剧", icon: "../../resources/images/电视剧.png" },
    { name: "游戏中心", icon: "../../resources/images/游戏中心.png" },
    ]
    this.setData({
      channeldistance: distance,       //每个标签的间距
      channelname: titlename
    })

  },
  livePage: function () {
    var stagewidth = util.stagePoint().stageWidth;
    var distance = (stagewidth / 5);
    var titlename = [{ name: "关注", icon: "../../resources/images/关注.png" },
      { name: "中心", icon: "../../resources/images/中心.png" },
      { name: "小视频", icon: "../../resources/images/小视频.png" },
      { name: "搜索", icon: "../../resources/images/搜索.png" },
      { name: "分类", icon: "../../resources/images/分类.png" }
    ]
    this.setData({
      live1distance: distance,       //每个标签的间距
      live1name: titlename
    })

  },
})
