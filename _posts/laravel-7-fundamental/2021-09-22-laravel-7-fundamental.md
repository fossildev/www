---
title: Belajar laravel 7 fundamental laravel lengkap
date: 2021-09-22 12:28:47 +07:00
modified: 2021-09-22 12:28:47 +07:00
author: Jieyab89 # penuilis [wajib]
editor: Jieyab89 # penyunting [opsional]
tags: [laravel, php]
description: "Apa itu laravel? Laravel adalah sebuah framework php yang bersifat open source, laravel didirikan oleh Taylor Otwell. Saat ini laravel sudah mencapai versi 8, versi ini adalah versi terbaru di laravel"
image: "laravel-7-fundamental/1.png"
---


<figure>
<img src="/laravel-7-fundamental/1.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>


Okok back to topic, pada artikel ini saya membahas laravel 7, kenapa ? Yap saya sendiri masih kurang paham mengenai laravel 8 saya baca - baca sedikit dokumentasi laravel 8 ada beberapa perubahan yang cukup signifikan, sehingga saya putuskan di lain hari mempelajarinya, okok supaya kalian tidak bingung berikut saya jabarkan poin - poin yang akan saya bahas, saya rasa artikel ini akan panjang. Jadi saya putuskan membuat poin - poin yang penting untuk dibahas

Tentang artikel ini  

1. Pengenalan laravel
2. Requirement
3. Struktur direktori
4. Kelebihan dan kekurangan
5. Perbandingan laravel
6. Implementasi dasar laravel
7. Laravel eloquent
8. Membuat form upload by user id
9. Kesimpulan

Tahap selanjutnya akan dibahas pada part 2, silahkan bisa tunggu artikel terbaru dari seccodeid. Okok kalian bisa ambil posisi yang nyaman dan jangan lupa sediakan kopi supaya lebih yahud hahahaha, sekarang saya akan membahas poin pertama


**Apa itu laravel?**

Laravel adalah sebuah framework php yang bersifat open source, laravel didirikan oleh Taylor Otwell. Saat ini laravel sudah mencapai versi 8, versi ini adalah versi terbaru di laravel

<figure>
<img src="/laravel-7-fundamental/1.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Jika kalian mencari tahu informasi di sumber terbuka dengan kata kunci best framework, kalian akan menemukan list beberapa contoh framework dan kalian dapat menemukan laravel di dalam hasil pencarian. Sebagai contoh, kalian dapat melihat gambar di atas, di gambar tersebut ada berbagai framework seperti vue, laravel, ruby on rails dan lain sebagainya, artinya laravel termasuk ke dalam framework favorit

**Apa saja yang dibutuhkan?**

Berbicara mengenai programming pasti tidak lepas yang namanya tools atau alat pembantu, apa saja yang harus kalian persiapkan untuk mencoba laravel? Yap saya akan menjabarkan beberapa tools yang nantinya akan digunakan, apa saja itu? Berikut adalah hal - hal yang harus persiapkan


1.  Composer

Composer berfungsi sebagai memanage pacakge atau dependencies yang kalian gunakan, seperti menginstall package, mengupdate package atau yang lainya, kalian dapat mendownload composer melalui situs resminya


2.  Npm (node js modul atau node package manager)

Berikutnya ada npm atau node js. Npm berfungsi sebagai bumbu pelengkap di laravel untuk memaksimalkan web aplikasi kalian, misalnya dapat menggunakan package dari node js di laravel contohnya membuat websocket dan lainya


3. Php versi 7 ke atas

Yap jika kalian ingin menggunakan laravel pastikan php versi 7 ke atas, jika di bawah versi tersebut kurang rekomen, untuk itu gunakanlah php versi terbaru atau versi 7


4. Local web server

Untuk ini kalian dapat menggunakan xampp, lampp atau yang lainya, kalian dapat menggunakan sesuai kebutuhan, saya sarankan menggunakan xampp, mengapa? Karena sudah bundle dengan php, database dan banyang dukungan  


5. Code editor

kalian dapat menggukan code editor favorit, contoh visual studio code, atom, sublime dan lainya


 **Struktur Direktori**

Di dalam laravel ada beberapa path atau direktori yang harus kalian perhatikan yang nantinya memiliki sebuah fungsi untuk mengatur web aplikasi kalian, yups dan juga ada beberapa hal yang akan kalian setting atau konfigurasi ketika ingin mempublish web aplikasi ke dalam web hosting  


