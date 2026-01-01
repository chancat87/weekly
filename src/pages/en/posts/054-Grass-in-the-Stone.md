---
date: 2021/11/30
---

<img src="https://gw.alipayobjects.com/zos/k/v7/lOHYdo.jpg" width="800" />

<small>Captured this weekend outside a house near Huanglong—grass growing directly out of stone. There was a certain "Zen" atmosphere that the photo only partially conveys.</small>

> **Record the down-to-earth trending technologies seen every week, and publish them here after screening. If you find it good, you can follow this weekly to get update notifications.**

## Front-End Reading

**Meituan’s Practice and Exploration in Knowledge Graph QA**  
<https://tech.meituan.com/2021/11/03/knowledge-based-question-answering-in-meituan.html>  
How Meituan uses automated and recommended replies to help merchants respond to customer inquiries more efficiently throughout the entire service lifecycle.

**The Dilemma of Modern Web Development**  
<https://juejin.cn/post/7025868886914400293>  
A perspective (likely from the Bytedance team) on the complexities and frustrations of building for the modern web. Worth a critical read.

**Decoding Strange Symbols in TypeScript**  
<https://mp.weixin.qq.com/s/Y4TX0ACqyCoRCBfsas2qCA>  
Ever wondered what `??` actually does, or what the `!` means in `useContext(AppContext)!`? This article clarifies the shorthand you see in modern TS codebases.

**Record, Replay and Measure User Flows in Chrome**  
<https://developer.chrome.com/docs/devtools/recorder/>  
A powerful new native feature in DevTools that allows you to record user interactions and replay them for testing and performance measurement.  
<img src="https://cdn.fliggy.com/upic/zwxHaI.gif" width="800" />

## Trending Open Source

**nnn: A Blazingly Fast Terminal File Manager**  
<https://github.com/jarun/nnn>  
Extremely lightweight and supports a ton of plugins. You can install it on Mac easily via `brew install nnn`.  
<img src="https://cdn.fliggy.com/upic/qk94FZ.gif" width="800" />

**Hasty: JS Performance Benchmarking Tool**  
<https://hasty.dev/>  
A simple web-based tool for quickly comparing the performance of different JavaScript snippets.  
<img src="https://cdn.fliggy.com/upic/SJptXD.jpg" width="800" />

**Agora Flat: Open-Source Interactive Classroom**  
<https://github.com/netless-io/flat>  
A beautifully designed, fully open-source platform for building interactive online educational experiences.  
<img src="https://cdn.fliggy.com/upic/v0bJnY.jpg" width="800" />

**VS Code Theme Generator: Build Your Own Theme with Code**  
<https://github.com/Tyriar/vscode-theme-generator>  
A programmatic way to define and generate VS Code themes using a simple JavaScript configuration.

```js
import { generateTheme, IColorSet } from 'vscode-theme-generator';
const colorSet: IColorSet = {
  base: {
    background: '#12171F',
    foreground: '#EFEFEF',
    color1: '#399EF4',
    // ... more colors
  },
};
generateTheme('My Theme', colorSet, path.join(__dirname, 'theme.json'));
```

<img src="https://cdn.fliggy.com/upic/1k0CSy.jpg" width="800" />

**Fig: Autocomplete for Your Terminal**  
<https://github.com/withfig/autocomplete>  
Adds visual, IDE-like autocomplete menus to your existing terminal. A huge quality-of-life improvement for CLI users.  
<img src="https://cdn.fliggy.com/upic/f2ULwf.gif" width="800" />

## Just Looking Around

**Apple Introduces "App Privacy Report" in iOS 15.2**  
<https://mp.weixin.qq.com/s/jo9sb2AfrnzZWpDDuqJnCw>  
Users can now see exactly how often apps are accessing sensitive data like location and camera, as well as which background domains they are contacting. A big win for transparency.  
<img src="https://cdn.fliggy.com/upic/Re6f2m.jpg" width="800" />

**A Handbook of Cognitive Biases**  
[Read on Feishu](https://s75w5y7vut.feishu.cn/docs/doccn3BatnScBJe7wD7K3S5poFf)  
An incredibly comprehensive document detailing the various mental shortcuts and blind spots that affect our decision-making.

**Morris Chang (TSMC Founder) 1.5-Hour Keynote**  
<https://zhuanlan.zhihu.com/p/432049382>  
At 90 years old, Chang shares insights from his legendary career, from Texas Instruments to founding TSMC at age 54.

**Understanding "Survivor Bias" in Depth**  
<http://www.woshipm.com/user-research/5205736.html>  
A 4,400-word deep dive into why we often focus on the "winners" and ignore the hidden data of those who didn't make it, and how to avoid this common fallacy.
