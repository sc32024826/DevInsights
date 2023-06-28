# vue 2 原理

## 基于 `Object.defineProperty(obj, key, value)`

```javascript
function defineReactive(data, key, val){
    if(arguments.length == 2) val = data[key]

    // 子元素进行 observe
    let child = observe(val)

    Object.defineProperty(obj, key, {
        // 可以被枚举
        enumerable: true,
        // 可以被配置
        configurable: true,
        get(){
            return val
        },
        set(newVal){
            if(newVal === val) return
            val = newVal
            // 新值
            child = observe(newValue)
        }
    })
}
```

## 循环递归

```javascript
function observe(value){
    // 如果value 不是对象, 什么都不做
    if(typeof value != 'object') return
    // 定义ob
    var ob
    if(typeof value.__ob__ !== 'undefined'){
        ob = value.__ob__
    }else{
        ob = new Observer(value)
    }
    return ob
}

observe(obj)
```

### 观察者 `Observer`

```javascript
class Observer(){
    constructor(value){
        // 添加不可枚举的__ob__对象
        def(value, '__ob__', this, false)
        this.walk(value)
    }
    // 遍历
    walk(){
        for(let k in value){
            defineReactive(value, k)
        }
    }
}
```

#### `def`

```javascript
function def(obj, key, value, enumerable){
    Object.defineProerty(obj, key,{
        value,
        enumerable,
        writable: true,
        configurable: true
    })
}
```
