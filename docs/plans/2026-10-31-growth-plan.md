# dlss5.net 增长方案：可行性评估与执行拆分

- 日期：2026-10-31
- 作者：Claude（方案与验收），执行：Codex
- 状态：待站长确认后分批执行
- 输入：一份外部 AI 生成的优化建议（见附录 A），以及本仓库代码、2026-09-26 至 2026-10-23 的 Google Search Console（GSC）数据、截至 2026-10-31 的公开资料

---

## 0. 一页结论

外部建议的方向感是对的（DLSS 5 的搜索需求正从"科普"转向"实操"），但它**没有看过真实网站和数据**，有几处前提是错的，而且有三条建议会直接重蹈本站 AdSense "低价值内容"被拒的覆辙。

| # | 外部建议 | 结论 | 一句话理由 |
|---|---|---|---|
| 1 | 数据拆成"官方支持 / 社区强开"双轨 | ✅ **可行，需改造** | 社区 Mod 生态真实存在且有搜索需求，但只能做**信息与风险说明**，不能做下载与安装教程 |
| 2 | 结果页加性能损耗与显存参考 | ✅ **可行**（部分已做） | 已有评测汇总表和档位建议；改成结构化数据，逐卡展示 |
| 3 | 显卡型号 / 游戏名程序化批量建页 | ❌ **不建议** | 本站 2026-10-18 刚删掉 10 个模板化 `/gpu/*` 页才通过审核 |
| 4 | 开启前后画质滑动对比 | ⚠️ **有条件可行** | 组件好做；图片必须是站长自己截的或有授权，不能用 NVIDIA/媒体的图 |
| 5 | 批量复制西/俄/德/日/中多语言 | ⚠️ **改为单语种试点** | 批量翻译是"规模化低质内容"；先做 1 种语言 1–3 页，验证后再扩 |
| 6 | 老显卡强开 / Swapper 实战中心 | ⚠️ **合并进 #1，只做说明页** | 涉及未授权的 NVIDIA 代码、恶意软件、反作弊封号三重风险 |
| 7 | 在线"DLSS 5 风格"图片/视频增强工具 | ❌ **不建议** | 需要 NVIDIA 模型权重（泄露或未授权），法律、成本、误导三重问题 |
| 8 | 模拟器"次世代重制"专区 | ❌ **不建议** | GSC 中相关词展示量为 0，且完全依赖非官方 Mod |
| 9 | DLSS 全版本对比与升级计算器 | ✅ **可行，改为功能对比器** | 不做帧率预测（本站原则），做"从 A 卡换到 B 卡多了哪些功能" |

**执行顺序**：WP1（社区 Mod 说明页）→ WP2（性能数据结构化）→ WP3（显卡对比器）→ WP4（画质对比组件，等素材）→ WP5（单语种试点）。每个工作包一个分支、一个 PR，由我验收后站长合并。

---

## 1. 外部建议的前提核对

| 外部建议的说法 | 实际情况 | 影响 |
|---|---|---|
| 网站基于 Next.js 14 | **Next.js 16.1.7**，静态导出（`output: "export"`），部署在 Cloudflare Pages | 不能用服务端 API 路由、ISR；所有新功能必须是静态页面或纯前端 |
| 内容停留在"DLSS 5 尚未发布"的预测阶段 | 2026-10-18 已全站更新到十月模型、霍格沃茨之遗排期、617.42 驱动等 | 不需要"推倒重写"，只需增量补充 |
| 应补充性能损耗指标 | `/dlss-5-system-requirements#benchmarks` 已有 5 行独立评测汇总表；检查结果里已有按档位的"起始设置建议" | WP2 是"结构化 + 逐卡化"，不是从零开始 |
| 葡语版已验证非英语需求 | 属实：巴西是第 2 大流量国（1,559 次点击）。但德语页曾以低质量 noindex 状态存在，2026-10-18 已删除并 301 | 多语言要"少而精"，不能重复德语页的错误 |
| 程序化内页"直接承接长尾" | `/gpu/*` 10 个模板页互相重复 66–79%，删除后才通过 AdSense；2026-10-25 已在 `/dlss-5-supported-cards#popular-cards` 用 7 组人工撰写的快速回答承接型号词 | 再建模板页 = 回到审核失败前的状态 |

