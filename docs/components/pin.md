# 📌 图钉 Pin
### 由Button组件扩展而来，用于固定位置，提示用户操作。

## 🎈 何时使用

浮动在页面上，用于固定位置，提示用户操作。演示将去除fixed属性，以展示图钉。

## ❤图钉本地属性

| 属性名 | 说明 | 类型 | 默认值 | 是否为继承属性|
| --- | --- | --- | --- | --- |
| **type** | 类型 | string | `'default'` | ✔ |
| **iconType** | 图标类型 | string | - | ✔ |
| **bubble** | 是否显示气泡 | boolean | `false` | ✔ |
| **bubbleReverse** | 鼠标悬浮时展示信息气泡，方向相反| boolean  | `false` | ✔ |
| **bubbleType**| 气泡类型| string  | `default` | ✔ |
| **iconOnly** | 是否仅显示图标 | boolean | `false` | ✔ |
| **subItem** | 是否为子项 | boolean | `false` | ❌ |


## 🎉属性示例

### 📍position属性
Pin图钉组件可通过position属性组合设置图钉的位置，默认位置为bottom right。
| 位置属性 | 默认值 |
| --- | --- |
| top | 顶部 |
| right | 右侧 |
| left | 左侧 |
| bottom | 底部 |

<preview path="./pin/pins.vue"></preview>

```vue
    <bm-pin iconType="fa-search" type="primary" icon-only top left>搜索</bm-pin>
    <bm-pin iconType="fa-user"  type="default" icon-only right>用户</bm-pin>
    <bm-pin iconType="fa-gear"  type="danger" icon-only left>设置</bm-pin>
    <bm-pin iconType="fa-question"  type="alert" icon-only bottom>帮助</bm-pin>
 
```

### 🥼type属性
Pin图钉组件继承Button的type属性，可通过type属性设置图钉的类型，默认类型为default。


<div style="display: flex;flex-wrap: wrap;gap: 8px;">
    <bm-pin iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;"></bm-pin>
    <bm-pin type="primary" iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;"></bm-pin>
    <bm-pin type="danger" iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;"></bm-pin>
    <bm-pin type="alert" iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;"></bm-pin>
</div>

```vue
    <bm-pin iconType="fa-search" ></bm-pin>
    <bm-pin type="primary" iconType="fa-search" ></bm-pin>
    <bm-pin type="danger" iconType="fa-search"  ></bm-pin>
    <bm-pin type="alert" iconType="fa-search" ></bm-pin>
```
### 🎨iconType属性
Pin图钉组件继承Button的iconType属性，可通过iconType属性设置图钉的图标类型，默认图标类型为fa-search。


<div style="display: flex;flex-wrap: wrap;gap: 8px;">
    <bm-pin iconType="fa-search" type="primary" style="position: relative; z-index: 0;">搜索</bm-pin>
    <bm-pin iconType="fa-user"  type="primary"  style="position: relative; z-index: 0;">用户</bm-pin>
    <bm-pin iconType="fa-gear"  type="primary"  style="position: relative; z-index: 0;" description="设置"></bm-pin>
    <bm-pin iconType="fa-question"  type="primary"  style="position: relative; z-index: 0;">帮助</bm-pin>
</div>

```vue
    <bm-pin iconType="fa-search" type="primary"  >搜索</bm-pin>
    <bm-pin iconType="fa-user"  type="primary"  >用户</bm-pin>
    <bm-pin iconType="fa-gear"  type="primary"  description="设置"></bm-pin>
    <bm-pin iconType="fa-question"  type="primary">帮助</bm-pin>
```
您可能注意到了，图钉组件可通过 `description属性` 或 `插槽` 设置图钉的描述，
<br>
如果同时设置了 `description属性` 和 `插槽` ，`插槽内容` 将覆盖 `description属性` 的值。
<br>
我们建议优先使用 `插槽` 设置图钉的描述,
因为插槽内容可以包含HTML标签，而description属性只能包含文本。
 
### 🖼iconOnly属性

Pin图钉组件可通过iconOnly属性设置是否仅显示图标，默认值为false。


<div style="display: flex;flex-wrap: wrap;gap: 8px;">
    <bm-pin iconType="fa-search" type="primary" icon-only style="position: relative; z-index: 0;">搜索</bm-pin>
    <bm-pin iconType="fa-user"  type="default" icon-only style="position: relative; z-index: 0;">用户</bm-pin>
    <bm-pin iconType="fa-gear"  type="danger" icon-only style="position: relative; z-index: 0;">设置</bm-pin>
    <bm-pin iconType="fa-question"  type="alert" icon-only style="position: relative; z-index: 0;">帮助</bm-pin>
</div>

```vue
    <bm-pin iconType="fa-search" type="primary" icon-only >搜索</bm-pin>
    <bm-pin iconType="fa-user"  type="default" icon-only >用户</bm-pin>
    <bm-pin iconType="fa-gear"  type="danger" icon-only >设置</bm-pin>
    <bm-pin iconType="fa-question"  type="alert" icon-only >帮助</bm-pin>
```


### 📝bubble属性
Pin图钉组件可通过bubble属性设置是否显示气泡，默认值为false。


<div style="display: flex;flex-wrap: wrap;gap: 8px;">
    <bm-pin iconType="fa-search" type="primary" bubble="搜索" style="position: relative; z-index: 0;" icon-only></bm-pin>
    <bm-pin iconType="fa-user"  type="default" bubble="用户信息" style="position: relative; z-index: 0;" icon-only></bm-pin>
    <bm-pin iconType="fa-gear"  type="danger" bubble="设置" style="position: relative; z-index: 0;" icon-only></bm-pin>
    <bm-pin iconType="fa-question"  type="alert" bubble="提示" style="position: relative; z-index: 0;" icon-only></bm-pin>
</div>

```vue
   <bm-pin iconType="fa-search" type="primary" bubble="搜索" icon-only></bm-pin>
    <bm-pin iconType="fa-user"  type="default" bubble="用户信息" icon-only></bm-pin>
    <bm-pin iconType="fa-gear"  type="danger" bubble="设置" icon-only></bm-pin>
    <bm-pin iconType="fa-question"  type="alert" bubble="提示" icon-only></bm-pin>
```
 



