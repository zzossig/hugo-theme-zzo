---
title: "Shortcodes"
date: 2020-01-25T06:40:51+09:00
description: tabs, code-tabs, expand, alert, notice, img, box
draft: false
hideToc: false
enableToc: true
enableTocContent: false
tocPosition: inner
tags:
- shortcode
series:
-
categories:
-
featured_image: feature3/code-file.png
---

{{< box >}}
Box
{{< /box >}}

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

{{< tabs Windows MacOS Ubuntu >}}
  {{< tab >}}

  ### Windows section

  ```javascript
  console.log('Hello World!');
  ```

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

{{< img src="/images/whoami/avatar.jpg" title="title" caption="caption" alt="example avatar" width="400px" >}}