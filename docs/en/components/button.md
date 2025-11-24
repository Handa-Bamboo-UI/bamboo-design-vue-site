# 🎋 Button

## 🎈 When to Use

- When users need to click to trigger an action.
- When users need to confirm or submit a form.
- When users need to perform selection or filtering operations.
- When users need to perform navigation or jump operations.

## 🧩 Button Types

In **Bamboo Design**, we offer **five button types**:

- 🔵 **Primary Button**: The most important guiding button on the page. It is recommended to keep only one primary button in an area.
- ⚪️ **Default Button**: Regular operation button.
- ⚠️ **Alert Button**: Used for alert-like operations, reminding users to pay attention.
- 🔴 **Danger Button**: Used for dangerous operations (such as deletion, clearing), requiring users to operate with caution.
- 🔗 **Link Button**: Used for jumping or navigation behavior.

## ⚙️ Button Attributes

| Attribute             | Description                                    | Type      | Default  |
| :--------------- | :-------------------------------------- | :-------- | :------ |
| **outline**      | Whether to have a border style                          | `boolean` | `false` |
| **disabled**     | Whether to disable the button                            | `boolean` | `false` |
| **loading**      | Whether in loading state                        | `boolean` | `false` |
| **size**         | Button size, optional `s` / `m` / `l`          | `string`  | `m`     |
| **bubble**       | Display information bubble when hovering the mouse                   | `string`  | -       |
| **bubbleReverse**       | Display information bubble when hovering the mouse, in the opposite direction                   | `boolean`  | `false` |
| **bubbleType**       | Bubble type               | `string`  | `default` |
| **block**        | Whether to occupy the width of the parent element                      | `boolean` | `false` |
| **enterAnimate** | Whether to enable entry animation                        | `boolean` | `false` |
| **thinFont**     | Whether to use thin font                          | `boolean` | `false` |
| **darkMode**     | Whether to enable dark mode                        | `boolean` | `false` |
| **href**         | Link button jump address (effective when type is link) | `string`  | -       |
| **newWindow**    | Whether to open the link in a new window (effective when type is link) | `boolean` | `false` |
| **iconType**     | Icon type (optional), enable icon by default after setting                     | `string`  | -       |
| **iconOnly**     | Whether to display only the icon (without displaying text)              | `boolean` | `false` |
| **reverse**      | Whether the icon is on the left side of the text                      | `boolean` | `false` |

## 🎨 Button Type Display

### Primary Button

<br>
<bm-button type="primary">Primary</bm-button>

```vue
<bm-button type="primary">Primary</bm-button>
```

### Default Button

<br>
<bm-button>Default</bm-button>

```vue
<bm-button>Default</bm-button>
```

### Alert Button

<br>
<bm-button type="alert">Alert</bm-button>

```vue
<bm-button type="alert">Alert</bm-button>
```

### Danger Button

<br>
<bm-button type="danger">Danger</bm-button>

```vue
<bm-button type="danger">Danger</bm-button>
```

### Link Button

<br>
<bm-button type="link" href="https://www.baidu.com" >Link button</bm-button>

```vue
<bm-button type="link" href="https://www.baidu.com">Link button</bm-button>
```

## ⚙️ Button Attribute Display

### 📏 Size

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" size="s">Small</bm-button> 
 <bm-button type="primary" size="m">Normal</bm-button> 
 <bm-button type="primary" size="l">Large</bm-button> 
</div>

```vue
<bm-button type="primary" size="s">Small</bm-button>
<bm-button type="primary" size="m">Normal</bm-button>
<bm-button type="primary" size="l">Large</bm-button>
```

### 🔲 Outline

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" outline>Primary</bm-button> 
 <bm-button type="alert" outline>Alert</bm-button> 
 <bm-button type="danger" outline>Danger</bm-button> 
 <bm-button type="link" href="https://www.baidu.com" outline>Link button</bm-button>
</div>

```vue
<bm-button type="primary" outline>Primary</bm-button>
<bm-button type="alert" outline>Alert</bm-button>
<bm-button type="danger" outline>Danger</bm-button>
```

### 🚫 Disabled

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;"> 
<bm-button type="primary" outline disabled>Primary</bm-button>  
<bm-button type="alert" outline disabled>Alert</bm-button> 
<bm-button type="danger" outline disabled>Danger</bm-button> 
<bm-button type="link" href="https://www.baidu.com" outline disabled>Link button</bm-button> 
</div>  

```vue
<bm-button type="primary" outline disabled>Primary</bm-button>
<bm-button type="alert" outline disabled>Alert</bm-button>
<bm-button type="danger" outline disabled>Danger</bm-button>
```
### 🔄 Loading

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" loading outline>Primary</bm-button> 
 <bm-button type="alert" loading outline>Alert</bm-button> 
 <bm-button type="danger" loading outline>Danger</bm-button> 

</div>

```vue
<bm-button type="primary" loading>Primary</bm-button>
<bm-button type="alert" loading>Alert</bm-button>
<bm-button type="danger" loading>Danger</bm-button>
```

### ✨ Bubble & 🎇 bubbleReverse

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" bubble="This is a Primary Button." bubbleReverse>Primary</bm-button> 
 <bm-button type="alert" bubble="This is a Alert Button"  >Alert</bm-button> 
 <bm-button type="danger" bubble="This is a Danger Button" bubbleReverse>Danger</bm-button> 
  <bm-button type="default" bubble="This is a Default Button">Default</bm-button> 
</div>
<br>
<br>

