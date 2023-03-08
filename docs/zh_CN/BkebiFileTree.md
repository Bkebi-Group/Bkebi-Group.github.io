# Bkebi 文件介绍

| **文件名/文件夹名**      | **说明**       |
|:-----------------:|:------------:|
| BKEBI-ISFREE-NOT4SALE.LIC  | 密钥文件  |
| injector\.exe     | Bkebi 本体注入器   |
| libstdimpact\.dll | Bkebi 本体依赖     |
| tp_files          | 自定义传送点       |
| themes            | 主题文件夹         |
| cfg\.ini          | 注入器配置         |
| cfg\.json         | Bkebi 配置文件     |
| imgui\.ini        | Bkebi 内部窗口位置 |

推荐备份保存 `cfg.json` 文件，此文件里不仅包括 Bkebi 的配置，还有已完成点位的标记。
笔者个人使用下方 BAT 文件进行启动，会复制备份两个版本。可以复制命名为“start.bat”放在 Bkebi 程序目录下

```cmd
@echo off
set rootPath=%cd%
echo %date%%time%

copy /Y cfg.json.backup cfg.json.backup2
copy /Y cfg.json cfg.json.backup
start injector.exe
```
