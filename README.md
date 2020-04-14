# Single-spa-test

jquery或以前老项目逐步迁移迭代方案

## single-spa

微前端[应用框架](https://zh-hans.single-spa.js.org/docs/getting-started-overview)

使用其简单搭建出一个微前端架构

## 单页应用

随着jquery老项目迁移到单页应用是需要迁移成本，使用微前端来**逐步**迁移是一种择优的方案

## 迁移步骤

* 建立 single-spa-config 配置

* 创建需要迁移单页应用的页面 `spa.html`

* 单页应用的**路由 base**最好是设置成与老项目根目录**同名** `vue-template`

## 启动

```
npm install

# 或者

yarn install


npm run dev
```

## 注意

* 本地启动时子项目需要修改 webpack 配置为 localPath_dev

```js
output: {
  path: path.join(__dirname, "./react"),
  filename: "react-spa.js",
  publicPath: localPath_dev
}
```

