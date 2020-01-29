# Zzo theme for Hugo

English | 
[한국어](https://github.com/zzossig/hugo-theme-zzo/blob/master/README.ko.md)

🔥🔥🔥🤓The minimum Hugo version changed to 0.60.0. This version changed the markdown rendering library, so if you are using an older version, it may not be compatible.🔥🔥🔥

Thank you for click me!. Zzo theme is a blog theme powered by Hugo with free(always), and many features. 

## Table of contents

* [Features](#features)
* [Minimum Hugo version](#minimum-hugo-version)
* [Installation](#installation)
* [Updating](#updating)
* [Run example site](#run-example-site)
* [Configuration](#configuration)
* [Gallery](#gallery)
* [Contact Page](#contact-page)
* [Talks Page](#talks-page)
* [Showcase Page](#showcase-page)
* [Multi Language](#multi-language)
* [Author](#author)
* [Favicon](#favicon)
* [Customizing](#customizing)
* [External libraries](#external-library)
* [Shortcodes](#shortcodes)

## Features

* Multiple Skins(dark, light, solarized, ...)
* A mobile menu
* CSS grid and flex for layout
* HTML5
* Hugo Pipes for js and sass
* Simple blog
* Search Engine Optimization(SEO)
* Multilingual (i18n)
* Responsive design
* RSS
* Search
* Gallery
* Fast code highlighting
* Talks page
* Showcase page

## Minimum Hugo version

Hugo version 0.60.0 or higher is required.

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

1. config folder structure. Keep in mind the underscore on the `_default` folder

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
baseURL = "http://example.org/" # The URL of your site.
title = "Hugo Zzo Theme" # Title of your site
theme = "zzo" # Name of Zzo theme folder in `themes/`.

defaultContentLanguage = "en" # Default language to use (if you setup multilingual)
defaultContentLanguageInSubdir = true # baseURL/en/, baseURL/kr/ ...
hasCJKLanguage = true # Set `true` for Chinese/Japanese/Korean languages.

summaryLength = 70 # The length of a post description on a list page.
buildFuture = true # if true, we can use future date for talks page

copyright = "©{year}, All Rights Reserved" # copyright symbol: $copy; current year: {year}
timeout = 10000
enableEmoji = true
paginate = 13 # Number of items per page in paginated lists.
rssLimit = 100

enableGitInfo = false # When true, the modified date will appear on a summary and single page. Since GitHub info needs to be fetched, this feature will slow down to build depending on a page number you have
googleAnalytics = ""

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      hardWraps = true
      unsafe = true
      xHTML = true
  [markup.highlight]
    codeFences = true
    lineNos = true
    lineNumbersInTable = true
    noClasses = false
  [markup.tableOfContents]
    endLevel = 3
    ordered = false
    startLevel = 2

[outputs]
  home = ["HTML", "RSS", "JSON"]

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
logoText = "Zzo" # Logo text that appears in the site navigation bar.
logoType = "short" # long, short -> short: squre shape includes logo text, long: rectangle shape not includes logo text
logo = true # Logo that appears in the site navigation bar.
description = "The Zzo theme for Hugo example site." # for SEO
custom_css = [] # custom_css = ["scss/custom.scss"] and then make file at root/assets/scss/custom.scss
custom_js = [] # custom_js = ["js/custom.js"] and then make file at root/assets/js/custom.js
useFaviconGenerator = false # https://www.favicon-generator.org/
languagedir = "ltr" # ltr / rtl

themeOptions = ["dark", "light", "hacker", "solarized", "kimbie"] # select options for site color theme
notAllowedTypesInHome = ["contact", "talks", "about", "showcase"] # not allowed page types in home page. type can be set in front matter or default to folder name.
notAllowedTypesInHomeSidebar = ["about", "archive", "showcase"] # not allowed page types in home page sidebar(recent post titles).
notAllowedTypesInArchive = ["about", "talks", "showcase"] # not allowed page types in archive page

# header
homeHeaderType = "text" # text, img, slide

# navbar
enableThemeChange = true # site color theme

# body
enableBreadcrumb = true # breadcrumb for list, single page
enableSearch = true # site search with Fuse
enableSearchHighlight = true # when true, search keyword will be highlighted
enableGoToTop = true # scroll to top
enableWhoami = true # at the end of single page
summaryShape = "classic" # card, classic, compact
archiveGroupByDate = "2006" # "2006-01": group by month, "2006": group by year
archivePaginate = 13 # items per page
paginateWindow = 1 # setting it to 1 gives 7 buttons, 2 gives 9, etc. If set 1: [1 ... 4 5 6 ... 356] [1 2 3 4 5 ... 356] etc
talksPaginate = 8 # items per page
talksGroupByDate = "2006" # "2006-01": group by month, "2006": group by year

# whoami: usage - home page sidebar, single page bottom of post. all values can be empty
myname = "zzossig"
email = "zzossig@gmail.com"
whoami = "Web Developer"
bioImageUrl = "" # image url like http//... If not set, we find a avatar image in root/static/images/whoami/avatar.(png|jpg|svg)
useGravatar = false # we use this option highest priority
location = "Seoul, Korea"
organization = "Hugo"
link = "https://github.com/zzossig/hugo-theme-zzo"

# sidebar
enableBio = true # home page sidebar
enableSidebar = true # Set to false to create the full width of the content.
enableSidebarTags = true # if you want to use tags.
enableSidebarSeries = true
enableSidebarCategories = true
enableHomeSidebarTitles = true
enableListSidebarTitles = true
enableToc = true # single page table of contents, you can replace this param to toc(toc = true)
hideToc = false # Hide or Show toc
tocPosition = "inner" # inner, outer
enableTocSwitch = true # single page table of contents visibility switch
itemsPerCategory = 5 # maximum number of posts shown in the sidebar.
sidebarPosition = "right" # bio, profile component layout position

# footer
showPoweredBy = true # show footer text: Powered by Hugo and Zzo theme
showFeedLinks = true # RSS Feed 
showSocialLinks = true # email, facebook, twitter ...
enableLangChange = true # show button at bottom left of footer.

# service
baiduAnalytics = "" # alternative of google analytics
enableBusuanzi = false # if set true, total page view, total unique visitors show up in the footer.
busuanziSiteUV = true # unique visitors (total number of visitors)
busuanziSitePV = true # site total page view count
busuanziPagePV = true # post view count

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

[socialOptions] # if set, social icons will show up.
  email = "mailto:your@email.com"
  phone = ""
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
  telegram = ""
  steam = ""
  weibo = ""
  douban = ""
  csdn = ""
  gitlab = ""
  mastodon = ""
  jianshu = ""
  zhihu = ""
  signal = ""
  whatsapp = ""

[donationOptions]
  enable = false # if set, the donation button will show up on the single page.
  alipay = "" # Alipay QR Code image (example path: images/donation/alipay-qrcode.png) and put your file at root/static/images/donation/
  wechat = "" # Wechat pay QR Code image (example path: same as above)
  paypal = "" # Paypal URL
  patreon = "" # Patreon URL
  bitcoin = "" # example path: images/donation/bitcoin-code-image.png

[copyrightOptions]
  enableCopyrightLink = false # if set, you can add copyright link
  copyrightLink = ""
  copyrightLinkImage = ""
  copyrightLinkText = ""

# possible share name: ["facebook","twitter", "reddit", "linkedin", "tumblr", "weibo", "douban", "line"]
[[share]]
  name = "facebook"
[[share]]
  name = "twitter"
  username = ""
```

## Gallery

There are two ways to make gallery. You can specify **mode** at front-matter.

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
images: # when mode is one-by-one, images front-matter variable works
  - image: image1.jpg # image path: static/gallery/anygalleryname/image1.jpg
    caption: caption1
  - image: image2.jpg # image path: static/gallery/anygalleryname/image2.jpg
    caption: caption2
    ...
---

```

If you set the mode to one-by-one, the list.html page will use images front-matter variable you set above. If you set the mode to at-once, list.html page will not use front-matter images variable and just read all files under the static/gallery/anygalleryname folder.

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

## Contact Page

Currently available service: [formspree]. Open an issue if you need another service vendor. If you want just a blank page and use a markdown, set the service param empty.

1. Make a file at root/contact/index.md

```yaml
---
title: "Contact"
date: 2019-12-17T23:58:33+09:00
description: Contact page
type: contact
service: formspree
formId: "your@email.com"
---

This is contact page.
```

2. Add contact menu at root/config/_default/menus.en.toml.

```toml
...
[[main]]
  identifier = "contact"
  name = "contact"
  url = "contact"
  weight = 6
```

## Talks Page

Talks page is a listing page of links(video, ppt, event, ...). UI is similar to the archive page. Follow the below steps to make it.

1. Make a file at root/content/talks/_index.md.

```yaml
---
title: "Talks"
date: 2019-12-30T11:14:14+09:00
description: Talks Page
titleWrap: wrap # wrap, nowrap
---
```

2. Next, make some files under the `talks` folder you have created in step 1. If you want to make other link post, then make another file under the `talks` folder.

root/content/talks/myLinks.md

```yaml
---
title: "My Awesome links"
date: 2019-12-31T00:04:50+09:00
publishDate: 2019-12-31
description:
tags:
-
series:
-
categories:
-
---
```

3. Finally, make a menu at your root/config/_default/menus.en.toml file

```toml
[[main]]
  identifier = "talks"
  name = "talks"
  url = "talks"
  weight = 6
```

And we are good to go.

4. Additionally, if you want to use a future date for the talks page, you need more things to do.

    - add config variable named `buildFuture` at root/config/_default/config.toml

    ```toml
    ...
    buildFuture = true
    ...
    ```

    - add publishDate front matter to your md file at root/content/talks/myLinks.md

    ```yaml
    ---
    title:
    date:
    publishDate: 2020-02-20
    ...
    ---
    ...
    ```

## Showcase Page

Showcase page is a listing page of project showcase. Follow the below steps to make it.

1. Make a file at `root/content/showcase/_index.md`.

```yaml
---
title: "Showcase overview" # For SEO
date: 2020-01-19T15:43:38+09:00
description: My portfolio, repos, works overview page # For SEO
enableBio: true # Set to false if you want to hide the bio component.
---
```

2. Make a category folder and a file at `root/content/showcase/hugo/_index.md`. (In my case, hugo is a category)

```yaml
---
title: "Hugo" # category name
date: 2020-01-19T21:04:11+09:00
description: Hugo theme collection # For SEO
category: theme # meta info appeared on a card bottom side. category in category
enableBio: true
---
```

3. Make a file per project.

`root/content/showcase/hugo/my-awesome-project.md`.

```yaml
---
title: "My Awesome Project" # apperared on a card component
date: 2020-01-19T21:13:42+09:00
description: Hello world! This is my awesome project! # apperared on a card component
weight: 1 # card ordering
link: https://github.com/zzossig/hugo-theme-zzo
repo: https://github.com/zzossig/hugo-theme-zzo
pinned: true # appreared on a overview page.
thumb: feature3/css3.png # relative path in static/images
---
```

4. Finally, make a menu at your root/config/_default/menus.en.toml file

```toml
[[main]]
  identifier = "showcase"
  name = "Showcase"
  url = "showcase"
  weight = 7
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

[tags]
other = "태그"

...
```

4. Edit config.toml file.

```bash
defaultContentLanguage = "ko"
defaultContentLanguageInSubdir = true
hasCJKLanguage = true
```

## Customizing

It's a better idea not to modify the Zzo theme's folder if you want future support and upgrade. (You can modify if it doesn't matter) If you want more customizing options, open a new issue.

### custom css

1. Add this line of code to your params.toml file.

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

3. If you want to modify the Zzo theme's default color, you should override the theme style. For example, if you're going to change the body background-color because I set the background-color in #body selector, not in the body tag selector, you should override body background-color there. Body tag selector won't work. And make sure to set !important. After setting the values, restart Hugo.

```css
assets/scss/custom.scss or assets/css/custom.css

...
#body {
  background-color: red !important;
}
...
```

### custom js

1. Add this line of code to your params.toml file.

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

### custom syntax highlighting

1. Make a skin.toml file at root/data folder. Set the theme_dark_chroma, theme_light_chroma, ... params value as you want. Refer this [link](https://xyproto.github.io/splash/docs/all.html). If theme_[xxxx]_chroma value include - or _ like special character, just delete it.
For example, if you want use solarized-dark256 style, set the param like this.

```
root/data/skin.toml

theme_dark_chroma = "solarizeddark256"
```

2. Add a custom style file if you want to change specific colors. [[custom-css](#custom-css)]
Then, override chroma class. You can find this class at themes/zzo/assets/sass/syntax folder.
Example code is like this.

```
root/assets/scss/custom.scss

.chroma {
  background-color: #123456 !important;
}
```

Make sure that !important is necessary. After you changed this param, restart hugo.

### custom header

You may want to change home page header. There are 4 options which is slider, image, text, empty.

1. Set param at config/_default/params.toml(homeHeaderType)

2. Make _index.md file at root/content/_index.md and copy & paste below.

```yaml
---
header:
  - type: text
    height: 200
    paddingX: 50
    paddingY: 0
    align: center
    title:
      - HUGO
    subtitle:
      - The world’s fastest framework for building websites
    titleColor: # #123456, red
    titleShadow: false
    titleFontSize: 44
    subtitleColor: # #123456, red
    subtitleCursive: false
    subtitleFontSize: 16
    spaceBetweenTitleSubtitle: 20
  
  - type: img
    imageSrc: images/header/background.jpg # your image file path: root/static/images/header/background.jpg
    imageSize: cover # auto|length|cover|contain|initial|inherit
    imageRepeat: no-repeat # repeat|repeat-x|repeat-y|no-repeat|initial|inherit
    imagePosition: center # x% y%| xpos ypos| left top| center bottom| ...
    height: 235
    paddingX: 50
    paddingY: 0
    align: center
    title:
      -
    subtitle:
      -
    titleColor:
    titleShadow: false
    titleFontSize: 44
    subtitleColor:
    subtitleCursive: false
    subtitleFontSize: 16
    spaceBetweenTitleSubtitle: 20

  - type: slide
    height: 235
    options:
        startSlide: 0
        auto: 5000 # auto slide delay 5000ms(5sec)
        draggable: true # slide draggable
        autoRestart: true # restart after drag finished
        continuous: true # last to first
        disableScroll: true
        stopPropagation: true
    slide:
      - paddingX: 50
        paddingY: 0
        align: left
        imageSrc: images/header/background.jpg
        imageSize: cover
        imageRepeat: no-repeat
        imagePosition: center
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
        imageSrc: images/header/background.jpg
        imageSize: cover
        imageRepeat: no-repeat
        imagePosition: center
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
        imageSrc: images/header/background.jpg
        imageSize: cover
        imageRepeat: no-repeat
        imagePosition: center
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

3. Change the grid as you want.

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

### custom font

1. Add custom css file

```bash
config/_default/params.toml

...
custom_css = ["css/font.css"]
...
```

Set the above param and add file to assets/css/font.css

2. In your font.css file, add font-face something like this.

```css
@font-face {
    font-family: 'Montserrat';
    src: url('../fonts/montserrat-black.woff2') format('woff2'),
         url('../fonts/montserrat-black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Merriweather';
    src: url('../fonts/merriweather-regular.woff2') format('woff2'),
         url('../fonts/merriweather-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
```

3. Add your fonts file at root/static/fonts/myfont.xxx (If your url in step2 is ('../fonts/myfont.xxx')).

4. Make a font.toml file at root/data/font.toml and make variables as below.

```toml
title_font = "\"Montserrat\", sans-serif"
content_font = "\"Merriweather\", serif"
```

5. Another approach

Make a file at root/layouts/partials/head/custom-head.html and then load font style. 

```html
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean" rel="stylesheet">
```

### custom copyright

If you want to add a link to the footer copyright, not just a text, you can customize it.

1. In your config.toml file, set the copyright param like this.
```toml
...
copyright = This is my {} copyright text
...
```
The {} part will be your copyright link.
2. In your params.toml file, set the copyrightOptions params

```toml
...
[copyrightOptions]
  enableCopyrightLink = false
  copyrightLink = "https://..."
  copyrightLinkImage = "https://..."
  copyrightLinkText = "copyright link text"
```

### custom favicon

Override the default favicon by adding your favicon at root/static folder

## Author

We have some front matters for specifying the author.

```yaml
---
title:
...
author: # author name
authorEmoji: 🤖 # emoji for subtitle, summary meta data
authorImage: "/images/whoami/avatar.jpg" # image path in the static folder
authorImageUrl: "" # your image url. We use `authorImageUrl` first. If not set, we use `authorImage`.
authorDesc: # author description
socialOptions: # override params.toml file socialOptions
  email: ""
  facebook: ""
  ...
---
```

## Favicon

Put your `favicon.ico` file under the static folder. The filename should be `favicon` and the extension should be `ico`.

### Using favicon-genarator

If you want to support mobile favicon, use [favicon-generator](https://www.favicon-generator.org/).

- Make favicons from favicon-generator site.
- Make a folder at `root/static/favicon`
- Unzip the generated favicon to that folder.
- Set the config param `useFaviconGenerator` to `true`

## External Library

If you want use external libraries, this theme currently supporting Katex, MathJax, Mermaid, Flowchart.js, chart.js, viz-graph, wavedrom, js-sequence-diagram. Just add some variable to a front-matter.

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

### alert

```bash
{{< alert theme="warning" >}} # warning, success, info, danger
**this** is a text
{{< /alert >}}
```

### expand

```bash
{{< expand "Expand me" >}}Some Markdown Contents{{< /expand >}}
```

### img

```bash
// path: static/images/whoami/avatar.jpg
{{< img src="/images/whoami/avatar.jpg" title="Image4" caption="Image description" alt="image alt" width="50px" height="50px">}}
```

### notice

```bash
{{< notice success >}} # success, info, warning, error
success
{{< /notice >}}
```

### color

```bash
{{< color "#0000ff" >}}*text*{{< /color >}}
```

### box

```bash
{{< box >}}
Some contents
{{< /box >}}
```

### boxmd

```bash
{{< boxmd >}}
Some markdown contents
{{< /boxmd >}}
```

### code / codes => Tabbed code-block. indentation matters.

`````
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
`````

### tab / tabs => Tabs make it easy to explore and switch between different views

⚠️Becareful that the content in the tab should be different from each other.
The tab makes unique id hashes depending on the tab contents.
So, If you just copy-paste the tabs with multiple times, since it has the same contents, the tab will not work.

`````
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
`````