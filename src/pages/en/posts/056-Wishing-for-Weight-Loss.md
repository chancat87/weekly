---
date: 2021/12/14
---

<img src="https://gw.alipayobjects.com/zos/k/6k/YdPTai.jpg" width="800" />

<small>Spotted this unconventional blessing on a board at a temple in Xishuangbanna. It’s actually quite sweet.</small>

> **Record the down-to-earth trending technologies seen every week, and publish them here after screening. If you find it good, you can follow this weekly to get update notifications.**

## Front-End Technology

**Bracket Pair Colorization 10,000x Faster**  
<https://code.visualstudio.com/blogs/2021/09/29/bracket-pair-colorization>  
The VS Code team completely refactored their bracket pair colorization feature, and the performance gains are staggering. Here is a look at how they achieved it.

**Installing npm Packages Directly in the Browser Console**  
<https://segmentfault.com/a/1190000040875211>  
A very handy trick for quickly testing libraries without needing to set up a local project.  
<img src="https://cdn.fliggy.com/upic/Tm0ata.jpg" width="800" />

**Product Ranking Practice in Meituan Search**  
<https://tech.meituan.com/2021/11/19/exploration-and-practice-of-multi-business-commodities-ranking-in-meituan-search.html>  
A case study on how Meituan handles complex searches that span multiple business units and product categories.

## Trending Open Source

**TopNotch: Hide the MacBook Pro Notch**  
<https://topnotch.app/>  
I don’t have the machine to test it on yet, but the result looks very clean—it basically blacks out the menu bar to blend with the notch.  
<img src="https://cdn.fliggy.com/upic/tMHnfC.gif" width="800" />

**KalidoKit: Sync Face and Body Tracking to Avatars**  
<https://github.com/yeemachine/kalidokit>  
The results are impressively smooth, especially considering it’s all running in the browser.  
<img src="https://cdn.fliggy.com/upic/QLQfsY.gif" width="800" />

**xterm.js: A Terminal for the Web**  
<https://xtermjs.org/>  
Bringing a full, high-performance terminal experience to your web application.  
<img src="https://cdn.fliggy.com/upic/sytU28.jpg" width="800" />

**microdiff: Lightweight and Fast Comparison Library**  
<https://github.com/AsyncBanana/microdiff>  
The example code says it all—a minimal way to get granular diffs between objects.

```js
import diff from "microdiff";

const obj1 = { originalProperty: true };
const obj2 = {
  originalProperty: true,
  newProperty: "new",
};

console.log(diff(obj1, obj2));
// [{type: "CREATE", path: ["newProperty"], value: "new"}]
```

## Just Looking Around

**A Discussion on Team Knowledge Sharing**  
<https://www.v2ex.com/t/815876>  
A V2EX thread on the pros and cons of Friday sharing sessions. Lots of interesting perspectives from different engineering cultures.

**Insight into the Lifestyles of Gen Z (00s)**  
[Download PDF](https://cdn.fliggy.com/upic/pM1UP2.pdf)  
A report from Tencent that dives into the preferences, consumption habits, and values of the younger generation.
