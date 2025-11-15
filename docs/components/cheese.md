# 🧀起司布局 CheeseLayout
起司布局是一种基于网格布局的组件，用于快速搭建页面布局，像起司块一样。

## 🎈何时使用
- 当页面需要分块布局，每个块都有独立的功能或内容时。
- 当页面需要根据不同屏幕尺寸进行响应式布局时。
- 当页面需要展示多个相关的组件或模块时。

## 🌈 基本属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| cut | string | '1 1' | 起司块的切分，格式为 '垂直切分 水平切分' |
| pos | string | '1 1' | 起司块的定位方式，格式为 '垂直定位 水平定位' |
| dev | boolean | false | 是否开启开发模式，显示网格线 |
| fill | boolean | false | 是否开启填充模式，填充起司块 |



## 🍯 基础用法
起司布局的基础用法如下：
### 🕊️开发模式
开启**填充模式**后，起司布局会显示网格线，并创建虚拟子对象,方便调试布局。<br>
开启**开发模式**后，起司布局的子对象会显示外边框,方便调试布局。
<preview path="./cheese/index.vue" ></preview>
```vue
    <bm-cheese cut="2 2" fill>
    </bm-cheese>
```


### 🍒基本布局
起司布局的基本布局如下：
<preview path="./cheese/index2.vue" ></preview>
```vue
<bm-cheese cut="5 5">
    <bm-cheese pos="1 1" dev>1 1</bm-cheese>
    <bm-cheese pos="1 3" dev>1 3</bm-cheese>
    <bm-cheese pos="3 2" dev>3 2</bm-cheese>
    <bm-cheese pos="3 3" dev>3 3</bm-cheese>
    <bm-cheese pos="4 4" dev>4 4</bm-cheese>
    <bm-cheese pos="4 5" dev>4 5</bm-cheese>
</bm-cheese>
```

### 😋扩展布局
起司布局的扩展布局如下：
<preview path="./cheese/index3.vue" ></preview>
```vue
<bm-cheese cut="5 5">
    <bm-cheese pos="1 1 5 0" dev>1 1 5 0</bm-cheese>
    <bm-cheese pos="1 2 1 4" dev>1 2 1 4</bm-cheese>
    <bm-cheese pos="2 2 4 4" dev>2 2 4 4</bm-cheese>
</bm-cheese>
```