---

## 2. 数据依据（GSC，近 28 天）

GSC 导出只包含前 1,000 个查询词，覆盖 885k 总展示中的 355k。**没有出现的词不等于没有需求**，但出现的词能证明需求存在。

| 主题 | 展示 | 点击 | 平均排名 | 判断 |
|---|---:|---:|---:|---|
| 型号词（"dlss 5 rtx 3060"等，251 个词） | 30,650 | 1,106 | 约 5–6 | 需求最大；已有快速回答，可继续加深 |
| 游戏列表词（128 个词） | 24,291 | 1,524 | 约 3–4 | 已排名靠前，保持更新即可 |
| 社区工具：`dlss5 manager` | 959 | 9 | 9.0 | **我们没有对应内容**，靠首页勉强排第 9 |
| 社区工具：`dlss5 mod` / `dlss 5 amd mod` | 461 | 8 | 9–10 | 同上 |
| 社区工具：`dlss 5 dll download` / `dlss5 dll` | 342 | 9 | 7–8 | 同上（注意：`dlls5` 是 `dlss5` 的拼写错误，不是 DLL 需求） |
| 系统要求词 | 3,343 | 206 | 1.2–1.5 | 已排第一，WP2 加深后可守住 |
| 模拟器（pcsx2/rpcs3/ryujinx/dolphin/shadps4） | **0** | 0 | – | 无数据支撑 |
| "turn off / blurry faces / fix" 类 | **0** | 0 | – | 无数据支撑 |
| "calculator / upgrade / worth" 类 | **0** | 0 | – | 无数据支撑（WP3 的价值在于提升停留时间，不在于抢词） |
| 图片/视频增强（"dlss 5 online"） | 约 300 | 20 | 4–8 | 含义不明，可能指 GeForce NOW；不足以支撑做工具 |

**社区 Mod 生态的公开资料（2026-10-31 核实）**：
- DLSS 5 Swapper（GitHub `rakanki911/DLSS5-Swapper`）：Windows 工具，可把 DLSS 5 Neural Rendering 装进原生 DLSS 游戏，或经 DLSS5-Feeder + ReShade 装进非 DLSS 游戏；在 RTX 20–40 上依赖**社区修改过、无 NVIDIA 签名**的 `nvngx_dlssnr.dll`。TweakTown 已报道。
- OptiScaler 的若干社区分支（如 `Dagherbou/OptiScaler_DLSSNR`）：把 Neural Rendering 作为额外通道运行；老架构同样需要修改版 DLL；PCGH 报道了"先做 NR 再超分"带来最高 90% 帧率提升的实验构建。
- DLSS 5 Manager、DLSS 5 Autopilot、桌面全局应用等工具，PC Gamer、TechRadar、TheFPSReview 均有报道。
- OpenDLSS-NR：社区对 DLSS 5 网络的重新实现，含 WebGPU 浏览器移植；**本身不带权重**，浏览器演示据报道使用了从泄露库中提取的权重；处理一张图需要数十毫秒到数秒，仍是概念验证。
- 风险共识（多个来源）：泄露 / 修改的 NVIDIA 文件**没有分发授权**；注入式 Mod 会被 VAC、Easy Anti-Cheat、BattlEye 识别为篡改，封号可能延迟、分批执行；已出现夹带恶意软件的下载。
- 竞争：已有 `dlss5-swapper.com`、`dlssmod.com` 等专门做 Mod 词的站点。

---

## 3. 全局约束（Codex 必须遵守）

以下规则来自本站历史教训和站长明确要求，**任何工作包都不得违反**。违反任一条，PR 直接退回。

