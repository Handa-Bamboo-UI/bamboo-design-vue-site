# 📌 PinGroup
Composed of multiple pin components, uniformly adjusted for layout

## 🎈 When to use
Use the pin group component when you need to display multiple operations in a fixed position on the page.

## ⚙️ Basic Attributes

| Property             | Description                                    | Type      | Default  |
| :--------------- | :-------------------------------------- | :-------- | :------ |
| **direction**      | Direction of the pin group                          | `string` | `horizontal` |
| **up**      | Pin group sticks to the top                      | `boolean` | `false` |
| **bottom**      | Pin group sticks to the bottom                      | `boolean` | `false` |
| **left**      | Pin group sticks to the left                      | `boolean` | `false` |
| **right**      | Pin group sticks to the right                      | `boolean` | `false` |
| **gap**      | Spacing between pin groups                          | `number` | `8` |
| **sleep**      | Whether the pin group needs to be triggered to display                     | `boolean` | `false` |
| **wakeFor**      | Event name for triggering the display of the pin group                     | `string` | `hover` |
| **wakeDirection**      | Direction for triggering the display of the pin group                     | `string` | `horizontal` |

<preview path="./pinGroup/position.vue" class="pin-group"></preview>

<br>

<preview path="./pinGroup/sub.vue" class="pin-group"></preview>
