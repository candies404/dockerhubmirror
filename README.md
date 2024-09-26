# Docker 镜像引导页面

这个项目是一个基于 [Next.js](https://nextjs.org/) 的**Docker 镜像引导页面**，提供了加速 Docker 镜像拉取的教程，并集成了 [51LA](https://www.51.la/) 统计功能，用于监控页面访问量。

---

## 功能特性

- **Docker 镜像加速**：通过提供 Docker 镜像加速地址，帮助用户快速拉取镜像。
- **访问统计**：集成了 51LA 统计功能，实时监控页面的访问流量和用户行为。
- **自定义页脚**：支持通过环境变量配置自定义的页脚内容。

---

## 环境变量

该项目依赖以下环境变量进行配置：

| 环境变量                               | 描述                                                 | 示例                                                                                                    |
|------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `ANALYTICS_51LA_ID`                | 51LA 统计的 `ID`。                                     | `YOUR_51LA_ID`                                                                                        |
| `ANALYTICS_51LA_CK`                | 51LA 统计的 `CK`。                                     | `YOUR_51LA_CK`                                                                                        |
| `ANALYTICS_51LA_WIDGET_SCRIPT_URL` | 51LA 统计脚本的 URL。                                    | `https://v6-widget.51.la/v6/需要替换/quote.js?参数`                                                         |
| `NEXT_PUBLIC_DOCKER_URL`           | 用于拉取镜像的 Docker 加速地址。 默认为 `https://dockerpull.com`。 | `https://dockerpull.com`                                                                              |
| `NEXT_PUBLIC_FOOTER_HTML`          | 自定义页脚的 HTML 内容。默认值为示例                              | `© 2024 <a href="https://github.com/candies404/dockerhubmirror">candies404</a>. All rights reserved.` |

---

