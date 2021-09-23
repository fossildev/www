---
title: Setting linux ubuntu untuk hacking
date: 2021-08-04 14:34:47 +07:00
modified: 2021-08-04 14:34:47 +07:00
author: suyab # penuilis [wajib]
editor: suyab # penyunting [opsional]
tags: [ubuntu, hacking]
description: Hallo, kembali lagi bersama saya Bayu Aji pada artikel kali ini saya akan membahas distro linux ubuntu, yap pasti dari diri Anda sudah mengetahui apa itu ubuntu. Menurut saya pada dasarnya distro linux apa pun bisa digunakan untuk hacking, tetapi jika ingin yang spesifik Anda dapat menggunakan kali, parot os atau yang lainya. Okok kali ini saya membahas cara mensetting linux ubuntu untuk hacking, ubuntu adalah distro turunan debian yang bisa mengatur sistem operasi secara ringan, linux ubuntu bisa dikatakan mirip seperti windows, penggunaan cukup mudah dan ui yang menarik, penginstalan mudah dan cocok untuk programming, bermain game ringan, untuk hacking dan lainya. Untuk Anda ini sangat cocok jika ingin menggunakan sistem operasi yang gratis dan juga yahut
image: "Setting-linux-ubuntu-untuk-hacking/thumb.jpg"
---


<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/thumb.jpg" alt="ubuntu">
<figcaption>Settup ubuntu untuk hacking</figcaption>
</figure>

Hallo, kembali lagi bersama saya Bayu Aji pada artikel kali ini saya akan membahas distro linux ubuntu, yap pasti dari diri Anda sudah mengetahui apa itu ubuntu. Menurut saya pada dasarnya distro linux apa pun bisa digunakan untuk hacking, tetapi jika ingin yang spesifik Anda dapat menggunakan kali, parot os atau yang lainya. Okok kali ini saya membahas cara mensetting linux ubuntu untuk hacking, ubuntu adalah distro turunan debian yang bisa mengatur sistem operasi secara ringan, linux ubuntu bisa dikatakan mirip seperti windows, penggunaan cukup mudah dan ui yang menarik, penginstalan mudah dan cocok untuk programming, bermain game ringan, untuk hacking dan lainya. Untuk Anda ini sangat cocok jika ingin menggunakan sistem operasi yang gratis dan juga yahut





Lalu bagaimana cara mensetting linux ubuntu untuk belajar hacking ? Atau untuk hacking, cara ini cukup dengan sebuah satu tools kemudian Anda dapat menginstall sesuai kebutuhan dan akan otomatis terkonfiguarasi sendiri. Proses ini cukup lama tergantung internet dan spesifikasi device yang Anda gunakan, jika spesifikasi yang Anda gunakan cukup gg wah proses ini akan dibilang cepat. Okok sekarang bisa langsung ikuti tutorial ini, sebelum itu saya akan jabarkan beberapa hal yang diperlukan : 

Internet kecepatan tinggi 
Paket data besar, minimal 4gb 
Git

Itu hal pertama yang harus Anda perhatikan, jangan sampai pada saat proses akan terhambat, okok sekarang beralih ke tutorial, yang pertama Anda dapat mengunjungi akun https://github.com/s-h-3-l-l/katoolin3   setelah itu ikuti langkah berikut ini : 


**Installisasi katooline **

Anda dapat mendownload terlebih dahulu, persiapkan folder atau tempat penyimapanan hasil download terlebih dahulu, saya menyimpan di dalam folder documents, lalu  install dengan cara git clone kemudian url, 

"contoh git clone https://github.com/s-h-3-l-l/katoolin3" 


Selanjutnya tunggu proses hingga selesai, jika sudah selsai maka akan tersimpan pada folder yang sudah Anda setting sebelumnya, Anda dapat melihat foto di bawah ini 

<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/1.png" alt="ubuntu">
<figcaption>katooline</figcaption>
</figure>

Kemudian Anda buka terminal, masuk ke dalam direktori penyimpanan katooline, gunakan perintah cd untuk masuk ke dalam direktori, Anda dapat melihat gambar berikut ini 

<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/2.png" alt="ubuntu">
<figcaption>katooline</figcaption>
</figure>

Next proses penginstalan, setelah Anda mendownload, kemudian Anda dapat langsung menginstall dengan cara berikut ini 


chmod +x ./install.sh
sudo ./install.sh

<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/3.png" alt="ubuntu">
<figcaption>katooline</figcaption>
</figure>

Pada proses ini Anda dapat ditinggal atau menunggu sambil Anda melakukan pekerjaan, setelah install sudah  selesai, Anda dapat menggunakan katooline dengan cara seperti ini 

<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/4.png" alt="ubuntu">
<figcaption>katooline</figcaption>
</figure>

Jika Anda terdapat pesan eror, mungkin ada beberapa perubahan pada signature tools kali linux, Anda dapat mengunjungi doc kali linux, kemudian konfigurasi repository ( repo ) nya, ikuti langkah - langkah yang ada disana atau Anda dapat membaca pesan eror tersebut lalu mencari tahu informasi di sumber terbuka  


Okok lanjut, setelah masuk ke dalam menu katooline, Anda dapat memilih tools apa saja yang ingin di install, kalau saya pilih nomor 1 atau install all, di poin ini bersifat opsional, Anda dapat memilih sesuai kebutuhan jika ingin mengisntall semua proses ini cukup lama dan ada beberapa paket yang hilang, jadi tidak 100% semua tools bisa terinstall, jika Anda ingin memaksa Anda dapat mendownload dan menkonfigurasi secara manual, silahkan bisa dipikirkan kembali

Selanjutnya setelah proses pengunduhan selesai Anda dapat melihat atau mengecek list apa saja tools yang sudah terinstall, dengan cara pilih nomor 4, Anda dapat melihat gambar berikut ini 

<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/5.png" alt="ubuntu">
<figcaption>katooline</figcaption>
</figure>

Langkah terakhir, Anda dapat menginstall kali menu, untuk cara ini akan otomatis terkonfigurasi jadi Anda tinggal duduk manis hingga proses ini selesai, setelah proses ini selesai, Anda dapat membuka activity atau menu kemudian Anda akan menemukan beberapa tools yang sudah terinstall, berikut adalah hasil nya 

<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/6.png" alt="ubuntu">
<figcaption>katooline</figcaption>
</figure>

Tara, tools sudah berhasil terinstall, sekarang Anda bisa mengetest nya, sebagai contoh saya akan mengetest metasploit, cara nya Anda buka terminal kemudian sudo su untuk masuk ke dalam akases root, setelah itu ketik perintah msfconsole 

<figure>
<img src="/Setting-linux-ubuntu-untuk-hacking/7.png" alt="ubuntu">
<figcaption>katooline</figcaption>
</figure>

OK, tools sudah terinstall dan bisa digunakan dengan baik, saatnya belajar happy hacking 


**Kesimpulan** 
Okok, pada dasarnya semua sistem operasi dapat kita gunakan untuk hacking atau belajar hacking, entah itu mac, windows, linux Anda dapat memilih apa yang ingin digunakan, jika Anda bukan tipikal orang ingin ribet, Anda dapat mengisntall kali linux, parot os. Disana sudah dipersiapkan tools pentesting siap digunakan, Anda dapat mempelajari pola dari tools tersebut, tetapi distro tersebut bisa dikatakan lumayan susah jika Anda belum terbiasa dengan linux, jika Anda ingin menggunakan sah - sah saja, Anda dapat mempelajari sistem operasi tersebut. Sekian dari saya, terima kasih telah membaca artikel ini, selamat belajar 

