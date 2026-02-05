# 快速开始

本指南将帮助您快速上手 NS_word 文档处理工具。

## 系统要求

在使用本工具之前，请确保您的系统满足以下要求：

- **操作系统**：Windows 10 或更高版本
- **文件格式**：支持 `.docx` 格式的 Word 文档
- **Microsoft Office**：建议安装 Microsoft Office 以确保最佳兼容性

::: tip 提示
生成的模板文档和拆分后的文档建议使用 Microsoft Office 打开一次并重新保存，以便使用Office的自动修复功能，确保文档格式的完整性和兼容性。
:::

## 功能概览
本工具提供三个核心功能模块：

### 1. 模板生成
从源 Word 文档生成只包含第一页封面的模板文档，保留完整的样式信息。

### 2. 拆分文档
将包含多个章节的大型 Word 文档拆分成多个独立的文档，支持智能分组管理。

### 3. 合并文档
将多个 Word 文档按顺序合并成一个完整的文档，自动生成目录。

## 基本使用流程

### 模板生成流程

1. 选择源文档
2. 选择保存路径
3. 点击"生成模板"按钮
4. 使用 Microsoft Office 打开生成的模板并重新保存
![模板生成界面](https://raw.githubusercontent.com/p000bb/Image/master/NS_word/20260116140446600.png)

### 拆分文档流程

1. 选择模板文件
2. 选择保存路径
3. 上传要拆分的文档
4. 调整分组配置
5. 点击"开始拆分"按钮
![拆分文档界面](https://raw.githubusercontent.com/p000bb/Image/master/NS_word/20260116140613690.png)

### 合并文档流程

1. 选择模板文件
2. 选择保存路径
3. 选择目录语言
4. 上传要合并的文档
5. 调整文档顺序（可选）
6. 点击"开始合并"按钮
7. 在 Word 中按 `F9` 更新域代码
![合并文档界面](https://raw.githubusercontent.com/p000bb/Image/master/NS_word/20260116140702834.png)

## 下一步

- 查看 [系统要求](./system-requirements.md) 了解详细的环境要求
- 阅读 [模板生成](./details/template-generation.md) 了解详细使用方法
- 阅读 [拆分文档](./details/document-split.md) 了解详细使用方法
- 阅读 [合并文档](./details/document-merge.md) 了解详细使用方法
- 阅读 [导出 PDF](./details/export-pdf.md) 了解详细使用方法
