# dlss5.net 关键词细分、长尾与内页扩展方案（2026-11-18）

- 数据：GSC 2026-10-18 至 11-16（28 天），Bing Webmaster 周报（10-09 至 11-13），Google Ads 关键词规划（美国、英语，2025-11 至 2026-10 月度搜索量）
- 遵守 2026-10-31 增长方案的全局约束：不改现有页面 TDK/H1；不做程序化批量页；每个事实有来源；不做帧率预测；Mod 只做说明不做教程

---

## 0. 结论

1. **流量在下滑**：GSC 日点击从 9 月初约 4,500 降到 11 月中约 480，展示从 15 万/天降到约 1.9 万/天。主因是发布热度消退（Ads 数据中 "dlss 5 release date" 9 月 27,100 → 10 月 12,100），排名本身稳定（均排 5 左右）。接下来要靠**"发布后"的实用需求**（怎么开、为什么没有、我的设备能不能用）和**新游戏上线**拿流量。
2. 本次已做 **2 个新内页 + 4 个旧页加厚**，见第 3 节。
3. 需要站长决定的事项（会动 TDK，按规定不擅自改）见第 4 节。

---

## 1. 关键词细分场景（按用户意图）

| 场景 | 代表词 | 需求量依据 | 现状 | 处理 |
|---|---|---|---|---|
| A. 我的显卡能不能用（型号词） | dlss 5 rtx 3060 / 4070 / 5060、dlss5 3090 | GSC：RTX 30 相关约 6,900 展示/月，RTX 40 约 10,000，RTX 50 约 1,400；Bing 长尾大量型号词 | RTX 30 词**全部落在首页**，没有专页；RTX 40 有专页但排 7–8 | **新建 `/dlss-5-rtx-30-series`**（含 RTX 20/GTX/笔记本） |
| B. 主机 / 手机 / Mac 能不能用 | dlss 5 ps5、switch 2、mac、steam deck、android、apk、mobile | Ads：ps5 **2,900/月**（9 月 4,400），steam deck 140，mac 110，geforce now 260，android/apk 各 30 | 几乎无覆盖，GSC 只有少量 apk/android 点击落在下载页 | **新建 `/dlss-5-ps5`** |
| C. 怎么开启 / 下载 | how to turn on dlss 5、how to enable dlss 5、dlss 5 download、dlss5 install、not showing、greyed out | Ads：turn on 4,400 + enable 2,400 + download 5,400/月；GSC download 词排 6–9 | 下载页 H1 已是 "How to download and enable DLSS 5"，但内容只讲 NBA 2K27，过时 | **加厚 `/dlss-5-download`**（不新建页，避免和 H1 相同意图的页面互相抢词） |
| D. AMD 用户 | dlss 5 amd、dlss5 on amd、amd download、dlss 5 vs fsr 4 | Ads：amd 880 + on amd 880 + vs fsr 4 90/月；GSC 约 4,200 展示，排 6.7，CTR 约 2% | 页面是全站最薄的之一（约 900 词） | **加厚 `/dlss-5-amd`** |
| E. 发布日期 | dlss 5 release date、xxx dlss 5 release date、release date for all games | GSC：发布日期页 8,495 展示，排 7.7，**CTR 0.3%** | 页面只有时间线，没回答"每个游戏 / 每代显卡什么时候有" | **加厚 `/dlss-5-release-date`**（按游戏、按显卡两张表） |
| F. 社区工具 | dlss 5 swapper（12,100/月）、dlss 5 manager（5,400）、dlss5 mod | GSC：dlss5 manager 2,373 展示排 9.1，落在首页 | `/dlss-5-mods` 只拿到 "dlss5 mod" | 见第 4 节建议（不改 TDK 的前提下，可加 "What is DLSS 5 Swapper / Manager" 小节） |
| G. 画质对比 / 争议 | dlss 5 comparison（480）、before and after（210）、faces（110）、controversy（140） | 无对应页面 | — | 需要站长自己的截图，见第 5 节 |
| H. 单个游戏 | hogwarts legacy dlss 5（1,600）、starfield（390）、re requiem（210）、where winds meet（260）、war thunder（90） | 霍格沃茨页 "release date" 词 1,186 展示 CTR 0.6% | 霍格沃茨、NBA 有指南 | Where Winds Meet 11-23 上线当天建页；War Thunder 视需求建页 |

## 2. 用户真正关心的问题（已写进页面）

- RTX 3060/3070/3080/3090 为什么不支持？以后会支持吗？显存大有没有用？现在最好怎么设置？不升级怎么体验？要不要升级？笔记本、RTX 20、GTX 怎么办？
- PS5/PS5 Pro 有没有？PSSR 和 DLSS 5 什么关系？Switch 2 是 NVIDIA 芯片为什么不行？网上 "PS5 跑 DLSS 5" 的视频是怎么回事（结论：PC 移植或模拟器 + Mod，不是主机）？Mac/手机/Steam Deck 怎么玩？APK 能不能装？
- 每个游戏在哪个菜单开、快捷键是什么、要哪个驱动？选项没出现 / 灰色 / 笔记本灰色 / 开了掉帧 / 脸看着怪怎么办？
- AMD：DLSS 5 和 FSR 4/Redstone 到底比什么？我的 RX 9000/7000/6000 该开什么？"AMD 版 DLSS 5 下载"能不能信？
- 每个游戏、每代显卡分别什么时候有 DLSS 5？星空、生化危机 9 什么时候？

