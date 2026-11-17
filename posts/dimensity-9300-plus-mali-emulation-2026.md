---
title: "Why Mali Drivers Still Hold Back Dimensity 9300+ Emulation in 2026"
description: "What current S10 Ultra bug reports reveal about missing graphics features, presentation, and newer PanVK alternatives."
date: "2026-11-17"
published_at: "2026-11-17T16:44:01Z"
category: "Emulation"
image: 7
draft: false
---

A Dimensity 9300+ can be powerful enough to make a game’s failure feel mysterious. The launcher opens, a scene renders, and then geometry turns noisy or a graphics device refuses to initialize. More CPU throughput cannot fix every problem between a translated graphics command and the Android display.

The important qualification is that **Mali support is changing**. In November 2026, it is inaccurate to say that every Mali device is permanently blocked or that no custom driver work exists. It is equally inaccurate to translate a new driver’s feature list into universal game compatibility.

## One concrete S10 Ultra failure

Contributor [velislavr’s Eden report #743](https://github.com/eden-emulator/Issue-Reports/issues/743), opened in October, describes block noise in Breath of the Wild on a Galaxy Tab S10 Ultra with Dimensity 9300+, Android 16, and stock driver 44.1.0. The report names two nightly builds and lists missing Vulkan features in its log.

Changing ASTC options, accuracy settings, and shader cache did not resolve that reporter’s problem. This is evidence about that title and configuration. It is not a benchmark of all S10 Ultra games, nor proof that every visible artifact has the same cause.

The useful lesson is diagnostic: a settings guide cannot supply a graphics feature that the selected driver does not expose or correctly implement. Lowering resolution may reduce work per frame while leaving a compatibility failure unchanged.

## Think in layers

For a Windows game, the path can include CPU translation, Wine or a Proton-derived runtime, a Direct3D translation layer, a Vulkan driver, kernel interfaces, and Android’s presentation machinery. A console emulator has its own CPU and graphics translation path. These workloads should not be collapsed into one category called “emulation performance.”

| Symptom | A useful next question |
|---|---|
| No D3D device | Which feature or extension does the log say is unavailable? |
| Geometry renders incorrectly | Does another driver change correctness in the same scene? |
| Window opens without usable frames | Is presentation or buffer sharing failing? |
| App disappears under load | Is the log reporting a native crash, GPU fault, or memory kill? |

These are investigation categories, not diagnoses from a screenshot. Save logs before changing several settings at once.

## Why a Vulkan version number is insufficient

A displayed “Vulkan 1.3” or “Vulkan 1.4” label is not a complete compatibility certificate. Applications also depend on optional features, limits, extensions, and correct behavior. Upstream [Mesa’s Panfrost/PanVK documentation](https://docs.mesa3d.org/drivers/panfrost.html) separately identifies GPU architectures and warns that experimental support can depend on kernel versions.

There is another distinction: the upstream Mesa implementation and an Android kbase port are related projects, not interchangeable installation packages. Instructions for a Linux system using a mainline graphics stack do not automatically describe a stock Samsung tablet.

## The newer PanVK work matters

[JimVulkan’s mali-panvk project](https://github.com/JimVulkan/mali-panvk) explicitly lists the Tab S10+ and S10 Ultra among tested devices and describes support for newer CSF-based Mali GPUs on Android’s existing kbase driver. Those are maintainer-reported capabilities, not an independent test of the game above.

That development changes the question from “can Mali ever work?” to “does this precise driver, wrapper, emulator build, and firmware work for my title?” A successful initialization or feature test is a useful milestone. Correct rendering through a full play session is a separate milestone.

## A productive way to troubleshoot

Record the stock result first. Then try a compatible app-loaded driver in a separate configuration, following its own release instructions. Keep game version, save point, and resolution constant. Compare screenshots and logs before chasing frame rate.

If neither path works, report the smallest reproducible case: exact tablet model, Android build, driver package, emulator release, title version, settings, and failure point. Do not attribute every crash to Mali; memory management and application bugs can produce similar symptoms.

The 9300+ story is therefore one of uneven integration, not a simple shortage of processing power. Existing reports justify caution, while current driver work makes blanket pessimism outdated.

## Sources and contributor credits

- [velislavr: reproducible S10 Ultra rendering report](https://github.com/eden-emulator/Issue-Reports/issues/743).
- [JimVulkan: Android kbase PanVK implementation and test-device list](https://github.com/JimVulkan/mali-panvk).
- [Mesa contributors: Panfrost and PanVK documentation](https://docs.mesa3d.org/drivers/panfrost.html).
- [doitsujin and DXVK contributors: translation layer and driver-support guidance](https://github.com/doitsujin/dxvk).

*Research checked November 17, 2026. This is a source-based editorial guide, not a hands-on benchmark. Contributor reports and project capabilities are attributed in context; later releases may change the results.*
