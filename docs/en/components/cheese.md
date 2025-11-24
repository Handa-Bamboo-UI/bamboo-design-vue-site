# 🧀 CheeseLayout
CheeseLayout is a component based on grid layout, used to quickly build page layouts, just like cheese blocks.

## 🎈 When to Use
- When the page needs block layout, and each block has independent functions or content.
- When the page needs to be responsive to different screen sizes.
- When the page needs to display multiple related components or modules.

## 🌈 Basic Attributes

| Attribute Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| cut | string | '1 1' | The division of cheese blocks, the format is 'Vertical division Horizontal division' |
| pos | string | '1 1' | The positioning method of cheese blocks, the format is 'Vertical positioning Horizontal positioning' |
| dev | boolean | false | Whether to enable development mode and display grid lines |
| fill | boolean | false | Whether to enable fill mode and fill cheese blocks |

## 🍯 Basic Usage
The basic usage of CheeseLayout is as follows:
### 🕊️ Development Mode
After enabling **fill mode**, the cheese layout will display grid lines and create virtual sub-objects to facilitate debugging the layout.<br>
After enabling **development mode**, the sub-objects of the cheese layout will display borders to facilitate debugging the layout.
<preview path="./cheese/index.vue" ></preview>
```vue
    <bm-cheese cut="2 2" fill>
    </bm-cheese>
```

### 🍒 Basic Layout
The basic layout of CheeseLayout is as follows:
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

### 😋 Extended Layout
The extended layout of CheeseLayout is as follows:
<preview path="./cheese/index3.vue" ></preview>
```vue
<bm-cheese cut="5 5">
    <bm-cheese pos="1 1 5 0" dev>1 1 5 0</bm-cheese>
    <bm-cheese pos="1 2 1 4" dev>1 2 1 4</bm-cheese>
    <bm-cheese pos="2 2 4 4" dev>2 2 4 4</bm-cheese>
</bm-cheese>
```
