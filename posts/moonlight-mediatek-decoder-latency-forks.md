---
title: "Moonlight on MediaTek: High Decoder Latency and Fork Workarounds"
description: "How to distinguish decoder delay from network and frame-queue latency, and evaluate Moonlight forks fairly."
date: "2026-11-17"
published_at: "2026-11-17T16:44:01Z"
category: "Emulation"
image: 15
draft: false
---

If a streamed game feels late, the network is only one suspect. Encoding on the host, decoding on the client, waiting for display, and the input path all contribute. A MediaTek device with excellent local graphics performance can still behave poorly in one video-decoding path.

Moonlight also needs to be kept separate from Winlator. Moonlight streams a game running elsewhere. Installing a Vulkan driver intended for local Windows or console emulation does not directly replace Android’s hardware video decoder.

## A real report, with an important date

In [Moonlight Android issue #1241](https://github.com/moonlight-stream/moonlight-android/issues/1241), ktm-91 reported roughly 30 ms of decode latency on a OnePlus Nord 3 with Dimensity 9000, Android 13, and both H.264 and H.265. The reporter compared that with a much lower value on a MediaTek-based television.

The issue was opened in **August 2023**. It is historical evidence of a specific problem, not a November 2026 measurement of every MediaTek phone. Its contrast between two MediaTek products is especially useful: the chipset vendor’s name alone does not predict the decoder implementation or firmware behavior.

## Read the overlay before changing the network

[Moonlight’s FAQ](https://github.com/moonlight-stream/moonlight-docs/wiki/Frequently-Asked-Questions) separates decode, frame-queue, and render statistics, and explains that available measurements differ by client. These numbers do not capture every source of end-to-end delay.

| Observation | Investigation to prioritize |
|---|---|
| Packet loss or unstable network time | Link quality, interference, bitrate, and host connection |
| Consistently high decode time | Codec, resolution, hardware decoder selection, firmware |
| Low decode time but growing queue | Frame pacing and display scheduling |
| Smooth video with delayed control | Input, host processing, and display path as well as decoding |

Do not compare two overlays as though they measure identical stages unless the clients document that they do. A lower displayed number can reflect different instrumentation.

## What upstream already does

The [upstream MediaCodec helper](https://github.com/moonlight-stream/moonlight-android/blob/master/app/src/main/java/com/limelight/binding/video/MediaCodecHelper.java) contains vendor-specific low-latency handling, including MediaTek-related options. The project also maintains [decoder errata](https://github.com/moonlight-stream/moonlight-android/blob/master/decoder-errata.txt).

Those workarounds explain why “Android supports low-latency decoding” is not the end of the story. The selected codec and firmware must actually implement the path correctly. A workaround that helps an old television is not automatically appropriate for a current Dimensity phone.

## What forks can reasonably offer

[alonsojr1980’s turbo fork](https://github.com/alonsojr1980/moonlight-android-turbo) describes a latency-motivated effort and points readers toward Artemis. [ClassicOldSong’s Artemis project](https://github.com/ClassicOldSong/moonlight-android) offers a separate client with additional controls and workflow features.

That makes a fork a legitimate comparison candidate. It does not establish a universal MediaTek decoder fix or a guaranteed latency reduction. Check which release contains the relevant change and whether it was tested on your device. Software decoding, when offered by a particular fork, is a different CPU-heavy path; it should not be presumed faster simply because hardware decoding is disappointing.

## A controlled comparison you can run

Keep the host, scene, network, resolution, frame rate, and bitrate constant. Start with a supported mainstream codec, then compare H.264 and HEVC separately. Record the client release and actual decoder name where available. Repeat after warm-up and after a reconnect.

Then compare frame-pacing options independently. The official FAQ describes tradeoffs between lower latency and smoother delivery. Change one setting at a time so a client swap is not accidentally compared with an entirely different stream configuration.

Capture decode time, dropped frames, frame queue, and your practical input experience. If a fork helps, publish the conditions with the result. If it does not, that is useful evidence too. The aim is to find a working path on the device you own, rather than label an entire SoC family good or bad from one old issue.

## Sources and contributor credits

- [ktm-91 and discussion contributors: Dimensity 9000 report](https://github.com/moonlight-stream/moonlight-android/issues/1241).
- [Moonlight contributors: statistics and frame-pacing FAQ](https://github.com/moonlight-stream/moonlight-docs/wiki/Frequently-Asked-Questions).
- [Moonlight Android maintainers: MediaCodec helper and vendor handling](https://github.com/moonlight-stream/moonlight-android/blob/master/app/src/main/java/com/limelight/binding/video/MediaCodecHelper.java).
- [alonsojr1980: latency-focused fork](https://github.com/alonsojr1980/moonlight-android-turbo).
- [ClassicOldSong: Artemis Android](https://github.com/ClassicOldSong/moonlight-android).

*Research checked November 17, 2026. This is a source-based editorial guide, not a hands-on benchmark. Contributor reports and project capabilities are attributed in context; later releases may change the results.*