## 3. 本次改动

| 页面 | 类型 | 主要内容 | 图文 / 视频 |
|---|---|---|---|
| `/dlss-5-rtx-30-series` | 新页，约 2,250 词 | 结论卡片、NVIDIA 原文依据、逐型号卡片（数据来自 gpu-data.json）、RTX 30 现在最佳设置、不升级的体验方式、升级决策表、RTX 20/GTX/笔记本、6 条 FAQ | 自制"各代 RTX 可用功能"信息图；NVIDIA 官方视频 *DLSS 5 \| Introducing 3D-Guided Neural Rendering* |
| `/dlss-5-ps5` | 新页，约 1,500 词 | "DLSS 5 在哪里运行"示意图、8 类设备逐项说明、PS5/PSSR、爆款视频真相、Switch 2、GeForce NOW 五步、6 条 FAQ | 自制示意图；NVIDIA 官方视频 *DLSS 5 in NBA 2K27 \| Inside the Dev Studio* |
| `/dlss-5-download` | 加厚（TDK/H1 不变） | 四步流程图、4 个游戏的菜单路径 / 快捷键 / 驱动、按症状排障（6 条）、Android/APK/PS5/Mac 说明、5 条 FAQ + HowTo 结构化数据；驱动更新到 621.24 | 自制流程图；NVIDIA 官方 *Hogwarts Legacy \| DLSS 5 Launch Trailer* |
| `/dlss-5-amd` | 加厚（TDK/H1 不变） | DLSS 5 vs FSR 4/Redstone 对比（手机端卡片、桌面端表格）、按 Radeon 系列的建议、"AMD 下载"风险、5 条 FAQ | 对比表 |
| `/dlss-5-release-date` | 加厚（TDK/H1 不变） | "按游戏"发布日期表（带状态标签）、"按显卡"发布日期表、新增 FAQ（星空/生化危机 9） | — |
| 其他 | 内链与收录 | sitemap、`/guides`、`llms.txt`（含 AI 引用指引）、RTX 40 页、支持显卡页 RTX 30 快速回答、隐私政策（视频说明） | — |

**视频的实现**：新组件 `components/VideoEmbed.tsx`，点击才加载 YouTube（`youtube-nocookie.com`），打开页面时不请求 YouTube，不影响手机端加载速度和隐私。视频只用 NVIDIA GeForce 官方频道的视频（标题已通过 YouTube oEmbed 核实）。

**GEO（生成式引擎优化）做法**：每个新段落都是"先结论、再依据、再链接一手来源"；FAQ 问句直接用用户搜索的说法；结构化数据（FAQPage、BreadcrumbList、Article、HowTo）与可见文字一致；`llms.txt` 增加了新页面和"遇到什么问题优先引用哪一页"的指引。

**移动端**：所有新表格在 390px 下都不横向滚动（Playwright 实测 scrollWidth = clientWidth）；对比表在手机端改为卡片；排障用可折叠 `<details>`；视频用 16:9 占位，不会撑破布局。

**测试**：`npm run lint`、`tsc`、`test:gpu`、`test:seo` 全部通过；`tests/seo-regression.mjs` 新增了对上述页面的检查（字数、关键内容、锚点、FAQ 一致性、视频不预加载、旧页 TDK 不变）。

## 4. 需要站长决定的事项（涉及 TDK，本次未改）

| 页面 | 问题 | 建议 | 预期 |
|---|---|---|---|
| `/dlss-5-release-date` | 8,495 展示 / 29 点击，CTR 0.3% | 标题改为 "DLSS 5 Release Date: Out Now on RTX 50 — Dates by Game & GPU"，描述写明 NBA 2K27 / 霍格沃茨 / War Thunder / Where Winds Meet 日期 | 标题与"已发布 + 按游戏日期"意图对齐；排名 7.7 时 CTR 有翻倍空间 |
| `/dlss-5-amd` | 排 6.7，CTR 约 2% | 标题加入 "FSR 4"：如 "DLSS 5 on AMD: Not Supported — FSR 4 vs DLSS 5 & Cloud Option" | 同时覆盖 "dlss 5 vs fsr 4" |
| `/dlss-5-download` | "dlss 5 download" 排 9.2 | 描述写入 "no installer / no APK" 与 "how to turn on" | 抓"怎么开"意图 |
| `/dlss-5-mods` | "dlss 5 swapper/manager" 月搜 1.7 万，本站排 9 且落在首页 | 正文加 "What is DLSS 5 Swapper?" "What is DLSS 5 Manager?" 两节（只讲是什么、风险，不给下载和教程）；TDK 视情况加入 "Swapper" | 合规前提下拿说明类流量 |

