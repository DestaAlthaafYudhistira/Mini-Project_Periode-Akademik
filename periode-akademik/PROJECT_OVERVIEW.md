# 📊 Periode Akademik Management System

Sistem manajemen periode akademik yang modern dan responsif, dibangun dengan **React + TypeScript + Tailwind CSS**.

## 🎯 Overview

Project ini menampilkan halaman manajemen periode akademik dengan:
- ✅ Navigation Bar dengan menu multi-halaman
- ✅ Tabel periode akademik dengan data dinamis
- ✅ Search & Filter functionality
- ✅ Pagination yang user-friendly
- ✅ Bulk selection dengan checkbox
- ✅ Modal dialog untuk tambah data
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Breadcrumb navigation
- ✅ Reusable components
- ✅ Custom hooks untuk state management
- ✅ Utility functions
- ✅ Report page dengan filter, print, dan export CSV
- ✅ Shared state management antara halaman untuk sinkronisasi data real-time

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

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd "c:\Users\User\Documents\Kuliah\Mini Project\periode-akademik"
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:5173**

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

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Features

1. **Responsive Design**
   - Mobile-first approach
   - Hamburger menu untuk mobile
   - Responsive table dengan overflow scroll

2. **State Management**
   - Custom hooks untuk table state
   - Modal state management
   - Search dan filter state
   - Shared state antara halaman untuk data periode akademik

3. **Type Safety**
   - Full TypeScript implementation
   - Strict mode enabled
   - Type definitions untuk semua components

4. **Reusable Components**
   - Modal dialog
   - Button dengan variants
   - Breadcrumb
   - Navbar

5. **Utility Functions**
   - Date formatting
   - CSV export functionality
   - Print utilities

6. **Report & Export Features**
   - Advanced filtering berdasarkan tanggal dan status
   - Print functionality dengan modal konfirmasi
   - CSV export untuk data analysis
   - Real-time data synchronization antara halaman
   - Debounce
   - Local storage management
   - String utilities

## 💡 Customization Tips

### Mengubah Warna
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YourColor',
  success: '#YourColor',
  danger: '#YourColor',
}
```

### Menambah Menu Item
Edit di `src/components/Navbar.tsx` atau `src/constants/index.ts`

### Mengubah Data
Edit `src/pages/PeriodeAkademikPage.tsx` - state `data`

### Menambah Halaman Baru
1. Buat file di `src/pages/`
2. Import di `App.tsx`
3. Render dengan `<Layout>` wrapper

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Headless UI](https://headlessui.com)

## 📝 Notes

- Semua data saat ini menggunakan state lokal (tidak ada backend)
- Untuk production, integration dengan backend API diperlukan
- Local storage utilities sudah tersedia untuk persistence
- Custom hooks dapat diextend untuk additional functionality

## ✨ Next Steps

1. ✅ Setup project dan jalankan `npm run dev`
2. ✅ Explore struktur folder dan components
3. ✅ Customize sesuai kebutuhan
4. ✅ Integrasikan dengan backend API
5. ✅ Deploy ke production

---

**Happy Coding! 🎉**

Jika ada pertanyaan, lihat `DOCUMENTATION.md` atau `SETUP_GUIDE.md`