```vue
<bm-button type="primary" bubble="This is a Primary Button" bubbleReverse>Primary</bm-button> 
<bm-button type="alert" bubble="This is a Alert Button"  >Alert</bm-button> 
<bm-button type="danger" bubble="This is a Danger Button" bubbleReverse>Danger</bm-button> 
<bm-button type="default" bubble="This is a Default Button">Default</bm-button> 
```
### 🎯 bubbleType
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" bubble="This is a Primary Button." bubbleType="default">Primary</bm-button> 
 <bm-button type="alert" bubble="This is a Alert Button" bubbleType="alert">Alert</bm-button> 
 <bm-button type="danger" bubble="This is a Danger Button" bubbleType="danger">Danger</bm-button> 
 <bm-button type="default" bubble="This is a Default Button"  bubbleType="alert" >Default</bm-button> 
</div>

```vue
<bm-button type="primary" bubble="This is a Primary Button" bubbleType="default">主要按钮</bm-button> 
<bm-button type="alert" bubble="This is a Alert Button" bubbleType="alert">警告按钮</bm-button> 
<bm-button type="danger" bubble="This is a Danger Button" bubbleType="danger">危险按钮</bm-button> 
<bm-button type="default" bubble="This is a Default Button"  bubbleType="alert" >默认按钮</bm-button> 
```

### 🙌 Occupy Parent Element Width

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
 <bm-button type="primary" size="m" block>Normal Button</bm-button> 
  <bm-button type="primary" size="m" block>Normal Button</bm-button> 
</div>

```vue
<bm-button type="primary" size="m" block>Normal Button</bm-button>
<bm-button type="primary" size="m" block>Normal Button</bm-button>
```

### ✨ Enter Animation

The animation will be triggered when the button is mounted. Only the code is displayed here:

```vue
<bm-button type="primary">Primary</bm-button>
<bm-button type="primary" enterAnimate>Default</bm-button>
```

### ⚪️ Thin Font

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;"> 
<bm-button type="primary" thinFont>Primary</bm-button> 
<bm-button type="alert" thinFont>Alert</bm-button> 
<bm-button type="danger" thinFont>Danger</bm-button> 
<bm-button type="link" href="https://www.baidu.com" thinFont>Link</bm-button> 
</div>

```vue
<bm-button type="primary" thinFont>Primary</bm-button>
<bm-button type="alert" thinFont>Alert</bm-button>
<bm-button type="danger" thinFont>Danger</bm-button>
<bm-button
  type="link"
  href="https://www.baidu.com"
  thinFont
>Link</bm-button>
```

### 🌑 Dark Mode (Under Development)

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;"> 
<bm-button type="primary" darkMode>Primary</bm-button> 
<bm-button type="alert" darkMode>Alert</bm-button> 
<bm-button type="danger" darkMode>Danger</bm-button> 
<bm-button type="link" href="https://www.baidu.com" darkMode>Link</bm-button> 
</div>

```vue
<bm-button type="primary" darkMode>Primary</bm-button>
<bm-button type="alert" darkMode>Alert</bm-button>
<bm-button type="danger" darkMode>Danger</bm-button>
<bm-button
  type="link"
  href="https://www.baidu.com"
  darkMode
>Link</bm-button>
```
### 🔗 Open in New Window

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="link" href="https://www.baidu.com" newWindow>New Window</bm-button>
<bm-button type="link" href="https://www.baidu.com">Local Jump</bm-button>
</div>

```vue
<bm-button type="link" href="https://www.baidu.com" newWindow>New Window</bm-button>
<bm-button type="link" href="https://www.baidu.com">Local Jump</bm-button>
```
### 🎁Icon iconType

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" iconType="fa-search" >Search</bm-button>
<bm-button type="danger" iconType="fa-user">User</bm-button>
<bm-button type="alert" iconType="fa-shopping-cart">Shopping Cart</bm-button>
<bm-button type="link" iconType="fa-check">Check</bm-button>
</div>

```vue
<bm-button type="primary" iconType="fa-search"></bm-button>
<bm-button type="primary" iconType="fa-search"></bm-button>
<bm-button type="primary" iconType="fa-search" size="s"></bm-button>
<bm-button type="primary" iconType="fa-search" size="l"></bm-button>
```
### 😎Icon Only & iconOnly

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" iconType="fa-search" iconOnly>Search</bm-button>
<bm-button type="danger" iconType="fa-user" iconOnly>User</bm-button>
<bm-button type="alert" iconType="fa-shopping-cart" iconOnly>Shopping Cart</bm-button>
<bm-button type="link" iconType="fa-check" iconOnly>Check</bm-button>
<bm-button type="primary" iconType="fa-search"  >Normal Icon</bm-button>
</div>

```vue
<bm-button type="primary" iconType="fa-search" iconOnly>Search</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly size="s">Search</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly size="l">Search</bm-button>
```

### 🎉Icon on the Right

<br>
<div class="button-sample" style="display: flex; flex-wrap: wrap; gap: 10px;">
<bm-button type="primary" iconType="fa-search"  reverse>Search</bm-button>
<bm-button type="danger" iconType="fa-user"  reverse>User</bm-button>
<bm-button type="alert" iconType="fa-shopping-cart"  reverse>Shopping Cart</bm-button>
<bm-button type="link" iconType="fa-check"  reverse>Check</bm-button>
</div>

```vue
<bm-button type="primary" iconType="fa-search" iconOnly reverse>Search</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly reverse size="s">User</bm-button>
<bm-button type="primary" iconType="fa-search" iconOnly reverse size="l">Shopping Cart</bm-button>
```
