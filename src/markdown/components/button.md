# 按钮组件

可自定义的按钮组件，包含了各种状态。

### 使用方法
```js
// 引入组件
import { Button } from '@fruit/vine'

// 注册组件
components: {
  VineButton: Button
}
```

### 基本样式
通过传入 `type` 可以自定义按钮样式，内置了四种样式
```html
<vine-button>默认按钮</vine-button>

<vine-button type="secondary">次要按钮</vine-button>

<vine-button type="text">文字按钮</vine-button>

<vine-button type="fixed">固定底部按钮</vine-button>
```

### 带图标按钮
通过传入 `icon` 可以自定义按钮上的图标，图标名来自图标组件
```html
<vine-button icon="info">带图标按钮</vine-button>
```

### 加载状态
支持将按钮设置为“加载中”的状态，加载中状态的按钮会显示 `loading` 图标，并且不再响应点击
```html
<vine-button :loading="true">加载中</vine-button>
```

### 禁用状态
支持将按钮设置为“禁用”状态，禁用状态的按钮会置灰，并且不再响应点击
```html
<vine-button :disabled="true">禁用按钮</vine-button>
```

### 自定宽高
支持自定义按钮的宽度和高度
```html
<vine-button width="120" height="30">自定宽高按钮</vine-button>
```

### 参数列表
|  参数名   | 类型     |    默认值    |  必须 |               说明            |
| -------  | -------- | ------------ | ---- | ----------------------------- |
| type     |  String  |      无      |  否  |  按钮类型，可选 `secondary` `text` `gray` `fixed` |
| icon     |  String  |      无      |  否  |  按钮图标名称，来自图标组件      |
| loading  |  Boolean |     false    |  否  |  按钮是否是loading状态         |
| disabled |  Boolean |     false    |  否  |  按钮是否是禁用状态             |
| width    |  String  |     100%     |  否  |  按钮宽度，单位px              |
| height   |  String  |      44      |  否  |  按钮高度，单位px              |
| autofocus|  Boolean |     false    |  否  |  按钮是否自动获得焦点           |