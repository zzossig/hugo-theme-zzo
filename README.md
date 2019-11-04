# Zzo theme for Hugo

**Zzo** theme made for bloggers.

It uses HTML5 with a modern CSS grid and flex layout. Recent versions of all the mayor browsers support it, see [Can I use css grid](http://caniuse.com/#search=grid).

## Table of contents

* [Features](#features)
* [Reference](#reference)
* [Dependency](#dependency)
* [Minimum Hugo version](#minimum-hugo-version)
* [Installation](#installation)
* [Updating](#updating)
* [Run example site](#run-example-site)
* [Configuration](#configuration)
* [Layout](#layout)
* [Gallery](#gallery)
* [Multi Language](#multi-language)
* [Sub Theme](#sub-theme)
* [Shortcodes](#shortcodes)


## Features

* Multiple sub themes(dark, light, solarized, hacker)
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
* Lazy image load with lazysizes

## Reference

I have referenced:

* [zen theme](https://github.com/frjo/hugo-theme-zen)
* [docdock theme](https://github.com/vjeantet/hugo-theme-docdock)
* [learn theme](https://github.com/matcornic/hugo-theme-learn/)
* [overreacted.io](https://github.com/gaearon/overreacted.io)

## Dependency

Zzo theme is using this library.

* jquery@3.4.1
* mark.js
* clipboard.js
* fetch-inject
* lazysizes
* masonry
* lunr
* jquery.toc
* photoswipe
* prism
* shave.js
* perfect-scrollbar

## Minimum Hugo version

Hugo version 0.58.0 or higher is required.

## Installation

First of all, You need to add config files.
Follow the [Configuration](#configuration) step.

You can download and unpack the theme manually from Github but it's easier to use git to clone the repo.

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

From the root of themes/zen/exampleSite:

```bash
hugo server --themesDir ../..
```

## Configuration

1. config folder structure

```bash
root
├── config
│   ├── _default
│   │   ├── config.toml
│   │   ├── languages.toml
│   │   ├── menus.en.toml
│   │   ├── menus.ko.toml
│   │   ├── params.toml
```

2. config.toml

```bash
baseURL = "http://example.org/"
title = "Hugo Zzo Theme"
theme = "zzo"

defaultContentLanguage = "en"
defaultContentLanguageInSubdir = false
hasCJKLanguage = false

summaryLength = 70

googleAnalytics = ""
copyright = "MIT©zzossig"
timeout = 10000
enableEmoji = true
paginate = 7
rssLimit = 100

[outputs]
  home = [ "HTML", "RSS", "JSON" ]

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

This example file is the zzo theme's default menu options. You should edit yours.

```bash
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

[[main]]
  identifier = "gallery"
  name = "gallery"
  url = "/gallery"
  weight = 3

[[main]]
    parent = "gallery"
    name = "cartoon"
    url = "/gallery/cartoon"

[[main]]
    parent = "gallery"
    name = "photo"
    url = "/gallery/photo"

[[main]]
    identifier = "posts"
    name = "posts"
    url = "/posts/"
    weight = 4

[[main]]
  identifier = "notes"
  name = "notes"
  url = "/notes/"
  weight = 5
```

5. params.toml

```bash
description = "The Zzo theme for Hugo example site."

# body
enableToc = true
enableBreadcrumb = true
enableCustomScrollbar = true
enablePhotoSwipe = true
enableSearch = true
enableMark = true

# sidebar
enableSidebarTags = true
enableSidebarSeries = true
enableSidebarCategories = true

# footer
showPoweredBy = true
showFeedLinks = true
showSocialLinks = true
enableLangChange = true
enableThemeChange = true
themeOptions = ["dark", "light", "hacker", "solarized"]
[socialOptions]
  facebook = "http://example.org/"
  twitter = "http://example.org/"
  github = "http://example.org/"
  stack-overflow = ""
  instagram = ""
  google-plus = ""
  youtube = ""
  medium = ""
  tumblr = ""
  linkedin = ""
  pinterest = "http://example.org/"
  stack-exchange = ""
```

## Layout

### CSS grid for layout

Modern CSS grid is the easiest and cleanest way to layout your pages.

The CSS grid layout are in `assets/sass/layout/_grid.scss`. A lot can be done by just reordering "grid-template-rows". 

#### grid structure

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

Follow the steps below if you want to make gallery

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
│   │   ├── mygallery
```

3. Make a index.md file under the sub folder using this command

```bash
hugo new content/gallery/mygallery/index.md
```

4. Put your images in static folder

```bash
root
├── static
│   ├── gallery
│   │   ├── mygallery
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

## Sub Theme

If you don't like the color that I choose, you can make your own sub theme.

1. Make your theme file

```bash
root
├── assets
│   ├── sass
│   │   ├── themes
│   │   │   ├── _yourtheme.scss
```

```scss
assets/sass/themes/_yourtheme.scss
$yourtheme: (
    footer-background-color: #403E41,
    footer-color: #bdbdbd, 
    link: #FFD866,
    link-hover: #FF6188,
    title-color: #ffd866,
    meta-color: #FCFCFA,
    ....
);
```

2. Import your theme file inside _theme.scss file

```scss
@import 'dark';
@import 'light';
@import 'hacker';
@import 'solarized';
@import 'yourtheme';

$themes: (
  dark: $dark,
  light: $light,
  hacker: $hacker,  
  solarized: $solarized,
  yourtheme: $yourtheme,
);
```

3. Edit config file to expose your theme in dropdown component.

```bash
config/_default/params.toml
...
themeOptions = ["yourtheme", "dark", "light", "hacker", "solarized"]
...
```

4. [optional] Add prism file for highlighting code

```bash
root
├── assets
│   ├── sass
│   │   ├── prism
│   │   │   ├── _yourtheme.scss
```

```scss
// assets/sass/prism/_yourtheme.scss

.theme__yourtheme {
  ...
}

// assets/sass/prism/_prism.scss

@import 'dark';
@import 'light';
@import 'hacker';
@import 'solarized';
@import 'yourtheme';
```

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