---
layout: post
title: Metodologi BEM dan finally everybody knows what you did.
date: 2020-04-26 01:00 +0700
author: piharpi # penuilis [wajib]
editor: candra # penyunting [opsional]
modified: 2020-05-02 09:20 +0700
description: Konvensi penamaan suatu hal pada pemrograman — memang terkadang menjadi masalah, sering membuat kerumitan programmer dan koléga-nya, termasuk memberi nama class selector CSS, hal yang sepele tapi ternyata bisa menjadi senjata makan tuan ketika bekerja dengan skala file CSS yang besar.
tag:
  - css
  - frontend
  - cleancode
image: /metodologi-bem-css/ilustrasi-bem-css.png
---

> There are only two hard things in Computer Science: cache invalidation and naming things.
> -- Phil Karlton.

## TL;DR

Konvensi penamaan suatu hal pada pemrograman — memang terkadang menjadi masalah, sering membuat kerumitan programmer dan koléga-nya, termasuk memberi nama class selector CSS, hal yang sepele tapi ternyata bisa menjadi senjata makan tuan ketika bekerja dengan skala file CSS yang besar.

Sering terjadi; suatu ketika membuka file project yang semula kita paham dengan baris kode yang ditulis; seketika juga lupa apa maksud baris kode tersebut, kemungkinan dikarenakan struktur kode yang berantakan, penamaan class selector yang tidak memilki arti/makna yang jelas dan juga tidak memiliki kekonsistenan gaya penulisan, sehingga hanya Tuhan saja yang mengetahui maksud baris kode tersebut.

Beruntungnya terdapat beberapa metodologi CSS yang bisa digunakan untuk mengatasi masalah di atas yaitu; SMACSS, OOCSS, SUITCSS, Atomic dan **BEM** yang mana akan dibahas tulisan ini.

