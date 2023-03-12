# 自定义传送

> 与自定义传送有关的相关资料。    
你也可以在我们的[Discord](https://discord.com/channels/1026295403282436097/1064953611056058479)频道分享你的bpfc文件

注意：新版将不支持旧版本传送，但是会公开一个将旧版转成新版文件的转换器，同时文件格式将不再是json，而是加密过的bpfc

-----

## 第三方文件(旧版)

- [#混合挂机点位] [ (@SDK-China) Sleep_TP](https://wwzb.lanzouf.com/invXS0lwy0yh)

- [#混合挂机点位] [ (@持青伞) Teyvat_TP_Json](https://github.com/chiqingsan/Teyvat_TP_Json) (QQ群组)157639326

- [#指定收集]  [ (@AXC00) AXC00_JSON](https://github.com/AXC00/json)

- [#指定收集] [ (@Sam5440) Genshin_Impact_Teleport](https://github.com/Sam5440/Genshin_Impact_Teleport)


## 简易教程

- [ (@SDK-China) Acrepi中文使用教程](https://kdocs.cn/l/clbwQmVi3djK)

-----

## JSON转BPFC

1. 下载 `Teleport converter` 并将其中的所有文件解压至`Bkebi-GC`的根目录。

2. 若目录中没有 `tp_files` 文件夹 则需要自行创建一个。

3. 在地址栏输入 `cmd` 并 `回车` 以打开命令提示符。

4. 在命令提示符中输入以下命令并 `回车` :

```cmd
tp_converter -i "./teleports" -o "./tp_files/Old_Teleport"
```

5. 在新版BK中`刷新文件`后文件列表选择`Old_Teleport`即可开始使用。

```
Teleport converter 帮助:
必须:
    -i <Input Dir> [String] 旧的Json传送文件目录
    -o <Output File> [String] 转换后的Json传送文件
可选:
    -m <Map Id> [Integer] 默认值为3, 3=提瓦特, 5=渊下宫, 6=层岩巨渊: 地下矿区
    -n <Name> [String] 默认为输出文件名
    -d <Description> [String] 默认为空
其他:
    --h 显示这条帮助
例子:
    tp_converter -i "./MyTeleportFileDir" -o "./NewTeleportFile" -m 3 -n "MyTeleport" -d "This is my teleport file."
```