1. App

Di dalam folder ini, terdapat hal yang harus diperhatikan, kalian dapat menemukan folder app/Http/Controllers Di path ini berisikan controller yang akan dibuat, fungsi dari controller adalah untuk mengelola algoritma atau strutur data yang akan kalian buat, dan terdapat model untuk mengelola query di dalam database



Okok, di dalam path app ada satu path yang cukup penting yaitu middleware Untuk apa middleware?

Middleware berfungsi untuk memvalidasi user atau memfilter request data masuk pada web aplikasi

misal : csrf, auth, dll

Contoh penggunaan middleware

<figure>
<img src="/laravel-7-fundamental/2.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Atau bisa langsung digunakan di dalam routes dan middleware dapat menampung banyak request

Di dalam gambar tesebut maksudnya, ketika kalian ingin mengunjugi halaman atau mengakses controller tersebut harus login tersebut dahulu, setalah itu kalian bisa menjalankan struktur kode berikut nya. Jika dikatakan seperti session di dalam php native, fungsi dari construct adalah sebagai fungsi eksekusi awal sebelum fungsi berikutnya, artinya fungsi tersebut akan berjalan terlebih dahulu sebelum fungsi selanjutnya


2. Config

<figure>
<img src="/laravel-7-fundamental/Gambar5.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Di dalam path config, kalian perlu memahami satu hal yang berperan penting dalam laravel, yaitu file app, di dalam app.php terdapat konfigurasi laravel seperti mengatur url, time zone, serta lokasi, provider, aliases untuk mengatur dependencies package serta provder yang kalian gunakan


3. Database

<figure>
<img src="/laravel-7-fundamental/Gambar6.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Selanjutnya, path database berisikan migrations, seeds, factories, kalian dapat membuat database migrasi yang berfungsi untuk mempermudah developer pada saat membuat database beserta kolom dan atributnya, kalian dapat membuat seeds dan migrations menggunakan artisan command (perintah artisan)


Database seeder adalah, sebuah sample data pada database, jadi kita tidak usah melakukan input secara manual dan berulang, jadi di laravel kita dapat melakukan inputan data secara masal

contoh :

```php
public function run()
{

  table_name::create([
    'colomn_1' => 'isi atau konten',
    'colomn_2' => 'isi atau konten',
  ]);
}
```


For your information, di dalam laravel kalian akan menggunakan ORM atau Eloquent  apa itu?

Orm atau  Eloquent, untuk mempermudah mengelola query sql bisa dikatakan mempersingkat query sql, dengan menggunakan class, tanpa menggunakan query sql misal select * from, join, inner join, dan lainya. Cukup menggunakan get(), hashmany, hashone, manytomany dan lainya

Contoh

<figure>
<img src="/laravel-7-fundamental/Capture2.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

4. Public

<figure>
<img src="/laravel-7-fundamental/Gambar7.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Kalian dapat menyimpan file css atau assets (default) di dalam path ini dan juga dapat menyimpan file gambar atau pun yang lainya, yang nanti nya akan diakses oleh user secara publik, jika kalian tidak menyimpan disini file css atau gambar tidak akan terload alias 404

5. Views

<figure>
<img src="/laravel-7-fundamental/Gambar8.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Di dalam path ini, kalian akan menyimpan berupa file halaman website atau frontend, misalnya form, haeader, footer dan lainya, di laravel kalian menggunakan blade template engine, fungsi blade ini akan mempersingkat syntax php dan membuat code menjadi clean sebagai contoh  :

@php  @endphp, @if @endif, @foreach @endforeach   


6. Routes

<figure>
<img src="/laravel-7-fundamental/Gambar9.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Routes, adalah untuk mengatur jalanya sebuah url, misal / menuju ke halaman index. /about menampilkan halaman about dan lain sebagainya contoh penggunaan routes

```php
Route::method(‘url’, ‘namacontroller@namafunction’)->name(‘insial route name’);
Route::get('/', 'namacontroller@function')->name('index');
```

Adapun beberapa method untuk route, seperti get, post, put, delete dan lainya


7. Storage

Di path ini, berfungsi untuk menyimpan attachment atau file dari user, untuk bagian ini bersifat opsional, jika kalian tidak ingin menggunakan default (path storage), kalian dapat mengaturnya sendiri pada controller. Di bagian ini kita dapat mensymlink untuk proses syimilink (clone) dan tersimpan pada folder public, dengan cara command artisan

