---
title: 犀牛派 X1
sidebar_label: 犀牛派 X1
sidebar_position: 1
tags: [hardware, sbc, rhinoPi, edge-ai]
---

# 🦏 犀牛派 X1

> **犀牛派 X1** 是 AidLux（阿加犀）推出的一款高性能嵌入式计算开发板，面向边缘 AI、工业 IoT、机器人与智能终端。基于 Qualcomm® QCS8550 平台，在 125 × 110 × 35.5 mm 的紧凑尺寸内提供高达 **48 TOPS** 的 INT8 AI 算力。

## 总览

| 项目 | 参数 |
|------|------|
| 形态 | 嵌入式单板计算机（125 × 110 × 35.5 mm） |
| 平台 | **Qualcomm® QCS8550**（Dragonwing™ QCS8550，4nm 制程） |
| CPU | 1+2+3 三丛集 Kryo：1× Kryo Prime @ 3.2 GHz + 2× Kryo Gold @ 2.8 GHz + 3× Kryo Silver @ 2.0 GHz |
| GPU | Adreno 740（约 3000 GFLOPS） |
| NPU / AI | **高达 48 TOPS INT8**（等效约 156 TOPS） |
| 内存 | 16 GB LPDDR5X |
| 存储 | 128 GB eMMC（部分型号 256 GB UFS 4.0） |
| 性能 | 约 300k DMIPS |
| 操作系统 | AidLux 融合系统（Android 13 + Ubuntu 22.04）或 Ubuntu 22.04 |
| Wi-Fi | Wi-Fi 7（802.11be，2.4 / 5 / 6 GHz DBS，2×2 MIMO） |
| 蓝牙 | 5.3 |
| 有线网络 | 3× LAN + 1× WAN（RJ45 千兆） |
| GNSS | 支持 |
| USB | 4× USB-A 3.0 + 1× USB-C 3.0（支持 DP 1.4 Alt Mode） |
| HDMI 输出 | 1× HDMI 1.4，最高 1080p @ 60 Hz（2K @ 120 fps） |
| HDMI 输入 | 1× HDMI 1.4，最高 4K @ 30 Hz（2K @ 30 fps） |
| 摄像头 | 3× MIPI CSI DPHY 4-lane（兼容树莓派引脚定义） |
| 显示 | MIPI-DSI |
| GPIO | 40-pin（兼容树莓派，3.3 V 与 1.8 V） |
| 工业接口 | 2× RS232、2× RS485、CAN、SPI、I²C、PWM、UART |
| 扩展 | M.2 M-Key 2280（NVMe SSD）、TF/SD 卡槽 |
| RTC | CR2032（225 mAh） |
| 音频 | 3.5 mm Line-in + 3.5 mm Line-out |
| 电源 | DC 12 V @ 5 A |
| 工作温度 | −20 °C 至 +50 °C（部分型号 +60 °C） |
| 参考价 | ¥2599 – ¥3680（iCEasy，2026） |

## 核心亮点

- 🤖 **Qualcomm QCS8550 + 48 TOPS NPU** — 旗舰移动平台改造的边缘 AI / 机器人 / 具身智能方案
- 🎥 **4K @ 240 fps 解码 / 8K @ 60 fps 解码、4K @ 120 fps 编码** — 广播级多媒体管线
- 📡 **Wi-Fi 7 + 蓝牙 5.3 + 三路千兆** — 现代无线与有线网络一步到位
- 🔌 **兼容树莓派 40-pin GPIO + 3× MIPI CSI** — 兼容树莓派 HAT 与摄像头模块
- 🏭 **工业级 I/O（RS232 / RS485 / CAN）** — 无需额外扩展板即可对接工厂、无人机、机器人

## 多媒体能力

| 编码 | 解码 | 编码 |
|------|------|------|
| H.264 / H.265 / VP9 | 4K @ 240 fps 或 8K @ 60 fps | 4K @ 120 fps 或 8K @ 30 fps |

## 接口速览

- **摄像头**：3× MIPI CSI DPHY 4-lane —— 引脚定义同树莓派
- **显示**：MIPI-DSI + HDMI 1.4 OUT（1080p @ 60 Hz）
- **存储**：M.2 M-Key 2280 NVMe 插槽 + TF/SD 卡槽
- **网络**：3× LAN + 1× WAN 千兆 + Wi-Fi 7 + 蓝牙 5.3 + GNSS
- **USB**：4× USB-A 3.0 + 1× USB-C 3.0（支持 DisplayPort Alt Mode）

> 📌 *官方引脚图、3D 模型与 CAD 资源见 [AidLux 犀牛派文档站](https://rhinopi.docs.aidlux.com/rhino-x1-aidlux)。*

## 快速上手

1. **上电**：接入 DC 12 V @ 5 A 电源。
2. **接显示器**：HDMI 输出接电视 / 显示器（1080p @ 60 Hz）。
3. **首次启动**：AidLux 融合系统约 15 秒进入桌面。
4. **无显示调试**：通过 40-pin UART 调试串口（115200 8N1）。
5. **更新系统**：
   ```bash
   sudo apt update && sudo apt full-upgrade -y
   ```

## 购买渠道

- 🛒 iCEasy 商城：[商品页](https://www.iceasy.com/product/2043949883757916162)
- 🛒 AidLux / 阿加犀 官方渠道
- 交期：通常 4–6 周

## 资源

- 📘 官方文档：[rhinopi.docs.aidlux.com](https://rhinopi.docs.aidlux.com/rhino-x1-aidlux)
- 💬 社区论坛：[forum.aidlux.com](https://forum.aidlux.com/)
- 📦 AidLux 开源仓库：[github.com/Aidlux-Admin](https://github.com/Aidlux-Admin)
- 🏷️ 本博客相关文章：[所有标签](/blog/tags)

## 应用场景

边缘 AI 推理盒、工业摄像头、AIoT 网关、无人机、机器人、具身智能平台、智能制造、安防监控、数字标牌。

## 合规与安全

> ⚠️ 适用于创客 / 工业集成场景。工作温度：−20 °C 至 +50 °C。商用前请确认当地的电磁兼容与无线电法规。
