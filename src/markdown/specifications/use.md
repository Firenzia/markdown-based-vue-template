# 使用

介绍如何在项目中引用乐高组件

### 按需引用
每个组件都可以按以下的方式引入

```js
import { Input } from '@fql/lego/lib/input/index'
import '@fql/lego/lib/input/index.css'

import { Toast } from '@fql/lego/lib/toast/index'
import '@fql/lego/lib/toast/index.css'

// 引入更多组件...
```

> 注意样式文件需要手动引入

### 更高效的按需引用
每次引用一个组件都得必须得按上面那样写，十分繁琐，但是借助 [babel-plugin-transform-import](https://www.npmjs.com/package/babel-plugin-transform-import) 插件我们可以简化这个流程。

首先安装 babel-plugin-transform-import：
```bash
npm install --save-dev babel-plugin-transform-import
```

它是一个基于 [babel](http://babeljs.io/) 的插件，因此我们需要在 babel 的配置文件（通常是.babelrc）中增加以下内容：
```json
"plugins": [["transform-import", {
    "@fql/lego": {
        "transform": "@fql/lego/lib/${member}/index",
        "style": "@fql/lego/lib/${member}/index.css",
        "skipDefaultConversion": true,
        "kebabCase": true
    }
  }]
]
```

接下来，我们就可以用下面的方式愉快地引用组件了：
```js
import { Input, Toast, Switch, Dialog } from '@fql/lego'
```

这样就简单多了，最后，你就可以继续阅读左侧菜单中的组件文档，查看Demo，了解它们的使用方法了！