### 3.1 SEO 与内容
1. **不得修改任何现有页面的 `<title>`、meta description、H1**。站长曾因改 TDK 流量骤降，这是硬性要求。新建页面的 TDK 由 Claude 在本方案中给定，不得自行改写。
2. **不得新增模板化 / 程序化页面**。新页面必须同时满足：(a) GSC 或公开资料证明有独立搜索需求；(b) 有至少 800 字现有页面没有的独特内容；(c) 由本方案或 Claude 明确批准。
3. **每个事实陈述都要有来源**：页面内链接到一手来源（NVIDIA、游戏官方、项目官方仓库）或可信媒体，并写明核实日期。不确定的信息写"未证实"，不得猜测。
4. **本站不做帧率预测**。可以引用第三方测得的数据（注明来源、分辨率、设置、模型版本），不得自行估算某张卡的 FPS。
5. 不得删除现有页面，不得改动 `public/_redirects` 中已有的跳转。
6. 结构化数据（FAQPage 等）必须和页面可见文字完全一致（现有测试会检查）。

### 3.2 社区 Mod 相关（WP1 尤其注意）
7. **不得托管、链接或嵌入**任何 NVIDIA 二进制文件（`nvngx_*.dll` 等）、泄露 / 修改版 DLL、模型权重的**下载地址**，包括 GitHub Releases、Hugging Face、网盘。
8. **不得写分步安装 / 注入教程**。可以说明工具"是什么、怎么工作、有什么风险"，链接到**新闻报道**，不链接到下载页。
9. 必须写明：非 NVIDIA 官方、可能违反游戏或 NVIDIA 条款、反作弊封号风险、恶意软件风险、只建议单机离线游戏。
10. 不得暗示本站测试过或推荐任何 Mod。

### 3.3 广告与隐私
11. 不得修改 AdSense 脚本、`ads.txt`、广告相关代码；不得添加任何引导点击广告的文字。
12. 不得新增第三方脚本（包括统计、嵌入、字体 CDN）。如确需，先在 PR 中说明并更新 `/privacy`。
13. 图片只能使用站长提供或本仓库生成的素材；必须有 `width`/`height`（避免 CLS）、`alt`，优先 WebP。

### 3.4 工程流程
14. **一个工作包 = 一个分支 = 一个 PR**。分支名 `codex/<工作包编号>-<简短描述>`，从最新 `main` 拉出。**不得修改 `claude/adsense-content-quality-qwrrmk`（霍格沃茨之遗草稿，PR #8）和 `claude/homepage-headings`（PR #10）**。
15. 提交前必须全部通过：
    ```bash
    npm run lint
    npx tsc --noEmit
    npm run test:gpu
    npm run test:seo     # 会先构建静态站
    ```
16. 每个 PR 必须新增或更新测试，覆盖本工作包的验收标准（测试文件：`tests/seo-regression.mjs`、`tests/gpu-search-regression.mjs`）。
17. 涉及界面的 PR，需附 390px（手机）与 1280px（桌面）截图，并确认无横向滚动。
18. 只开 PR，**不得自行合并**。PR 描述需列出：改了什么、为什么、测试结果、截图、对 TDK 的影响（应为"无"）。
19. `package-lock.json` 的 `resolved` 指向 `registry.npmmirror.com`。如安装依赖失败，可临时替换为 `registry.npmjs.org` 安装，但**不得提交** lock 文件的改动。

---

## 4. 工作包

### WP1：社区 Mod 说明页 + 检查结果中的"官方 / 非官方"区分 【P0】

**目标**：承接 `dlss5 mod`、`dlss5 manager`、`dlss 5 dll download` 等目前没有对应页面的需求；让 RTX 20/30/40 和 AMD 用户在检查结果里知道"官方不支持，但存在非官方路线及其风险"。这正是外部建议"双轨结论"中可取的部分。

**为什么不做逐卡的"社区支持"字段**：Mod 是否能在某张卡上运行取决于工具版本、DLL 版本、游戏、驱动，且没有可靠的测试来源。给每张卡标"社区支持：是"会变成无法核实的承诺。所以只在**代际层面**做说明。

