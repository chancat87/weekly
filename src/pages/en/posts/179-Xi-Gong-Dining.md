---
date: 2024/06/03
---

<img src="https://gw.alipayobjects.com/zos/k/pj/179.jpg" width="800" />

<small>The cover photo shows Xi Gong, a restaurant in Hangzhou. If you're looking for stir-fried, spicy, and "rice-killing" dishes with that authentic "wok hei," this is the place. It's affordable, incredibly fragrant, and common for a colleague to eat three bowls of rice here.</small>

> **Record the down-to-earth trending technologies seen every week, and publish them here after screening. If you find it good, you can follow this weekly to get update notifications.**

## Technical Learning

**A reading list of about 30 AI research papers**  
<https://arc.net/folder/D0472A20-9C20-4D3F-B145-D2865C0A9FEE>  
On Reddit, I saw OpenAI co-founder Ilya Sutskever shared a list of ~30 AI papers, saying, "If you truly learn all of these, you'll know 90% of what's important in AI today." i've bookmarked them, though the reading level is quite high...  
<img src="https://gw.alipayobjects.com/zos/k/5i/SCR-20240526-tmfi.png" width="800" />

**100 Exercises To Learn Rust**  
<https://rust-exercises.com/>  
Perfect for those with some programming background who want to learn Rust. It teaches key concepts one exercise at a time, which is much better than just reading documentation.  
<img src="https://gw.alipayobjects.com/zos/k/rh/SCR-20240526-tapf.png" width="800" />

**Google Code Review Guide**  
<https://dub.sh/crcr>  
An article on "Google CR Guidelines: How to Advance Code Review." it offers practical advice that is much better than the generic "helpful tips" you often see. i'm promoting this in my team now.

## Trending Tools

### Running terminal commands without a password

You can configure `sudo` to allow specific commands to run without a password using the `sudoers` file. Only do this for commands you trust.

```bash
sudo visudo
```

Then add a rule. To find the path of a command, use `which <command>`. For example, to allow `systemctl` without a password:

```bash
your_username ALL=(ALL) NOPASSWD: /bin/systemctl
```

Replace `your_username` with your Mac username. You can add multiple commands separated by commas. Then save and exit.

**QuickRecorder: A handy screen recording tool**  
<https://github.com/lihaoyun6/QuickRecorder>  
An open-source, multi-functional, lightweight, and high-performance screen recording tool for macOS. Very compact and easy to use.  
<img src="https://gw.alipayobjects.com/zos/k/5l/459shots_so.png" width="800" />

**WeChat Input Method’s "Offline Mode"**  
<https://z.weixin.qq.com/>  
WeChat Input now has an offline mode that downloads models locally instead of being cloud-connected. It can still sync your previous dictionary. while it feels good to use, most people in the community remain skeptical about the privacy protection.  
<img src="https://gw.alipayobjects.com/zos/k/l4/413shots_so.png" width="800" />

## Just Looking Around

**Life is a wilderness, not a track**  
Looking at this image, I feel even more that life is an open field. every step is just one path to the present, and from the present, there are countless new paths to the future. Everything we do now is to ensure we have more choices in the future.  
<img src="https://gw.alipayobjects.com/zos/k/oc/926shots_so.png" width="800" />

### Random Talk: The relationship between information accessibility and its utility

1. There's a strong correlation: the harder it is to get information, the more useful it usually is.
2. Information fed to you for free (short videos, algorithmic feeds) is often the least useful. it's designed to maximize the platform's benefit (ads, SEO, sales) and can actually make you less capable of deep thought over time.
3. Information that requires effort—paid subscriptions (like ChatGPT Plus), selecting and reading books, deciphering complex papers, or learning from expensive mistakes—is much more valuable. it stays with you and yields long-term returns.
4. Outputting what you learn—writing technical articles or building "toy" projects—is far superior to just consuming. it's like training an LLM: high-quality data and active "application" lead to a much stronger result.
