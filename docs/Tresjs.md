# Tresjs


## 使用模型
```js
import { useGLTF } from "@tresjs/cientos";

const path = 'https://raw.githubusercontent.com/'
+ 'Tresjs/assets/main/models/gltf/blender-cube.glb'
const { scene } = await useGLTF(path)

```

```vue
<template>
    <Suspense>
        <TresCanvas window-size>
            <primitive :object="scene" />
        </TresCanvas>
    </Suspense>
</template>

```

##  Grid 辅助
```vue
<TresGridHelper />
```

![TresGridHelper](/1.png)