#### 1-A 新页面 `/dlss-5-mods`
- 文件：`app/(en)/dlss-5-mods/page.tsx`（参照 `app/(en)/dlss-5-amd/page.tsx` 的结构与样式）
- TDK（固定，不得改写）：
  - title：`DLSS 5 Mods on RTX 40, RTX 30 and AMD: What Works and the Risks`
  - description：`Unofficial tools like DLSS 5 Swapper and OptiScaler forks run Neural Rendering outside RTX 50. What they do, what NVIDIA supports, and the ban and malware risks.`
  - H1：`DLSS 5 mods: what they are and what they risk`
- 必须包含的章节（H2），每章下用 H3 细分：
  1. **快速回答**：NVIDIA 官方只支持 RTX 50 / RTX Spark / GeForce NOW；社区工具声称可在 RTX 20–40 和部分 AMD 上运行，但不是官方支持。
  2. **官方与非官方对比表**：列为"支持的 GPU / 来源 / 是否签名 / 游戏覆盖 / 风险"。
  3. **常见工具是什么**：DLSS 5 Swapper（含 DLSS5-Feeder、ReShade 路线）、OptiScaler 社区分支、DLSS 5 Manager、桌面全局应用、OpenDLSS-NR。每个只写"做什么、工作原理一句话、依赖什么（如修改版 DLL）"，**链接到新闻报道**（TweakTown、PC Gamer、PCGH、TechRadar、TheFPSReview），不链接到仓库下载页。
  4. **风险**（本页重点，篇幅不少于全文 30%）：未授权的 NVIDIA 代码、修改版 DLL 无签名、恶意软件案例、反作弊（VAC、EAC、BattlEye）与延迟封号、稳定性、驱动更新后失效。
  5. **如果你还是想试**：只给原则，不给步骤（只在单机离线游戏、先备份、只用项目官方来源、开杀毒、联网游戏绝不使用）。
  6. **官方替代方案**：RTX 40 等待官方（链接 `/dlss-5-rtx-40-series`）、GeForce NOW（链接 `/dlss-5-amd`）、现有 DLSS 4.5 功能（链接 `/dlss-4-5-supported-cards`）。
  7. **FAQ**（4–6 条，FAQPage 结构化数据与可见文字一致）。
  8. `ArticleTrustBlock`，`reviewedAt` 为发布日。
- 字数：1,500–2,200 词。
- 必须设置 `openGraph.images: [OG_IMAGE_EN]`（见 `lib/og-image.ts`）、canonical、`twitter`，参照现有页面。
- 加入 `app/sitemap.ts`（priority 0.8，weekly）、`public/llms.txt`（"Core Pages"下一行）、`/guides` 的 "Set up DLSS 5" 组。

#### 1-B 现有页面加入口（只在正文中加，不改 TDK）
- `components/GpuNextSteps.tsx`：`planned`、`unsupported` 状态和 AMD/Intel 的"Read next"中，替换一项为 `{ href: "/dlss-5-mods", title: "Unofficial DLSS 5 mods and their risks", copy: "What community tools do on cards NVIDIA does not support." }`。替换哪一项在 PR 中说明理由。
- `app/(en)/dlss-5-rtx-40-series/page.tsx`：在"What the October update means for RTX 40"一节末尾加一句并链接。
- `app/(en)/dlss-5-supported-cards/page.tsx`：`popularCards` 中 RTX 30、RTX 40 相关条目末尾各加一句短说明并链接（保持条目简短）。
- `app/(en)/dlss-5-amd/page.tsx`：在 "What the AMD mod demonstrations establish" 一节加链接。

#### 1-C 验收标准
- [ ] 页面内**没有**任何指向 `github.com/*/releases`、`huggingface.co`、`*.dll`、网盘的链接（加测试：在 `out/dlss-5-mods.html` 中正则断言）。
- [ ] 每个工具至少有 1 个新闻来源链接；"风险"章节字数占比 ≥ 30%。
- [ ] 现有页面的 title / description / H1 未变（按第 6 节的 TDK 对比方法证明）。
- [ ] sitemap、llms.txt、guides 已更新；`test:seo` 中新路由的 canonical、og:image、FAQ 检查通过。
- [ ] 结果页对 RTX 4070、RTX 3060、RX 7900 XTX 三种查询都能看到 Mod 页入口（截图）。

