function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//获取舞台宽高
function stagePoint() {
  var stageSize = {};
  wx.getSystemInfo({
    success: function (res) {
      stageSize.stageWidth = res.windowWidth;
      stageSize.stageHeight = res.windowHeight;
    }
  });
  return stageSize;
}
function imageUtil(e) {
  var imageSize = {};
  var originalWidth = e.detail.width;
  var originalHeight = e.detail.height;
  var originalScale = originalWidth / originalHeight;//图片高宽比 
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      //判断按照那种方式进行缩放
      if (originalWidth > windowWidth) {//在图片width大于手机屏幕width时候
        var autoWidth = windowWidth;
        var autoHeight = (autoWidth * originalHeight) / originalWidth;
        imageSize.imageWidth = autoWidth;
        imageSize.imageheight = autoHeight;
      } else {//否则展示原来的数据
        imageSize.imageWidth = windowWidth;
        imageSize.imageheight = originalHeight;
      }
    }
  })
  return imageSize;
}
//读取xml字符串
function loadXMLStr(xmlString) {
  var danmulist = [];
  if (xmlString.indexOf("<d p")) {
    var str = xmlString.substring(xmlString.indexOf("<d p"), xmlString.length);
    var reg = /<d p/g;
    var arr = str.match(reg);
    if (arr) {
      console.log(str);
      console.log(arr.length);
      for (var i = 0; i < arr.length; ++i) {
        var getstr = str.substring(0, str.indexOf("</d>") + "</d>".length);
        str = str.substring(str.indexOf("</d>") + "</d>".length, str.length);
        var danmu = {
          text: getstr.substring(getstr.indexOf(">") + ">".length, getstr.indexOf("</d>")),
          color: '#ff00ff',
          time: Math.floor(getstr.substring(getstr.indexOf("<d p=\"") + "<d p=\"".length, getstr.indexOf(",")))
        }
        danmulist.push(danmu);
      }
    }
  }
  return danmulist;
}
module.exports = {
  formatTime: formatTime,
  imageUtil: imageUtil,
  stagePoint: stagePoint,
  loadXMLStr: loadXMLStr
}
