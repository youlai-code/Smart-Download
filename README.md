
# 开发需求文档：智能下载管理插件 (Smart Download Manager)

## 项目概述

开发一个 Chrome 浏览器插件（Manifest V3），核心功能是监控下载任务，根据文件类型或来源域名自动将文件存入指定的子文件夹，并提供一个内置的 Web 页面来管理和查看下载历史。

## 核心功能需求

### 1. 自动分流逻辑 (Background Service Worker)

* **监听事件**：使用 `chrome.downloads.onDeterminingFilename`。
* **分类规则**：
* **Images**: `.jpg, .jpeg, .png, .gif, .webp, .svg` -> 存入 `Images/`
* **Documents**: `.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt` -> 存入 `Documents/`
* **Videos**: `.mp4, .mkv, .avi, .mov` -> 存入 `Videos/`
* **Archives**: `.zip, .rar, .7z, .tar, .gz` -> 存入 `Archives/`


* **冲突处理**：使用 `conflictAction: 'uniquify'` 确保同名文件不被覆盖。

### 2. 下载管理页面 (Dashboard)

* **页面名称**：`manager.html`
* **展示内容**：使用表格或卡片流展示已下载文件，包含文件名、大小、分类、来源 URL。
* **功能按钮**：
* **打开文件** (`chrome.downloads.open`)
* **在文件夹中显示** (`chrome.downloads.showDefault`)
* **搜索功能**：按文件名或域名实时过滤。


* **数据源**：调用 `chrome.downloads.search({})` 获取全量历史。

### 3. 配置页面 (Options Page)

* 用户可以自定义各个分类对应的扩展名。
* 使用 `chrome.storage.local` 持久化存储用户配置。

---

## 目录结构建议

```text
/smart-download-manager
  ├── manifest.json         # 插件配置文件 (MV3)
  ├── background.js         # 核心分类逻辑
  ├── options.html          # 分类规则配置页面
  ├── options.js            # 配置页逻辑
  ├── manager.html          # 文件管理控制台
  ├── manager.js            # 管理页交互逻辑
  └── style.css             # 统一的 UI 样式 (使用极简现代风格)

```

---

## UI 风格规范 (已集成)

* **风格定位**：Modern Minimalist + Glassmorphism + Bento Box
* **主色**：`#6366f1` (Indigo 500)，**背景**：`#f8fafc`
* **字体**：Inter / System Sans-serif
* **卡片**：半透明背景 + `backdrop-filter: blur(8px)`，圆角 `12px~16px`，轻阴影
* **布局**：左侧分类导航 + 右侧搜索与卡片网格
* **交互**：悬浮时轻微位移与阴影增强

---

## 分类逻辑文档

详见 `分类逻辑.md`。

---