**风险**：AdSense 对"规避技术保护措施"的内容敏感。本方案已把内容限定为新闻性说明与风险提示，不提供下载和教程。**上线前需站长确认是否接受该风险**。若站长不接受，WP1 只做 1-B 中的一句话说明，不建新页。

**工作量**：约 1 天。

---

### WP2：性能数据结构化与逐卡展示 【P0】

**目标**：把散落在页面里的评测数字集中到一个数据文件，检查结果对**有独立测试数据的显卡**显示实测数据（带来源），其他显卡继续显示档位建议。以后新增评测（如十月模型复测、霍格沃茨之遗评测）只需改数据文件。

#### 2-A 新数据文件 `data/benchmarks.json`
```jsonc
{
  "benchmarks": [
    {
      "id": "gamegpu-nba2k27-5090-4k",          // 唯一，kebab-case
      "gpuIds": ["rtx-5090"],                   // 必须是 data/gpu-data.json 中存在的 id
      "game": "NBA 2K27",
      "model": "september-2026",                // september-2026 | october-2026
      "resolution": "4K",
      "settings": "Max settings, ray tracing on, no frame generation",
      "result": "192 FPS without Neural Rendering, 76 FPS with it (about 60% lower)",
      "fpsOff": 192,                            // 可选；只在来源给出确切数字时填写
      "fpsOn": 76,                              // 可选
      "source": "GameGPU",
      "url": "https://en.gamegpu.com/...",
      "checked": "2026-10-25"                   // 核实日期 YYYY-MM-DD
    }
  ]
}
```
- 首批数据**只迁移** `app/(en)/dlss-5-system-requirements/page.tsx` 中 `benchmarkRows` 已有的 5 行，**不得新增数据**。新增数据由 Claude 核实后提供。
- 新建 `lib/benchmarks.ts`：类型定义 + `getBenchmarksForGpu(id)` + `ALL_BENCHMARKS`。

#### 2-B 改造
- `/dlss-5-system-requirements`：表格改为读取 `ALL_BENCHMARKS`，**页面可见内容逐字不变**（构建后 HTML 文本对比证明）。
- `components/GpuNextSteps.tsx`：若 `getBenchmarksForGpu(gpu.id)` 非空，在"A realistic starting point"上方新增小节 "Published tests for this card"，列出该卡的测试（结果、条件、来源链接、模型版本）；为空时行为不变。

#### 2-C 测试
- 新增 `tests/benchmarks-regression.mjs`（并加入 `package.json` 的 `test:gpu` 或单独脚本），校验：每条都有 `url`（https）、`source`、合法 `checked` 日期；`gpuIds` 都存在于 `gpu-data.json`；`model` 是枚举值；`id` 唯一。
- 在 `tests/gpu-search-regression.mjs` 中断言：RTX 5090 的结果渲染含 "Published tests for this card" 与 GameGPU 链接；RTX 4070 的结果不含。

#### 2-D 验收标准
- [ ] `/dlss-5-system-requirements` 构建后的正文文本与改造前一致。
- [ ] RTX 5090、RTX 5080、RTX 5070 的检查结果显示对应评测；其他卡不显示该小节。
- [ ] 无 TDK 变化。

**工作量**：约 0.5 天。

---

### WP3：显卡对比器"换卡能多什么" 【P1】

**目标**：外部建议的"升级计算器"去掉帧率预测后的可行版本。用户选"当前显卡"和"目标显卡"，看 DLSS 功能、DLSS 5 状态、显存的差异。数据全部来自 `data/gpu-data.json`，结果确定、可核实。主要价值是提升停留时间和页面深度（GSC 中无对应搜索词，不以抢词为目标）。

