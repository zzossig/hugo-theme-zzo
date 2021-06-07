---
title: "Shortcodes"
date: 2020-01-25T06:40:51+09:00
description: tabs, code-tabs, expand, alert, warning, notice, img, box
draft: false
hideToc: false
enableToc: true
enableTocContent: true
tocPosition: inner
tags:
- shortcode
series:
-
categories:
-
image: images/feature3/code-file.png
---

## Markdownify box

{{< boxmd >}}
This is **boxmd** shortcode
{{< /boxmd >}}

## Simple box

{{< box >}}
This is **box** shortcode
{{< /box >}}

## Code tabs

Make it easy to switch between different code

{{< codes java javascript >}}
  {{< code >}}

  ```java
  System.out.println('Hello World!');
  ```

  {{< /code >}}

  {{< code >}}

  ```javascript
  console.log('Hello World!');
  ```
  
  {{< /code >}}
{{< /codes >}}

## Tabs for general purpose

{{< tabs Windows MacOS Ubuntu >}}
  {{< tab >}}

  ### Windows section

  ```javascript
  console.log('Hello World!');
  ```

  ⚠️Becareful that the content in the tab should be different from each other. The tab makes unique id hashes depending on the tab contents. So, If you just copy-paste the tabs with multiple times, since it has the same contents, the tab will not work.

  {{< /tab >}}
  {{< tab >}}

  ### MacOS section

  Hello world!
  {{< /tab >}}
  {{< tab >}}

  ### Ubuntu section

  Great!
  {{< /tab >}}
{{< /tabs >}}

## Expand

{{< expand "Expand me" >}}

### Title

contents

{{< /expand >}}

{{< expand "Expand me2" >}}

### Title2

contents2

{{< /expand >}}

## Alert

Colored box

{{< alert theme="warning" >}}
**this** is a text
{{< /alert >}}

{{< alert theme="info" >}}
**this** is a text
{{< /alert >}}

{{< alert theme="success" >}}
**this** is a text
{{< /alert >}}

{{< alert theme="danger" >}}
**this** is a text
{{< /alert >}}

## Notice

{{< notice success >}}
success text
{{< /notice >}}

{{< notice info >}}
info text
{{< /notice >}}

{{< notice warning >}}
warning text
{{< /notice >}}

{{< notice error >}}
error text
{{< /notice >}}

## Affeliate
{{< affeliate title="The Very Hungry Caterpillar"
    description="Author: Eric Carle; Publisher: Philomel Books<br>THE all-time classic picture book, from generation to generation, sold somewhere in the world every 30 seconds! A sturdy and beautiful book to give as a gift for new babies, baby showers, birthdays, and other new beginnings!"
	img="images/shortcodes/affeliate.jpg"
    amazon="https://www.amazon.com/dp/0399226907/"
	rakuten="https://books.rakuten.co.jp/rb/4177444/"
	yahoojp="https://store.shopping.yahoo.co.jp/maniacs-shop/pd-01041801.html"
	gmarket="http://global.gmarket.co.kr/item?goodsCode=260740452"
    link="https://www.penguinrandomhouse.com/books/557025/9780399256042" >}}

