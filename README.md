# 996db.ICU 996 数据库

The great 996 overtime culture databases of chinese companies.

盛行 996 加班文化的中国公司数据库,数据以 Markdown 作为载体，VuePress 提供简单的搜索服务。

这个站点是 [996.ICU](https://996.icu) 的一个声援站点。 

这个一个并非法律意义严肃的站点，为中国式加班提供一个泛娱乐式吐槽信息聚合平台，请酌情看待。

This site is built with [VuePress](https://vuepress.vuejs.org). 

VuePress 提供了简单的搜索功能可以很便捷搜索到信息。

![guide](guide.jpg)

## 贡献指南 

你只需要编写好 markdown 即可，提交 PR 即可，VuePress 会自动管理好一切并提供一个简洁的搜索功能。

请将贡献的 markdown 汇总到 `docs/dbs` 目录下面即可。

## 开设栏目

所有数据均位于 `docs/dbs` 系统主要设置了 4 个栏目，未来或许有调整。初步计划平均 100 条数据分隔一个目录。

 * 公司数据库 (`docs/dbs/companys/1/1.md`)
 * 生存指南 (`docs/dbs/guides/1/1.md`)
 * 加班故事会 (`docs/dbs/storys/1/1.md`)
 * 头条新闻 (`docs/dbs/toutiao/1/1.md`)

对应的网址

 * https://996db.icu/dbs/companys/1/1.html
 * https://996db.icu/dbs/guides/1/1.html
 * https://996db.icu/dbs/storys/1/1.html
 * https://996db.icu/dbs/toutiao/1/1.html

## Development 开发

Start a dev server at `localhost:8088`:

贡献不需要运行本站点，只需要编写好 Markdown 文章即可。

```
& yarn add vuepress@next -D 
$ yarn run dev
& sh ./init.sh # 放开注释初始化站点 
```

![site](site.jpg)

## Publish 发布

You can publish your modify by use the command:

Markdown 编写好了，作为贡献者不需要执行命令，这个仅给开发者使用。后面接入 travel-ci 自动发布。

```
sh ./deploy.sh
```
