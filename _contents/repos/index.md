---
layout: default
title: レポ Repos
permalink: /contents/repos/
---

## レポ取引とは

レポ取引(Repurchase agreement, Repo)とは一定期間後に証券を買い戻す取引である。
証券を売ったときの価格で買い戻すわけではなく、利息を含めて買い戻す。

証券を売る側としては、
- 証券を担保として現金を調達する
- 手元の証券を使って追加のリターンを得る
証券を買う側としては、
- 手元の現金からリターンを得る（=レポ市場で運用する）
- 特定の証券を一定期間所有する

といった目的がある。
したがって、証券を売る側は資金を調達する側であるし、証券を買う側は資金を提供する側である。

```mermaid
flowchart LR
    subgraph Initial["取引開始時"]
        direction LR
        A1["A: 証券売手（資金調達側）"]
        B1["B: 証券買手（資金提供側）"]
        A1 -->|"証券"| B1
        B1 -->|"現金"| A1
    end
```
```mermaid
flowchart LR
    subgraph Final["取引終了時"]
        direction LR
        A2["A: 証券売手（資金調達側）"]
        B2["B: 証券買手（資金提供側）"]
        A2 -->|"現金"| B2
        B2 -->|"証券"| A2
    end
```

リバースレポ取引(Reverse repo agreement)は単にレポ取引の視点を変えただけであり、証券を売り戻す取引を指す。
あるレポ取引は、証券を買い戻す側（上図のA）から見たらレポ取引であり、証券を売り戻す側（上図のB）からしたらリバースレポ取引である。

## レポ取引に関する文書
- [Repo market functioning](https://www.bis.org/publ/cgfs59.htm)
- 