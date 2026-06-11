# Inklish

Inklish 是一个面向 2-3 岁儿童、适配墨水屏阅读器浏览器的英语启蒙静态网页原型。

## 设计取向

- 黑白高对比，不依赖彩色识别。
- 大字号、大图形、大按钮，适合儿童误触和家长陪伴操作。
- 引导内容首次进入时展示，学习页常驻区域只保留核心单词卡片。
- 100 天内容，每天三词，覆盖 2-3 岁孩子日常生活中常见的人、物、食物、动物和场景。
- 日期栏只显示邻近圆点，可用左右符号切换更多学习日。
- 每个单词优先使用透明 PNG 黑白线稿图片，并保留内联 SVG 作为加载失败时的后备图。
- 为 Kindle Paperwhite 等旧浏览器提供不依赖 Grid 和现代 CSS 的基础样式。
- 不依赖外放、麦克风或浏览器语音 API，适合常见墨水屏阅读器环境。
- 页面提供家长朗读提示，由家长完成发音示范。

## 本地预览

直接打开 `index.html` 即可。也可以用任意静态服务器预览：

```sh
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## GitHub CI/CD

项目已配置 GitHub Actions 自动部署到 Cloudflare Pages：`.github/workflows/deploy.yml`。

仓库需要配置这些 GitHub Secrets：

- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token，需要有 Pages 项目创建和部署权限。
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID。

可选配置 GitHub Repository Variable：

- `CLOUDFLARE_PAGES_PROJECT_NAME`: Cloudflare Pages 项目名，默认是 `inklish`。

推送到 `main` 分支时会自动打包 `index.html`、`styles.css`、`app.js` 和 `assets/`，并部署到 Cloudflare Pages。Pull Request 会创建预览部署。

## 文件

- `index.html`: 页面结构与学习内容容器。
- `styles.css`: 墨水屏友好的黑白视觉样式和响应式布局。
- `app.js`: 100 天词汇、单词切换、PNG 图片加载、SVG 后备插图渲染和 Kindle 兼容交互。