php artisan storage:link


8. Tests

<figure>
<img src="/laravel-7-fundamental/Gambar10.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Di path ini, berfungsi untuk unit testing pada laravel, ini biasanya digunakan untuk devops, jadi ketika kalian memeperbaiki bug atau feature tak perlu kawatir website kalian maintence cukupkalian melakukan cara ini pada folder tests, kemudian jika project sudah berjalan dengan sempurna, kalian dapat mengaplikasikan project ke on production  

9. Vendor
<figure>
<img src="/laravel-7-fundamental/Gambar11.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Di path ini berisikan library, package yang kalian gunakan, laravel sudah menginstall beberapa package default, jika kalian ingin menggunkan library atau sebuah package maka akan tersimpan di dalam vendor, kemudian kalian dapat mempublish package tersebut supaya dapat bisa digunakan, kemudian kalian konfigurasi di dalam config/app.php  

10. env
<figure>
<img src="/laravel-7-fundamental/Gambar12.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

.env, file ini berfungsi untuk konfigurasi web aplikasi kalian, di dalam file ini berisikan hal informatif sensitif website, maka dari itu kalian jaga file ini supaya tidak bisa diakses oleh public. Kalian dapat mendisable menggunakan robots.txt untuk mencegah bot crawl halaman ini dan setting .htaccess untuk mendisable secara public

Dasar perintah artisan dan composer

Artisan :

1. php artisan serve [ untuk menjalankan laravel ]

2. php artisan down [ maintence mode laravel ]

3. php artisan clear cache [ menghapus cache ]

- php  artisan cache:clear

- php artisan config:clear

4. php artisan up [ laravel up atau on production ]

5. php artisan migrate [ migrate database ]

6. php artisan make:opsi perintah [ membuat file dengan perintah opsi ]

- controller

- model

- job

- auth

- middleware

7. php artisan vendor:publish [ untuk menggunakan package, kemudian pilih package yang akan digunakan]



composer :

1. composer require “nama package atau project” [ install library atau package ]

2. composer dump autolad [ generate all package ]

3. composer install [ otomatis menginstall package yang hilang atau eror ]

Lebih lengkap, kunjungi  doc composer : https://getcomposer.org/doc/01-basic-usage.md



Kelebihan dan kekurangan laravel

Kelebihan :

1. Banyaknya package atau library

2. Membangun sistem yang kompleks

3. Mendukung Eloquent dan ORM (Object–relational mapping)

4. Cocok untuk proyek besar



kekurangan :

1. Size besar

2. Cukup berat dalam load

3. Tidak cocok untuk pemula

4.  Implementasi ribet

5. Memerlukan resource yang cukup besar

6. Update terlalu cepat


**Kapan harus menggunakan web framework** ?

Okok, pertama hal yang harus kalian lakukan adalah tentukan tujuan. Jika kalain ingin membuat sistem yang besar dan kompleks pasti memerlukan banyak library atau package, pengelolaan database yang besar dan efisien, misal kalian tidak menggunakan library sah - sah saja, tetapi akan memakan banyak waktu dan try and eror, terlebih lagi data yang dikelola sangat besar, ini akan memakan waktu saat load di dalam frontend, solsui kalian dapat membuat query yang clean, pengelolaan database yang terencana, menggunakan api (json) saat pertukaran data, cara ini cukup risiko



Jika kalian ingin membuat sistem crud, single blog, company profile saya sarankan menggunakan wordpress atau platform blogger, jika ingin terbebas customisasi kalian dapat menggunakan php native , lalu jika ingin menggunkan framework, tidak salah menggunakan framework pilihan yang bagus, tetapi resouce akan termakan banyak, dengan sistem yang sederhana, bisa dikatakan eman - eman alias mubazir. Jadi lebih tepatnya menggunakan CMS, untuk mengelola resouces dan waktu secara efisien



Untuk poin ini bersifat opsional, saya pribadi tidak terlalu condong ke framework terutama laravel, jika sistem sederhana saya lebih suka mengambil di php native atau CMS yang tergolong menurut saya mudah dipahami dan simple. Terlebih lagi jika terdapat plugin - plugin yang keren, untuk itu kalian dapat menggunakan apa saja bebas tanpa terikat apapun asalkan mampu dan bisa menjalaninya


