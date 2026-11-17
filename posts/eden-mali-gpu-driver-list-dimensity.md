---
title: "Mali GPU Driver List for Eden: What Actually Works on Dimensity"
description: "A dated guide to stock drivers and community PanVK projects, with architecture matching and clear evidence labels."
date: "2026-11-17"
published_at: "2026-11-17T16:44:01Z"
category: "Emulation"
image: 8
draft: false
---

A useful Mali driver list starts with the GPU and kernel interface, not with the newest ZIP filename. Dimensity is a processor family name. Devices within it use different Mali generations, firmware, and Android builds, so a driver intended for one path may not support another.

**Evidence standard:** The entries below describe project scope and public reports checked on November 17, 2026. “Listed” means a maintainer identifies that hardware; it does not mean Latent Ink has verified your Eden game. No entry is a universal compatibility promise.

## The short list

| Driver route | Where the evidence points | Important qualification |
|---|---|---|
| Stock vendor driver | The device’s normal starting point | Keep a stock baseline; version and exposed features vary by firmware |
| FristOneRR PanVK | Project lists older Job Manager Mali devices including the Dimensity 1100/G77 | Follow its hardware list and release-specific instructions; this is not the generic choice for every CSF GPU |
| JimVulkan mali-panvk | Maintainer lists older and newer Mali paths, including tests on S10 Ultra/G720 and S11/G925 | A project’s device test does not certify all Eden titles |
| wonderkast02 PanVK G720 | Experimental G720 kbase/CSF project | Its declared validation scope and variant matter; DXVK testing is not automatically an Eden result |

Sources: [FristOneRR](https://github.com/FristOneRR/FristOneRR-Panvk-Driver), [JimVulkan](https://github.com/JimVulkan/mali-panvk), and [wonderkast02](https://github.com/wonderkast02/panvk-g720-kbase-csf). These are distinct development efforts, even when each uses Mesa technology.

## What should not be on a universal Mali list

Turnip is an Adreno driver, as documented by [Mesa](https://docs.mesa3d.org/drivers/freedreno.html). A Turnip release recommended for a Snapdragon tablet is not a Mali driver. Likewise, a Linux distribution package is not necessarily an Android app-loadable driver.

[Panfrost/PanVK’s upstream documentation](https://docs.mesa3d.org/drivers/panfrost.html) is valuable for architecture and API context, but a support row is not proof that an Android package works with a particular vendor kernel. Keep upstream capabilities, Android port capabilities, and emulator integration separate.

## The GPU name is only the first match

Before installing anything, record the complete device model, Android version, GPU, system driver version, and emulator build. Then check the candidate project’s exact requirements. Job Manager and CSF paths are not interchangeable, and similarly named G720 variants should not be assumed identical.

Check that Eden can load that package and that the log confirms it is active. A ZIP that installs successfully can still fail to create a Vulkan device. A device that initializes can still render incorrectly later.

A concrete example appears in [thanatipbunrit08’s Eden report #749](https://github.com/eden-emulator/Issue-Reports/issues/749). On a G925 device, the reporter described visual problems with the stock driver, then a different initialization failure with a custom PanVK build. The result illustrates why removing one missing-feature warning is progress without proving complete compatibility.

## Texture settings belong to a specific driver

The FristOneRR README recommends CPU ASTC decoding for Eden in its documented setup. Treat that as guidance for the named driver and release, not a rule for all Mali devices. Settings that address one driver’s texture behavior may have a different cost or effect elsewhere.

Keep a working stock configuration and change one variable at a time. If a project recommends rebuilding a shader cache after changing drivers, retain a backup and expect initial compilation. Do not confuse a cold-cache first launch with sustained performance.

## How to judge “actually works”

Require more than a loading screen. Test your usual gameplay, busy effects, menus, saving, and a later scene. Record whether graphics are correct and whether the app survives long enough to be useful. Where performance changes, keep the same resolution and game version.

A useful compatibility entry should say “this game, this build, this driver, this device,” followed by known failures. Download from the named project’s release page and keep its release identifier with your notes. That creates a driver list other people can reproduce, rather than another collection of unrelated files.

## Sources and contributor credits

- [FristOneRR: driver scope and Eden notes](https://github.com/FristOneRR/FristOneRR-Panvk-Driver).
- [JimVulkan: kbase PanVK port and tested-device list](https://github.com/JimVulkan/mali-panvk).
- [wonderkast02: experimental G720 work](https://github.com/wonderkast02/panvk-g720-kbase-csf).
- [thanatipbunrit08: stock-versus-custom-driver observations](https://github.com/eden-emulator/Issue-Reports/issues/749).
- [Mesa contributors: Panfrost/PanVK architecture documentation](https://docs.mesa3d.org/drivers/panfrost.html).

*Research checked November 17, 2026. This is a source-based editorial guide, not a hands-on benchmark. Contributor reports and project capabilities are attributed in context; later releases may change the results.*
