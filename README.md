# note
由于项目中用到这个效果，网上又搜索不到，所以干脆封装了一个。

##使用

+ 1 依赖 jquery , jquery.easing.js ;

+ 2 直接引入 lib/index.js 。

+ 3 生成实例对象

    + var obj = new rollTxt(id , options);
    + 实例对象提供两个方法 ： 
        + updateText : 实时纠正效果
        + startMove : 生成动画
## options配置参数

```js
bottom: '80%',         //相对父级要移动的距离
,opacity : 0.3         //终止显示透明度
,fontSize : '16px'     //终止显示的字体大小
,time : 4000           //动画时长 单位 ms
,ease : 'easeOutQuart' //动画效果
```

