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
| **block**        | 是否占据父元素宽度                      | `boolean` | `false` |
| **enterAnimate** | 是否启用入场动画                        | `boolean` | `false` |
| **thinFont**     | 是否使用细字体                          | `boolean` | `false` |
| **darkMode**     | 是否启用暗色模式                        | `boolean` | `false` |
| **href**         | 链接按钮跳转地址（type 为 link 时生效） | `string`  | -       |
| **newWindow**    | 是否在新窗口打开链接（type 为 link 时生效） | `boolean` | `false` |
| **iconType**     | 图标类型（可选）设置后默认开启图标                     | `string`  | -       |
| **iconOnly**     | 是否仅显示图标（不显示文本）              | `boolean` | `false` |
| **reverse**      | 是否图标在文本左侧                      | `boolean` | `false` |



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
<bm-button type="link" href="https://www.baidu.com" >http 链接按钮</bm-button>

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
### 🙌 占据父元素宽度 block

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" size="m" block>正常按钮</bm-button> 
  <bm-button type="primary" size="m" block>正常按钮</bm-button> 
</div>

```vue
<bm-button type="primary" size="s" block>小按钮</bm-button>
<bm-button type="primary" size="m" block>正常按钮</bm-button>
<bm-button type="primary" size="l" block>大按钮</bm-button>
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
### 🔗 新窗口打开 newWindow

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="link" href="https://www.baidu.com" newWindow>新窗口打开</bm-button>
<bm-button type="link" href="https://www.baidu.com" newWindow>本地跳转</bm-button>
</div>

```vue
<bm-button type="link" href="https://www.baidu.com" newWindow>新窗口打开</bm-button>
<bm-button type="link" href="https://www.baidu.com">本地跳转</bm-button>
```
### 🎁图标 iconType

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" iconType="fa-search" >搜索</bm-button>
<bm-button type="danger" iconType="fa-user">用户</bm-button>
<bm-button type="alert" iconType="fa-shopping-cart">购物车</bm-button>
<bm-button type="link" iconType="fa-check">检查</bm-button>
</div>

```vue
<bm-button type="primary" iconType="fa-search">图标</bm-button>
<bm-button type="primary" iconType="fa-search">图标</bm-button>
<bm-button type="primary" iconType="fa-search" size="s">图标</bm-button>
<bm-button type="primary" iconType="fa-search" size="l">图标</bm-button>
```
### 😎单图标按钮 iconOnly

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" iconType="fa-search" iconOnly>搜索</bm-button>
<bm-button type="danger" iconType="fa-user" iconOnly>用户</bm-button>
<bm-button type="alert" iconType="fa-shopping-cart" iconOnly>购物车</bm-button>
<bm-button type="link" iconType="fa-check" iconOnly>检查</bm-button>
<bm-button type="primary" iconType="fa-search"  >正常图标</bm-button>
</div>

```vue
<bm-button type="primary" iconType="fa-search" iconOnly>图标</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly size="s">图标</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly size="l">图标</bm-button>
```

### 🎉图标居右

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" iconType="fa-search"  reverse>搜索</bm-button>
<bm-button type="danger" iconType="fa-user"  reverse>用户</bm-button>
<bm-button type="alert" iconType="fa-shopping-cart"  reverse>购物车</bm-button>
<bm-button type="link" iconType="fa-check"  reverse>检查</bm-button>
</div>

```vue
<bm-button type="primary" iconType="fa-search" iconOnly reverse>图标</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly reverse size="s">图标</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly reverse size="l">图标</bm-button>
```
