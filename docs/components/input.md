# 🥞输入框 Input
## 🎈 何时使用
### 当用户需要在表单中输入文本时，使用输入框组件。
### 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 🌈 基本属性
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符 | string | - |
| value | 输入框值 | string | - |
| type | 输入框类型 | string | text |
| variant | 输入框变体 | string | default |
| @oninput | 输入框值变化时触发 | function | - |
| @onchange | 输入框值变化时触发 | function | - |
| inputRule | 输入框校验规则 | string | - |
| ruleJudgeTime | 校验规则触发时间 | string | blur |
| disabled | 是否禁用 | boolean | false |
| readonly | 是否只读 | boolean | false |
| clearable | 是否可清空 | boolean | false |
| iconType | 图标类型 | string | - |
| reverse | 是否反转图标位置 | boolean | false |
| autoComplete | 是否自动完成 | boolean | false |
| max-length | 最大长度 | number | - |
| show-word-limit | 是否显示输入字数统计 | boolean | false |
| min-length | 最小长度 | number | - |
| level | 输入框等级 | string | primary |
| noAnimate | 是否关闭动画 | boolean | false |

| 类型 | 说明 |
| --- | --- |
| text | 文本输入框 |
| password | 密码输入框 |
| number | 数字输入框 |
| email | 邮箱输入框 |
| url | URL输入框 |

<div style="display: flex; flex-direction: column; gap: 10px;">
<div style="display: flex; flex-direction: row; gap: 10px;">
 
<bm-input placeholder="请输入" value="默认输入"></bm-input>
 <bm-button type="default">默认按钮</bm-button>
</div>
<div style="display: flex; flex-direction: row; gap: 10px;">
 
<bm-input placeholder="请输入" value="主要输入" type="primary"></bm-input>
 <bm-button type="primary">主要按钮</bm-button>
</div>
<div style="display: flex; flex-direction: row; gap: 10px;">
 
<bm-input placeholder="请输入" value="警告输入" type="alert" clearable></bm-input>
 <bm-button type="alert">警告按钮</bm-button>
</div>
<div style="display: flex; flex-direction: row; gap: 10px;">
 
<bm-input placeholder="请输入" value="危险输入" type="danger" iconType="fa-clock" reverse ></bm-input>
 <bm-button type="danger">危险按钮</bm-button>
</div>
</div>