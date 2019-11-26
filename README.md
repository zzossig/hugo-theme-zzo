# Zzo theme for Hugo

Thank you for click me!. Zzo theme is a blog theme powered by Hugo with free(always), and many features. 

## Table of contents

* [Features](#features)
* [Reference](#reference)
* [Minimum Hugo version](#minimum-hugo-version)
* [Installation](#installation)
* [Updating](#updating)
* [Run example site](#run-example-site)
* [Configuration](#configuration)
* [Layout](#layout)
* [Gallery](#gallery)
* [Multi Language](#multi-language)
* [Customizing](#customizing)
* [Marmaid, Katex, MathJax, Flowchart.js](#external-library)
* [Shortcodes](#shortcodes)

## Features

* Multiple Skins(dark, light, solarized, hacker)
* A mobile menu
* CSS grid and flex for layout
* HTML5
* Hugo Pipes for js and sass
* jQuery
* Simple blog
* Minify css
* Meta tags and JSON-LD
* Multilingual (i18n)
* Responsive design
* RSS and JSON feeds with full content
* Search with Lunr
* Gallery with Masonry, Photoswipe
* Prism.js for highlight code

## Minimum Hugo version

Hugo version 0.58.0 or higher is required.

## Installation

First of all, You need to add config files.
Follow the [Configuration](#configuration) step.

Then, You can download and unpack the theme manually from Github but it's easier to use git to clone the repo.

From the root of your site:

```bash
$ git clone https://github.com/zzossig/hugo-theme-zzo.git themes/zzo
```

If you use git to version control your site, highly recommended, it's best to add the zzo theme as a submodule.

From the root of your site:

```bash
git submodule add https://github.com/zzossig/hugo-theme-zzo.git themes/zzo
```

## Updating

From the root of your site:

```bash
git submodule update --remote --merge
```

## Run example site

From the root of themes/zzo/exampleSite:

```bash
hugo server --themesDir ../..
```

## Configuration

0. From the root of your site: delete config.toml file and add the files below

1. config folder structure

```bash
root
├── config
│   ├── _default
│   │   ├── config.toml
│   │   ├── languages.toml
│   │   ├── menus.en.toml
│   │   ├── params.toml
```

2. config.toml

```bash
baseURL = "http://example.org/"
title = "Hugo Zzo Theme"
theme = "zzo"

defaultContentLanguage = "en"
defaultContentLanguageInSubdir = true
hasCJKLanguage = true

summaryLength = 70

copyright = "&copy;{year}, All Rights Reserved"
timeout = 10000
enableEmoji = true
paginate = 13
rssLimit = 100

pygmentsOptions = "linenos=table"
pygmentsCodefences = true
pygmentsUseClasses = true
pygmentsCodefencesGuessSyntax = true

[outputs]
  home = ["HTML", "RSS", "JSON", "WebAppManifest"]

[mediaTypes."application/manifest+json"]
  suffixes = ["webmanifest"]

[outputFormats.WebAppManifest]
  mediaType = "application/manifest+json"
  rel = "manifest"

[taxonomies]
  category = "categories"
  tag = "tags"
  series = "series"
```

3. languages.toml

```bash
[en]
  title = "Hugo Zzo Theme"
  languageName = "English"
  weight = 1

[ko]
  title = "Hugo Zzo Theme"
  languageName = "한국어"
  weight = 2
```

4. menus.en.toml

You shoud make your own menu.

```bash
[[main]]
  identifier = "about"
  name = "about"
  url = "about"
  weight = 1

[[main]]
  identifier = "archive"
  name = "archive"
  url = "archive"
  weight = 2

[[main]]
  identifier = "gallery"
  name = "gallery"
  url = "gallery"
  weight = 3
    
[[main]]
  parent = "gallery"
  name = "cartoon"
  url = "gallery/cartoon"

[[main]]
  parent = "gallery"
  name = "photo"
  url = "gallery/photo"

[[main]]
  identifier = "posts"
  name = "posts"
  url = "posts"
  weight = 4
    
[[main]]
  identifier = "notes"
  name = "notes"
  url = "notes"
  weight = 5
...
```

5. params.toml

```bash
logoText = "Zzo"
description = "The Zzo theme for Hugo example site."
custom_css = []
custom_js = []

# header
homeHeaderType = "slide" # text, img, slide

# body
enableBreadcrumb = true
enablePhotoSwipe = true
enableSearch = true
enableGoToTop = true
enableWhoami = true
summaryShape = "classic" # card, classic, compact
archiveGroupByDate = "2006" # "2006-01": group by month, "2006": group by year
archivePaginate = 13
paginateWindow = 1

# whoami
myname = "zzossig"
email = "zzossig@gmail.com"
whoami = "Web Developer"
useGravatar = false
location = "Seoul, Korea"
organization = "Hugo"
link = "https://github.com/zzossig/hugo-theme-zzo"

# sidebar
enableBio = true
enableSidebar = true
enableSidebarTags = true
enableSidebarSeries = true
enableSidebarCategories = true
enableToc = true
enableTocSwitch = true
itemsPerCategory = 5
searchLanguages = ['en']

# footer
showPoweredBy = true
showFeedLinks = true
showSocialLinks = true
enableLangChange = true
enableThemeChange = true
themeOptions = ["dark", "light", "hacker", "solarized", "custom"]

# comment
enableComment = true
disqus_shortname = ""
commento = false

[gitment]          # Gitment is a comment system based on GitHub issues. see https://github.com/imsun/gitment
  owner = ""              # Your GitHub ID
  repo = ""               # The repo to store comments
  clientId = ""           # Your client ID
  clientSecret = ""       # Your client secret

[utterances]       # https://utteranc.es/
  owner = ""              # Your GitHub ID
  repo = ""               # The repo to store comments

[gitalk]           # Gitalk is a comment system based on GitHub issues. see https://github.com/gitalk/gitalk
  owner = ""              # Your GitHub ID
  repo = ""               # The repo to store comments
  clientId = ""           # Your client ID
  clientSecret = ""       # Your client secret

# Valine.
# You can get your appid and appkey from https://leancloud.cn
# more info please open https://valine.js.org
[valine]
  enable = false
  appId = '你的appId'
  appKey = '你的appKey'
  notify = false  # mail notifier , https://github.com/xCss/Valine/wiki
  verify = false # Verification code
  avatar = 'mm' 
  placeholder = '说点什么吧...'
  visitor = false

[changyan]
  changyanAppid = ""        # Changyan app id             # 畅言
  changyanAppkey = ""       # Changyan app key

[livere]
  livereUID = ""            # LiveRe UID                  # 来必力

# Isso: https://posativ.org/isso/
[isso]
  enable = false
  scriptSrc = "" # "https://isso.example.com/js/embed.min.js"
  dataAttrs = "" # "data-isso='https://isso.example.com' data-isso-require-author='true'"

[marketing]
  google_analytics = ""
  google_tag_manager = ""

[socialOptions]
  email = "mailto:your@email.com"
  facebook = "http://example.org/"
  twitter = "http://example.org/"
  github = "https://github.com/zzossig/hugo-theme-zzo"
  stack-overflow = ""
  instagram = ""
  google-plus = ""
  youtube = ""
  medium = ""
  tumblr = ""
  linkedin = ""
  pinterest = ""
  stack-exchange = ""
```

## Layout

### CSS grid for layout

Modern CSS grid is the easiest and cleanest way to layout your pages.

The CSS grid layout are in `assets/sass/layout/_grid.scss`. A lot can be done by just reordering "grid-template-rows". 

### grid structure

|  left 	|  right 	|
|---	|---	|
|  1	|  2	|
|  3 	|  4	|
|  5 	|  6	|
|  7 	|  8	|

* left, right column width ratio => 5 : 2
* 1 => .navbar-main
* 2 => .navbar-side
* 1 + 2 => .navbar
* 3 => .header-main
* 4 => .header-side
* 3 + 4 => .header
* 5 => .main-main
* 6 => .main-side
* 5 + 6 => .main
* 7 => .footer-main
* 8 => .footer-side
* 7 + 8 => .footer

### grid structure example applied in home page

```html
<div class="navbar"></div>
<div class="header"></div>
<div>
  <div class="main-main"></div>
  <div class="main-side"></div>
</div>
<div class="footer></div>
```

## Gallery

There are two ways to make gallery. You can specify **mode** at frontmatter.

```bash
content/gallery/anygalleryname/index.md

---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: 
type: gallery
mode: one-by-one # at-once or one-by-one
tags:
-
series:
-
categories:
-
images: # when mode is one-by-one, images front matter works
  - image: image1.jpg
    caption: caption1
  - image: image2.jpg
    caption: caption2
    ...
---

```

If you set the mode to one-by-one, list.html page will use images frontmatter above. If you set the mode to at-once, list.html page will not use images frontmatter and just read all files under the static/gallery/anygalleryname folder.

1. Make a gallery folder under the content folder

```bash
root
├── content
│   ├── gallery
```

2. Make a sub folder under the gallery folder

```bash
root
├── content
│   ├── gallery
│   │   ├── anygalleryname
```

3. Make a index.md file under the sub folder using this command

```bash
hugo new --kind gallery gallery/anygalleryname/index.md
```

4. Put your images in static folder

```bash
root
├── static
│   ├── gallery
│   │   ├── anygalleryname
│   │   │   ├── ...your images here
```

## Multi Language

The default language of this theme is English. If you want to use another language, follow these steps

1. Make a menu file.

```bash 
root
├── config
│   ├── _default
│   │   ├── ...
│   │   ├── menus.ko.toml
```

```bash
config/_default/menus.ko.toml

[[main]]
  identifier = "about"
  name = "about"
  url = "/about/"
  weight = 1

[[main]]
    identifier = "archive"
    name = "archive"
    url = "/archive/"
    weight = 2
...
```

2. Make a content file. Add your language code before the md extension.

```bash
hugo new about/index.ko.md
hugo new posts/markdown-syntax.ko.md
...
```

3. Make an i18n file.

```bash
i18n/ko.toml

[search-placeholder]
other = "검색..."

[summary-dateformat]
other = "2006년 01월 02일"

[taxo-tags]
other = "태그"

...
```

## Customizing

It's better idea not to modify zzo theme's folder if you wanna future support and upgrade. (You can modify if it doesn't matter) If you want more customizing options, open an issue.

### custom css

1. Add this line of code to your params.toml file

```bash
config/_default/params.toml

...
custom_css = ["css/custom.css", "scss/custom.scss", ...]
...
```

2. Add your file to assets folder. Filename must match with config params you set above.

```bash
assets/scss/custom.scss
assets/css/custom.css
```

3. If you want to modify zzo theme's default color, you should override the theme style. For example, if you want to change the body background-color, because I set the background-color in #body selector, not in body tag selector, you should override body background-color there. body tag selector won't work. And make sure to set !important.

```css
assets/scss/custom.scss or assets/css/custom.css

...
#body {
  background-color: red !important;
}
...
```

### custom js

1. Add this line of code to your params.toml file

```bash
config/_default/params.toml

...
custom_js = ["js/custom.js", ...]
...
```

2. Add your file to assets folder. Filename must match with config params you set above.

```bash
assets/js/custom.js
```

### custom skin(sub theme)

1. Make a skin.toml file in data folder. (data/skin.toml)

2. Copy the contents of themes/zzo/data/skin.toml file and paste it into the skin.toml file you created above.

3. Change the color you want.

4. Edit config/_default/params.toml file. The option name must be custom.

```bash
...
themeOptions = ["custom", "dark", ...]
...
```

5. Once you change the skin.toml file, restart hugo.

### custom header

You may want to change home page header. There are 4 options which is slider, image, text, empty.

1. Set param at config/_default/params.toml(homeHeaderType)

2. Make _index.md file at root/content/_index.md and copy & paste below.

```yaml
---
header:
  - type: text
    height: 235
    paddingX: 50
    paddingY: 0
    align: left
    title:
      - header title1
      - header title2
    subtitle:
      - header subtitle1
      - header subtitle2
    titleFontSize: 44
    subtitleFontSize: 16
    spaceBetweenTitleSubtitle: 20
  
  - type: img
    image: images/header/background.png
    height: 235
    paddingX: 50
    paddingY: 0
    align: center
    title:
      - header title1
      - header title2
    subtitle:
      - header subtitle1
      - header subtitle2
    titleFontSize: 44
    subtitleFontSize: 16
    spaceBetweenTitleSubtitle: 20

  - type: slide
    height: 235
    slide:
      - paddingX: 50
        paddingY: 0
        align: left
        image: images/header/background.png
        title:
          - header title1
        subtitle:
          - header subtitle1
        titleFontSize: 44
        subtitleFontSize: 16
        spaceBetweenTitleSubtitle: 20

      - paddingX: 50
        paddingY: 0
        align: center
        image: images/header/background.png
        title:
          - header title2
        subtitle:
          - header subtitle2
        titleFontSize: 44
        subtitleFontSize: 16
        spaceBetweenTitleSubtitle: 20

      - paddingX: 50
        paddingY: 0
        align: right
        image: images/header/background.png
        title:
          - header title3
        subtitle:
          - header subtitle3
        titleFontSize: 44
        subtitleFontSize: 16
        spaceBetweenTitleSubtitle: 20
---
```

3. Edit params as you wish.

### custom grid

1. Make a grid.toml file in data folder. (data/grid.toml)

2. Copy the contents of themes/zzo/data/grid.toml file and paste it into the grid.toml file you created above.

3. Change the grid you want.

4. Once you change the grid.toml file, restart hugo.

```toml
data/grid.toml example

grid_max_width = "960"
grid_max_unit = "px" #  "px", "\"%\""  Using% is limited to using full width.
grid_main_main_width = "5"
grid_main_main_unit = "fr" # "fr", "px"
grid_main_side_width = "2"
grid_main_side_unit = "fr" # "fr", "px"
grid_column_gap_width = "32"
grid_column_gap_unit = "px" # "px"
grid_navbar_height = "50px" # "px"
grid_row_gap = "0"
```

## External Library

If you want use external libraries, this theme currently supporting Katex, MathJax, Mermaid, Flowchart.js, chart.js, viz-graph, wavedrom, js-sequence-diagram. Just add some front matter.

```bash
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
...
libraries:
- katex 
- mathjax
- chart
- flowchartjs
- msc
- katex
- mermaid
- viz
- wavedrom
---

```
You can add some config option parameters at data/flowchartjs.json

## Shortcodes

### warning

```bash
{{% alert theme="info" %}}**this** is a text{{% /alert %}}
{{% alert theme="success" %}}**Yeahhh !** is a text{{% /alert %}}
{{% alert theme="warning" %}}**Be carefull** is a text{{% /alert %}}
{{% alert theme="danger" %}}**Beware !** is a text{{% /alert %}}
```

### expand

```bash
{{%expand "Expand me" %}}Good job{{% /expand%}}
```

### img

```bash
{{% img src="https://example.com" title="Image4" caption="Image description" alt="image alt" %}}
```

### notice

```bash
{{% notice note %}}
A notice disclaimer
{{% /notice %}}
```
