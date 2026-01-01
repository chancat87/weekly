---
date: 2021/12/28
---

<img src="https://gw.alipayobjects.com/zos/k/q7/4gBaEY.jpg" width="800" />

<small>Taken at "Zhi Coffee" in a small alley in Xi'an. The barista treats every cup like a piece of art—their "Orange Sea" was exceptional.</small>

> **Record the down-to-earth trending technologies seen every week, and publish them here after screening. If you find it good, you can follow this weekly to get update notifications.**

## Front-End Technology

**React 18's New Feature: startTransition**  
<https://mp.weixin.qq.com/s/JAFdq0BBu4rVAoPAdKWe8A>  
React 18 introduces Concurrent Rendering, significantly improving performance with concepts like time-slicing and task prioritization.

**Web Performance: Controlling Critical Request Priority**  
<https://mp.weixin.qq.com/s/P63LEMaXLMyWGYVdLiWxZw>  
A translated piece from a developer at Bytedance. It’s a deep dive into how precisely you can actually control load priorities in the browser.

**Reflecting on Mobile Security Hardening**  
<https://mp.weixin.qq.com/s/yCB2R8QPWNp2lJrQD4l_hw>  
Insights from the Trip.com team on their experiences and best practices for securing mobile applications.

## Trending Open Source

**promisio: JS-Style Asynchronous Programming in Python**  
<https://github.com/miguelgrinberg/promisio>  
A clever library that brings the familiar JavaScript Promise patterns to Python code.

```python
from promisio import promisify

@promisify
async def f():
    await asyncio.sleep(1)
    return 42

@promisify
def g(x):
    return x * 2

async def main():
    print(await f())  # prints 42
    print(await g(42))  # prints 84

    # Run in background without waiting
    promise = f() 
    # ... do other stuff here in parallel
    await promise  # wait for completion
```

**Cyberwhistle: The Tesla Whistle**  
<https://shop.tesla.com/product/cyberwhistle>  
The official product page for Tesla's limited edition whistle. Even their e-commerce design is pretty slick.  
<img src="https://cdn.fliggy.com/upic/VC4VD8.jpg" width="800" />

**xLua: Lua Support for C#**  
<https://github.com/Tencent/xLua>  
Open-sourced by Tencent, xLua brings Lua scripting capabilities to C# environments like Unity, .Net, and Mono.

```csharp
using UnityEngine;
using XLua;

namespace XLuaTest
{
    public class Helloworld : MonoBehaviour
    {
        void Start()
        {
            LuaEnv luaenv = new LuaEnv();
            luaenv.DoString("CS.UnityEngine.Debug.Log('hello world')");
            luaenv.Dispose();
        }
    }
}
```

**xtendui: A Tailwind Component Library**  
<https://xtendui.com/components/drop>  
The design aesthetic here is very pleasing. Definitely worth keeping an eye on for your next project.

## Just Looking Around

**Top 10 Shrinking Industries of 2021**  
<https://mp.weixin.qq.com/s/nes6gfaatI0_YYDWLFzZfQ>  
The tourism industry, which contracted by 84%, only came in fourth. That tells you everything you need to know about the current economic climate.

**Is the Automotive Chip Shortage Really That Bad?**  
<https://mp.weixin.qq.com/s/2w7KvezFV136NkgZ_L9X8A>  
It remains a bit of a mystery, but the impact is real and widespread.
