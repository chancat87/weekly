---
date: 2026/07/27
---

<img src="https://cdn.tw93.fun/uPic/27534.jpg" width="800" />

<small>The cover was shot on Friday evening while I was out for dinner. I looked up and saw this blue dusk sky. I really like this blue, the kind that feels comfortable to look at.</small>

> **Recording down-to-earth trending tech I see every week, filtered and published here. Follow this weekly newsletter to get update notifications**

## Trending Tools

**Bento: stuff an online slide deck into a single file**
<https://github.com/nyblnet/bento>
The idea and the execution here are both nice. Animations, video, web design, all of it goes into one HTML file, and that file is at the same time your document, your editor, and your player. It's also a good fit for letting AI keep editing and iterating on it. Worth a try if you're curious.
<img src="https://cdn.tw93.fun/uPic/zHKfAj50.png" width="800" />

**peek-cli: let your coding agent see web pages properly**
<https://github.com/puffinsoft/peek-cli>
peek-cli lets an agent grab a screenshot of any tab you already have open in your browser, which suits those frontend design loops where you keep iterating until the result looks right.
<img src="https://cdn.tw93.fun/uPic/qa3wJh33.png" width="800" />

**clawk: give your coding agent a disposable Linux VM**
<https://github.com/clawkwork/clawk>
If you're worried that what your AI coding agent runs could damage your machine, or you really love `--dangerously-skip-permissions` but don't want to leak your keys, give this a try. It automatically spins up a disposable Linux VM so nothing goes wrong while things are running.
<img src="https://cdn.tw93.fun/uPic/demo47.gif" width="800" />

**It's been a while since I shared a Kaku update**
<https://kaku.fun>
Kaku is the open-source Mac terminal I built over Chinese New Year by heavily customizing WezTerm: AI friendly, good looking by default, and fast. It's up to 23 releases now. It started out very simple, and it still looks very simple, but it keeps getting nicer to use. I also added an official site and friendly docs.

I use it as my main workstation. Compared to GUIs I still prefer TUIs because they're simple and direct, so roughly 90% of the code in my open-source projects and in Mole is written through Kaku. I've started deploying some of my own things on cloud servers lately, which finally pushed me to round out the SSH experience, and over the past month I used Fable 5 to optimize a lot of the low-level Rust rendering, so startup is much faster now. I like one tab per project, with a shortcut to split that tab into two panes so I can code on one side and test on the other. Switching and closing tabs works almost exactly like a browser, since I ported a lot of the browser habits you already have over to the terminal.

On the AI side, Kaku stays out of your way. It usually shows up when a command fails, or when you've forgotten a command and just type #plain English, and it tells you the real one. When you don't feel like opening codex, CMD+L brings up an AI chat panel so you can talk to it right there, which makes the terminal a naturally AI-friendly environment. The last two releases mostly fixed usability issues: AI usage, quick tab closing, Starship compatibility, working over SSH, plus pane navigation, tab renaming, and other details. If you want something simple and fast and you like things that look good, give Kaku a try. Suggestions from actual use are very welcome and help make it better.
<img src="https://cdn.tw93.fun/uPic/SCR-20260726-sqti21.png" width="800">

## Just Looking Around

**Andrej Karpathy's case for dumping one long ramble on the AI**
<https://x.com/karpathy/status/2079610838143623371>
He describes a way of working with an LLM that he finds genuinely useful: lean back in your chair, switch to voice input, and ramble for ten minutes or so, messy, jumping wherever your head goes. He sometimes opens with a note like "I'm on speech recognition, please excuse the typos." For whatever reason LLMs are very good at pulling the content back out of a long, messy ramble, and the version they hand back to you is often much clearer than the one you just said out loud, so the rest of the conversation goes smoother and there's less to correct.
<img src="https://cdn.tw93.fun/uPic/mtf8tr09.png" width="800" />

**Dan Shipper's take on Claude Opus 5, which I mostly agree with**
<https://x.com/danshipper/status/2080700057892815114>
They spent a week testing Opus 5 across coding, writing, knowledge work, and their own agents, and their first reaction was that it's a hard model to like: it butts heads with your instructions, stops before the work is done, and doesn't play well with the skills and plugins they already had. Then they deleted those skills and rebuilt from scratch, and Opus 5 got a lot better, with some genuinely impressive moments. A few of his conclusions:

- It's like a "poor man's Fable," with all of Fable's personality quirks and none of its genius.
- It breaks backward compatibility, so be careful dropping it into the skills and workflows you already have. It often knocks off early, or just ignores what you asked for.
- Building from zero works better. This is a model you need to spend time rebuilding your workflows around, and it's worth it if you do.
- Medium or low thinking actually works better. The more thinking time you give it, the more likely those annoying habits show up. Don't switch to Sonnet the moment it feels slow, try low thinking first.

His workflow only has two slots: the hardest work goes to a genius model, currently Fable, and everything else goes to a smart, fast general model, currently GPT-5.6. Opus 5 has the temperament of a genius model without the ceiling, so it's stuck in an awkward middle spot.

**5 Trends That Defined AI Engineering at World's Fair 2026**
<https://www.latent.space/p/aiewf26trends>
This piece ties harnesses, loops, skills, enterprise deployment, and coding agents into one coherent roadmap. Worth a read.
<img src="https://cdn.tw93.fun/uPic/hnWSbK53.png" width="800" />

**A random window somewhere in the world, opened for you**
<https://www.window-swap.com/Window>
This site is fun. People around the world share the view outside their window, and you can switch randomly and just look around. I had it up as my wallpaper all afternoon, and it looked great.
<img src="https://cdn.tw93.fun/uPic/kHHhdE31.png" width="800" />
