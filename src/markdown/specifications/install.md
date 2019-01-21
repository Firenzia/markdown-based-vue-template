### 通过NPM安装
abc组件库代码托管在公司内部NPM服务上，可以方便地通过NPM安装：

```bash
npm install --save-dev @abc/lego --registry http://registry.npm.frd.abc.com/
```
### 更新
如果需要更新组件库到某个版本，可以使用下面的方式：

```bash
npm install --save-dev @fql/lego@1.0.0 --registry http://registry.npm.frd.fenqile.com/
```

> 注意：npm.frd.fenqile.com 只能在公司内网访问

> 由于是私有仓库，所以安装和引用时都要加上scope前缀 `@fql`