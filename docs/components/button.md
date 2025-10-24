# 🎋 按钮 Button


## 🎈 何时使用

响应用户点击行为，引导用户完成操作时。


## 🧩 按钮类型

在 **Bamboo Design** 中，我们提供了 **五种按钮类型**：

- 🔵 **主按钮（Primary）**：页面上最重要的引导性按钮，一个区域建议只保留一个主按钮。
- ⚪️ **默认按钮（Default）**：常规操作按钮。
- ⚠️ **警告按钮（Alert）**：用于警告类操作，提醒用户注意。
- 🔴 **危险按钮（Danger）**：用于危险操作（如删除、清除），需用户谨慎操作。
- 🔗 **链接按钮（Link）**：用于跳转或导航行为。


## ⚙️ 按钮属性

| 属性             | 说明                                    | 类型      | 默认值  |
| :--------------- | :-------------------------------------- | :-------- | :------ |
| **outline**      | 是否带边框样式                          | `boolean` | `false` |
| **disabled**     | 是否禁用按钮                            | `boolean` | `false` |
| **loading**      | 是否处于加载状态                        | `boolean` | `false` |
| **size**         | 按钮尺寸，可选 `s` / `m` / `l`          | `string`  | `m`     |
| **href**         | 链接按钮跳转地址（type 为 link 时生效） | `string`  | -       |
| **enterAnimate** | 是否启用入场动画                        | `boolean` | `false` |
| **thinFont**     | 是否使用细字体                          | `boolean` | `false` |
| **darkMode**     | 是否启用暗色模式                        | `boolean` | `false` |


## 🎨 按钮类型展示

### 主按钮（Primary）

<br>
<bm-button type="primary">主要按钮</bm-button>

```vue
<bm-button type="primary">主要按钮</bm-button>
```

### 默认按钮（Default）

<br>
<bm-button>默认按钮</bm-button>

```vue
<bm-button>默认按钮</bm-button>
```

### 警告按钮（Alert）

<br>
<bm-button type="alert">警告按钮</bm-button>

```vue
<bm-button type="alert">警告按钮</bm-button>
```

### 危险按钮（Danger）

<br>
<bm-button type="danger">危险按钮</bm-button>

```vue
<bm-button type="danger">危险按钮</bm-button>
```

### 链接按钮（Link）

<br>
<bm-button type="link" href="https://www.baidu.com">http 链接按钮</bm-button>

```vue
<bm-button type="link" href="https://www.baidu.com">http 链接按钮</bm-button>
```

## ⚙️ 按钮属性展示

### 🔲 边框 outline

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" outline>主要按钮</bm-button> 
 <bm-button type="alert" outline>警告按钮</bm-button> 
 <bm-button type="danger" outline>危险按钮</bm-button> 
 <bm-button type="link" href="https://www.baidu.com" outline>链接按钮</bm-button>
</div>

```vue
<bm-button type="primary" outline>一个按钮</bm-button>
```

### 🚫 禁用 disabled

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;"> 
<bm-button type="primary" outline disabled>主要按钮</bm-button> 
<bm-button type="alert" outline disabled>警告按钮</bm-button> 
<bm-button type="danger" outline disabled>危险按钮</bm-button> 
<bm-button type="link" href="https://www.baidu.com" outline disabled>链接按钮</bm-button> </div>

```vue
<bm-button type="primary" outline disabled>一个按钮</bm-button>
```

### 📏 尺寸 size

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" size="s">小按钮</bm-button> 
 <bm-button type="primary" size="m">正常按钮</bm-button> 
 <bm-button type="primary" size="l">大按钮</bm-button> 
</div>

```vue
<bm-button type="primary" size="s">小按钮</bm-button>
<bm-button type="primary" size="m">正常按钮</bm-button>
<bm-button type="primary" size="l">大按钮</bm-button>
```

### ✨ 入场动画 enterAnimate

动画会在按钮挂载时触发，此处仅展示代码：

```vue
<bm-button type="primary">主要按钮</bm-button>
<bm-button type="primary" enterAnimate>主要按钮</bm-button>
```

### ⚪️ 细字体 thinFont

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;"> 
<bm-button type="primary" thinFont>主要按钮</bm-button> 
<bm-button type="alert" thinFont>警告按钮</bm-button> 
<bm-button type="danger" thinFont>危险按钮</bm-button> 
<bm-button type="link" href="https://www.baidu.com" thinFont>链接按钮</bm-button> 
</div>

```vue
<bm-button type="primary" thinFont>主要按钮</bm-button>
<bm-button type="alert" thinFont>警告按钮</bm-button>
<bm-button type="danger" thinFont>危险按钮</bm-button>
<bm-button
  type="link"
  href="https://www.baidu.com"
  thinFont
>链接按钮</bm-button>
```

### 🌑 暗色模式 darkMode

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;"> 
<bm-button type="primary" darkMode>主要按钮</bm-button> 
<bm-button type="alert" darkMode>警告按钮</bm-button> 
<bm-button type="danger" darkMode>危险按钮</bm-button> 
<bm-button type="link" href="https://www.baidu.com" darkMode>链接按钮</bm-button> 
</div>

```vue
<bm-button type="primary" darkMode>主要按钮</bm-button>
<bm-button type="alert" darkMode>警告按钮</bm-button>
<bm-button type="danger" darkMode>危险按钮</bm-button>
<bm-button
  type="link"
  href="https://www.baidu.com"
  darkMode
>链接按钮</bm-button>
```
