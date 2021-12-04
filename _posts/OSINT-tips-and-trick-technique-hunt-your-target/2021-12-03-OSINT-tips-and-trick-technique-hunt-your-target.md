---
title: "OSINT tips and trick technique hunt your target"
date: 2021-12-03 11:58:47 +07:00
modified: 2021-12-03 11:58:47 +07:00
author: Jieyab89 # penuilis [wajib]
editor: Jieyab89 # penyunting [opsional]
tags: ["Hacking", "OSINT"]
description: "Hallo selamat datang kembali bersama saya Bayu Aji kali ini saya akan membagikan seputar teknik OSINT dan tips and trick nya. Okok, berbicara tentang OSINT sebenarnya ada dampak positif dan negatif untuk itu saya tidak mengajari Anda cara  membocorkan aib, identitas sesorang secara public. Lets do it Apakah di dalam artikel ini akan diajari cara menghindari serangan OSINT? Apa saja yang harus dipersiapkan? Okok akan saya bahas satu persatu, so baca dengan teliti ya"
image: "OSINT-tips-and-trick-technique-hunt-your-target/OSINT1.png"
---

Hallo selamat datang kembali bersama saya Bayu Aji kali ini saya akan membagikan seputar teknik OSINT dan tips and trick nya. Okok, berbicara tentang OSINT sebenarnya ada dampak positif dan negatif untuk itu saya tidak mengajari Anda cara  membocorkan aib, identitas sesorang secara public. Lets do it


Apakah di dalam artikel ini akan diajari cara menghindari serangan OSINT? Apa saja yang harus dipersiapkan? Okok akan saya bahas satu persatu, so baca dengan teliti ya

# - Tools yang dipersiapkan

Anda dapat mempersiapkan beberapa tools, teknik atau metode yang akan digunakan diantaranya :

1. Sherlock
2. Metedata remover
3. Exif tools
4. OSINT framework
5. Dorking
6. Metasploit
7. Privacy badger extension
8. Social engineering


Dari beberapa yang sudah saya sebutkan jika dianalogikan seperti ini. Sebenarnya masih ada lagi tetapi disini tidak akan membahas secara mendalam atau bisa dikatakan fundamental terlebih dahulu


Okok setelah Anda mempersiapkan tools dan tekniknya. Sekarang saatnya membahas cara mengimplementasikan bahan tersebut. Check this out


# - OSINT Implementation

Bagaimana cara kita stalking seseorang yang cukup mendalam? Bisakah kita mencari tahu seseorang secara detail dan lengkap? Ya bisa, semua kembali ke diri Anda bagaimana Anda menyerang, dataset yang Anda kumpulkan misalnya foto, nama, sekolah, hoby, sosial media dan lainya kemudian Anda dapat menganalisa data tersebut seperti dorking, stalking sosial media dan hal lainya, setelah itu Anda dapat membuat sebuah report atau laporan dan analisa kembali  


Okok saatnya saya akan membahas teknik nya. Hal yang akan saya lakukan mungkin akan sensitif untuk itu disini target nya adalah saya sendiri supaya tidak ada pihak yang dirugikan dan menyalahkan



1. Hunting username
<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEi4MppsLw2pkiEQsph2n82FC_LhmvSIXz7n0qDZ4KLyMGEpk6xuYbcxZkiKTveaH1Vh9RxB5UIJQth6CnSZneiTV-s8ep9GY_ZUWuYOsuVZqZ-DMnKWG7s8KFl9e78SF27LjmdGo5bjsW3vfKII581TZUQATuNez60CiaVmWEqLjNsRqG8lC9OorcIJAw=s1366" alt="OSINT">
</figure>

Okok disini saya akan menggunakan 2 metode pertama menggunakan tools sherlcok dan dorking. Jika Anda menggunakan sherlock Anda dapat menginstall terlebih dahulu Anda dapat install melalui tautan di bawah ini



Tautan : https://sherlock-project.github.io/  


Setelah Anda menginstall dan konfigurasi selanjutnya adalah penggunaan tools tersebut. Berikut adalah cara menggunakan sherlock

