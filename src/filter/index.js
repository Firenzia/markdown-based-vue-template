const map = {
  'specifications': '规范',
  'install': '安装',
  'use': '使用',

  'components': '组件',
  'button': '按钮',
  'input': '输入框',
  'popup': '弹框',

  'resource': '资源',
  'icon': '图标',
  'color': '颜色'
}

export default (val) => {
  if (map[val]) {
    return map[val]
  } else {
    return ''
  }
}