- 位置：新组件 `components/GpuCompare.tsx`（`"use client"`），放在 `app/(en)/dlss-supported-cards/page.tsx` 正文中，**位于 FAQ 之前**，作为新的 H2 小节 "Compare two GPUs"。**不新建页面**。
- 交互：两个下拉或复用 `GPUSearch` 的搜索框；选定后显示三列对比表：功能 | 当前卡 | 目标卡，高亮"新增"的功能。
- 文案原则：只陈述功能差异；底部固定说明 "Feature support only. This does not predict frame rates; see published tests on the system requirements page."（链接 `#benchmarks`）。
- URL 同步：`?from=rtx-3060&to=rtx-5070`，复用 `components/GPUChecker.tsx` 中 `useSyncExternalStore` 读取 URL 的写法（本仓库 ESLint 禁止在 effect 中 setState，见该文件）。
- Plausible 事件：`Compare GPUs`，props `{ from, to }`。
- 测试：在 `tests/gpu-search-regression.mjs` 中加对比逻辑的单元测试（抽成 `lib/gpu-compare.ts` 纯函数，比如 `compareGpus(a, b)` 返回新增 / 失去 / 相同的功能）。
- 验收：RTX 3060 → RTX 5070 显示新增 Frame Generation、MFG、Dynamic MFG、Neural Rendering；RTX 4090 → RTX 5060 显示失去的显存与新增的 MFG；无横向滚动；`/dlss-supported-cards` 的 TDK 与 1,500 词测试仍通过。

**工作量**：约 1 天。

---

### WP4：画质对比滑块组件 【P1，等素材】

**目标**：在有合法素材时，用"开 / 关 Neural Rendering"的滑动对比提升停留时间与分享。

- **前置条件（缺一不可）**：站长提供自己截的同场景、同设置的开 / 关截图，或书面确认素材授权。**没有素材时不开始本工作包**。
- 组件 `components/ComparisonSlider.tsx`：
  - 纯 CSS / React 实现，**不引入新依赖**；
  - 支持鼠标拖动、触摸、键盘（左右方向键，`role="slider"`，`aria-valuenow`）；
  - 两张图都有 `width`/`height`、`alt`，第一屏以外 `loading="lazy"`；
  - 图片放 `public/images/comparisons/<game>/<scene>-{off,on}.webp`，单张 ≤ 200 KB，宽 1600px。
- 首个使用位置：NBA 2K27 指南 "Compare Neural Rendering on vs off in the same scene" 一节（`components/Dlss5GameGuide.tsx` 的 `extraSections` 需扩展为支持可选图片，接口改动在 PR 中说明）。
- 每组对比下方注明：截图者、日期、显卡、分辨率、设置、驱动、游戏版本。
- 验收：键盘可操作；Lighthouse 中该页 CLS 不上升；图片总量 ≤ 600 KB。

**工作量**：组件 0.5 天，每组素材接入 0.5 小时。

---

### WP5：单语种试点 【P2，需站长选择语言】

**目标**：验证非英语市场，而不是批量复制。

- **语言选择**（站长决定，默认建议德语）：
  | 选项 | 依据 | 风险 |
  |---|---|---|
  | **德语（建议）** | 德国是第 4 大流量国（35k 展示、921 点击）；"dlss 5 welche grafikkarte"等词约 750 展示，排名 6–7，无德语页面承接；欧洲广告单价较高 | 曾有低质量德语页被删除，这次必须是高质量页面 |
  | 韩语 | "dlss5 지원 그래픽카드"等约 1,600 展示，排名 2–6，但点击率仅 0.9%（Google 在展示翻译版的英文页） | 需要韩语母语审校 |
