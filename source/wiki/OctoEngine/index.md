---
layout: wiki
wiki: OctoEngine
tilte: 关于
order: 0
---

## 简介

Octo Engine 是一个基于C++、OpenGL，使用开源组件编写成的游戏引擎。

Octo Engine 开源于 [GitHub](https://github.com/nofuncoding/octo-engine)，您可以为其贡献自己的一份力量！

## 开发环境需求

{% note (以后会开发编辑器的！) %}

- Visual Studio 2022 及以上；
- Windows 10 及以上（不支持 64 位）；

## 如何进行开发

先将项目 Clone 到本地：`git clone https://github.com/nofuncoding/octo-engine.git`

使用 Premake 创建项目文件。运行根目录下的 `GenerateProjects.bat` 即可。

使用 Visual Studio 打开 `Octo.sln`。您应该会看到两个项目：`Octo`、`Sandbox`

您可以试着运行一下，如果正确，程序的输出应为如下所示：

```
[xx:xx:xx] Octo: Initalized Logger
[xx:xx:xx] App: Creating Application
[xx:xx:xx] App: xxxxxxxxxxxx
...
```

接着，您可以在 `Sandbox` 中编写自己的代码。

## 使用的开源软件

- [**spdlog**](https://github.com/gabime/spdlog) (*Octo/vendor/spdlog*)
    - MIT License
- [**Premake**](https://github.com/premake/premake-core) (*vendor/bin/premake*)
    - BSD 3-Clause "New" or "Revised" License

## 计划

- **事件系统** / {% mark 已完成 color:green %}
- **预编译头文件** / {% mark 已完成 color:green %}
- **窗口抽象和 GLFW** / {% mark 制作中 color:red %}
- **窗口事件** / {% mark 计划 color:dark%}
- **层级** / {% mark 计划 color:dark%}