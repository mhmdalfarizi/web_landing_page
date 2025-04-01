# Landing Page Branding Diri untuk Pengusaha

Landing page sederhana untuk branding diri pengusaha yang responsif, modern, dan profesional. Proyek ini dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework tambahan.

✨ **[DEMO LIVE WEBSITE](https://mhmdalfarizi.github.io/web_landing_page/)** ✨

## Fitur

- Desain responsif yang bekerja di semua perangkat (mobile, tablet, desktop)
- Navigasi yang smooth scroll ke bagian yang dituju
- Slider testimonial interaktif
- Animasi hover dan transisi untuk UX yang lebih baik
- Form kontak dengan validasi dasar
- Timeline pencapaian yang menarik
- Area layanan dengan card yang interaktif
- Call to action yang jelas

## Struktur File

```
landing_page/
│
├── html/
│   └── index.html        # File HTML utama
│
├── css/
│   └── style.css         # File CSS utama
│
├── javascript/
│   └── script.js         # File JavaScript utama
│
└── README.md             # Dokumentasi proyek
```

## Cara Menggunakan

1. Clone atau download repositori ini.
2. Buka file `html/index.html` di browser web Anda.
3. Untuk mengembangkan lebih lanjut, Anda dapat mengedit file-file berikut:
   - `html/index.html` - Struktur dan konten halaman
   - `css/style.css` - Styling dan tampilan
   - `javascript/script.js` - Fungsi interaktif

## Kustomisasi

### Mengubah Warna Tema

Buka file `css/style.css` dan ubah variabel CSS di bagian `:root`:

```css
:root {
    --primary-color: #2c3e50;      /* Warna utama */
    --secondary-color: #e74c3c;    /* Warna aksen */
    --accent-color: #3498db;       /* Warna aksen tambahan */
    --light-color: #ecf0f1;        /* Warna latar belakang terang */
    --dark-color: #2c3e50;         /* Warna latar belakang gelap */
    --text-color: #333;            /* Warna teks utama */
    --text-light: #7f8c8d;         /* Warna teks sekunder */
    /* Variabel lainnya... */
}
```

### Mengganti Gambar

1. Tambahkan gambar Anda ke dalam direktori `images/` (perlu dibuat) 
2. Ganti placeholder icon dengan tag gambar di HTML:

```html
<div class="image-placeholder">
    <i class="fas fa-user-tie"></i>
</div>
```

Menjadi:

```html
<div class="image-container">
    <img src="../images/your-image.jpg" alt="Deskripsi Gambar">
</div>
```

### Menambahkan Konten

Edit file `html/index.html` dan ubah teks sesuai dengan kebutuhan Anda. Bagian yang perlu diperhatikan untuk disesuaikan:

- Nama bisnis di header dan footer
- Slogan dan deskripsi di bagian hero
- Informasi tentang diri di bagian about
- Daftar layanan di bagian services
- Pencapaian di bagian achievements
- Testimonial di bagian testimonials
- Informasi kontak di bagian contact

## Menambahkan Fitur

Beberapa ide untuk pengembangan lebih lanjut:

1. **Blog Section** - Menambahkan bagian blog dengan beberapa artikel terbaru
2. **Portfolio Gallery** - Menampilkan portofolio proyek dengan galeri
3. **Video Background** - Mengganti gambar hero dengan video background
4. **Live Chat** - Menambahkan widget live chat untuk komunikasi langsung
5. **Multilingual Support** - Menambahkan dukungan multi bahasa

## Browser Support

Landing page ini kompatibel dengan browser modern:
- Google Chrome (terbaru)
- Mozilla Firefox (terbaru)
- Safari (terbaru)
- Microsoft Edge (terbaru)
- Opera (terbaru)

## Credits

- Font Awesome - untuk ikon
- Google Fonts (Poppins) - untuk tipografi
- Unsplash - untuk placeholder foto (jika ditambahkan)

---

Dibuat oleh Muhamad Alfarizi 
