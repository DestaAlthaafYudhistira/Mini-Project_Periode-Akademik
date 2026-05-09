# Periode Akademik Management System

Sistem manajemen periode akademik yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## Fitur

- ✅ Tampilan halaman Periode Akademik dengan tabel
- ✅ Navigation Bar dengan menu multi-halaman
- ✅ Search dan filter data
- ✅ Pagination untuk data
- ✅ Checkbox untuk select multiple rows
- ✅ Tombol Tambah dan Hapus
- ✅ Breadcrumb navigation
- ✅ Responsive design

## Instalasi

### Prerequisites
- Node.js v16 atau lebih tinggi
- npm atau yarn

### Setup

1. Masuk ke direktori project:
```bash
cd periode-akademik
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## Struktur Project

```
periode-akademik/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar dengan menu mobile
│   │   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   │   ├── PeriodeAkademikTable.tsx  # Tabel periode akademik
│   │   └── Layout.tsx          # Layout wrapper
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── index.html
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Stack Teknologi

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled components
- **Heroicons** - SVG icons

## Fitur Utama

### Navigation Bar
- Menu bar dengan links ke berbagai halaman
- Mobile responsive dengan hamburger menu
- Styling blue dengan hover effects

### Tabel Periode Akademik
- Menampilkan data periode akademik dengan columns:
  - Kode
  - Nama Periode
  - Tanggal Awal Kuliah
  - Tanggal Akhir Kuliah
  - Tanggal Awal UTS
  - Tanggal Awal UAS
  - Total Program Studi
  - Status Aktif
  - Aksi (Edit)

### Search & Filter
- Search box untuk mencari berdasarkan kode atau nama periode
- Dropdown untuk filter
- Real-time search

### Pagination
- Pagination dengan tombol Previous/Next
- Indikator halaman
- Dropdown untuk memilih jumlah data per halaman

### Bulk Actions
- Checkbox untuk select multiple rows
- Tombol Hapus untuk delete selected rows
- Select all checkbox di header

## Build untuk Production

```bash
npm run build
```

Output akan berada di folder `dist/`

## Preview Production Build

```bash
npm run preview
```

## Lisensi

MIT