**Implentasi laravel**

Bagaimana cara menggunakan laravel ? Okok berikut ini adalah cara dasar menggunakan laravel saya akan menjelaskan membuat resgiter dan login menggunakan library auth laravel dan juga form upload. Kalian bisa capcus ikuti langkah - langkah yang saya berikan

A. Proses penginstalan

1. Buka terminal, kemudian masuk ke dalam path htdocs

<figure>
<img src="/laravel-7-fundamental/Gambar13.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

2. kemudian ketik “composer create-project --prefer-dist laravel/laravel:^7.0 project”

<figure>
<img src="/laravel-7-fundamental/Gambar14.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

3. Tunggu hingga selesai

B. Proses konfigurasi

1. Setelah selesai mendownload, kalian dapat masuk ke dalam path project
2. Run laravel dengan cara “php artisan serve”
3. Akses url, copykan hasil di terminal kemudian masukan ke dalam browser atau mesin pencari

<figure>
<img src="/laravel-7-fundamental/Capture3.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Setting .env
<figure>
<img src="/laravel-7-fundamental/Capture4.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Silahkan konfigurasi .env kemudian setting bagian nama database, username database, serta password database, unruk line 16 sampai akhir nanti akan dibahas, untuk materi ini cukup mempelajari dasar nya dahulu, contoh konfigurasi database di dalam .env

```yml
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE= namadb kalian
DB_USERNAME= username db kalian
DB_PASSWORD= pass db kalian
```

C. Membuat database

<figure>
<img src="/laravel-7-fundamental/Gambar15.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Buatlah database yang sudah kalian setting di dalam .env pastikan nama database sama seperti apa yang ada di .env

contoh

Nama database "sinaudb" Pastikan nama database sama dengan yang ada di .env  

```yml
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE= sinaudb
DB_USERNAME=root
DB_PASSWORD= root56
```

C. Install library auth laravel


1. Ketikan composer require laravel/ui "^2.0"

Jika langsung menggunakan composer require laravel/ui akan terjadi eror, kenapa ? dikarenakan laravel yang kita gunakan saat ini adalah versi 7 sedangkan laravel ui versi terbaru hanya bisa digunakan oleh laravel 8 ke atas, sehingga kita harus memastikan versi 2.0 supaya dapat teriinstall dan digunakan (default menggunakan bootstrap)

2. ketik dan jalankan perintah "php artisan ui bootstrap --auth" jika diminta menjalankan “npm install && npm run dev” terlebih dahulu kalian bisa menjalankan perintah tersebut kemudian dilanjutkan dengan "php artisan ui bootsrap --auth"

Kasus ini kita menggunakan laravel auth bootsrap, jika ingin menggunkan vue, react juga bisa . Sesuaikan kebutuhan kalian sendiri

<figure>
<img src="/laravel-7-fundamental/Capture5.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

3.  Untuk memastikan apakah sudah terinstall. Ketik dan jalankan perintah npm install && npn run dev tunggu hinga proses selesai



D. Migrating database

1. migrate database terlebih dahulu, sebelum migrate pastikan sudah membuat database dengan nama yang sudah tadi dibuat

2. Setelah itu jalankan perintah php artisan migrate, untuk membuat table, kolom yang ada di dalam path database

<figure>
<img src="/laravel-7-fundamental/Capture6.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

<figure>
<img src="/laravel-7-fundamental/Capture7.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

3. Langkah terakhir pastikan table sudah ada di dalam database, kemudian kalian dapat run kembali laravelnya

4. Jalankan perintah php artisan serve

<figure>
<img src="/laravel-7-fundamental/Capture8.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>


E. Tahap pengujian

<figure>
<img src="/laravel-7-fundamental/Capture9.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

<figure>
<img src="/laravel-7-fundamental/Capture10.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Nah, hasil dari register sudah masuk ke dalam database, artinya kita siap menggunakan

**Laravel eloquent**

Laravel menyertakan Eloquent, sebuah object-relational mapper (ORM) yang membuatnya menyenangkan untuk berinteraksi dengan database. Saat menggunakan Eloquent, setiap tabel database memiliki "Model" terkait yang digunakan untuk berinteraksi dengan tabel tersebut. Selain mengambil catatan dari tabel database, model Eloquent memungkinkan kalian untuk menyisipkan, memperbarui, dan menghapus catatan dari tabel juga.

