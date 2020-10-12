# Zzo theme for Hugo

[English](https://github.com/zzossig/hugo-theme-zzo/blob/master/README.md) | 
한국어

🔥🔥🔥
zzo theme을 업데이트한 후 `config.toml` 파일에서 page 변수를 삭제해주세요
```diff
[outputs]
  <del>page = ["HTML", "SearchIndex"]</del>
```
검색 관련 인덱스 생성위치를 변경했습니다
🔥🔥🔥

클릭해 주셔서 감사합니다. Zzo theme은 많은 기능을 지원하고있고 있습니다. 기술 블로그를 운영하기에 최적화 되어있습니다!(적어도 제생각엔...)
Zzo theme을 이용할 시 가장 매력적인 포인트 한가지는, 한글로 저와 소통할 수 있다는 점? 입니다. 

## Documentation

영문버전 도큐먼트
[https://zzodocs.netlify.com/docs/](https://zzodocs.netlify.com/docs/)

## Table of contents

* [기능](#features)
* [최소 휴고 버전](#minimum-hugo-version)
* [설치](#installation)
* [업데이트](#updating)
* [예제 사이트 돌리기](#run-example-site)
* [설정](#configuration)
* [갤러리](#gallery)
* [컨택 페이지](#contact-page)
* [토크 페이지](#talks-page)
* [쇼케이스 페이지](#showcase-page)
* [다국어](#multi-language)
* [저자](#author)
* [Favicon](#favicon)
* [커스터마이징](#customizing)
* [외부 라이브러리 사용](#external-library)
* [Shortcodes](#shortcodes)

## Features

* 다양한 스킨 지원(dark, light, solarized, ...)
* 모바일 메뉴
* 최신 HTML5, CSS 기술 이용
* 심플한 블로그
* 검색 엔진 최적화 (SEO)
* 다국어 지원 (i18n)
* 반응형 디자인
* RSS feed 지원
* 검색 (지원 예정)
* 갤러리 지원
* 코드 하이라이트
* 토크 페이지
* 쇼케이스 페이지

## Minimum Hugo version

최소 요구 Hugo 버전은 0.60.0 입니다.

## Installation

우선 설정 파일을 만드셔야 합니다. 설정파일이 없거나 설정값이 잘못 될 경우, 실행이 안되실 수 있습니다.
[설정](#configuration) 링크를 참조하여 설정파일을 만들어주세요.

설정 파일을 다 만드셨으면, theme 폴더에 zzo 폴더를 만들고, 그곳에 이 레포지토리를 다운로드 하신 파일을 복사 붙여넣기 하시면 됩니다.
이렇게 파일을 복사 붙여넣기 하시면, 나중에 제가 여러가지 버그나 이슈를 업데이트 했을 때, 님이 만드신 블로그를 최신 Zzo theme으로
업데이트 하고 싶으시면 해당 Zzo theme을 지우고 다시 다운로드 한 다음, 복붙하시면 되겠습니다.

```bash
$ git clone https://github.com/zzossig/hugo-theme-zzo.git themes/zzo
```

깃헙을 이용하여 블로그를 관리하신다면, 섭모듈을 사용하여 Zzo theme을 쉽게 최신버전으로 유지하실 수 있습니다.

루트 폴더에서 다음 코드를 입력해주시면 submodule로써 Zzo theme이 설치됩니다:

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

0. 저같은 경우, 디렉토리 하나를 만들고 그곳에 다음과같이 사이트를 만듭니다.

```bash
hugo new site .
```

1. 0번 단계에서 만드신 디렉토리로 들어가주세요.
config.toml 파일이 보이신다면, 과감하게 지워주세요. 아래 단계들은 제가 사용하는 config 파일들입니다.
모두 그냥 복사, 붙여넣기 해서 파일을 만드시면 되는데, 귀찮으신 분들은 exampleSite 폴더에 있는 config 폴더를
루트 디렉토리에 그냥 복사 붙여넣기 하셔도 됩니다.
 
아래는 설정 파일 구조구요. _default폴더의 _(언더스코어) 뺴먹지 마세요!

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
notAllowedTypesInHomeFeed = ["about", "archive", "contact", "talks", "showcase", "publication", "presentation", "resume", "gallery"]
enablePinnedPosts = true # show pinned posts first in the main view

viewportSize = "normal" # widest, wider, wide, normal, narrow
enableUiAnimation = true
hideSingleContentsWhenJSDisabled = false
minItemsToShowInTagCloud = 1 # Minimum items to show in tag cloud

# header
homeHeaderType = "text" # text, img, slide, typewriter
hideHomeHeaderWhenMobile = false

# menu
showMobileMenuTerms = ["tags", "categories", "series"]

# navbar
enableThemeChange = true # site color theme

# body
enableBreadcrumb = true # breadcrumb for list, single page
enableSearch = true # site search with fuse
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
bioImageUrl = "" # image url like "http//..." or "images/anyfoldername/mybioimage.jpg" If not set, we find a avatar image in root/static/images/whoami/avatar.(png|jpg|svg)
useGravatar = false # we use this option highest priority
location = "Seoul, Korea"
organization = "Hugo"
link = "https://github.com/zzossig/hugo-theme-zzo"

# sidebar
enableBio = true # in home page sidebar
enableBioImage = true # in home page sidebar
enableSidebar = true # Set to false to create the full width of the content.
enableSidebarTags = true # if you want to use tags.
enableSidebarSeries = true
enableSidebarCategories = true
enableHomeSidebarTitles = true
enableListSidebarTitles = true
enableToc = true # single page table of contents, you can replace this param to toc(toc = true)
hideToc = false # Hide or Show toc
tocPosition = "inner" # inner, outer
tocFolding = false
enableTocSwitch = true # single page table of contents visibility switch
itemsPerCategory = 5 # maximum number of posts shown in the sidebar.
sidebarPosition = "right" # bio, profile component layout position
tocLevels = ["h2", "h3", "h4"] # minimum h2, maximum h4 in your article
enableSidebarPostsByOrder = false # another lists in the sidebar

# footer
showPoweredBy = true # show footer text: Powered by Hugo and Zzo theme
showFeedLinks = true # RSS Feed 
showSocialLinks = true # email, facebook, twitter ...
enableLangChange = true # show button at bottom left of footer.

# service
googleTagManager = "" # GTM-XXXXXX
baiduAnalytics = "" # alternative of google analytics
enableBusuanzi = false # if set true, total page view, total unique visitors show up in the footer.
busuanziSiteUV = true # unique visitors (total number of visitors)
busuanziSitePV = true # site total page view count
busuanziPagePV = true # post view count

# rss
updatePeriod = "" # Possible values: 'hourly', 'daily', 'weekly', 'monthly', or 'yearly'.
updateFrequency = ""
fullContents = false

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
  message = ""      # Optional
  link = ""         # Optional

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
  matrix = ""
  xmpp = ""
  dev-to = ""
  gitea = ""
  google-scholar = ""
  twitch = ""

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

# possible share name: "facebook","twitter", "reddit", "linkedin", "tumblr", "weibo", "douban", "line", "whatsapp", "telegram"
[[share]]
  name = "facebook"
  username = ""
[[share]]
  name = "twitter"

[[footerLinks]]
  name = ""
  link = ""
[[footerLinks]]
  name = ""
  link = ""
```

## Gallery

갤러리는 두가지 모두가 존재해요. 하나씩 올리거나 한번에 올리거나.

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

갤러리를 만드시려면 우선 type을 갤러리로 하셔야 하구요, mode를 one-by-one으로 하시면 images에 이미지를 위와 같이 하나씩 입력해주셔야 해요. 
그럼 이미지가 위에 적힌 순서대로 나타날거에요. mode를 at-once로 하시면, static 폴더에 있는 이미지를 전부 불러올거에요. 예를들어 위의 코드에서 mode를 at-once로 했다면,
static/gallery/anygalleryname 폴더에 있는 이미지를 전부 읽어 갤러리 페이지에 나타날 거에요.

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

현재 이용 가능한 서비스: [formspree]. 다른 서비스를 이용하고 싶으시면 새 이슈를 만들어주세요. 서비스 파라미터를 빈값으로 설정하면 마크다운으로 해당 페이지를 채울 수 있습니다.

1. 파일을 다음 경로에 만들어줍니다. root/content/contact/index.md

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

2. 컨택트 메뉴를 다음 경로에 추가해줍니다. root/config/_default/menus.en.toml.

```toml
...
[[main]]
  identifier = "contact"
  name = "contact"
  url = "contact"
  weight = 6
```

## Talks Page

Talks 페이지는 아카이브 페이지와 유사한 UI의 페이지입니다. 비디오, 피티 등등의 링크를 모아서 보여주는 용도로 씁니다. Talks 페이지를 추가하려면 아래의 순서대로 따라해주세요.

1. 파일을 root/content/talks/_index.md. 경로에 다음과 같이 만듭니다.

```yaml
---
title: "Talks"
date: 2019-12-30T11:14:14+09:00
description: Talks Page
titleWrap: wrap # wrap, nowrap
---
```

2. 또 다른 파일을 만들어 줍니다. 이곳에 내용을 넣어주세요. 

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

3. 마지막으로 메뉴만 다음 과 같이 만들어 주면 됩니다. 

root/config/_default/menus.en.toml file

```toml
[[main]]
  identifier = "talks"
  name = "talks"
  url = "talks"
  weight = 6
```

4. 추가적으로, date를 미래의 날짜를 쓰고 싶으시면 다음 단계를 따라서 해주세요.

    - 다음 경로의 설정파일(root/config/_default/config.toml)에서 `buildFuture`를 추가해주세요.

    ```toml
    ...
    buildFuture = true
    ...
    ```

    - talks폴더의 마크다운 파일에 `publishDate`를 추가해주세요. root/content/talks/myLinks.md

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

Showcase 페이지는 프로젝트를 전시하는 페이지 입니다. 페이지를 만드시려면 아래 단계를 진행해주세요.

1. 다음 경로에 파일을 만듭니다. `root/content/showcase/_index.md`.

```yaml
---
title: "Showcase overview" # For SEO
date: 2020-01-19T15:43:38+09:00
description: My portfolio, repos, works overview page # For SEO
enableBio: true # Set to false if you want to hide the bio component.
---
```

2. 다음 경로에 카테고리 폴더와 파일을 만듭니다. `root/content/showcase/hugo/_index.md` file. (저의 경우, hugo가 카테고리 폴더입니다.)

```yaml
---
title: "Hugo" # section name
date: 2020-01-19T21:04:11+09:00
description: Hugo theme collection # For SEO
category: theme # meta info appeared on a card bottom side. category in category
enableBio: true
---
```

3. 프로젝트당 한개의 md파일을 만들어 주세요.

`root/content/showcase/hugo/my-awesome-project.md`

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

4. 마지막으로, 메뉴를 등록해주세요.

`root/config/_default/menus.en.toml`

```toml
[[main]]
  identifier = "showcase"
  name = "Showcase"
  url = "showcase"
  weight = 7
```

## Multi Language

Zzo theme의 기본 언어는 영어입니다. 한국어로 바꾸시려면 다음과 같이 해주세요.

1. 우선 메뉴파일을 만듭니다.

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

2. content 폴더에 마크다운 파일을 작성하실 때, 확장자 앞에 ko를 붙여주세요!

```bash
hugo new about/index.ko.md
hugo new posts/markdown-syntax.ko.md
...
```

3. i18n 파일을 만듭니다.

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

4. 설정 파일에 기본언어 항목 값을 변경해줍니다.

```bash
defaultContentLanguage = "ko"
defaultContentLanguageInSubdir = true
hasCJKLanguage = true
```

## Customizing

기본적으로 theme 폴더안에 있는 내용은 안건드시는게 좋지만, 건드신다면 나중에 theme을 업데이트 하는게 복잡해 질 수도 있습니다. 현재 상태로 별로 업데이트가 필요 없다고 느끼신다면 theme에 있는 파일을 마음대로 고치셔도 됩니다. 그게 아니라면 아래에 있는 방식으로 커스터마이징 하시기를 추천드립니다.

추가로, custom css나 custom js를 아래의 방식대로 이용하시면, 페이지 로드 속도가 약간 더 느려지는 것을
발견했습니다.

### custom css

1. config 폴더의 params.toml 파일에 아래와같이 커스텀 스타일 파일을 명시해주세요.

```bash
config/_default/params.toml

...
custom_css = ["css/custom.css", "scss/custom.scss", ...]
...
```

2. 위 설정파일에 명시한 대로 실제 파일을 만들어 주세요.

```bash
assets/scss/custom.scss
assets/css/custom.css
```

3. 만약 특정 색상을 변경하고 싶으시면, 위에 만든 커스텀 스타일 파일에 해당 부분의 스타일을 오버라이드 해줘야 합니다. 예를들어 backdrop 색상을 변경하고자 하시면, 다음과 같이 해주셔야 합니다.

```css
assets/scss/custom.scss or assets/css/custom.css

...
#body {
  background-color: red !important;
}
...
```

### custom js

1. config 폴더의 params.toml 파일에 아래와같이 커스텀 파일을 명시해주세요.

```bash
config/_default/params.toml

...
custom_js = ["js/custom.js", ...]
...
```

2. 실제 파일을 생성해 주시구요.

```bash
assets/js/custom.js
```

### custom syntax highlighting

1. root/data 폴더에 skin.toml파일을 만들어주세요. theme_dark_chroma, theme_light_chroma, ... 파라미터의 항목의 값을 원하시는 코드 하이라이트 테마값으로 변경해주세요. [이 링크](https://xyproto.github.io/splash/docs/all.html)를 참조해서 값을 변경하시면 됩니다. 만약 theme_[xxxx]_chroma 값에 - 나 _ 같은 특수문자가 있다면 지워주세요.
예를들어, solarized-dark256 값을 입력하시려면, 다음과 같이 해주세요.

```
root/data/skin.toml

theme_dark_chroma = "solarizeddark256"
```

2. 특정 색상을 변경하고 싶으시다면, [[custom-css](#custom-css)]에서 만든 파일에 chroma class를 오버라이드 해야합니다. 잘 모르겠으면 문의주세요!

```
root/assets/scss/custom.scss

.chroma {
  background-color: #123456 !important;
}
```

### custom header

홈페이지에서 헤더 부분에 4가지 종류의 헤더를 입힐 수 있습니다. 슬라이더, 이미지, 텍스트, 그리고 아무것도 입력 안하시면 빈공간이 됩니다.

1. config/_default/params.toml 설정파일에 homeHeaderType 값을 변경해주세요. 가능한 값은 slide, img, text, typewriter입니다.

2. root/content/_index.md에 _index.md 파일을 만들어주세요 그리고 아래 내용을 복붙해주세요.

3. 변수의 이름만으로 의미가 전달된다고 생각합니다. 값을 하나씩 변경해보면서 원하시는 대로 커스터마이징 해주세요.

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

### custom grid

1. 폴더에 grid.toml 파일을 만들어주세요. (data/grid.toml)

2. themes/zzo/data/grid.toml 파일에 있는 내용을 위에서 만든 파일에 복붙해주세요.

3. 원하시는 대로 값을 변경해주세요.

4. 변경 후, 휴고를 재시작 해주세요.

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

1. 커스텀 css 파일을 만들어주세요.

```bash
config/_default/params.toml

...
custom_css = ["css/font.css"]
...
```

2. font.css 파일에, font-face를 아래와 같이 만들어주세요.

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

3. root/static/fonts/myfont.xxx 폰트 파일을 static 폴더에 넣어주세요. (If your url in step2 is ('../fonts/myfont.xxx')).

4. root/data/font.toml 에 font.toml 파일을 만들어주세요. 그리고 아래와 같이 내용을 입력해주세요.

```toml
title_font = "\"Montserrat\", sans-serif"
content_font = "\"Merriweather\", serif"
```

5. 다른 방식

root/layouts/partials/head/custom-head.html 경로에 파일을 만드시고 폰트를 그곳에서 로드해주세요.

```html
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean" rel="stylesheet">
```

### custom copyright

footer의 저작권 텍스트에 링크를 넣고 싶으면 다음과 같이 커스터마이징 하면 됩니다.

1. 설정 파일인 config.toml 에서 copyright 파라미터 값을 설정해주세요.
```toml
...
copyright = This is my {} copyright text
...
```
{} 로 쓰여진 부분이 링크가 들어갈 부분입니다.
2. 설정 파일인 params.toml 에서 copyrightOptions 파라미터 값을 설정해주세요.

```toml
...
[copyrightOptions]
  enableCopyrightLink = false
  copyrightLink = "https://..."
  copyrightLinkImage = "https://..."
  copyrightLinkText = "copyright link text"
```

### custom favicon

root/static 폴더에 파비콘을 넣어서 테마의 favicon을 overriding 하시면 됩니다.

## Author

포스트의 저자에 대한 정보를 front matter를 통해서 명시할 수 있습니다.

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

`favicon.ico`라는 파일을 루트 디렉토리의 static 폴더에 넣어주세요. 파일 이름과 확장자가 정확히 `favicon.ico`여야 합니다.

### Using favicon-genarator

모바일 환경을 고려하신다면 [favicon-generator](https://www.favicon-generator.org/) 사이트에서 파비콘을 만들어주세요.

- 위의 사이트에서 파비콘을 만들어주세요.
- `root/static/favicon`경로에 폴더를 만들어주세요.
- 해당 폴더에 파비콘을 풀어주세요.
- params.toml 파일에 `useFaviconGenerator`의 값을 `true`로 바꿔주세요.

## External Library

현재 지원하는 외부 라이브러리는 Katex, MathJax, Mermaid, Flowchart.js, chart.js, viz-graph, wavedrom, js-sequence-diagram 입니다. front-matter에 값을 넣어주시면 해당 라이브러리가 로드됩니다.

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

### code / codes => 코드를 여러 버전으로 제공할 때 쓰세요. 들여쓰기 잘못하면 이상하게 나와요.

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

### tab / tabs => 여러 버전의 뷰를 제공할 때 쓰세요

탭을 만들 때, 각 탭마다 안의 내용에 따라 고유 아이디를 부여하기 때문에, Tab 안에 있는 내용이 서로 달라야합니다.

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