# Mini-Project_Periode-Akademik
# 📊 Periode Akademik Management System

Sistem manajemen periode akademik yang modern dan responsif, dibangun dengan **React + TypeScript + Tailwind CSS**.


### Alur Aplikasi
1. **Periode Akademik Page**: Halaman utama untuk melihat, menambah, mengedit, dan menghapus data periode akademik
2. **Report Page**: Halaman laporan untuk memfilter data, mencetak, dan mengekspor ke CSV
3. **Shared State**: Data periode akademik disimpan di level App dan dibagikan ke kedua halaman untuk konsistensi data

## 📂 Struktur Folder Lengkap

```
periode-akademik/
├── 📁 src/
│   ├── 📁 components/          # Reusable React components
│   │   ├── Navbar.tsx          # Navigation bar with menu
│   │   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Modal.tsx           # Reusable modal dialog
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── AddPeriodeModal.tsx # Form for adding periode
│   │   └── PeriodeAkademikTable.tsx # (deprecated)
│   │
│   ├── 📁 pages/               # Page components
│   │   ├── PeriodeAkademikPage.tsx # Main periode akademik management page
│   │   └── ReportPage.tsx           # Report page with filters, print & export
│   │
│   ├── 📁 hooks/               # Custom React hooks
│   │   ├── useModal.ts         # Modal state management
│   │   └── useTableState.ts    # Table state management
│   │
│   ├── 📁 utils/               # Utility functions
│   │   ├── helpers.ts          # Helper functions
│   │   └── storage.ts          # Local storage utilities
│   │
│   ├── 📁 constants/           # Constants & config
│   │   └── index.ts            # Menu items, table columns, etc
│   │
│   ├── 📁 types/               # TypeScript type definitions
│   │   └── index.ts            # Interfaces & types
│   │
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Vite entry point
│   └── index.css               # Global styles
│
├── 📁 public/
│   └── index.html              # Static assets
│
├── 📄 index.html               # HTML template
├── 📄 package.json             # Dependencies & scripts
├── 📄 tsconfig.json            # TypeScript config
├── 📄 tsconfig.node.json       # TypeScript node config
├── 📄 vite.config.ts           # Vite build config
├── 📄 tailwind.config.js       # Tailwind CSS config
├── 📄 postcss.config.js        # PostCSS config
├── 📄 .env.example             # Environment variables template
├── 📄 .gitignore               # Git ignore rules
├── 📄 README.md                # Project overview
├── 📄 DOCUMENTATION.md         # Detailed documentation
└── 📄 SETUP_GUIDE.md           # Setup instructions
```

## 📋 File Descriptions

### Components
- **Navbar.tsx**: Navigation bar dengan responsive mobile menu
- **Breadcrumb.tsx**: Breadcrumb navigation component
- **Layout.tsx**: Wrapper layout dengan Navbar dan Footer
- **Modal.tsx**: Generic modal dialog component
- **Button.tsx**: Reusable button dengan multiple variants
- **AddPeriodeModal.tsx**: Specialized modal untuk form tambah periode akademik
- **PeriodeAkademikTable.tsx**: Table component (untuk referensi)

### Pages
- **PeriodeAkademikPage.tsx**: Halaman utama dengan state management lengkap untuk manajemen periode akademik (list, add, edit, delete)
- **ReportPage.tsx**: Halaman laporan dengan fitur filter, pencarian, print, dan export data periode akademik ke CSV

### Hooks
- **useModal.ts**: Hook untuk manage modal open/close state
- **useTableState.ts**: Hook untuk manage table state (pagination, search, selection)

### Utils
- **helpers.ts**: Utility functions (format tanggal, debounce, string truncate)
- **storage.ts**: Local storage utilities untuk persist data

### Constants & Types
- **constants/index.ts**: Menu items, table columns, default values
- **types/index.ts**: TypeScript interfaces dan type definitions

## 🎨 Features Detail

### Navigation Bar
- Menu links: Dashboard, Periode Akademik, Program Studi, Kurikulum, Mahasiswa, Setting
- Mobile hamburger menu
- Blue color scheme (#1e40af)
- Hover effects

### Periode Akademik Page
- **Breadcrumb**: Beranda > Setting > Periode Akademik
- **Search Bar**: Real-time search by kode or nama periode
- **Buttons**: 
  - "Tambah" (Green) - Open modal untuk tambah data
  - "Hapus" (Red) - Delete selected rows
- **Table Columns**:
  - Kode
  - Nama Periode
  - Tanggal Awal Kuliah
  - Tanggal Akhir Kuliah
  - Tanggal Awal UTS
  - Tanggal Awal UAS
  - Total Program Studi
  - Status Aktif (Icons)
  - Aksi (Edit button)
- **Pagination**: Previous/Next buttons, page indicators
- **Bulk Selection**: Select multiple rows dengan checkbox

### Add Periode Modal
- Form fields:
  - Kode (required)
  - Nama Periode (required)
  - Tanggal Awal Kuliah (date picker)
  - Tanggal Akhir Kuliah (date picker)
  - Tanggal Awal UTS (date picker, optional)
  - Tanggal Awal UAS (date picker, optional)
- Submit button untuk save
- Cancel button untuk close

### Report Page
- **Breadcrumb**: Beranda > Setting > Periode Akademik > Report
- **Filter Section**: Form untuk filter data berdasarkan:
  - Tanggal Awal Kuliah
  - Tanggal Akhir Kuliah
  - Tanggal Awal UTS
  - Tanggal Akhir UAS
  - Status (Semua/Aktif/Tidak Aktif)
- **Action Buttons**:
  - "Cari" (Blue) - Apply filters dan update tabel
  - "Print" (Gray) - Open modal konfirmasi print
  - "Export CSV" (Green) - Download data sebagai file CSV
- **Report Table**: Menampilkan data yang sudah difilter dengan kolom:
  - Kode
  - Nama Periode
  - Tanggal Awal Kuliah
  - Tanggal Akhir Kuliah
  - Tanggal Awal UTS
  - Tanggal Awal UAS
  - Total Program Studi
  - Status Aktif
- **Print Modal**: Konfirmasi sebelum print dengan opsi untuk print halaman
- **CSV Export**: Mengunduh file dengan nama "laporan-periode-akademik.csv" berisi semua data yang difilter

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Library |
| TypeScript | 5.2.2 | Type Safety |
| Vite | 5.0.0 | Build Tool |
| Tailwind CSS | 3.3.6 | Styling |
| Headless UI | 1.7.17 | Components |
| Heroicons | 2.0.18 | Icons |