Singkatnya Orm atau elquent, untuk mempermudah mengelola query sql bisa dikatakan mempersingkat query sql, dengan menggunakan class, tanpa menggunakan query sql misal select * from, join, inner join, dan lainya. Cukup menggunakan get(), hashmany, hashone, manytomany dan lainya


**Contoh Eloquent**

<figure>
<img src="/laravel-7-fundamental/Capture11.png" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

```php
// Fungsi first()
$user = User::first();
// Fungsi ini akan menampilkan data yang pertama pada table user
$user = User::paginate(10);
// Fungsi ini adalah membuat pagination dengan limit data yang ditampilkan >adalah 10
$user = User::find($id);
// Fungsi ini adalah untuk memasukan data berdasarkan id di dalam table user
// Eloquentt lebih lengkap : https://laravel.com/docs/7.x/eloquent
```

**Membuat form upload by user id**

1. Masuk ke dalam direktori project
2. Kemudian membuat database, model, views dan controller terlebih dahulu


"php artisan make:migration posts"

NB : Pastikan membuat table tambahkan s di belakangnya sebagai contoh posts. Laravel akan mengidentifkasi langsung dengan tambahan s. Jika tidak ada tambahan s maka akan terjadi eror atau doesnt exists

Kemudian buka file database yang sudah dibuat tadi

<figure>
<img src="/laravel-7-fundamental/13.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Ini berfungsi untuk membuat table dengan field yang sudah kita tentukan, sebagai contoh

```php
public function up()
{

  Schema::create('posts', function (Blueprint $table)
  {
    $table->id();
    $table->string('title');
    $table->foreignId('user_id');
    $table->text('content');
    $table->string('photo');
    $table->timestamps();
  });

  Schema::table('posts', function (Blueprint $table)
  {
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                        //untuk relasi antar table, table post akan berelasi dengan table users dengan kolom                                      user_id dengan kolom id yang ada di table users
  });

}
```


Setelah membuat, kalian dapat jalankan perintah

"php artisan migrate"


Untuk migrasi ke dalam database, kalian dapat melihat foto di bawah ini

<figure>
<img src="/laravel-7-fundamental/16.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

"php artisan make:model Post"

Untuk selanjutnya, kita membuat model post dengan perintah di atas, setelah terbuat kalian bisa buka file tersebut di dalam path app

<figure>
<img src="/laravel-7-fundamental/17.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Fungsi dari model ini adalah, untuk membuat atau megelola input atau insert pada database, pada kode di atas kolom yang sudah terbuat array yang nanti nya akan diisi dari user

```php
protected $fillable = [
		'user_id', 'title', 'slug', 'content', 'photo'
];

public function user()
{
  return $this->belongsTo(User::class);
}
```


Fungsi user untuk relasi table post dan user


"php artisan make:controller MenuController --resource"

Ketik dan jalankan perintah tersebut, fungsi perintah di atas adalah untuk membuat controller dengan nama menu, setelah itu kalian bisa cek di dalam path controller

<figure>
<img src="/laravel-7-fundamental/Capture11.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Di dalam kode di atas, kita akan menggunakan model User dan Post kemudian beberapa library dari laravel seperti request dan auth. Lalu di function index berfungsi mengabil data dari table post

```php
$feed = Post::get(); //mengambil seluruh data dari table post

return view('index', compact('feed')); //menampilkan halaman index dan
membawa parameter feed
```

Berikut adalah file index.blade.php

<figure>
<img src="/laravel-7-fundamental/12.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Buatlah controller dengan nama admincontroller, yang disni akan berfungsi untuk mengelola data yang ada di web aplikasi yang sudah kita buat

"php artisan make:controller AdminController --resource"

Jalankan perintah di atas, kemudian kita buka dan tambahkan struktur kode untuk mengelola data masuk, edit, hapus dan lainya

<figure>
<img src="/laravel-7-fundamental/18.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Jangan lupa tambahkan beberapa model yang nanti nya akan kita gunakan serta library juga, jika tidak dimasukan akan terjadi eror


Scrool ke bawah cari function store dan create kemduian tambahkan kode berikut ini


<figure>
<img src="/laravel-7-fundamental/19.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

