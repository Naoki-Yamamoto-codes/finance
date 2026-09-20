---
layout: default
title: FSBレポ統計の日本分集計結果 Statistics on Securities Financing Transactions in Japan
---

## データの出典
[FSBレポ統計の日本分集計結果](https://www.boj.or.jp/statistics/bis/repo/index.htm)で公表されているデータより抜粋して作成
データの意味については[「FSBレポ統計の日本分集計結果」の解説](https://www.boj.or.jp/statistics/outline/exp/exrepo.htm)を参照。

> 取引金額は、取引通貨に応じた報告計数を「準備預金制度事務における邦貨換算率」で円に換算した後、億円単位


<script src="/finance/assets/js/boj-repo-chart.js"></script>

## フローデータ

> フローデータでは、わが国の営業日に発生した新規約定取引の取引金額を、約定時に定めた取引スタート日別に公表します。ロールオーバーを伴う取引の場合、契約当事者が能動的に契約内容を更新する場合は、ロールオーバーの都度、新規約定分として対象取引に含みますが、エバーグリーン取引（満期日が自動更新される取引）は新規約定分に含みません。

### 現先取引 日本円取引

> 現金通貨が日本円の現先取引

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="flow_jpy" data-chart-type="double-line" > </canvas>


## ストックデータ

> ストックデータでは、取引対象債券等のサブスティテューションや中途解約を反映した上で、月末時点における取引金額を公表します。

### 現先取引及び証券貸借取引 日本円取引

> 現金通貨が日本円の取引

> 担保（取引対象債券等）の種類を限定していないため、全ての証券を対象に含みます

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="stock_jpy" data-chart-type="line" > </canvas>

### 現先取引及び証券貸借取引 外貨取引

> 現金通貨が外貨の取引

> 担保（取引対象債券等）の種類を限定していないため、全ての証券を対象に含みます

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="stock_for_ccy" data-chart-type="line" > </canvas>


### 現先取引 日本円／日本国債等

> 担保（取引対象債券等）の種類を日本国債等に限定し、かつ、現金通貨が日本円の取引

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="stock_repo_jpy_jgb" data-chart-type="line" > </canvas>

### 現先取引 外貨／債券

> 担保（取引対象債券等）を債券に限定し、かつ、現金通貨が外貨の取引

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="stock_repo_for_ccy" data-chart-type="line" > </canvas>

### 証券貸借取引 日本国債／日本円

> 貸借証券の種類を日本国債に限定し、かつ、現金通貨が日本円の取引

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="stock_lending_jgb" data-chart-type="line" > </canvas>

### 証券貸借取引 日本株／現金及び代用有価証券

> 集計される証券貸借取引は、日本株を貸借する証券貸借取引を公表対象とします。この際、現金を担保とした取引及び代用有価証券を担保とした取引を合算

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="stock_lending_equity" data-chart-type="line" > </canvas>

### 取引レート レポレート

> 現先取引の場合は当該レートを、証券貸借取引の場合は担保金利率と貸借料率として報告を受けたレートの差を、取引金額で加重平均

<canvas data-json="/finance/assets/data/boj_repo_202607.json" data-key="repo_rates" data-chart-type="line" > </canvas>
