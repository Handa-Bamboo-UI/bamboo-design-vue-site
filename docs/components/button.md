# 按钮 Button

## 何时使用

### 响应用户点击行为，引导用户完成操作。

## 按钮类型

### 在 Bamboo Design 中我们提供了五种按钮。

- 🔵 **主按钮**：页面上最重要的引导性按钮，一个操作区域建议控制只有一个主按钮。
- ⚪️ **默认按钮**：普普通通的一个按钮。
- ⚠️ **警告按钮**：用于表示警告操作，需要用户再三确认。
- 🔴 **危险按钮**：用于表示危险操作，需要用户谨慎操作。
- 🔗 **链接按钮**：一般用于链接，即导航至某位置。

## 按钮属性

### 按钮属性有四种：

- 🎈 **边框 outline**：该属性用于表示按钮是否有边框，默认值为 false。
- 🚫 **禁用 disabled**：行动点不可用的时候，一般需要文案解释。
- 🔃 **加载中 loading**：用于异步操作等待反馈的时候，也可以避免多次提交。
- 📏 **尺寸 size**：按钮尺寸，可选值 s / m / l ，默认 m。
- 🔗 **链接 href**：type 设置为链接按钮后,传入跳转链接，用于导航。
- ✨ **入场动画 enterAnimate**：是否启用入场动画，默认 false。
- ⚪️ **细字体 thinFont**：是否使用更细的字体，默认 false。

## 按钮类型展示

<bm-button type="primary">主要按钮</bm-button>

```vue
<bm-button type="primary">主要按钮</bm-button>
```

<bm-button>默认按钮</bm-button>

```vue
<bm-button>默认按钮</bm-button>
```

<bm-button type="alert">警告按钮</bm-button>

```vue
<bm-button type="alert">警告按钮</bm-button>
```

<bm-button type="danger">危险按钮</bm-button>

```vue
<bm-button type="danger">危险按钮</bm-button>
```

<bm-button type="link" href="https://www.baidu.com">http 链接按钮</bm-button>

```vue
<bm-button type="link" href="https://www.baidu.com">http链接按钮</bm-button>
```

## 按钮属性展示

### 边框 outline

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" outline>主要按钮</bm-button>
<bm-button type="alert" outline>警告按钮</bm-button>
<bm-button type="danger" outline>危险按钮</bm-button>
<bm-button type="link" href="https://www.baidu.com" outline>http链接按钮</bm-button>
</div>

```vue
<bm-button type="primary" outline>一个按钮</bm-button>
```

### 禁用 disabled

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" outline disabled>主要按钮</bm-button>
<bm-button type="alert" outline disabled>警告按钮</bm-button>
<bm-button type="danger" outline disabled>危险按钮</bm-button>
<bm-button type="link" href="https://www.baidu.com" outline disabled>http链接按钮</bm-button>
</div>

```vue
<bm-button type="primary" outline>一个按钮</bm-button>
```

### 尺寸 size

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
### 入场动画 enterAnimate

<br> 
动画会在按钮挂载时触发，此处仅展示代码

```vue
<bm-button type="primary">主要按钮</bm-button>
<bm-button type="primary" enterAnimate>主要按钮</bm-button>
```

### 细字体 thinFont

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" thinFont>主要按钮</bm-button>
<bm-button type="alert" thinFont>警告按钮</bm-button>
<bm-button type="danger" thinFont>危险按钮</bm-button>
<bm-button type="link" href="https://www.baidu.com" thinFont>http链接按钮</bm-button>
</div>

```vue
<bm-button type="primary" thinFont>主要按钮</bm-button>
<bm-button type="alert" thinFont>警告按钮</bm-button>
<bm-button type="danger" thinFont>危险按钮</bm-button>
<bm-button type="link" href="https://www.baidu.com" thinFont>http链接按钮</bm-button>
```

### 暗色模式 darkMode

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" darkMode>主要按钮</bm-button>
<bm-button type="alert" darkMode>警告按钮</bm-button>
<bm-button type="danger" darkMode>危险按钮</bm-button>
<bm-button type="link" href="https://www.baidu.com" darkMode>http链接按钮</bm-button>
</div>

```vue
<bm-button type="primary" darkMode>主要按钮</bm-button>
<bm-button type="alert" darkMode>警告按钮</bm-button>
<bm-button type="danger" darkMode>危险按钮</bm-button>
<bm-button type="link" href="https://www.baidu.com" darkMode>http链接按钮</bm-button>
```