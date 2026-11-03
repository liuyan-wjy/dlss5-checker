# WP5：实施前待补齐的固定 TDK

状态：站长已于 2026-11-02 批准以下 TDK。2026-11-03 Claude 复核通过，并按站长要求重写德语正文为地道、面向用户的表述后合并；站长决定不等待额外的母语审校，上线后以 GSC 数据观察效果。

## 方案缺项

`docs/plans/2026-10-31-growth-plan.md` 第 3.1 节第 1 条规定：

> 新建页面的 TDK 由 Claude 在本方案中给定，不得自行改写。

WP5 指定了德语单页 `/de/dlss-5-grafikkarten`，但没有给出其 title、meta description 和 H1。实施前曾因此暂停；站长批准以下文字后，继续原 WP5 范围。

## 站长已批准、提交 Claude 复核的固定文字

| 字段 | 固定文字 |
|---|---|
| title | DLSS 5: Welche Grafikkarten werden unterstützt? [2026] |
| meta description | Welche Grafikkarten unterstützen DLSS 5? RTX 50 und RTX Spark sind bestätigt, RTX 40 ist geplant. Status und Unterschiede zu DLSS 4.5 im Überblick. |
| H1 | Welche Grafikkarten unterstützen DLSS 5? |

站长答复：“允许采用上述候选，交 Claude 复核”。以上文字不得自行改写；继续使用同一 WP5 分支和 PR。

## 后续实现范围

仅实现原 WP5：德语单页及布局、德语 OG 图片与 `OG_IMAGE_DE`、英葡德对应页的互指 hreflang、sitemap、新页面测试，以及移除该德语路径唯一同名 301。现有页面 title、meta description 和 H1 不变，其他跳转不变。

实现后运行四项检查，提供 390px 和 1280px 截图，再交 Claude 验收；不得合并，不做其他工作包。
