### 通过NPM安装
vine组件库代码托管在公司内部NPM服务上，可以方便地通过NPM安装：

```bash
npm install --save-dev @fruit/vine --registry http://registry.npm.frd.fruit.com/
```
### 更新
如果需要更新组件库到某个版本，可以使用下面的方式：

```bash
npm install --save-dev @fruit/vine@1.0.0 --registry http://registry.npm.frd.fruit.com/
```

> 注意：npm.frd.fruit.com 只能在公司内网访问

> 由于是私有仓库，所以安装和引用时都要加上scope前缀 `@fruit`