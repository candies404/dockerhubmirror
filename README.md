# 项目名称

这个项目是一个基于 [Next.js](https://nextjs.org/) 的**Docker 镜像引导页面**，集成了 Docker 镜像拉取教程以及 51LA 统计功能。

## 功能介绍

- 支持通过加速镜像地址拉取 Docker 镜像。
- 集成 **51LA 统计数据**，用于用户访问量监控。

## 环境变量

该项目依赖以下环境变量进行配置：

| 环境变量                           | 描述                                                         | 示例                                                         |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ANALYTICS_51LA_ID`                | 51LA 统计的 `ID`。                                           | `YOUR_51LA_ID`                                               |
| `ANALYTICS_51LA_CK`                | 51LA 统计的 `CK`。                                           | `YOUR_51LA_CK`                                               |
| `ANALYTICS_51LA_WIDGET_SCRIPT_URL` | 51LA 统计脚本的 URL。                                        | `https://v6-widget.51.la/v6/需要替换/quote.js?theme=0&f=12&display=0,0,0,1,0,0,0,1s` |
| `NEXT_PUBLIC_DOCKER_URL`           | 用于拉取镜像的 Docker 加速地址。 默认为 `https://dockerpull.com`。 | `https://dockerpull.com`                                     |
