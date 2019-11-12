# Zzo theme for Hugo

Thank you for click me!. Zzo theme is a blog theme for Hugo with free(always), and many features. If you find any bugs, or wanna share your custom color skin, or have some good idea to share with me and others who use this theme, feel free to open [github](https://github.com/zzossig/hugo-theme-zzo/issues) issue or pull request so that I can make this theme better.

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
* [Customizing](#customizing)
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
* [academic theme](https://sourcethemes.com/academic/)
* [overreacted.io](https://github.com/gaearon/overreacted.io)

## Dependency

Zzo theme is using this library.

* jquery@3.4.1
* mark.js
* clipboard.js
* lazysizes
* masonry
* lunr
* jquery.toc
* photoswipe
* prism
* shave.js

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

googleAnalytics = ""
copyright = "©yourcopyright"
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
custom_css = ["css/custom.css", "css/custom.css"]
custom_js = ["js/custom.js"]
myname = "yourname"
whoami = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet cursus massa. Vestibulum eu posuere est. Suspendisse erat purus, mollis in leo quis, hendrerit fringilla felis."

# body
enableBreadcrumb = true
enablePhotoSwipe = true
enableSearch = true
enableMark = true
enableGoToTop = true
enableWhoami = true
summaryShape = "card" # card, classic, compact
archiveGroupByDate = "2006-01" # "2006-01": group by month, "2006": group by year

# sidebar
enableSidebar = true
enableSidebarTags = true
enableSidebarSeries = true
enableSidebarCategories = true
enableToc = true
itemsPerCategory = 5

# comment
enableComment = false
disqus_shortname = ""
commento = false

# footer
showPoweredBy = true
showFeedLinks = true
showSocialLinks = true
enableLangChange = true
enableThemeChange = true
themeOptions = ["dark", "light", "hacker", "solarized", "custom"]
[socialOptions]
  email = "mailto:your@email.com"
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
hugo new gallery/mygallery/index.md
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

### custom font

1. Make a font.toml file in data folder. (data/font.toml)

2. Copy the contents of themes/zzo/data/font.toml file and paste it into the font.toml file you created above.

3. Change the font you want. Make sure that you have imported that font.

4. Once you change the font.toml file, restart hugo.

```toml
data/font.toml example

search_placeholder = "'Montserrat', sans-serif"
summary_title = "'Montserrat', sans-serif"
summary_subtitle = "'Merriweather', serif"
summary_text = "'Merriweather', serif"
taxo_titie = "'Montserrat', sans-serif"
footer_content = "'Montserrat', sans-serif"
header_title = "'Montserrat', sans-serif"
navbar_item = "'Montserrat', sans-serif"
sidebar_title = "'Montserrat', sans-serif"
sidebar_list = "inherit"
page_not_found = "'Montserrat', sans-serif"
gallery_contents = "'Merriweather', serif"
list_title = "'Montserrat', sans-serif"
list_desc = "'Merriweather', serif"
single_title = "'Montserrat', sans-serif"
single_contents = "'Merriweather', serif"

```

### custom header

You may want to change home page header. To do this, just make a file at layouts/partials/header/site-header.html
and edit this file. Don't forget adding grid class. That's it.

```bash
{{ if .IsHome }}
<header class="header">
    ...
    Your custom header here.
    ...
</header>
{{ end }}
```

### custom grid

1. Make a grid.toml file in data folder. (data/grid.toml)

2. Copy the contents of themes/zzo/data/grid.toml file and paste it into the grid.toml file you created above.

3. Change the grid you want.

4. Once you change the grid.toml file, restart hugo.

```toml
data/grid.toml example

grid_max_width = "960px"
grid_main_main_width = "5"
grid_main_main_unit = "fr"
grid_main_side_width = "2"
grid_main_side_unit = "fr"
grid_navbar_height = "50px"
grid_column_gap = "1.5rem"
grid_row_gap = "0"
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