> Executing sherlock -h
>
> usage: sherlock [-h] [--version] [--verbose] [--folderoutput FOLDEROUTPUT]
>
>                 [--output OUTPUT] [--tor] [--unique-tor] [--csv]
>
>                 [--site SITE_NAME] [--proxy PROXY_URL] [--json JSON_FILE]
>
>                 [--timeout TIMEOUT] [--print-all] [--print-found] [--no-color]
>
>                 [--browse] [--local]
>
>                USERNAMES [USERNAMES ...]
>
> Sherlock: Find Usernames Across Social Networks (Version 0.14.0)
>
> positional arguments:
>
>   USERNAMES             One or more usernames to check with social networks.
>
> optional arguments:
>
>  -h, --help            show this help message and exit
>
>   --version             Display version information and dependencies.
>  
>   --verbose, -v, -d, --debug
>
>                         Display extra debugging information and metrics.
>  
>   --folderoutput FOLDEROUTPUT, -fo FOLDEROUTPUT
>                         If using multiple usernames, the output of the results
>                         will be saved to this folder.
>
>   --output OUTPUT, -o OUTPUT
>                         If using single username, the output of the result
>                         will be saved to this file.
>   --tor, -t             Make requests over Tor; increases runtime; requires
>                         Tor to be installed and in system path.
>
>   --unique-tor, -u      Make requests over Tor with new Tor circuit after each
>                         request; increases runtime; requires Tor to be
>                         installed and in system path.
>
>   --csv                 Create Comma-Separated Values (CSV) File.
>
>   --site SITE_NAME      Limit analysis to just the listed sites. Add multiple
>                         options to specify more than one site.
>
>   --proxy PROXY_URL, -p PROXY_URL
>                         Make requests over a proxy. e.g.
>                         socks5://127.0.0.1:1080
>  
>   --json JSON_FILE, -j JSON_FILE
>                         Load data from a JSON file or an online, valid, JSON
>                         file.
>   --timeout TIMEOUT     Time (in seconds) to wait for response to requests.
>                         Default timeout is infinity. A longer timeout will be
>                         more likely to get results from slow sites. On the
>                         other hand, this may cause a long delay to gather all
>                         results.
>   
>  --print-all           Output sites where the username was not found.
>  --print-found         Output sites where the username was found.
>
>
>   --no-color            Don't color terminal output
>
>   --browse, -b          Browse to all results on default browser.
>
>   --local, -l           Force the use of the local data.json file.
>

# Start hunt your target

> sherlock your target      
>

# Start analyzing  


Bagaimana cara kita menganalisa ? Okok Setelah Anda melakukan sebuah perintah sherlock Anda dapat menunggu proses itu sampai selesai. Jika sudah selesai selanjut nya Anda menganalisa report tools tersebut misalnya mengecek satu persatu dari hasil report tersebut. Berikut adalah contohnya

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEh_Y6TZVoIQuZHaHJPlwgFcdnyMs-clT4vHNCxJUoQiJLeechusZQDer_Idjby1Wysv_R2OvAB4lj73M_Ka0gHUxqxFyVFhtSslWcStplLyJtqvTlsLI-5A2geu62hBoCKV-nRvzPZnORyycDtSwnuwn5j4lcQ40QHxYMiJGlU_4ImWC4phVEY3jblO8Q=s136" alt="OSINT">
</figure>

Di dalam tools sherlock terdapat fitur import .csv tetapi saya lebih suka menggunakan .txt untuk itu Anda dapat menyimpan hasil report tersebut kemudian Anda dapat kombinasikan dengan linux command contoh

> grep Telegram report.txt
>

Result :

     ┌─[uyab@Jieyab]─[~/Desktop]
    └──╼ $grep Telegram report.txt
    [+] Telegram: https://t.me/WahyuBayuAji
    ┌─[uyab@Jieyab]─[~/Desktop]
    └──╼ $grep Linkedin report.txt

# Dorking method  

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEgUJvnn69olQ3-u-l3Gjc0_-wetVvZ7moh2SJN8FY7vMdJXZ7lrcpej-s7VCL2koTEKMxsvDlKRxVRAQRwbF8cHkBvwSLUf3Sk69uosOODTB8JU43rsUIylfQXdN-q8ld1Rx7D9yp2cv5THDpIu5qHdofM-mxJn2iOpZMJNdMDJjqPNCwYNP0NZvvPgow=s1366" alt="OSINT">
</figure>

