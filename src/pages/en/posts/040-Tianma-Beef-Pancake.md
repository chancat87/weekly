---
date: 2021/08/24
---

<img src="https://gw.alipayobjects.com/zos/k/59/itVs04.jpg" width="800" />

<small>The cover shows Tianma Beef Pancakes in a small alley in Changsha. They are incredibly delicious and you can ask for extra chili. Highly recommended, especially for the team building Alibaba's Tmall pages 😂.</small>

> **Record the down-to-earth trending technologies seen every week, and publish them here after screening. If you find it good, you can follow this weekly to get update notifications.**

## Front-End Technology

**Construction and Application of a Comprehensive Lifestyle Needs Graph**  
<https://tech.meituan.com/2021/07/15/construction-and-application-of-lifestyle-general-needs-net.html>  
To be honest, I really enjoy reading the deep-dive technical articles from the Meituan team.

**Analysis of WKWebView Loading Lifecycle and Proxy Methods**  
<https://mp.weixin.qq.com/s/ZFui9IiMTWyLXGKZlbnzwQ>  
A look from the client-side perspective at what exactly happens from the moment a web view starts a request to the point where the page is fully rendered.

**Resolving the Confusion: Resolution, PPI, DPI, and Pixels**  
<https://blog.infolink.com.tw/2021/rediscover-pixel-dpi-ppi-and-pixel-density/>  
A detailed breakdown by a Taiwanese developer. It’s a great refresher for anyone working on cross-device screen densities.

**Upgrading Front-End Development with Serverless at Bytedance**  
<https://mp.weixin.qq.com/s/J2fHm_mR7UE65q1vSQ9xpA>  
A transcript of Wang Lei's GMTC talk on the Serverless shift in large-scale frontend development, including slides.

## Trending Open Source

**LyricsX: A Lyrics Plugin for Apple Music**  
<https://github.com/ddddxxx/LyricsX>  
If you're an Apple Music enthusiast like me, this is a must-have for the desktop experience.  
<img src="https://cdn.fliggy.com/upic/SwQSUK.jpg" width="800" />

**Gray: Custom Dark/Light Modes per App on macOS**  
<https://github.com/zenangst/Gray>  
For when you want to force a specific app into light mode while the rest of your system is in dark mode (or vice-versa).  
<img src="https://cdn.fliggy.com/upic/KAlMvN.jpg" width="800" />

**Vapor: Server-Side Swift Framework**  
<https://github.com/vapor/vapor>  
The code is beautiful and the ecosystem is far more robust than I initially expected.

```swift
import Vapor

let app = try Application(.detect())
defer { app.shutdown() }

app.get("hello") { req in
    return "Hello, world."
}

try app.run()
```

**uBlock Origin: Low-Memory Ad Blocker**  
<https://github.com/gorhill/uBlock>  
My current preferred blocker. It’s lightweight and highly effective without dragging down browser performance.

**Smartisan-Inspired Markdown Theme**  
<https://nihaojob.github.io/markdown-css-smartisan/examples/index.html>  
The aesthetic of the old Smartisan OS was legendary, and this port to Markdown is just beautiful.  
<img src="https://cdn.fliggy.com/upic/Xwe3VV.jpg" width="800" />

## Just Looking Around

**Klee: Data-Driven Development in C++**  
<https://mp.weixin.qq.com/s/y2700SOPIvETJ-x2BC5q5w>  
An internal open-source project from Tencent. It’s interesting to compare their data-driven patterns with the common state management solutions we use in the frontend world.

**The Essential Reading List for Programmers**  
<https://draveness.me/books-1>  
The first recommendation is SICP (Structure and Interpretation of Computer Programs). I bought it years ago but only got halfway through—maybe it’s time to finally finish it.

**The First 18 Months: What a Founder Should Actually Do**  
<https://mp.weixin.qq.com/s/MrXfdnav2tY7MWcSDqiMhw>  
A guide for survival during the most critical phase of a startup’s lifecycle—how to avoid fatal mistakes and focus on what matters.

**Space Tourism: How to Get There and What to Expect**  
<https://www.huxiu.com/article/441909.html>  
I wonder if this will be a common vacation option ten years from now.
