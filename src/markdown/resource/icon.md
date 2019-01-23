# 图标组件

菠萝组件库内置了一套常用的图标，内部以 `SVG` 图片形式实现。

## 使用方法
```js
// 引入组件
import { Icon } from '@fruit/vine'

// 注册组件
components: { Icon }
```

```html
<!-- 使用组件 -->
<icon icon="loading"></icon>
```

## 参数列表
|  参数名  | 类型    |    默认值    |  必须 |               说明            |
| ------- | ------- | ------------ | ---- | ----------------------------- |
| icon    |  String |      无      |  是  |  图标名称，完整列表参考右侧demo |
| size    |  String |      18      |  否  |  图标尺寸，单位px              |
| color   |  String | currentColor |  否  |  图标颜色，支持16进制或rgb声明  |