Sherlock dapat mencari apa saja seperti username, social media account dan site. JIka hasil dari sherlock kurang tepat, Anda dapat menggunakan teknik dorking teknik ini sangat leluasa Anda dapat mencari apa saja dengan teknik ini. Berikut adalah perintah dorking

    1. intitle:

    Mencari judul spesifik

    2. inurl:

    Mencari url atau path secara spesifik

    3. intext:

    Mencari kata atau contect spesifik

    4. filetype:

    Mencari file

    5. site:

    Website atau target secara spesifik

Example

    1. filetype:log username putty

    2. filetype:xls inurl:"email.xls"

    3. intitle:"webcamXP 5"

    4. inurl:zoom.us/j and intext:scheduled for

    5. "index of" "database.sql.zip"

    6. intitle:"Index of" wp-admin

Result :

    inurl:"admin" site:.edu

Berikut tadi adalah contoh dorking, Anda dapat mencari hal apapun secara spesifik dengan cara dorking. Anda dapat mengembangkan dork Anda menjadi dork yang powerfull



# OSINT framewok tools

Jika hasil penelusuran Anda kurang. Mungkin Anda dapat menggunakan tools OSINT FRAMEWORK tools ini cukup powerfull untuk mencari detail target, berikut ini adalah tools yang dikumpulkan oleh OSINT FRAMEWORK



1. Username

2. Email addres

3. Domain name

4. Ip address

5. Fille reverse

6. Social network

7. Instant messaging

8. People search engine

9. Telephone number  


# Hunt with social searcher

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEiEvHcjJiGY8WxfmVsRBH60iJzPRYf7RhPW1Po6eDdRFJVcTatQ56SIOlQdWmW5nvyoyiXaysog4MwSrcpp0UaVhn5RqsM0bTgPtdVudCaAReITj5fP5Rq-VpV65pwddvNjNPJiBFQ4kyFfdROs2VLG8K0VnVEZJK-rKfGmixRNNhasOgHu9PYiBArCtw=s1366" alt="OSINT">
</figure>

# Hunt with yandex reverse image

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEiv1Z0yvE0Caztv0CL5yfkJ0HwziLBmmK2yB9OShrYNS3SOB59sJH3k3K5o4CKOmBYSragteXclARgtHz_IzML_3VWtx4vba9y4PK0OG7qK8DLOtfyJG_Vn-nGrLUchVxRmcqNsa_Sr1Nsu00ORDPvXLdWWyTAc5oQuXJiwqJc3Sei981IKX4o7NAFg6g=s1366" alt="OSINT">
</figure>

# Hunt with pddikti

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEhQTOVcGiZv3G-4bbHWwxUVmx5KxsfeLoZgNJW5z1CsuY1BRjkbU03blPxYp3eH5kgeOr_GGuNafGxIiR9ypUg0jKOkXl0f_aiZC-KOrVjdDbgxx5NC_qj623eDQB4iCJeU-eF-k__IpJe3HxAlWRRaVWotXk5zF-VqAlinq9yl2fy_ARZRgKUL3mphlw=s1366" alt="OSINT">
</figure>

Anda hanya membutuhkan sebuah nama lengkap dan universitas. Maka hasil pencarian akan memunculkan berupa  jurusan, asal universitas, semester, prodi dan lainya. Cara ini sangat sensifitf jadi saya hanya menampilkan halaman depan saja



# Hunt with social media apps

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEgfgpYEY0dz_C8Uza9v3mOVVnFoMqX-BdhAB07y7THFjzjJ-QXgE_nfBVPlrD0AKmwIeUlVQVj7GeeUJEcdqbzbf8UBU6KCXBkcizxIvZ06srt449zEpxKey4_wFrEC4IRPpPsmOw7YeiBtjlQ1IYU1nEzRc79fhu7X_QQ838itc4ZP0WjfnsHfaffYYw=s1256" alt="OSINT">
</figure>

Di kasus ini Anda dapat mencari sebuah konten atau postingan pada sosial media. Yap Facebook merupakan sosial media terbesar kemungkinan besar Anda dapat mencari sesuatu yang spesifik misalnya photo, postingan nama akun serta acara

Anda juga dapat menyetting atau mencari lebih spesifik lagi dari tanggal, lokasi postingan terbaru serta postingan teman dari teman atau hal lainya


# Hunt with Instagram location search

Pada kasus ini Anda dapat menggunakan tools dari bellingcat instagram location search. Anda dapat menginstall tools tersebut berikut adalah tautan



