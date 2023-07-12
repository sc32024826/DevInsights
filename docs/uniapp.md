# uniapp 相关笔记

## 创建 `typescript` 开发的工程

```bash
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

## `nvue` 页面说明
<!-- ![图片](/nvue.png) -->
### <img src="/nvue.png" data-fancybox="gallery"/>

<!-- ![图片](/nvue2.png) -->
### <img src="/nvue2.png" data-fancybox="gallery"/>

## nvue 页面与 vue页面 区别点

||vue|nvue|
|---|---|---|
|事件|`preventDefault` 和 `stopPropagation`|只有 `stopPropagation`|
|`renderjs`|支持|不支持|


## 透明页面

## 动态组件`component`

在`uniapp`中 `vue2`版本 `is`必须传递`string`类型, 否则云打包无法正常渲染


#### 通过该请求可以查询`appstore`当前最新的版本信息
用于匹配ios端 是否需要跳转应用市场升级
`https://itunes.apple.com/cn/lookup?id=`


### 如果使用uniapp的canvas 滑动过快会造成笔画不连贯

```vue
<template>
    <view>
        <!-- master 画布 用于把确定的内容绘制上去 -->
        <canvas canvas-id="canvas-master" class="master-canvas"></canvas>
        <!-- 分支画布 用于绘制当前内容 -->
        <canvas canvas-id="canvas" class="canvas" disable-scroll @touchstart="touchstart" @touchmove="touchmove"  @touchend="touchend" @touchcancel=""></canvas>
        <view class="tools-bar">
            <text class="" v-for="(item, index) in func" :key="index" @click="changeOption(item.value)">{{ item.name }}</text>
        </view>
    </view>
</template>

<script>
let branch = null;
let master = null; // master
let start = []
export default {
    data() {
        return {
            url:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202109%2F06%2F20210906225922_1c31b.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658733420&t=4ac697062dfcdbfe9eea7c3eebbd1a16',
            option: 'pan',
            func: [{ name: '涂鸦', value: 'pan' }, { name: '画圆', value: 'circle' }, { name: '矩形', value: 'rect' }, { name: '橡皮擦', value: 'eraser' }],
        };
    },
    computed: {
        sys() {
            return uni.getSystemInfoSync();
        },
        canvas() {
            return [this.sys.screenWidth, this.sys.screenHeight];
        }
    },
    onReady() {
        // 第一步 绘制底图
        branch = uni.createCanvasContext('canvas');
        master = uni.createCanvasContext('canvas-master');
        master.drawImage(this.url, 0, 0, ...this.canvas);
        master.draw();
        // branch.moveTo(10, 10)
        // // branch.rect(10, 10, 100, 50)
        // branch.lineTo(110, 60)
        // branch.stroke()
        // branch.draw()
    },
    methods: {
        touchstart(e){
            start = [e.touches[0].x, e.touches[0].y]
            this.setCanvasStyle()
            // 根据操作类型选择相应的处理逻辑
            switch (this.option) {
                // 涂鸦
                case 'pan':
                    branch.moveTo(...start)
                    break;
                //  画圆
                case 'circle':
                    break;
                // 矩形
                case 'rect':
                    break;
                // 橡皮擦功能
                case 'eraser':
                    break
                default:
                    break;
            }
        },
        touchmove(e){
            // 根据操作类型选择相应的处理逻辑
            switch (this.option) {
                // 涂鸦
                case 'pan':
                    let {x,y} = e.touches[0]
                    // branch.lineTo(x,y)
                    // branch.stroke()
                    branch.arc(x-2 , y-2, 4, 0, 2 * Math.PI)
                    branch.fill()
                    branch.draw(true)
                    break;
                //  画圆
                case 'circle':
                    break;
                // 矩形
                case 'rect':
                    break;
                // 橡皮擦功能
                case 'eraser':
                    break
                default:
                    break;
            }
        },
        touchend(e){
            // 根据操作类型选择相应的处理逻辑
            switch (this.option) {
                // 涂鸦
                case 'pan':

                    break;
                //  画圆
                case 'circle':
                    break;
                // 矩形
                case 'rect':
                    break;
                // 橡皮擦功能
                case 'eraser':
                    break
                default:
                    break;
            }
        },
        // 设置画布属性
        setCanvasStyle(){
            branch.lineWidth = 4
            branch.setStrokeStyle('red')
        }
    },
};
</script>

<style lang="scss">
.master-canvas {
    width: 100%;
    height: 90vh;
}
.canvas {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 0;
    left: 0;
}

.tools-bar {
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    background-color: aqua;
    display: flex;
    justify-content: space-around;
    padding: 20rpx 0;
}
</style>

```