**站长已于 2026-11-18 批准全部四项，已执行**（H1 均未改）：

| 页面 | 新标题 | GSC 基线（10-18 至 11-16，页面级） |
|---|---|---|
| `/dlss-5-release-date` | DLSS 5 Release Date: Out Now on RTX 50 — Dates by Game & GPU | 19,936 展示 / 123 点击 / CTR 0.62% / 排名 6.9 |
| `/dlss-5-amd` | DLSS 5 on AMD: Not Supported — FSR 4 vs DLSS 5 & Cloud Option | 7,352 / 152 / 2.07% / 6.3 |
| `/dlss-5-download` | 标题不变，只改描述 | 45,888 / 1,856 / 4.04% / 6.0 |
| `/dlss-5-mods` | DLSS 5 Swapper, Manager & Mods on RTX 40/30 and AMD: Risks；正文新增 "What is DLSS 5 Swapper?" "What is DLSS 5 Manager?" | 3,719 / 117 / 3.15% / 6.1 |

复盘：2026-12-02 前后对比同口径 28 天数据；若某页排名下跌超过 2 位且 CTR 未提升，回滚该页标题。

## 5. 后续可做的内页（按优先级）

1. **`/games/where-winds-meet-dlss-5`**：11-23 补丁上线当天建（遵守"上线后才建游戏页"的规则）。Ads 260/月，NVIDIA 官方视频已有（*Where Winds Meet \| NVIDIA DLSS 5 Reveal*）。
2. **`/games/war-thunder-dlss-5`**：已上线，但 Ads 只有 90/月。先观察 GSC 是否出现该词再建。
3. **DLSS 5 画质对比页（before/after）**：comparison 480 + before and after 210 + faces 110/月。需要站长**自己用 RTX 50 截图**（NVIDIA 和媒体图片不能用，见原方案 WP4），可用滑块组件。
4. **DLSS 5 笔记本页**：Ads "dlss 5 laptop" 110/月，竞争 HIGH（广告多），可先并入 RTX 30 页和支持显卡页的笔记本部分，暂不单独建。
5. 葡语：`/pt` 首页 "dlss5" 7,565 展示；可把本次 PS5 / RTX 30 页的结论翻译为葡语 FAQ 加到现有葡语页，不新建页面。

## 6. Bing 专项

- Bing 每周约 450 次点击，几乎全部落在首页；Bing 上 `/dlss-supported-cards`、霍格沃茨指南表现比 Google 好。
- Bing 的长尾更"口语化"（"can the 5070ti do dlss5"、"will dlss 5 be on 3080"、"dlss5 gtx"），这正是本次 RTX 30 页和 FAQ 写法覆盖的内容。
- 建议：上线后在 Bing Webmaster 用 URL 提交（或接入 IndexNow）提交两个新页和四个改动页，Bing 收录比 Google 慢。
- Bing 报告中仍有 `/games/starfield-dlss-5`、`/games/resident-evil-requiem-dlss-5` 的展示（已 301），无需处理，会自然消失。

## 7. 来源（本次新增内容使用）

- NVIDIA DLSS 5 发布文章（2026-09-01）：https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/
- NVIDIA 霍格沃茨 / War Thunder / Where Winds Meet 更新（2026-11-05）：https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/
- NVIDIA 621.24 WHQL 驱动（2026-11-11）：https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/
- GeForce NOW 系统要求：https://www.nvidia.com/en-us/geforce-now/system-reqs/
- NVIDIA Switch 2 博客：https://blogs.nvidia.com/blog/nintendo-switch-2/
- tbreak（PS5 Pro PSSR 升级）：https://tbreak.com/ps5-pro-pssr-upgrade-resident-evil-requiem/
- MakeUseOf（"PS5 上的 DLSS 5"实为 PC 移植 + OptiScaler，2026-11-03）：https://www.makeuseof.com/dlss-5-already-works-on-ps5-games-but-the-results-arent-very-impressive/
- Wccftech（Switch 2 游戏在 PC 模拟器上，RTX 5060 Ti，2026-11-02）：https://wccftech.com/nvidia-dlss-5-mario-kart-world-future-nintendo-switch-2-emulated/
- PC Gamer（桌面 DLSS 5 应用支持 RTX 30，2026-09-10）：https://www.pcgamer.com/hardware/you-can-now-apply-dlss-5-to-your-entire-desktop-with-a-free-app-and-it-even-works-with-rtx-30-series-cards/
- AMD FSR Redstone：https://gpuopen.com/learn/amd-fsr-redstone-developers-neural-rendering/

未能核实、因此**没有写进页面**的说法：NVIDIA 论坛 FAQ（页面靠脚本加载，无法读取）、"capture card 把 PS5 画面送进 PC 跑 DLSS 5"（来源 403）、Eurogamer 的 Switch 2 DLSS 分析（无法访问，改用 NVIDIA 官方博客）。
