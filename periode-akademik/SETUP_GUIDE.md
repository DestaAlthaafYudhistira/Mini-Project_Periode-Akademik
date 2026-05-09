## Instruksi Setup Lengkap

### 1. Prerequisites
Pastikan Anda telah menginstal:
- **Node.js** (v16 atau lebih tinggi) - [Download](https://nodejs.org/)
- **npm** atau **yarn** (biasanya terinstall dengan Node.js)

Verifikasi instalasi:
```bash
node --version
npm --version
```

### 2. Clone/Download Project
Jika Anda download sebagai ZIP, extract terlebih dahulu ke folder yang diinginkan.

### 3. Navigate ke Project Directory
```bash
cd "c:\Users\User\Documents\Kuliah\Mini Project\periode-akademik"
```

### 4. Install Dependencies
```bash
npm install
```

Tunggu hingga semua packages terinstall. Proses ini mungkin memakan waktu beberapa menit tergantung kecepatan internet.

### 5. Start Development Server
```bash
npm run dev
```

Anda akan melihat output:
```
VITE v5.0.0  ready in 123 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### 6. Buka di Browser
- Buka browser favorit Anda
- Pergi ke `http://localhost:5173`
- Aplikasi akan reload otomatis saat Anda mengubah file

## 🐛 Troubleshooting

### Error: "npx is not recognized"
**Solusi**: Install Node.js dengan benar. Pastikan Node.js ditambahkan ke PATH sistem.

### Port 5173 sudah digunakan
**Solusi**: 
- Tutup aplikasi yang menggunakan port tersebut, atau
- Gunakan port berbeda dengan menjalankan:
  ```bash
  npm run dev -- --port 3000
  ```

### Dependencies tidak terinstall
**Solusi**: Hapus folder `node_modules` dan `package-lock.json`, lalu:
```bash
npm install
```

### Build Error
**Solusi**: Pastikan TypeScript tidak ada error:
```bash
npx tsc --noEmit
```

## 📚 Dokumentasi Komponen

### Navbar Component
- Menampilkan menu bar dengan responsive design
- Menu items dapat dikustomisasi di `src/components/Navbar.tsx`
- Mobile menu otomatis muncul di layar kecil (< 768px)

### PeriodeAkademikPage Component
- Halaman utama yang menampilkan tabel periode akademik
- Supports search, filter, pagination, dan bulk selection
- Modal untuk menambah periode akademik baru

### Modal Component
- Reusable modal dialog
- Props: `isOpen`, `onClose`, `title`, `children`, `footer`
- Menggunakan portal dengan backdrop

### Button Component
- Reusable button dengan berbagai variant
- Variants: `primary`, `success`, `danger`, `secondary`
- Sizes: `sm`, `md`, `lg`

## 🎨 Customization

### Mengubah Warna
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YourColor',
      success: '#YourColor',
      // ...
    }
  }
}
```

### Mengubah Menu Items
Edit di `src/components/Navbar.tsx`:
```typescript
const menuItems = [
  { label: 'Dashboard', href: '#' },
  // Tambah menu baru di sini
];
```

### Menambah Data
Edit sample data di `src/pages/PeriodeAkademikPage.tsx`:
```typescript
const [data, setData] = useState<AkademikData[]>([
  // Tambah data baru di sini
]);
```

## 🚀 Production Build

Untuk membuat build yang siap production:
```bash
npm run build
```

Hasilnya akan di folder `dist/`. Anda dapat:
1. Deploy ke server
2. Preview secara lokal dengan `npm run preview`
3. Gunakan static file hosting (Netlify, Vercel, etc)

## 📞 Support

Jika mengalami masalah:
1. Cek dokumentasi di `DOCUMENTATION.md`
2. Lihat console browser (F12) untuk error messages
3. Cek terminal untuk build errors
4. Pastikan semua dependencies terinstall dengan benar

## ✅ Checklist

- [x] Node.js installed
- [x] Project folder ready
- [x] Dependencies installed (`npm install`)
- [x] Development server running (`npm run dev`)
- [x] Browser opened at `http://localhost:5173`
- [x] Aplikasi tampil dengan baik

Selamat! Project siap digunakan.
