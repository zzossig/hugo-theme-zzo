---
title: "{{ replace .Name "-" " " | title }}"
shorttitle:
date: {{ .Date }}
description: 
type: publication
authors: []
publication:
abstract:
links:
 - name:
   link:
ENTRYTYPE: "misc"
enableToc: false
enableWhoami: true
pinned: false
publishDate: {{ dateFormat "2006-01-02" .Date }}
---
