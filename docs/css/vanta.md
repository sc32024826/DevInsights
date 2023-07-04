# Vanta

[官网:`https://www.vantajs.com/?effect=cells`](https://www.vantajs.com/?effect=cells)

## 效果

<!-- <div id="demo" ref="demo"></div>

<script>
    import * as THREE from 'three'
    import RINGS from 'vanta/src/vanta.rings'
    let vatan = null
    export default{
        mounted(){
            vatan = RINGS({
                el: this.$refs.demo,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                THREE
            })
        },
        beforeDestroy(){
            vatan && vatan.destroy()
        }
    }
</script>

<style>
    #demo{
        width:100%;
        height:400px;
        background: white;
    }
</style> -->

## 主要使用方法

```javascript
<script src="three.r134.min.js"></>
<script src="vanta.cells.min.js"></script>
<script>
VANTA.CELLS({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00
})
</script>
```

## 在`vitepress`的首页中使用`vanta`

查看元素之后发现没有特定的元素只出现在首页，因此用通用方法引用之后 在其他页面依然存在效果，并且视觉有效有影响，
因此改用`vue`的实现思路，在首页 添加一个`div` 使用`fixed`布局,再启用`vanta`

``` vue
<!-- 实际使用过程中 发现 添加template 之后 无法起效 -->
<div id="Vantacontainer" ref="myBackground"></div>
<!-- 脚本 -->
<script>
    import * as THREE from 'three'
    import RINGS from 'vanta/src/vanta.rings'
    let vatan = null
    export default{
        mounted(){
            vatan = RINGS({
                el: this.$refs.myBackground,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                THREE
            })
        },
        beforeDestroy(){
            vatan && vatan.destroy()
        }
    }
</script>
<!-- 样式 -->
<style>
#Vantacontainer{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</>
```
