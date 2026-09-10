---
layout: default
title: みずほフィナンシャルグループ 2026/03
---

2026/03の有価証券報告書をもとにみずほフィナンシャルグループを見る。

## データの出典
会社のホームページ又はEDINET閲覧（提出）サイト（https://disclosure2.edinet-fsa.go.jp/week0010.aspx）に提出された有価証券報告書より抜粋して作成
- [有価証券報告書](https://www.mizuho-fg.co.jp/investors/financial/report/index.html)
  - みずほフィナンシャルグループ
  - みずほ銀行
- [有価証券報告書/四半期報告書](https://www.mizuho-ls.co.jp/ja/ir/library/securities.html)

## 事業系統図(2026/04/01)
- 株式会社は省略
- 実線は子会社、点線は持分法適用関連会社を表す
- その他とまとめられている会社は省く
- 保有率は小数第二位を四捨五入
- 図が大きくなりすぎるのでカンパニーごとに分ける

### リテール・事業法人カンパニー
```mermaid
flowchart LR
  FG("みずほフィナンシャルグループ")
  BK("みずほ銀行")
  TB("みずほ信託銀行株式会社")
  SC("みずほ証券株式会社")
  
  FG -->|"100%"| BK 
  FG -->|"100%"| TB 
  FG -->|"100%"| SC

  subgraph RBC["リテール・事業法人"]
    direction TD
    UPSIDER("UPSIDER")
    UPSIDERAG("UPSIDER Agent")
    UPSIDERCAP("UPSIDER Capital")
    UPSIDERHD("UPSIDERホールディングス")
    IR("みずほインベスター・リレーションズ")
    click IR https://mizuho-ir.com/company/outline/
    CAP("みずほキャピタル")
    CLAIM("みずほ債権回収")
    CREDIT("みずほ信用保証")
    DREAMP("みずほドリームパートナー")
    FACTOR("みずほファクター")
    MIRAIWP("MiRaIウェルス・パートナーズ")
    click MIRAIWP https://www.miraiwealth-p.co.jp/s/company
    UC("ユーシーカード")
    ORIENT("オリエントコーポレーション")
    KOTORA("ことら")
    JBMA("Japan Blue M&Aアドバイザリー")
    click JBMA https://www.jbma.co.jp/company/overview/
    PAYPAYSC("PayPay証券")
    click PAYPAYSC https://www.paypay-sec.co.jp/corporate/company/
    LINEC("LINE Credit")
    RAKUTENSC("楽天証券")
    click RAKUTENSC https://www.rakuten-sec.co.jp/web/company/profile/
  end
  BK -->|"100%"| UPSIDER
  BK -->|"100%"| UPSIDERAG
  BK -->|"100%"| UPSIDERCAP
  BK -->|"76.9%"| UPSIDERHD
  SC -->|"100%"| IR
  BK -->|"49.9%"| CAP
  BK -->|"100%"| CLAIM
  BK -->|"100%"| CREDIT
  BK -->|"100%"| DREAMP
  BK -->|"100%"| FACTOR
  SC -->|"95%"| MIRAIWP
  BK -->|"100%"| UC
  BK -. "48.7%" .-> ORIENT
  BK -. "25.0%" .-> KOTORA
  BK -. "39.0%" .-> JBMA
  SC -. "10.0%" .-> JBMA
  SC -. "24.7%" .-> PAYPAYSC
  BK -. "44.2%" .-> LINEC
  SC -. "49.0%" .-> RAKUTENSC
```
### コーポレート＆インベストバンキングカンパニー
```mermaid
flowchart LR
  FG("みずほフィナンシャルグループ")
  BK("みずほ銀行")
  TB("みずほ信託銀行株式会社")
  SC("みずほ証券株式会社")
  
  FG -->|"100%"| BK 
  FG -->|"100%"| TB 
  FG -->|"100%"| SC

  subgraph CIB["コーポレート&インベストバンキング"]
    TMRI("都市未来総合研究所")
    click TMRI https://www.tmri.co.jp/company/
    TROP("みずほトラストオペレーションズ")
    REIA("みずほ不動産投資顧問")
    RES("みずほ不動産販売")
    click RES https://www.mizuho-re.co.jp/company/data.html
    RO("みずほリアルティOne")
    click RO https://www.mizuho-realtyone.co.jp/about/
    RM("みずほリートマネジメント")
    click RM https://www.mizuho-reit.co.jp/about/
    APM("Mizuho Asia Partners (Malaysia) Sdn. Bhd.")
    APP("Mizuho Asia Partners Pte. Ltd.")
    GCP("Mizuho Gulf Capital Partners Ltd")
    LEASE("みずほリース")
    SODS("日本株主データサービス")
    click SODS https://www.jast-ds.co.jp/company.html

  end
　TB -->|"100%"| TMRI
　TB -->|"100%"| TROP
　TB -->|"100%"| RO
　RO -->|"100%"| REIA
　TB -->|"?%"| RES
　TMRI -->|"?%"| RES
　RO -->|"100%"| RM
　BK -->|"100%"| APP
　APP -->|"100%"| APM
　BK -->|"100%"| GCP
  FG -. "23.6%" .-> LEASE
  TB -. "50.0%" .-> SODS
  
```
みずほリースの連結子会社は次の通り。
```mermaid
flowchart LR
    LEASE("みずほリース")
    LME("エムエル・エステート")
    FLEASE("第一リース")
    TOLEASE("みずほ東芝リース")
    AUTO("みずほオートリース")
    UNIV("ユニバーサルリース")
    MIRAIC("ミライズ・キャピタル")
    MLC("エムエル商事")
    PCS("ピー・シー・エス")
    MLP("エムエル・パワー")
    MLO("エムエル・オフィスサービス")
    MLIT("エムエル・ITADソリューション")
    UGUISU("合同会社Uguisu")
    JPIF("ジャパン・インフラファンド投資法人")
    CN("瑞穂融資租賃（中国）有限公司")
    IND("Mizuho RA Leasing Pvt. Ltd.")
    INDC("Mizuho Capsave Finance Pvt. Ltd.")
    click INDC https://www.mizuho-cf.co.in/about-capsave-finance/
    INDN("PT MIZUHO LEASING INDONESIA Tbk")
    TDP("TDP １ Limited")
    HOOH("Ho-oh SPV LLC")
    MMW("MM WHEEL LLC")
    IBJALC("IBJ Air Leasing (US) Corp.")
    IBJALL("IBJ Air Leasing Limited")
    UK("Mizuho Leasing (UK) Ltd.")
    SGP("Mizuho Leasing (Singapore) Pte. Ltd.")

　LEASE -->|"100%"| LME
　LEASE -->|"90.0%"| FLEASE
　LEASE -->|"90.0%"| TOLEASE
　LEASE -->|"100%"| AUTO
　LEASE -->|"90%"| UNIV
　LEASE -->|"100%"| MIRAIC
　LEASE -->|"100%"| MLC
　LEASE -->|"100%"| PCS
　LEASE -->|"100%"| MLP
　LEASE -->|"100%"| MLO
　LEASE -->|"85%"| MLIT
　LEASE -->|"100%"| UGUISU
　LEASE -->|"66.9%"| JPIF
　LEASE -->|"100%"| CN
　LEASE -->|"87.6%"| IND
　IND -->|"100%"| INDC
　LEASE -->|"67.4%"| INDN
　LEASE -->|"100%"| TDP
　LEASE -->|"100%"| HOOH
　LEASE -->|"100%"| MMW
　LEASE -->|"75%"| IBJALC
　LEASE -->|"75%"| IBJALL
　LEASE -->|"100%"| UK
　LEASE -->|"100%"| SGP
```

### グローバルコーポレート＆インベストメントバンキングカンパニー
```mermaid
flowchart LR
  FG("みずほフィナンシャルグループ")
  BK("みずほ銀行")
  TB("みずほ信託銀行株式会社")
  SC("みずほ証券株式会社")
  click SC https://www.mizuho-sc.com/company/info/business/location.html
  
  FG -->|"100%"| BK 
  FG -->|"100%"| TB 
  FG -->|"100%"| SC

  subgraph GCIB["グローバルコーポレート＆インベストメントバンキング"]
    US("Mizuho Americas LLC")
    RUS("AO Mizuho Bank(Moscow)")
    AMOUS("Asset Management One USA Inc.")
    click AMOUS https://www.am-one-usa.com/
    AUGUSTA("Augusta & Co Limited")
    BR("Banco Mizuho do Brasil S.A.")
    CAPA("Capstone Advisors SA")
    CAPHD("CH Capstone Holding Sarl")
    GREENSGP("Greenhill & Co. Asia (Singapore) Pte. Ltd.")
    GREENASIA("Greenhill & Co. Asia Limited")
    GREENAUSHD("Greenhill & Co. Australia Holdings Pty Ltd")
    GREENAUS("Greenhill & Co. Australia Pty Limited")
    GREENCAD("Greenhill & Co. Canada Ltd.")
    GREENCAY("Greenhill & Co. Cayman Limited")
    GREENEURHD("Greenhill & Co. Europe Holdings Limited")
    GREENCADHD("Greenhill & Co. Holding Canada Ltd.")
    GREENSWE("Greenhill & Co. Sweden AB")
    GREENINC("Greenhill & Co., Inc.")
    GREENLLC("Greenhill & Co., LLC")
    GREENEUR("Greenhill Europe GmbH & Co. KG")
    GREENGER("Greenhill Germany GmbH")
    USLEASE("Mizuho America Leasing LLC")
    USSERVICE("Mizuho Americas Services LLC")
    CN("瑞穂銀行（中国）有限公司")
    MAL("Mizuho Bank (Malaysia) Berhad")
    BKUS("Mizuho Bank (USA)")
    BKEUR("Mizuho Bank Europe N.V.")
    BKMEX("Mizuho Bank Mexico, S.A.")
    CAPM("Mizuho Capital Markets LLC")
    EMEACS("Mizuho EMEA Corporate Services Limited")
    GSIND("Mizuho Global Services India Private Limited")
    click GSIND https://www.mizuhogroup.com/asia-pacific/mizuho-global-services/about-us
    INTL("Mizuho International plc")
    MUS("Mizuho Markets Americas LLC")
    MFUTSGP("Mizuho Markets Futures Singapore Pte. Ltd.")
    MEAH("Mizuho MEA Regional Headquarters Company")
    MORT("Mizuho Mortgage Securities LLC")
    SAUDI("Mizuho Saudi Arabia Company")
    click SAUDI https://www.mizuhogroup.com/emea/saudi-arabia/about
    SCCN("瑞穂証券（中国）有限公司")
    SCSGP("Mizuho Securities (Singapore) Pte. Ltd.")
    click SCSGP https://www.mizuhogroup.com/asia-pacific/securities/singapore/about-us
    SCASIA("Mizuho Securities Asia Limited")
    click SCASIA https://www.mizuhogroup.com/asia-pacific/securities/hk/about
    SCCAN("Mizuho Securities Canada Inc.")
    SCIND("Mizuho Securities India Private Limited")
    click SCIND https://www.mizuhogroup.com/asia-pacific/securities/india/about
    SCUS("Mizuho Securities USA LLC")
    SUNSHINE("Mizuho Sunshine Investment Ltd.")
    BKINDN("PT. Bank Mizuho Indonesia")
    BKVN("Joint Stock Commercial Bank for Foreign Trade of Vietnam")
    BKTHAI("MHCB Consulting (Thailand) Co., Ltd.")
    CSINDN("PT. MHCT Consulting Indonesia")
    SATHI("Sathinee Company Limited")
    XXX("?(親会社不明)")
  end
　BK -->|"100%"| US
　BK -->|"100%"| RUS
　US -->|"51%"| AMOUS
　INTL -->|"100%"| AUGUSTA
　BK -->|"100%"| BR
　XXX -->|"100%"| CAPA
　XXX -->|"100%"| CAPHD
　GREENINC -->|"100%"| GREENSGP
　GREENINC -->|"100%"| GREENASIA
　GREENINC -->|"100%"| GREENAUSHD
　GREENAUSHD -->|"100%"| GREENAUS
　GREENCADHD -->|"100%"| GREENCAD
　GREENINC -->|"100%"| GREENCAY
　GREENINC -->|"100%"| GREENEURHD
　GREENINC -->|"100%"| GREENCADHD
　GREENINC -->|"100%"| GREENSWE
　US -->|"100%"| GREENINC
　GREENINC -->|"100%"| GREENLLC
　GREENEURHD -->|"100%"| GREENEUR
　GREENEUR -->|"100%"| GREENGER
　US -->|"100%"| USLEASE
　US -->|"100%"| USSERVICE
　BK -->|"100%"| CN
　BK -->|"100%"| MAL
　US -->|"100%"| BKUS
　BK -->|"100%"| BKEUR
　BK -->|"100%"| BKMEX
　US -->|"100%"| CAPM
　US -->|"100%"| EMEACS
　BK -->|"100%"| GSIND
　SC -->|"100%"| INTL
　US -->|"100%"| MUS
　SC -->|"100%"| MFUTSGP
　BK -->|"100%"| MEAH
　XXX -->|"100%"| MORT
　BK -->|"85.1%"| SAUDI
　SC -->|"14.9%"| SAUDI
　SC -->|"100%"| SCCN
　SC -->|"100%"| SCSGP
　BK -."30%".-> SCASIA
　SC -->|"70%"| SCASIA
　US -->|"100%"| SCCAN
　SC -->|"100%"| SCIND
　US -->|"100%"| SCUS
　BK -->|"100%"| SUNSHINE
　BK -->|"98.9%"| BKINDN
　BK -."98.9%".-> BKVN
　BK -."9.9%".-> BKTHAI
　BK -."4.0%".-> SATHI
　BK -->|"100%"| XXX
```

### アセットマネジメントカンパニー
```mermaid
flowchart LR
  FG("みずほフィナンシャルグループ")
  BK("みずほ銀行")
  TB("みずほ信託銀行株式会社")
  SC("みずほ証券株式会社")
  
  FG -->|"100%"| BK 
  FG -->|"100%"| TB 
  FG -->|"100%"| SC

  subgraph AM["アセットマネジメント"]
    AMONE("アセットマネジメントOne")
    AMONEALT("アセットマネジメントOneオルタナティブインベストメンツ")
    click AMONEALT https://www.am-one.co.jp/amoai/company/profile/
    AMONEHK("Asset Management One Hong Kong Limited")
    AMONEINTL("Asset Management One International Ltd.")
    JPCUST("日本カストディ銀行")
    click JPCUST https://www.custody.jp/corporate/information/index.html
    JPISOLT("日本インベスター・ソリューション・アンド・テクノロジー")
    click JPISOLT https://www.jis-t.co.jp/company/investor.html
    JPPENOS("日本ペンション・オペレーション・サービス")
    click JPPENOS https://www.smtg.jp/about_us/chronicle100/appendix/group/j-pos
    MATINTL("Matthews International Capital Management, LLC")
  end

  FG -->|"51%"| AMONE
  AMONE -->|"100%"| AMONEALT
  AMONE -->|"100%"| AMONEHK
  AMONE -->|"100%"| AMONEINTL
  FG -."27%".-> JPCUST
  BK -."38.9%".-> JPISOLT
  SC -."0.1%".-> JPISOLT
  TB -."50%".-> JPPENOS
  BK -."18.4%".-> MATINTL
```

### グローバルトランザクションユニット
```mermaid
flowchart LR
  FG("みずほフィナンシャルグループ")
  BK("みずほ銀行")
  TB("みずほ信託銀行株式会社")
  SC("みずほ証券株式会社")
  
  FG -->|"100%"| BK 
  FG -->|"100%"| TB 
  FG -->|"100%"| SC

  subgraph TR["グローバルトランザクション"]
    REC("みずほ電子債権記録")
  end
  BK -->|"100%"| REC

```

### その他
```mermaid
flowchart LR
  FG("みずほフィナンシャルグループ")
  BK("みずほ銀行")
  TB("みずほ信託銀行株式会社")
  SC("みずほ証券株式会社")
  
  FG -->|"100%"| BK 
  FG -->|"100%"| TB 
  FG -->|"100%"| SC

  subgraph OTHER["その他"]
    INVF("みずほイノベーション・フロンティア")
    BLUEL("Blue Lab")
    GRS("みずほグループサービシーズ")
    SCBS("みずほ証券ビジネスサービス")
    click SCBS https://www.mizuho-sbs.com/company/index.html
    FFT("みずほ第一フィナンシャルテクノロジー")
    TRRTS("みずほトラストリテールサポート")
    BCHLG("みずほビジネス・チャレンジド")
    BP("みずほビジネスパートナー")
    POCHET("みずほポシェット")
    MIDS("ＭＩデジタルサービス")
    NB("ネストブルー")
    click NB https://nestblue.co.jp/news/3094494.html
    KKNR("みずほココナラ")
    click KKNR https://coconala.co.jp/%E3%80%8C%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%BF%E3%81%9A%E3%81%BB%E3%82%B3%E3%82%B3%E3%83%8A%E3%83%A9%E3%80%8D%E8%A8%AD%E7%AB%8B%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89/
    XXX("?（親会社不明）")
  end
  FG -->|"100%"| INVF
  BK -->|"100%"| BLUEL
  BK -->|"100%"| GRS
  SC -->|"100%"| SCBS
  BK -->|"60%"| FFT
  XXX -->|"100%"| TRRTS
  BK -->|"100%"| BCHLG
  BK -->|"100%"| BP
  INVF -->|"64.2%"| POCHET  
  FG -."35%".-> MIDS  
  INVF -."49%".-> NB  
  INVF -."49%".-> KKNR 
  FG -->|"100%"| XXX
```

## 連結貸借対照表
### 資産(2026/03/31)
<canvas data-json="/finance/assets/data/mizuho_fg_202603.json" data-date="2026-03-31" data-side="asset" > </canvas>

### 資産(2025/03/31)
<canvas data-json="/finance/assets/data/mizuho_fg_202603.json" data-date="2025-03-31" data-side="asset" > </canvas>

### 負債・純資産(2026/03/31)
<canvas data-json="/finance/assets/data/mizuho_fg_202603.json" data-date="2026-03-31" data-side="liability"> </canvas>

### 負債・純資産(2025/03/31)
<canvas data-json="/finance/assets/data/mizuho_fg_202603.json" data-date="2025-03-31" data-side="liability"> </canvas>

## 連結損益計算書及び連結包括利益計算書
### 2026/03/31


### 2025/03/31