Tautan : https://github.com/bellingcat/instagram-location-search


Tools bekerja dengan cara mengambil session dari browser kemudian akan menangkap berupa lat, ing dan destinasi lokasi


# Hunt with EXIF tools


Pada kasus ini Anda dapat membaca metadata pada suatu file untuk melihat apa saja yang ada di dalam file tersebut. Jika Anda beruntung mendapatkan geolocation pada file tersebut. Cara ini sangat efektif untuk digunakan terlebih lagi file tesebut fresh atau orisinil dari sumber langsung Anda dapat menggunakan exif tools offline atau pun online



exif tool online jimplexif  

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEjM7ewQ8xrVZl3OSHX022YkRbYMKnrh79ibDD5W6lntnEqQ2g1qbFnJ2X9yxBAXfUk3nR-kL4Yfebuu7PGUay4CB9fLnJchfHMHuerpYxMEtp7mrxTkzqz0QzbHNsxq5r9a7Pxp5S4zd7N6GgMBDDXsde0j5nG-W9OXuTSTJKV_16phjUl1qlXQFt6rSQ=s1366" alt="OSINT">
</figure>

exif tool online pic2map

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEjYzP6DxWZh5kHzb-CWRCrP-IU-ftjVZvsdUQgs4WUSAdIi1FtNRh4XS22FYXx3GPvI-Q701jYl9FuNG01G-xneXm7FmIamBJpPF-3bRxaDnbMtLF_BtkZkTPka7Cm51oqEmSqDVr0UJe6Ax4mQSonI4c_HCBWQktWZxs3mNI7EtQK6PH35fa33Wg4ldA=s1280" alt="OSINT">
</figure>

exif tool cli  

<figure>
<img src="https://blogger.googleusercontent.com/img/a/AVvXsEjbnNCBSZ68aJmKXI-kqx3JdbsbcbTq7SEMedFB9IJ1DXLKu0pZOaa2uw1RWXZPiGAJ5D9WCSVjkPvzfUXjpBmMCYcuzZFVRCX4dnHa1hqYopjYij4cwW0oOXROjaB4pAaVuYU9UUgzbXIBBtvtApZlvLvLsTSZreYy-06aE2c_3WF2ssQ7dO7NmlFnEw=s1365" alt="OSINT">
</figure>

Anda dapat menggunakan exif atau exiftool cli. Anda dapat mengunduh exif tool dengan tautan berikut ini