```php
public function __construct()
{
  $this->middleware('auth');
}

public function create()
{
  return view('post');
}

public function store(Request $request)
{
  $validatedData = $request->validate([
    'title' => 'required|max:225',
    'content' => 'required',
    'photo' => 'image|mimes:jpeg,png,jpg,gif|max:5408',
  ]);

  $id = Auth::user()->id;
  $user = User::find($id);
  $content = $request->content;
  $photo = $request->file('photo');
  $nama_file = time()."_".$photo->getClientOriginalName();
  $tujuan_upload = 'feed';
  $photo->move($tujuan_upload,$nama_file);

  Post::create([
    'user_id' => $id,
    'title' => $request->title,
    'content' => $content,
    'photo' => $nama_file,        
  ]);

  return back()->with('success' data masuk');

}
```

Setelah itu buatlah file post di dalam path views yang berisikan form untuk menginput data

<figure>
<img src="/laravel-7-fundamental/20.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

{% raw  %}

```php
@extends('layouts.app')
@section('content')
<div class="container">
  <form action="{{ route('post.buat') }}" method="post" enctype="multipart>/form-data">
    @csrf
    @method('post')
    <div class="form-group">
      <label for="exampleInputEmail1">Masukan judul</label>
      <input type="text" name="title" class="form-control" aria-describedby> ="emailHelp" placeholder="judull">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Masukan deksirpsi</label>
      <textarea type="text" name="content" rows="10" class="form-control" >aria-describedby="emailHelp" placeholder="deskripsi"></textarea>
    </div>
    <div class="form-group">
      <label class="form-label" for="customFile">Upload file</label>
      <input type="file" name="photo" class="form-control" id="customFile" >/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out></label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>  
</div>
@endsection
```

{% endraw  %}


**Membuat routes**

Buka path routes kemudian cari web.php setelah itu pahami kode di bawah ini

<figure>
<img src="/laravel-7-fundamental/21.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

```php
Route::get('/', 'MenuController@index')->name('index');
Route::get('/feed', 'MenuController@feed')->name('feed');
Auth::routes(); //libaray auth dari laravel
Route::get('/home', 'AdminController@index')->name('home');
Route::get('/posting', 'AdminController@create')->name('post');
Route::post('/posting/store', 'AdminController@store')->name('post.buat');
```

Di dalam kode di atas kira dapat menemukan 6 routes, routes berfungsi untuk mengatur jalannya url serta metode http request dari sebuah website kita, yang masing masing akan memiliki tujuan yang sudah kita buat

Jalankan laravel
"php artisan serve"

<figure>
<img src="/laravel-7-fundamental/hasil1.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Okok, kita sudah masuk ke dalam dashboard user, kalian dapat membuat frontend yang lebih rapi lagi dan jos. Ini adalah tampilan sederhana yang saya buat, kemudian kita masuk ke dalam views post bagaimana caranya ? Cukup klik list dengan nama posting

<figure>
<img src="/laravel-7-fundamental/hasil2.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Berikut adalah tampilan form. Kemudian kita cek di dalam index apakah data sudah terlist keluar ? Mari kita lihat

<figure>
<img src="/laravel-7-fundamental/hasil3.PNG" alt="laravel">
<figcaption>Laravel 7 fundamental</figcaption>
</figure>

Mantap, sudah jadi dan bisa kita gunakan. Itu tadi adalah dasar implemntasi laravel, kalian dapat melakukan atau membuat fitur apa saja yang ada di laravel. Saya hanya mengimplemtasikan dasar


NB : Saya tidak bisa membuat halaman frontend yang keren, untuk itu silahkan kalian buat tampilan semenarik mungkin dan mohon maaf saya tidak menjelaskan secara detail, ini adalah project pesanan dari teman saya jadi saya tampilkan disini beberapa saja. Next ditunggu part 2 atau sharing session berikutnya


**Kesimpulan**

Pada dasarnya framework dapat mempermudah kita dalam menbangun sebuah sistem, kalian dapat membuat sistem manajemen dengan kebutuhan kalian sendiri, jika yang ingin dibangun sistem yang kompleks, maka saya sarankan menggunakan framework, untuk masalah keamanan dapat mengatisipasi dibagian backend, pada dasaranya mungkin saja di dalam package yang Anda gunakan terdapat bug, untuk itu rajin - rajin lah mengupdate dan mengecek project Anda


Terima kasih, saya mohon maaf jika ada kesalahan dan penjelasan kurang jelas ;)
