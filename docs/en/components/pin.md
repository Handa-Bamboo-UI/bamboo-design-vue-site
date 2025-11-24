# 📌 Pin Component

### Extended from the Button component, it is used for fixed positioning and prompting user actions.

## 🎈 When to Use

It floats on the page and is used for fixed positioning and prompting user actions. The demonstration will remove the `fixed` property to display the Pin component.

## 🌈 Basic Properties

| Property Name     | Description                                                                       | Type    | Default Value | Inherited Property? |
| ----------------- | --------------------------------------------------------------------------------- | ------- | ------------- | ------------------- |
| **type**          | Component type                                                                    | string  | `'default'`   | ✔                   |
| **iconType**      | Icon type                                                                         | string  | -             | ✔                   |
| **bubble**        | Whether to display a bubble                                                       | boolean | `false`       | ✔                   |
| **bubbleReverse** | Displays an information bubble when the mouse hovers, with the opposite direction | boolean | `false`       | ✔                   |
| **bubbleType**    | Bubble type                                                                       | string  | `default`     | ✔                   |
| **iconOnly**      | Whether to display only the icon                                                  | boolean | `false`       | ✔                   |
| **subItem**       | Whether it is a sub-item                                                          | boolean | `false`       | ❌                  |

## 🎉 Property Examples

### 📍 position Property

The Pin component can set its position through a combination of the `position` property. The default position is `bottom right`.

| Position Property | Default Value |
| ----------------- | ------------- |
| top               | Top           |
| right             | Right         |
| left              | Left          |
| bottom            | Bottom        |

<preview path="./pin/pins.vue"></preview>

```vue
<bm-pin iconType="fa-search" type="primary" icon-only top left>Search</bm-pin>
<bm-pin iconType="fa-user" type="default" icon-only right>User</bm-pin>
<bm-pin iconType="fa-gear" type="danger" icon-only left>Settings</bm-pin>
<bm-pin iconType="fa-question" type="alert" icon-only bottom>Help</bm-pin>
```

### 🥼 type Property

The Pin component inherits the `type` property of the Button. You can set the type of the Pin through the `type` property, and the default type is `default`.

<div style="display: flex;flex-wrap: wrap;gap: 8px;">

<bm-pin iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;">Pin</bm-pin>

<bm-pin type="primary" iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;">Pin</bm-pin>

<bm-pin type="danger" iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;">Pin</bm-pin>

<bm-pin type="alert" iconType="fa-search" position="top-right"  style="position: relative; z-index: 0;">Pin</bm-pin>

</div>

```vue
<bm-pin iconType="fa-search"></bm-pin>
<bm-pin type="primary" iconType="fa-search"></bm-pin>
<bm-pin type="danger" iconType="fa-search"></bm-pin>
<bm-pin type="alert" iconType="fa-search"></bm-pin>
```

### 🎨 iconType Property

The Pin component inherits the `iconType` property of the Button. You can set the icon type of the Pin through the `iconType` property, and the default icon type is `fa-search`.

<div style="display: flex;flex-wrap: wrap;gap: 8px;">

<bm-pin iconType="fa-search" type="primary" style="position: relative; z-index: 0;">Search</bm-pin>

<bm-pin iconType="fa-user"  type="primary"  style="position: relative; z-index: 0;">User</bm-pin>

<bm-pin iconType="fa-gear"  type="primary"  style="position: relative; z-index: 0;" description="Settings"></bm-pin>

<bm-pin iconType="fa-question"  type="primary"  style="position: relative; z-index: 0;">Help</bm-pin>

</div>

```vue
<bm-pin iconType="fa-search" type="primary">Search</bm-pin>
<bm-pin iconType="fa-user" type="primary">User</bm-pin>
<bm-pin iconType="fa-gear" type="primary">Settings</bm-pin>
<bm-pin iconType="fa-question" type="primary">Help</bm-pin>
```

You may have noticed that the Pin component can set its description through the `description` property or a `slot`.

<br>

If both the `description` property and the `slot` are set, the `slot content` will override the value of the `description` property.

<br>

We recommend using the `slot` to set the Pin's description first,

because slot content can include HTML tags, while the `description` property can only contain text.

### 🖼 iconOnly Property

The Pin component can set whether to display only the icon through the `iconOnly` property, and the default value is `false`.

<div style="display: flex;flex-wrap: wrap;gap: 8px;">

<bm-pin iconType="fa-search" type="primary" icon-only style="position: relative; z-index: 0;">Search</bm-pin>

<bm-pin iconType="fa-user"  type="default" icon-only style="position: relative; z-index: 0;">User</bm-pin>

<bm-pin iconType="fa-gear"  type="danger" icon-only style="position: relative; z-index: 0;">Settings</bm-pin>

<bm-pin iconType="fa-question"  type="alert" icon-only style="position: relative; z-index: 0;">Help</bm-pin>

</div>

```vue
<bm-pin iconType="fa-search" type="primary" icon-only>Search</bm-pin>
<bm-pin iconType="fa-user" type="default" icon-only>User</bm-pin>
<bm-pin iconType="fa-gear" type="danger" icon-only>Settings</bm-pin>
<bm-pin iconType="fa-question" type="alert" icon-only>Help</bm-pin>
```

### 📝 bubble Property

The Pin component can set whether to display a bubble through the `bubble` property, and the default value is `false`.

<div style="display: flex;flex-wrap: wrap;gap: 8px;">

<bm-pin iconType="fa-search" type="primary" bubble="Search" style="position: relative; z-index: 0;" icon-only></bm-pin>

<bm-pin iconType="fa-user"  type="default" bubble="User Info" style="position: relative; z-index: 0;" icon-only></bm-pin>

<bm-pin iconType="fa-gear"  type="danger" bubble="Settings" style="position: relative; z-index: 0;" icon-only></bm-pin>

<bm-pin iconType="fa-question"  type="alert" bubble="Prompt" style="position: relative; z-index: 0;" icon-only></bm-pin>
</div>

```vue
<bm-pin iconType="fa-search" type="primary" bubble="Search" icon-only></bm-pin>
<bm-pin iconType="fa-user"  type="default" bubble="User Info" icon-only></bm-pin>
<bm-pin iconType="fa-gear"  type="danger" bubble="Settings" icon-only></bm-pin>
<bm-pin iconType="fa-question"  type="alert" bubble="Prompt" icon-only></bm-pin>
```
