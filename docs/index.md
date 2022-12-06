---
layout: home
hero:
    name: Vitepress
features:
  - icon: ⚡️
    title: 前端
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---
<div id="Vantacontainer" ref="myBackground">
</div>

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
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
#Vantacontainer{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>
