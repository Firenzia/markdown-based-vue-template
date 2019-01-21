# 输入框组件

对原生的 `input` 和 `textarea` 的封装

### 使用方法
```js
// 引入组件
import { Input } from '@fql/lego'

// 注册组件
components: {
  LegoInput: Input
}
```

### 插入内容
通过 `slot="prepend"` 在输入框前面插入内容
```html
<lego-input v-model="value" title="姓名" placeholder="请输入姓名"></lego-input>
```

通过 `slot="append"` 在输入框后面插入一个按钮
```html
<lego-input v-model="value" placeholder="请输入姓名">
  <!-- 插入一个文字按钮 -->
  <lego-button type="text" slot="append">发送短信</lego-button>

  <!-- 或者插入一个图标 -->
  <lego-icon icon="info" slot="append"/>
</lego-input>
```

### 多行输入框
通过设置 `type="textarea"` 显示一个多行输入框
```html
<lego-input type="textarea"></lego-input>
```

### 输入框组
配合 `Group` 组件使用可以显示一个输入框组
```js
// 引入输入框组
import { Group } from '@fql/lego'

// 注册组件
components: {
  LegoGroup: Group
}
```

```html
<lego-group>
  <lego-input v-model="value4" title="姓名" placeholder="请输入姓名"></lego-input>
  <lego-input v-model="value5" title="姓名" placeholder="请输入姓名"></lego-input>
  <lego-input v-model="value6" title="姓名" placeholder="请输入姓名"></lego-input>
</lego-group>
```

### 参数列表
|  参数名   |    默认值     |  必须 |           说明          |
| -------  |  ------------ | ---- | ------------------------|
| title    |       无      |  否  |  输入框前面的label       |

其他参数同浏览器原生的 *input* 或 *textarea*

### 事件列表
|  事件名   |    默认值     |  必须 |           说明          |
| -------  |  ------------ | ---- | ------------------------|
| input    |       无      |  否  |  同原生的 input 事件      |
| focus    |       无      |  否  |  同原生的 focus 事件      |
| blur     |       无      |  否  |  同原生的 blur 事件       |

### slot列表
|  名称    |    默认值     |  必须 |              说明                  |
| -------  |  ----------- | ----  | ----------------------------------|
| prepend  |       无     |  否   |  在输入框前插入内容，会替换掉title   |
| append   |       无     |  否   |  在输入框后插入内容，一般用作功能按钮 |
