## NGuide

* 版本：1.0
* 教程：[http://gallery.kissyui.com/NGuide/1.0/guide/index.html](http://gallery.kissyui.com/NGuide/1.0/guide/index.html)
* 多步引导demo：[http://gallery.kissyui.com/NGuide/1.0/demo/index.html](http://gallery.kissyui.com/NGuide/1.0/demo/index.html)
* 单步引导demo：[http://gallery.kissyui.com/NGuide/1.0/demo/single.html](http://gallery.kissyui.com/NGuide/1.0/demo/single.html)

## 组件说明

这是一个基于KISSY的新人引导组件，当用户第一次访问，或用户多次访问但未销毁引导功能的时候页面会出现一个引导浮层。用户可以点击“上一个”、“下一个”、“跳过”、“完成”，四个按钮操作复层，点击右上角的关闭小叉，关闭引导（不是销毁，刷新页面再次出现）。当用户点击“跳过”、“完成”时，引导功能将销毁，可调用实例的`reset()`方法，重启引导功能。详细用法在demo中有演示。

组件内部使用`offline`组件来存储引导状态，使用`xtemplate`组件来渲染引导层内部数据。

## 组件方法

* `hide`：暂时隐藏引导层，刷新后再次出现。
* `reset`：当引导功能被销毁后，调用此方法重启。

## 参数说明

* @param id{String} 记录引导状态标识，当多页面共用该组件时作为pageId，因此当出现多页面共用时请确保多页面间id唯一，否则会产生step冲突，默认值ng-index
* @param arrowSize{Number} 复层指向箭头尺寸，由样式决定，组件默认15
* @param auto{Boolean} 是否自动初始化引导层，即页面加载完成后直接显示
* @param trigger{String|HTMLElement} 当auto为false时的，引导组件触发器，点击该节点触发引导功能
* @param steps{Array} 引导步奏配置，包括每一步对应指向的节点及其他属性
    - @property target{String|HTMLElement} 引导层指向的目标
    - @property placement{String} 引导层相对于target的位置，可选值`left`、`right`、`top`、`bottom`，默认为`left`
    - @property title{String} 引导层标题内容
    - @property content{String} 引导层内容
    - @property offsetX{Number} 引导层水平偏移量
    - @property offsetY{Number} 引导层垂直偏移量
    - @property arrowOffset{Number} 引导层指向箭头的偏移位置，默认为15
    - @property width{Number} 引导层宽度（不包括padding），默认320

## 使用方法

本地调用，需添加组件包配置，如下：

```
var S = KISSY;
S.Config.debug = true;
if (S.Config.debug) {
    var srcPath = "../../../";
    S.config({
        packages:[
            {
                name:"gallery",
                path:srcPath,
                charset:"utf-8",
                ignorePackageNameInUri:true
            }
        ]
    });
}
```
组件调用方法：

```
S.use('gallery/NGuide/1.0/index,gallery/NGuide/1.0/index.css', function (S, NGuide) {
     var ng = new NGuide({
        id: "ng-index",
        auto: true,
        trigger: ".NG-Start", //auto为false时，点击该节点触发引导
        steps: [
            {
                target: ".ng-first",
                placement: "right", //top、right、bottom
                title: "新人引导第一步",
                content: "这里是头部，演示demo的第一部分",
                offsetX: 10,
                offsetY: -40,
                arrowOffset: 60,
                width: 250
            },
            {
                target: ".ng-second",
                placement: "left",
                title: "新人引导第二步",
                content: "This is the second part of the guide.",
                arrowOffset: 20
            },
            {
                target: ".ng-third",
                placement: "bottom",
                title: "新人引导第三步",
                content: "新人引导第三步，前端技能之熟练使用kissy，熟悉前端开发三要素：结构、表现、行为。",
                arrowOffset: "50%",
                width: 400
            },
            {
                target: ".ng-fourth",
                placement: "top",
                title: "新人引导第四步",
                content: "新人引导第四步，前端深入学习，代码优化，性能提升，编写属于自己的库，玩转前端开发。",
                offsetY: 20,
                arrowOffset: "48%",
                width: 400
            }
        ]
     });
})
```

## 致谢

感谢@阿大 提供[hopscotch](http://linkedin.github.io/hopscotch/)做参考，感谢@伯方 offline组件支持，感谢强大的kissy团队。

## changelog

### 2013-09-19 组件升级

- 添加单步引导支持
- 添加多页面支持
- 解决多页面localStorage并存冲突的bug
- 添加@param id的意义

### 2013-09-11 初次提交组件


