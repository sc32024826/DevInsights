# Loading 特效

## 效果

<div class="container">
    <div class="loading"></div>
</div>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #001d30;
    animation: change_background 5s linear infinite;
}
@keyframes change_background{
    to{
        filter: hue-rotate(360deg);
    }
}
.loading{
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(to top, #001d30 40%, #51eeee);
    border-radius: 50%;
    animation: rotate 2s linear infinite;
    &::before{
        content: '';
        position: absolute;
        background: #001d30;
        inset: 20px 20px 0 0;
        border-radius: 50%;
    }
    &::after{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: #51eeee;
        border-radius: 50%;
        top: 50px;
        right: -8px;
        box-shadow: 0 0 5px #51eeee,
            0 0 25px #51eeee,
            0 0 50px #51eeee,
            0 0 75px #51eeee;
    }
}

@keyframes rotate {
    to{
        transform: rotate(360deg);
    }
}
</style>

## 代码

```html
<div class="container">
    <div class="loading"></div>
</div>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #001d30;
    animation: change_background 5s linear infinite;
}
@keyframes change_background{
    to{
        filter: hue-rotate(360deg);
    }
}
.loading{
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(to top, #001d30 40%, #51eeee);
    border-radius: 50%;
    animation: rotate 2s linear infinite;
    &::before{
        content: '';
        position: absolute;
        background: #001d30;
        inset: 20px 20px 0 0;
        border-radius: 50%;
    }
    &::after{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: #51eeee;
        border-radius: 50%;
        top: 50px;
        right: -8px;
        box-shadow: 0 0 5px #51eeee,
            0 0 25px #51eeee,
            0 0 50px #51eeee,
            0 0 75px #51eeee;
    }
}

@keyframes rotate {
    to{
        transform: rotate(360deg);
    }
}
</style>
```
