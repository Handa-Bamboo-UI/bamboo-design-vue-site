# 📌图钉组 PinGroup
由多个图钉组件组成,统一进行布局调控

## 🎈 何时使用
当需要在页面上固定位置提示多个操作时，使用图钉组组件。

<<<<<<< HEAD
## ⚙️基本属性
=======
## ⚙️图钉属性
>>>>>>> 03a5f89c5ade651e22b4f47b75791ccb3f0c582b

| 属性             | 说明                                    | 类型      | 默认值  |
| :--------------- | :-------------------------------------- | :-------- | :------ |
| **direction**      | 图钉组的方向                          | `string` | `horizontal` |
| **up**      | 图钉组吸附于顶部                      | `boolean` | `false` |
| **bottom**      | 图钉组吸附于底部                      | `boolean` | `false` |
| **left**      | 图钉组吸附于左侧                      | `boolean` | `false` |
| **right**      | 图钉组吸附于右侧                      | `boolean` | `false` |
| **gap**      | 图钉组之间的间距                          | `number` | `8` |
| **sleep**      | 图钉组是否需要触发才显示                     | `boolean` | `false` |
| **wakeFor**      | 图钉组触发显示的事件名                     | `string` | `hover` |
| **wakeDirection**      | 图钉组触发显示的方向                     | `string` | `horizontal` |

<preview path="./pinGroup/position.vue" class="pin-group"></preview>

<br>

<preview path="./pinGroup/sub.vue" class="pin-group"></preview>