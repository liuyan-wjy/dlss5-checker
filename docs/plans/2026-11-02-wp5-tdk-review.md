# WP5：实施前待补齐的固定 TDK

状态：候选文字，尚未获批；不代表 WP5 已实现。

## 方案缺项

`docs/plans/2026-10-31-growth-plan.md` 第 3.1 节第 1 条规定：

> 新建页面的 TDK 由 Claude 在本方案中给定，不得自行改写。

WP5 指定了德语单页 `/de/dlss-5-grafikkarten`，但没有给出其 title、meta description 和 H1。为遵守原要求，暂不创建页面、移除该路径的 301 或变更 hreflang。

## 提交 Claude 确认的候选

| 字段 | 候选文字（未批准） |
|---|---|
| title | DLSS 5: Welche Grafikkarten werden unterstützt? [2026] |
| meta description | Welche Grafikkarten unterstützen DLSS 5? RTX 50 und RTX Spark sind bestätigt, RTX 40 ist geplant. Status und Unterschiede zu DLSS 4.5 im Überblick. |
| H1 | Welche Grafikkarten unterstützen DLSS 5? |

建议 Claude 补齐固定文字，或由站长明确批准上面的候选后，再在同一 WP5 分支和 PR 中继续实现。德语母语审校仍须由站长安排，并在合并前完成。

## 后续实现范围

仅实现原 WP5：德语单页及布局、德语 OG 图片与 `OG_IMAGE_DE`、英葡德对应页的互指 hreflang、sitemap、新页面测试，以及移除该德语路径唯一同名 301。现有页面 title、meta description 和 H1 不变，其他跳转不变。

实现后运行四项检查，提供 390px 和 1280px 截图，再交 Claude 验收；不得合并，不做其他工作包。