Metodologi BEM hadir bertujuan untuk menyelesaikan permasalahan di atas yaitu *naming convention*/konvensi penamaan dan struktur pada classes di HTML dan CSS, sehingga kode dapat dipahami dengan mudah oleh developer, BEM ini [dikembangkan](http://bem.info) oleh Yandex perusahaan teknologi asal Rusia, BEM termasuk metode yang sering dipakai para developer saat ini karena memilki beberapa benefits: modularity, reusabililty dan structure.

#### Dive in BEM

BEM sendiri merupakan singkatan dari **B**lock, **E**lement, **M**odifier dari **tiga kata** tersebut miliki konsep kerja masing-masing, namun sebelum menjelaskan konsep itu, saya akan memberikan ilustrasi pengimplementasian BEM supaya lebih mudah dipahami.

---

Katakanlah saya akan membuat sebuah komponen yang saya beri nama **card** yang mana komponen ini memiliki gambar **background,** user **avatar,** **deskripsi** singkat dan **footer** yang berisi external **link** (github, twitter), berikut ini ilustrasi dalam bentuk hand draw.

<figure>
  <img src="/metodologi-bem-css/bem-css.png" alt="Konsep yang akan diterapkan dengan BEM CSS.">
  <figcaption>Fig 1. Konsep yang akan diterapkan dengan BEM CSS.</figcaption>
</figure>

Dari gambar di atas saya akan menjelaskan mana yang bagian block, element dan modifier, berikut ini penjelasanya:

**Block** merupkan entity yang berdiri sendiri, memiliki makna dirinya sendiri, pada gambar di atas bahwa card bertindak sebagai wrapper(pembungkus) dari element yang didalamnya, aturan penamaan block ialah `.namablock`, maka block card menjadi `.card`

---

**Element** bagian dari **Block** yang tidak berdiri sendiri dan secara _semantic_ bergatung pada **Block**, contoh pada gambar di atas : background, avatar, title, description, footer merupakan bagian-bagian dari `.card`, karena posisinya berada didalam **Block** `.card`, aturan penamaan menggunakan double underline(\_\_) setelah nama block diikuti nama element `.namablock__namaelement` maka masing-masing element tersebut `.card__background` `.card__avatar` `.card__title` `.card__description` `.card__footer`.

---

**Modifier** sebuah state yang ditugaskan untuk melakukan pengubahan _behaviour_ (bentuk, penampilan, ukuran) dari **Block** ataupun **Element**. Katakanlah saya ingin mengubah penampilan yang semula avatar kotak menjadi avatar berbentuk radius circle/melingkar, aturan penamaan modifier ini menggunakan double hyphen(\-\-) setelah nama **Block** atau juga **Element,** dan diikuti nama modifiernya `.namablock__namaelement--namamodifier` maka yang dihasilkan `.card__avatar--circle`.

**\*)** Kita bisa membuat [skema penamaan sendiri](https://en.bem.info/methodology/naming-convention/#your-naming-system), yang terpenting skema tersebut dapat membedakan antara block, element, modifier, yang mana sudah menjadi ketentuan dari metodologi BEM, pada tulisan ini skema penamaan mengacu pada [Two Dashes Style](https://en.bem.info/methodology/naming-convention/#two-dashes-style).

<figure>
  <img src="/metodologi-bem-css/ilustrasi-bem-css.png" alt="Ilustrasi implementasi BEM CSS.">
  <figcaption>Fig 2. Ilustrasi implementasi BEM CSS.</figcaption>
</figure>

Jika ilustrasi di atas kita tuliskan di CSS, hasil penyusunan struktur class selector akan lebih terlihat tegas, mempunyai makna yang jelas, karena setiap class selector memilki peran dan saling berkaitan.

```scss
// Block tanpa ada simbol apapun,
// sebagai inti komponen
.card {}

// Element adalah bagian dari Block
// Element tanda underscore 2 kali
// diikuti nama element setelah block
.card__background {}
.card__avatar {}
.card__title {}
.card__description {}
.card__footer {}

// Block lagi
.link {}

// Modifier mengubah behaviour Block atapun Element
// Penamaan Block dengan Modifier,
// 2 hyphens setelah block ataupun setelah element
.link--blue {}
.link--light {}

// Block dan Element dan Modifier jika digabung
.card__avatar--circle {}
.card__avatar--rounded {}
```

## Pros and Cons

**Pro,** BEM jelas less-confusing, dengan adanya **Block** sebagai inti komponen(wrapper), **Element** bagian dari block, dan **Modifier** sebagai pengubah behaviour, kita bisa mengerti peran masing-masing class selector dan setiap class selector memilki penamaan *unique/*unik, sehingga kita tidak lagi mengalami konflik dengan nama class selector yang lain (**Modularity**).

Jika suatu nama block sudah tersedia, maka seharusnya itu dapat digunakan kembali sehingga tidak terjadi duplikasi nama class selector, juga memiliki gaya penulisan yang konsisten dan akan mengurangi jumlah baris css yang ditulis (**Reusabilty**).

Struktur gaya penulisan nama class selector yang sederhana tetapi jelas, mempermudah developer untuk bisa mengingat kembali kode yang ia tulis ataupun pada saat prosses debugging (**Structure**).

---

**Kontra,** harus melakukan _nesting/repeated_ penamaan, dan harus memberikan double-underscore(\_\_) atau double-hyphen(\-\-) pada saat pemberian nama class selector; yang mana beberapa orang tidak menyukai, dan suatu saat nama class selector akan semakin panjang tergantung pada nama block dan elemen yang digunakan.

---

**Solusi Kontra,** dapat diatasi dengan menggunakan preprocessor [Sass](https://sass-lang.com/), sehingga selector tidak terlalu panjang, akan terlihat lebih rapi dan lebih tersetruktur, namun underscore dan hyphen sebagai pembeda antara block, element, modifier harus tetap digunakan yang mana bagian dari [konsep](https://en.bem.info/methodology/key-concepts/) BEM.

```scss
.card {
  &__background {}
  &__avatar {
    &--circle {}
    &--rounded {}
  }
  &__title {}
  &__description {}
  &__footer {}
}

.link {
  &--blue {}
  &--light {}
}
```

Implementasi class selector yang sudah dibuat pada HTML, bisa ditebak apa yang terjadi dengan `.card__avatar--circle`? dapat dijelaskan bahwa modifier `--circle` akan mengubah element `__avatar` yang dimiliki oleh block `.card` menjadi berbentuk bulat, cukup _meaningful_ bukan?

```html
<!-- Block .card sebuah inti component card -->
<div class="card">
  <!-- Element .card__background bagian dari block .card -->
  <div class="card__background"></div>

  <!-- Element .card__avatar bagian dari block .card -->
  <!-- Modifier .card__avatar--circle 
  mengubah bentuk Element .card__avatar menjadi bulat -->
  <img
    class="card__avatar card__avatar--circle"
    src="https://harpi.rocks/assets/img/avatar.jpg"
    alt="Mahendrata Harpi"
  />

  <!-- Element .card__title bagian dari block .card -->
  <h1 class="card__title">Mahendrata Harpi</h1>

  <!-- Element .card__description bagian dari block .card -->
  <p class="card__description">
    He's write in Bahasa about what interests him and as a journal for
    documentation things that he learned.
  </p>

  <!-- Element .card__footer bagian dari block .card -->
  <div class="card__footer">
    Follow me on

    <!-- Block .link component -->
    <!-- Modifier .link--light mengubah warna .link menjadi putih -->
    <a
      class="link link--light"
      href="http://github.com/piharpi"
      target="_blank"
      rel="noopener noreferrer"
      >GitHub</a
    >
    or
    <!-- Block .link component -->
    <!-- Modifier .link--blue mengubah warna .link menjadi biru -->
    <a
      class="link link--blue"
      href="http://twitter.com/piharpi"
      target="_blank"
      rel="noopener noreferrer"
      >Twitter</a
    >
  </div>
</div>
```

## Output Learning

Dibawah ini merupakan hasil komponen card yang saya buat berdasarkan konsep di atas, sengaja tidak saya lampirkan CSS karena terlalu panjang nantinya, namun hasil dan source code bisa diakses [disini](https://codesandbox.io/s/bem-css-y55p2?file=/index.html) atau playground dibawah ini.


<iframe
     src="https://codesandbox.io/embed/bem-css-y55p2?autoresize=1&fontsize=14&hidenavigation=1&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="BEM CSS"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<figcaption>Embed Hasil dari metodologi BEM CSS </figcaption>

### Conclusion

BEM adalah sebuah metode _naming convention_ yang bertujuan menulis secara jelas classes sehingga memiliki makna yang tegas, tujuan penamaan dapat diprediksi(_predictable)_, sehingga sesama koléga mempunyai standar penulisan yang jelas, dan tidak saling membingungkan.

<u>Sekarang bukan cuma kamu dan Tuhan saja yang paham kodemu, tapi semua orang tahu apa yang kamu lakukan dan kamu maksud dari kode CSS tersebut. Finally everybody knows what you did.</u>

Yah, tentu saja ada yang menganggap bahwa BEM ini tidak terlalu penting, menggunakan BEM memang **bukan** sebuah keharusan, kembali pada hal yang dikerjakan apakah sebuah pekerjaan skala kecil dan apakah tanpa BEM pekerjaan bisa _maintainable_ atau sebaliknya, juga tergantung kesepakatan sesama koléga.

**Namun**, menggunakan BEM ini menurut opini pribadi, sangat membantu dalam melakukan suatu pengembangan user interface web, dengan menggunakan BEM kode memiliki aturan penulisan yang sama antar koléga, mencegah terjadinya redundansi kode css dan tingkat [specifity](https://specificity.keegan.st/) yang jelas, sehingga mencegah terjadinya [error](https://www.phase2technology.com/blog/used-and-abused-css).

Masih pengen gali lebih dalam tentang BEM? [kunjungi](https://en.bem.info/methodology/quick-start/)
situs resminya.

##### Resources

- [http://getbem.com/introduction/](http://getbem.com/introduction/)
- [https://en.bem.info/methodology/](https://en.bem.info/methodology/)
- [https://css-tricks.com/bem-101/](https://css-tricks.com/bem-101/)