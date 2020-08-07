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
Use `Shift` and `Mouse Left` to drag, `Shift` and `Mouse Scroll` to zoom.

### Example 1
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

### Example 2
Point A will stay inside the circle.

```jessiecode
// code adapted from https://github.com/jsxgraph/JessieCode/blob/master/examples/gaetano_g.html
O=point(0,0)<<name:'0',fixed:true>>;
U=point(1,0)<<name:'1',fixed:true>>;
I=point(0,1)<<name:'i',fixed:true>>;
x=line(O,U)<<withLabel:true,name:'x',lastArrow:true>>;
y=line(O,I)<<withLabel:true,name:'y',lastArrow:true>>;
r = 3;
c=circle(O,r);
p=point(1,1)<<color:'lime'>>;
g=<<x:1,y:1>>;
p.on('drag',function(){
	if(p.X()^2+p.Y()^2>r*r) {
		p.moveTo([g.x,g.y]);
	};
	g.x=p.X();
	g.y=p.Y();
});
```

### Example3
This graph shows the properties of triangle. Drag the edges of triangle to observe changes.

```jessiecode:400x400
// code adapted from https://github.com/jsxgraph/JessieCode/blob/master/examples/euler.html
cerise = <<
    strokeColor: '#901B77',
    fillColor: '#CA147A',
    visible: true,
    withLabel: true
>>;
grass = <<
    strokeColor: '#009256',
    fillColor: '#65B72E',
    visible: true,
    withLabel: true
>>;
perp = <<
    strokeColor: 'black',
    dash: 1,
    strokeWidth: 1,
    point: cerise
>>;
median = <<
    strokeWidth: 1,
    strokeColor: '#333333',
    dash:2
>>;

// The triangle
A = point(1, 0) cerise;
B = point(-1, 0) cerise;
C = point(0.2, 1.5) cerise;

pol = polygon(A, B, C) << fillColor: '#FFFF00', borders: << strokeWidth: 2, strokeColor: '#009256' >> >>;

// The perpendiculars
H_c = perpendicularsegment(pol.borders[0], C) perp;
H_a = perpendicularsegment(pol.borders[1], A) perp;
H_b = perpendicularsegment(pol.borders[2], B) perp;

// intersection
H = intersection(H_c, H_b, 0) grass;

// Midpoints
mAB = midpoint(A, B) cerise;
mBC = midpoint(B, C) cerise;
mCA = midpoint(C, A) cerise;

ma = segment(mBC, A) median;
mb = segment(mCA, B) median;
mc = segment(mAB, C) median;
S = intersection(ma, mc, 0) grass;

grass.name = 'U';
c = circumcircle(A, B, C) << strokeColor: '#000000', dash: 3, strokeWidth: 1, center: grass >>;

euler = line(H, S) << strokeWidth: 2, strokeColor:'#901B77' >>;

$board.setView([-1.5, 2, 1.5, -1]);
```

### Note
You can specify height and weight in the language specifier. e.g.
````markdown
```jessiecode:400x300
// codes...
```
````
will change the graph size to width 400px and height 300px.
