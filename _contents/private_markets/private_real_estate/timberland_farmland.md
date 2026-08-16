---
layout: default
title: 森林投資・農業投資 Timberland and Farmland Investments
---

## 森林投資の評価
1回の伐採サイクルにおけるキャッシュフローから、1回の伐採サイクルの現在価値を計算する。

$$
NPV = \sum_{i=0}^{N}\frac{CF_i}{(1+r)^i}
$$

|記号|意味|
|---|---|
|$NPV$|現在価値|
|$N$|輪伐期、1ローテーションの年数|
|$r$|要求収益率(required rate of return)|
|$CF_i$|年$i$におけるキャッシュフロー|

森林投資では土地希望価(LEV, Land Expectation Value)が使用される。
1ローテーションに一回、将来価値分のキャッシュフローが輪伐期の最後に発生するとする。
森林に満期はないので、無限にローテーションできると仮定した場合の、キャッシュフローの現在価値を土地希望価(LEV)と呼ぶ。

$$
NFV = (1+r)^N NPV
$$

$$
\begin{aligned}
LEV &= \sum_{i=1}^\infty \frac{NFV}{\left[(1+r)^N\right]^i} \\
&= \frac{NFV}{(1+r)^N-1} \\
&= \frac{(1+r)^N}{(1+r)^N-1} NPV 
\end{aligned}
$$

|記号|意味|
|---|---|
|$NFV$|将来価値|
|$LEV$|土地希望価|