- **范围**：只做 1 个页面——对应 `/dlss-5-supported-cards` 的本地化版本（德语路径 `/de/dlss-5-grafikkarten`，需先移除 `public/_redirects` 中的同名 301，**这是唯一允许改动的跳转，需在 PR 中写明**）。
- **质量要求**：按当地搜索习惯撰写，不逐句机翻；必须由母语者审校（站长安排）后才能合并；参照葡语页的实现方式（`app/pt/layout.tsx`、`app/pt/dlss-5-quais-placas/page.tsx`），新增 `app/de/layout.tsx`、德语 og 图（用 `lib/og-image.ts` 的方式新增 `OG_IMAGE_DE`）、hreflang 双向互指。
- **成功标准（上线 4–6 周后看）**：该页在 GSC 中德语查询的点击率 ≥ 3%、平均排名进入前 5。达标后再考虑第 2 个德语页面或第 2 种语言。
- 测试：`test:seo` 中加入新路由的语言（`lang="de"`）、hreflang、canonical 检查；同时更新已有的"已删除路由"测试（`removedRoutes` 中移除德语路由）。

**工作量**：开发 0.5 天 + 母语审校时间。

---

## 5. 明确不做的事项（及理由）

| 建议 | 不做的理由 | 以后在什么条件下重新评估 |
|---|---|---|
| 显卡型号 / 游戏名程序化批量建页 | 本站因模板页被判低价值；`/gpu/*` 删除后才通过审核 | 某个型号的 GSC 展示 ≥ 3,000/月，且能写出 800 字以上独有内容时，单独评估 |
| 未上线游戏的 DLSS 5 页面 | 2026-10-18 删除的星空、刺客信条、生化危机页就是这类"还没上线"的内容 | 补丁上线当天再建（霍格沃茨之遗按此流程，见 PR #8） |
| 批量多语言 | 规模化低质内容风险 | WP5 试点达标后 |
| 在线 DLSS 5 风格图片 / 视频增强工具 | 需要 NVIDIA 模型权重（泄露或未授权）；浏览器端每张图要数秒；GPU 推理成本高；用 "DLSS" 名义提供非 NVIDIA 产品有商标与误导问题 | 出现开放许可的同类模型，且有明确法律意见时 |
| 模拟器专区 | GSC 展示为 0；完全依赖非官方 Mod；偏离网站主题 | 相关词在 GSC 中出现且展示 ≥ 1,000/月 |
| Swapper 等工具的下载与安装教程 | 分发未授权的 NVIDIA 代码；恶意软件；封号；AdSense 政策风险 | 不重新评估 |
| "turn off DLSS 5 / blurry faces fix" 专页 | 无数据；相关问答已在游戏指南 FAQ 与排障中覆盖 | 并入各游戏指南的排障章节即可 |

---

## 6. 验收流程（Claude 负责）

每个 PR 我会检查：
1. **TDK 对比**：分别构建 `main` 和 PR 分支，逐页比较 title / description / H1 / canonical（2026-10-25 已用此方法验证 PR #7），只允许出现本方案批准的新页面。
2. **内容核实**：抽查每个新增事实的来源链接；WP1 逐条检查下载链接禁令。
3. **测试与截图**：本地复跑全部测试；查看手机和桌面截图。
4. **范围检查**：diff 中不得出现与该工作包无关的改动。

验收通过后，我在 PR 中留言说明结论，由站长合并。

---

## 7. 时间线建议

| 时间 | 事项 | 负责 |
|---|---|---|
| 11-01 至 11-03 | WP1（需站长先确认风险取舍）、WP2 | Codex 开发，Claude 验收 |
| 11-05 | 霍格沃茨之遗补丁上线：完成 PR #8；同时向 `data/benchmarks.json` 补充首批评测 | Claude |
| 11-06 至 11-10 | WP3 | Codex |
| 素材到位后 | WP4 | Codex |
| 站长选定语言后 | WP5 | Codex + 母语审校 |
| 12 月初 | 用新的 GSC 数据复盘 WP1、WP5 效果，决定下一轮 | Claude |

---

## 8. 给 Codex 的任务指令模板

每次只派发一个工作包。复制下面的模板，替换 `<WP 编号>`：

