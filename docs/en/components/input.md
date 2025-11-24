# 🥞 Input
## 🎈 When to Use
### Use the input box component when the user needs to enter text in a form.
### Provides combined input boxes, input boxes with search, and also allows size selection.

## 🌈 Basic Properties
| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| placeholder | Placeholder | string | - |
| value | Input box value | string | - |
| type | Input box type | string | text |
| variant | Input box variant | string | default |
| @oninput | Triggered when the input box value changes | function | - |
| @onchange | Triggered when the input box value changes | function | - |
| inputRule | Input box validation rule | string | - |
| ruleJudgeTime | Validation rule trigger time | string | blur |
| disabled | Whether to disable | boolean | false |
| readonly | Whether read-only | boolean | false |
| clearable | Whether clearable | boolean | false |
| iconType | Icon type | string | - |
| reverse | Whether to reverse the icon position | boolean | false |
| autoComplete | Whether to autocomplete | boolean | false |
| max-length | Maximum length | number | - |
| show-word-limit | Whether to display input word count statistics | boolean | false |
| min-length | Minimum length | number | - |
| level | Input box level | string | primary |
| noAnimate | Whether to turn off animation | boolean | false |

| Type | Description |
| --- | --- |
| text | Text input box |
| password | Password input box |
| number | Number input box |
| email | Email input box |
| url | URL input box |

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
