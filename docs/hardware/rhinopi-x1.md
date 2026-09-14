---
title: rhinoPi X1
sidebar_label: rhinoPi X1
sidebar_position: 1
tags: [hardware, sbc, rhinoPi, edge-ai]
---

# 🦏 rhinoPi X1

> **rhinoPi X1** is a high-performance embedded computing board by **AidLux / 阿加犀**, designed for Edge AI, industrial IoT, robotics, and smart terminals. Built on the Qualcomm® QCS8550 platform, it delivers up to **48 TOPS** of INT8 AI inference in a compact 125 × 110 × 35.5 mm form factor.

## Overview

| Item | Parameter |
|------|-----------|
| Form factor | Embedded single-board computer (125 × 110 × 35.5 mm) |
| Platform | **Qualcomm® QCS8550** (Dragonwing™ QCS8550, 4nm) |
| CPU | 1+2+3 tri-cluster Kryo: 1× Kryo Prime @ 3.2 GHz + 2× Kryo Gold @ 2.8 GHz + 3× Kryo Silver @ 2.0 GHz |
| GPU | Adreno 740 (~3000 GFLOPS) |
| NPU / AI | **Up to 48 TOPS INT8** (≈156 TOPS effective) |
| RAM | 16 GB LPDDR5X |
| Storage | 128 GB eMMC (some SKUs: 256 GB UFS 4.0) |
| Performance | ~300k DMIPS |
| OS | AidLux Fusion System (Android 13 + Ubuntu 22.04) or Ubuntu 22.04 |
| Wi-Fi | Wi-Fi 7 (802.11be, 2.4 / 5 / 6 GHz DBS, 2×2 MIMO) |
| Bluetooth | 5.3 |
| Wired network | 3× LAN + 1× WAN (RJ45, Gigabit) |
| GNSS | Supported |
| USB | 4× USB-A 3.0 + 1× USB-C 3.0 (supports DP 1.4 Alt Mode) |
| HDMI OUT | 1× HDMI 1.4, up to 1080p @ 60 Hz (2K @ 120 fps) |
| HDMI IN | 1× HDMI 1.4, up to 4K @ 30 Hz (2K @ 30 fps) |
| Camera | 3× MIPI CSI DPHY 4-lane (Raspberry Pi compatible pinout) |
| Display | MIPI-DSI |
| GPIO | 40-pin (Raspberry Pi compatible, 3.3 V and 1.8 V) |
| Industrial I/O | 2× RS232, 2× RS485, CAN, SPI, I²C, PWM, UART |
| Expansion | M.2 M-Key 2280 (NVMe SSD), TF/SD card slot |
| RTC | CR2032 (225 mAh) |
| Audio | 3.5 mm Line-in + 3.5 mm Line-out |
| Power | DC 12 V @ 5 A |
| Operating temp | −20 °C to +50 °C (some SKUs +60 °C) |
| MSRP | ¥2599 – ¥3680 (iCEasy, 2026) |

## Highlights

- 🤖 **Qualcomm QCS8550 with 48 TOPS NPU** — flagship mobile silicon adapted for edge AI, robotics and humanoid platforms
- 🎥 **4K @ 240 fps decode / 8K @ 60 fps decode, 4K @ 120 fps encode** — broadcast-grade multimedia pipeline
- 📡 **Wi-Fi 7 + Bluetooth 5.3 + triple GbE** — modern wireless and wired networking out of the box
- 🔌 **Raspberry-Pi-compatible 40-pin GPIO + 3× MIPI CSI** — drop-in for RPi HATs and camera modules
- 🏭 **Industrial I/O (RS232 / RS485 / CAN)** — ready for factories, drones and robots without extra shields

## Multimedia Capabilities

| Codec | Decode | Encode |
|-------|--------|--------|
| H.264 / H.265 / VP9 | 4K @ 240 fps or 8K @ 60 fps | 4K @ 120 fps or 8K @ 30 fps |

## Interfaces at a Glance

- **Camera**: 3× MIPI CSI DPHY 4-lane — same pin definition as Raspberry Pi
- **Display**: MIPI-DSI + HDMI 1.4 OUT (1080p @ 60 Hz)
- **Storage**: M.2 M-Key 2280 NVMe slot + TF/SD card
- **Network**: 3× LAN + 1× WAN GbE + Wi-Fi 7 + Bluetooth 5.3 + GNSS
- **USB**: 4× USB-A 3.0 + 1× USB-C 3.0 with DisplayPort Alt Mode

> 📌 *Official pinout diagrams, 3D models and CAD sources are published on the [AidLux rhinoPi docs site](https://rhinopi.docs.aidlux.com/en/rhino-x1-aidlux).*

## Getting Started

1. **Power up**: connect DC 12 V @ 5 A.
2. **Connect display**: HDMI OUT to a monitor or TV (1080p @ 60 Hz).
3. **First boot**: the AidLux Fusion System launches a desktop in ~15 seconds.
4. **Headless setup** via the 40-pin UART header (115200 8N1).
5. **Update**:
   ```bash
   sudo apt update && sudo apt full-upgrade -y
   ```

## Where to Buy

- 🛒 iCEasy mall: [product page](https://www.iceasy.com/product/2043949883757916162)
- 🛒 AidLux / 阿加犀 official channels
- Lead time: typically 4–6 weeks

## Resources

- 📘 Official docs: [rhinopi.docs.aidlux.com](https://rhinopi.docs.aidlux.com/en/rhino-x1-aidlux)
- 💬 Community forum: [forum.aidlux.com](https://forum.aidlux.com/)
- 📦 AidLux repos: [github.com/Aidlux-Admin](https://github.com/Aidlux-Admin)
- 🏷️ Related posts on this blog: [all tags](/blog/tags)

## Application Areas

Edge AI inference boxes, industrial cameras, AIoT gateways, drones, robots, embodied-intelligence platforms, smart manufacturing, security surveillance, and digital signage.

## Compliance & Safety

> ⚠️ For hobbyist / industrial-integration use. Operating temperature: −20 °C to +50 °C. Verify local EMC / radio regulations before deploying in commercial products.
