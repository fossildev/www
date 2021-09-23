---
title:  "FOSSIL pedoman penulisan markdown" # judul artikel [wajib]
date:   2020-06-02 08:51:44 +0700 # waktu artikel ditulis [wajib]
author: piharpi # penuilis [wajib]
editor: candra # penyunting [opsional]
categories: jekyll update pengumuman # tag topic yang relevan dengan judul artikel [wajib]
---

Pedoman penulisan markdown pada FOSSIL. Juga bisa dibaca pada [dokumentasi](https://kramdown.gettalong.org/quickref.html) kramdown,
diwajibkan membuat file markdown(`.md`) pada direktori `_posts` e.g `2020-04-29-judul-artikel.md` dan berikut tata cara penulisanya.

## Tabel daftar konten
```markdown
1. TOC
{:toc}
```

hasilnya :
{: .label}
1. TOC
{:toc}

## Paragraf
```markdown 
Ini adalah contoh paragraf cukup dengan menuliskan pada format markdown
tanpa dengan tanda-tanda apapun otomatis menjadi sebuah paragraf.
```

hasilnya : 
{: .label}

Ini adalah contoh paragraf cukup dengan menuliskan pada format markdown
tanpa dengan tanda-tanda apapun otomatis menjadi sebuah paragraf.

### Italic
```markdown 
Ini adalah contoh paragraf dengan _teks italic_
```

hasilnya : 
{: .label}
Ini adalah contoh paragraf dengan _teks italic_ 

### Bold
```markdown 
Ini adalah contoh paragraf dengan **bold**
```

hasilnya : 
{: .label}
Ini adalah contoh paragraf dengan **bold**

### Strikethrough
```markdown 
Ini adalah contoh paragraf dengan ~~strikethrough~~
```

hasilnya : 
{: .label}
Ini adalah contoh paragraf dengan ~~strikethrough~~

### Link  
```markdown 
Ini adalah contoh paragraf dengan [sebuah link](https://github.com/esemkasa)
```

hasilnya : 
{: .label}
Ini adalah contoh paragraf dengan [sebuah link](https://github.com/esemkasa)

### Code  
```markdown 
Ini adalah contoh paragraf dengan `const number = 10`
```

hasilnya : 
{: .label}
Ini adalah contoh paragraf dengan `const number = 10`

## Kutipan
```markdown
> There are only two hard things in Computer Science: cache invalidation and naming things.
> <small>-- Phil Karlton.</small>
```

hasilnya : 
{: .label}
> There are only two hard things in Computer Science: cache invalidation and naming things.
> <small>-- Phil Karlton.</small>


## Fenced Code Block

{% highlight markdown linenos %}
```jsx
const Button = () => {
  const count, setCount = React.useState(0);
  const clickHandle = () => setCount(count + 1);

  return <button onClick={clickHandle}>Press</button>
}
```
{% endhighlight %}

hasilnya : 
{: .label}
```jsx
const Button = () => {
  const count, setCount = React.useState(0);
  const clickHandle = () => setCount(count + 1);

  return <button onClick={clickHandle}>Press</button>
}
```

{% highlight markdown linenos %}
```diff
-- const number = 10;
++ const number = 20;
```
{% endhighlight %}

hasilnya : 
{: .label}
```diff
-- const number = 10;
++ const number = 20;
```

## Unordered list

```markdown
- [Ruby](https://www.ruby-lang.org/en/downloads/) programming language
- [Git](https://git-scm.com) (version control)
- [Netlify](https://netlify.com) and [Github](https://github.com) account
- [Bundler](https://bundler.io)
```

hasilnya : 
{: .label}
- [Ruby](https://www.ruby-lang.org/en/downloads/) programming language
- [Git](https://git-scm.com) (version control)
- [Netlify](https://netlify.com) and [Github](https://github.com) account
- [Bundler](https://bundler.io)

## Ordered list

```markdown
1. click `new site from git`, then choose `Github`.
1. then choose your repository where is the jekyll sources uploaded.
1. netlify smart enough to configuring, we just need's to click `Deploy site button`.
```

hasilnya : 
{: .label}
1. click `new site from git`, then choose `Github`.
1. then choose your repository where is the jekyll sources uploaded.
1. netlify smart enough to configuring, we just need's to click `Deploy site button`.

## Nested List

```markdown
- List of item
  - Child of parent item
    - Grandchild
  - I'm Sibling
- Another list item
```

hasilnya : 
{: .label}
- List of item
  - Child of parent item
    - Grandchild
  - I'm Sibling
- Another list item

## Callout
Terdapat 4 jenis callout diantaranya adalah default(`.card`), tips(`.card.tips`), info(`.card.info`) dan alert(`.card.alert`)
```markdown
Ini adalah card `.default` You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build <https://github.com> the site to see your changes.
{: .card}
```

hasilnya : 
{: .label}
Ini adalah card `.default` You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build <https://github.com> the site to see your changes.
{: .card}

Ini adalah card `.tips` You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build <https://github.com> the site to see your changes.
{: .card.tips}

Ini adalah card `.info` You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build <https://github.com> the site to see your changes.
{: .card.info}

Ini adalah card `.alert` You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build <https://github.com> the site to see your changes.
{: .card.alert}

## Image/GIF
```markdown
![terminal image](/assets/static/img/terminal_nginx.gif)
```
hasilnya : 
{: .label}
![terminal image](/assets/static/img/terminal_nginx.gif)

Image/GIF dengan caption/description

```markdown
<figure>
  <img src="/assets/static/img/terminal_nginx.gif" alt="terminal">
  <figcaption>
    Fig 2. Mengecek status web server NGINX.
  </figcaption>
</figure>
```
hasilnya : 
{: .label}
<figure>
  <img src="/assets/static/img/terminal_nginx.gif" alt="terminal">
  <figcaption>
    Fig 1. Mengecek status web server NGINX.
  </figcaption>
</figure>

## Related post
```markdown
[Apa itu lisensi MIT?](#link_artikel_disini)
{: .related-post}
```
hasilnya : 
{: .label}
[Apa itu lisensi MIT?](#link_artikel_disini)
{: .related-post}

## Horizontal line
```markdown
---
```
hasilnya :
{: .label}
---

## Table

```markdown
|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|
| Second body     |            |                 |                |
| 2 line          |            |                 |                |
|=================+============+=================+================|
| Footer row      |            |                 |                |
|-----------------+------------+-----------------+----------------|
```
hasilnya :
{: .label}

|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|
| Second body     |            |                 |                |
| 2 line          |            |                 |                |
|=================+============+=================+================|
| Footer row      |            |                 |                |
|-----------------+------------+-----------------+----------------|

## Latex
```markdown
When $$a \ne 0$$, there are two solutions to $$ ax^2 + bx + c = 0 $$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```

hasilnya :
{: .label}
When $$a \ne 0$$, there are two solutions to $$ ax^2 + bx + c = 0 $$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

## Footnotes

Ini sebuah teks.[^1]. yang mana tidak diketahui artinya.[^arti].

[^1]: Bahan tertulis untuk dasar memberikan pelajaran. Kamus Besar Bahasa Indonesia. Diakses pada tanggal 15 Mei 2020. 

[^arti]: Maksud yang terkandung (dalam perkataan, kalimat). Kamus Besar Bahasa Indonesia. Diakses pada tanggal 20 September 2020.