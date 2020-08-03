---
title: "jsxgraph support"
date: 2020-08-03T14:00:00+08:00
description: "Dynamic Mathematics with JavaScript"
draft: false
enableToc: false
enableTocContent: false
tags:
- 
series:
-
categories:
- diagram
libraries:
- jsxgraph
image: images/feature1/graph.png
---

```jessiecode
point(5, 5) <<id:'pt', name: 'point'>>;
grid();
axis([0,0],[0,1]);
axis([0,0],[1,0]);

a = slider([1, 3], [6, 3], [0, 5, 10]) <<name: 'arg'>>;
f = function (x) {return 7*exp(-V(a)*x^2)*cos(6*PI*x);};
g = functiongraph(f);

$board.setView([-10, 10, 10, -10]);
```