```text
你在仓库 liuyan-wjy/dlss5-checker 工作。先完整阅读 docs/plans/2026-10-31-growth-plan.md，
重点是第 3 节"全局约束"和第 4 节中的 <WP 编号>。

任务：只实现 <WP 编号>，不做任何其他工作包或"顺手优化"。

要求：
1. 从最新 main 新建分支 codex/<WP 编号小写>-<简短描述>。
2. 严格按该工作包的文件路径、TDK、章节、数据格式和验收标准实现。
   方案中给定的文字（title、description、H1）一字不改。
3. 不得修改任何现有页面的 title、meta description、H1。
4. 运行 npm run lint、npx tsc --noEmit、npm run test:gpu、npm run test:seo，全部通过。
   新增或更新测试，覆盖该工作包的每条验收标准。
5. 界面改动附 390px 与 1280px 截图。
6. 推送分支并创建 PR（不要合并）。PR 描述包括：改动清单、与验收标准逐条对应的检查结果、
   测试输出、截图、"TDK 影响：无"（或列出方案批准的新页面）。
7. 遇到方案没有覆盖或与代码现状冲突的情况，停下来在 PR 描述中写明问题和你的建议，
   不要自行扩大范围。
```

---

## 附录 A：外部建议原文要点

1. 数据维度升级："官方原生支持（RTX 50）"与"社区工具强开（RTX 20/30/40 及部分 AMD）"双轨结论
2. 补充性能损耗指标：显存门槛与各分辨率帧率损耗
3. 程序化内页裂变：显卡型号、游戏名称拆成独立静态页
4. 视觉交互对比：开启前后的滑动对比图
5. 批量复制多语言：西、俄、德、日、中
6. 精品内页：老显卡强开 / Swapper 实战中心、在线图片视频增强工具、单游戏画质对比与预设库、模拟器专区、DLSS 全版本对比与升级计算器
7. 关键词场景：显卡兼容、社区工具、游戏与模拟器、画质争议调校、图像视频增强

## 附录 B：参考资料（2026-10-31 核实）

- TweakTown：DLSS 5 Swapper 可将 DLSS 5 装进不支持 DLSS 的游戏 — https://www.tweaktown.com/news/113398/new-dlss-5-swapper-tool-can-mod-dlss-5-into-games-that-dont-support-dlss-at-all/index.html
- PC Gamer：可将 DLSS 5 应用于整个桌面的免费应用，支持 RTX 30 — https://www.pcgamer.com/hardware/you-can-now-apply-dlss-5-to-your-entire-desktop-with-a-free-app-and-it-even-works-with-rtx-30-series-cards/
- PCGH：OptiScaler DLSSNR 实验构建最高提升 90% 帧率 — https://www.pcgameshardware.de/Deep-Learning-Super-Sampling-Software-277618/News/Optiscaler-DLSSNR-PreSR-increases-Performance-up-to-90-Percent-1553386/
- TechRadar：Steam 上的 DLSS 5 工具 — https://techradar.com/computing/gpu/want-to-try-fudging-nvidia-dlss-5-on-games-but-dont-know-how-this-steam-tool-does-the-hard-work-for-you
- TheFPSReview：DLSS 5 Autopilot — https://www.thefpsreview.com/2026/09/14/dlss-5-autopilot-allows-users-to-configure-nvidias-neural-rendering-solution-and-lower-performance-hits-and-power-draw/
- TweakTown：在浏览器中运行 DLSS 5 — https://www.tweaktown.com/news/113613/a-modder-got-dlss-5-running-inside-a-web-browser/index.html
- Digital Citizen：浏览器演示据报道使用泄露库中的权重 — https://www.digitalcitizen.life/modder-gets-dlss-5-running-in-a-web-browser-through-webgpu/
- HeldGames：DLSS 5 Mod 的风险 — https://heldgames.com/guides/dlss-5-mod-risks
- 以下 GitHub 项目**仅供方案核实**，不得出现在网站页面中：`rakanki911/DLSS5-Swapper`、`Dagherbou/OptiScaler_DLSSNR`、`maanHimself/OpenDLSS-NR`

以上来源多为社区项目和媒体报道，版本号与兼容性变化很快。WP1 开发时，Codex 需在 PR 中列出页面引用的每个链接，由 Claude 再次核实。
