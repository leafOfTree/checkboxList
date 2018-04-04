# AngularJS checkbox list 指令

## 介绍
输入：数组类型选项
生成：根据数组自动生成 checkbox 列表
输出：选中项组成的数组

## 使用 

加入模块

```javascript
angular.module('yourapp', ['checkboxList'])
    ...
```

在 HTML 中使用 `checkbox-list`

```html
<checkbox-list input='names' output='selectedNames' option='{initSelectAll: true}'>
```

## 安装

**git**

    git clone https://github.com/leafOfTree/checkboxList

**bower**

    bower install https://github.com/leafOfTree/checkboxList.git

添加 checkboxList.js 到项目中

```html
<script src="checkboxList/dist/checkboxList.js"></script>
```

## 配置

- option

    - initSelectAll: bool(false) 初始默认选中所有

## 测试

`./example/index.html`
