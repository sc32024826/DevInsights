# Three

## 安装

```bash
# 安装
npm install three

# ts
npm install --save-dev @types/three
```

## 示例
视野角度（FOV）

 视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。

长宽比（Aspect Ratio）

近端面（Near Plane）

远端面（Far Plane）

  当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。

```js
// # 使用
import * as THREE from "three";

// 需要单独引用
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


// # 创建场景
const scene = new THREE.Scene();

// # 创建相机
// 参数： 视野角度、长宽比、近端面、远端面
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// # 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// 创建 立方体
const geometry = new Three.BoxGeometry();
const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Three.Mesh(geometry, material);

scene.add(cube);

// # 设置相机位置
camera.position.z = 5;

// # 将渲染器添加到 DOM
document.body.appendChild(renderer.domElement);

// 添加控制器
const controls = new OrbitControls(camera, renderer.domElement);

// # 渲染场景
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```


## `Tresjs`

可以使用组件嵌套,  但是不能使用Dom中的 任何组件 如div等