Tautan : https://www.exiftool.org/


    ExifTool Command-Line Examples

    0) Extract information from a file

        exiftool a.jpg

        A basic command to extract all metadata from a file named a.jpg.

    1) Basic write example

        exiftool -artist=me a.jpg

        Writes Artist tag to a.jpg. Since no group is specified, EXIF:Artist will be written and all other existing Artist tags will be updated with the new value ("me").

    2) Write multiple files

        exiftool -artist=me a.jpg b.jpg c.jpg

        Writes Artist tag to three image files.

    3) Write to all files in a directory

        exiftool -artist=me c:/images

        Writes Artist tag to all files in directory c:/images.

    4) Write multiple tags

        exiftool -artist="Phil Harvey" -copyright="2011 Phil Harvey" a.jpg

        Writes two tags to a.jpg.

    5) Extracting duplicate tags

        exiftool -a -u -g1 a.jpg

        Print all meta information in an image, including duplicate and unknown tags, sorted by group (for family 1).

    6) undefined

        exiftool -common dir

        Print common meta information for all images in dir.

    7) undefined

        exiftool -T -createdate -aperture -shutterspeed -iso DIR > out.txt

        List meta information in tab-delimited column form for all images in directory DIR to an output text file named "out.txt".

    8) undefined

        exiftool -s -ImageSize -ExposureTime b.jpg

        Print ImageSize and ExposureTime tag names and values.

    9) undefined

        exiftool -l -canon c.jpg d.jpg

        Print standard Canon information from two image files.

    10) undefined

        exiftool -r -w .txt -common pictures

        Recursively extract common meta information from files in C directory, writing text output into files with the same names but with a C<.txt> extension.

    11) undefined

        exiftool -b -ThumbnailImage image.jpg > thumbnail.jpg

        Save thumbnail image from C to a file called C.

    12) undefined

        exiftool -b -JpgFromRaw -w _JFR.JPG -ext CRW -r .

        Recursively extract JPG image from all Canon CRW files in the current directory, adding C<_JFR.JPG> for the name of the output JPG files.

    13) undefined

        exiftool -d "%r %a, %B %e, %Y" -DateTimeOriginal -S -s *.jpg

        Print formatted date/time for all JPG files in the current directory.

    14) undefined

        exiftool -IFD1:XResolution -IFD1:YResolution image.jpg

        Extract image resolution from EXIF IFD1 information (thumbnail image IFD).

    15) undefined

        exiftool "-*resolution*" image.jpg

        Extract all tags with names containing the word "Resolution" from an image.

    16) undefined

        exiftool -xmp:author:all -a image.jpg

        Extract all author-related XMP information from an image.

    17) undefined

        exiftool -xmp -b a.jpg > out.xmp

        Extract complete XMP data record intact from a.jpg and write it to out.xmp using the special XMP tag (see the Extra Tags).

    18) undefined

        exiftool -p "$filename has date $dateTimeOriginal" -q -f dir

        Print one line of output containing the file name and DateTimeOriginal for each image in directory dir.

    20) undefined

        exiftool -ee -p "$gpslatitude, $gpslongitude, $gpstimestamp" a.m2ts

        Extract all GPS positions from an AVCHD video.

    22) undefined

        exiftool -icc_profile -b -w icc image.jpg

        Save complete ICC_Profile from an image to an output file with the same name and an extension of C<.icc>.

    23) undefined

        exiftool -htmldump -w tmp/%f_%e.html t/images

        Generate HTML pages from a hex dump of EXIF information in all images from the C directory. The output HTML files are written to the C directory (which is created if it didn't exist), with names of the form "FILENAME_EXT.html".



Cara ini adalah cara rekomendasi, Anda dapat berkolaborasi dengan teknik social engineering supaya lebih powerfull



# Hunt with mestaspolit

Metasploit, tools ini banyak sekali kegunaanya untuk web pentesting, social engineering, serta ujicoba virtual machine. Tools ini juga bisa Anda gunakan untuk dorking seperti dorking camera menggunakan shodan dan yan lainya.



Cara ini cukup sulit dilakukan dikarenakan sistem operasi dan software jaman sekarang sudah terupdate. Payload metasploit akan mudah dideteksi oleh antivirus dan teknik ini tidaklah mudah Anda harus bisa social engineering untuk menjebak target di dalam jaringan kita dan payload akan tereksekusi



Untuk melakukan cara ini Anda harus satu jaringan bersama target. Jika Anda berhasil satu jaringan dengan target selanjutnya Anda membuat sebuah  payload Anda diwajibkan untuk bisa memami meterpreter metasploit untuk mengekskusi setiap baris perintah



Apa saja yang bisa metasploit lakukan?



1. Mengetahui sistem yang digunakan

2. Mengethaui semua file

3. Melihat riwayat browsing, sms, telepon dan lainya

4. Spy camera

5. Spy mic audio

6. Copy file

7. Hak akses pada sistem



Anda dapat melakukan cara ini untuk penelitian OSINT Anda lebih lanjut dan mengambil atau mencuri file target untuk dianalisa. Jika Anda ingin memperlajari ini Anda dapat mencari tahu sendiri di sumber terbuka, kenapa tidak saya bahas? Karena jika saya bahas akan sangat panjang artikel ini dari pembuatan payload, social e, FUD payload atau steganography dan lainya


# Hunt with Geo OSINT

Okok di poin berikutnya adalah geo OSINT. Pada kasus ini Anda dapat menemukan lokasi pada suatu gambar atau sebuah vidio. Anda dapat menganalisa tempat tersebut dan mencoba menemukan dimana letak posisi dari gambar tersebut


Geolokasi melayani dapat digunakan dalam banyak cara. Ini digunakan oleh pemerintah dan polisi untuk tujuan keselamatan, seperti kapal terbang tak berawak atau gelang pergelangan kaki, yang memiliki beberapa efek meresahkan ketika kita berpikir tentang fakta bahwa tidak ada bentuk pengumpulan data yang dapat diandalkan.


Menggunakan geolokasi untuk melacak perubahan ketinggian, melihat riwayat posisi, menemukan toko terdekat, menandai foto media sosial, check-in ke lokasi, mendapatkan cuaca lokal, dll.


Anda dapat belajar geo OSINT dengan GeoGuessr



Tautan : https://www.geoguessr.com/



Adapun berbagai tools yang bisa Anda gunakan di antaranya :



1. CREEPY  

2. METAGOOFIL

3. GEONAMES

4. GEO-RECON


# Hunt with social engineering


Di poin terkahir adalah social engineering. Anda dapat mengumpulkan dataset Anda dengan metode ini, social engineering teknik yang sulit dan menantang untuk dilakukan tidak sembarang orang bisa menguasai teknik ini. Menurut saya teknik ini sulit dilakukan, kecuali target Anda lemah dan minim literasi mungkin sangatlah muda, tapi bayangkan jika target Anda orang yang mengethaui seluk beluk dan litrasi tinggi hal ini sangatlah sulit



Lalu apa saja yang bisa dilakukan social engineering ?



1. Mengetahui nama lengkap target

2. Mengetahui detail target



Terus apakah kita bisa kebal dari serangan social engineering ? Hmmm saya rasa tidak, bisa saja sewaktu - waktu saya atau Anda bisa terkena serangan ini, social engineering dapat menyerang kapan saja dan tidak kenal Anda itu siapa ( pandang bulu ). Teknik ini bisa saja digunakan oleh peretas untuk kepentingan pribadi, kesenangan biasa atau mengancam sesorang, masing - masing peretas pasti memiliki tujuan tertentu, untuk itu kita sebagai user (pengguna) harus berhati - hati dan selalu waspada


# OSINT report


Setalah Anda mengumpulkan data, menganalisa kini saatnya Anda membuat laporan. Anda dapat membuat laporan OSINT dari yang Anda temukan, berikut adalah simple template report OSINT



1. Name

2. Photo

3. Location

4. Date born

5. Social media :

- Facebook

- Instagram

- Linkedin

- Telegram

6. School

7. Last location

8. Close friend



any   


# Bagaimana cara meminimalisir serangan OSINT?     

Setelah mempelajari berbagai teknik OSINT saatnya membahas tentang cara meminimalisir serangan OSINT. Pasti Anda tidak ingin di OSINT kan? Doxing ? Nah untuk itu Anda dapat melakukan cara ini


- Kurangi mengabadikan informasi pribadi ke public



Anda dapat mengurangi hal - hal berbau informasi pribadi ke public misalnya riwayat hidup Anda, dimana Anda bermain, kesukaan Anda dan riwayat transaksi yang mengadung nomor rekening dan lainya. Anda cukup mengurangi hal seperti ini pada dasarnya apa yang Anda uplaod di dalam internet akan menjadi milik umum siapa saja bisa melihat, klaim, menggunakan dan lainya. Dan jejak digital sangat sulit hilang untuk itu Anda berhati - hati dan selalu waspada



- Never trust with people



Kurangi kepercayaan Anda pada orang asing atau orang baru. Anda tidak usah menanamkan 100% kepercayaan pada orang terlebih lagi orang asing, jika Anda ingin mempercayakan pada seseorang alangkah baiknya orang tersebut merupakan kerabat Anda, orang tua Anda dan sahabat sejati Anda dan jangan mengirimkan sesuatu yang bersifat pribadi ke orang asing



- Deleting your metadata file



Okok cara terakhir. Selalu mengahpus metada file Anda hal ini bertujuan untuk tetap menjaga identitas Anda terhadap orang lain (orang asing) Seperti yang sudah saya jelaskan di atas seseorang dapat melacak dan mengetahui Anda melalui sebuah metadata pada suati file untuk itu Anda dapat menggunkan online tools atau offline tools untuk menghapus metada Anda. Berikut adalah tools nya



1. https://jimpl.com/ (online tools)

2. exif tool untuk mengedit metadata Anda  (offline tools rekomen)



- Jangan berbuat onar



Jika Anda tidak ingin di OSINT atau Doxing cukup kurangi berbuat onar atau hal bodoh yang Anda lakukan. Pasalnya cara ini dapat memancing emosi sesorang dan melacak Anda sudah banyak kasus seperti ini terjadi si social media untuk itu selalu jaga Anda masing masing



Keyword search :

    OSINT
    Kupas tuntas OSINT
    OSINT teknik
    Belajar OSINT
