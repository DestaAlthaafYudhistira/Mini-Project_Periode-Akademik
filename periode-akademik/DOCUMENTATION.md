# Periode Akademik Management System

Sistem manajemen periode akademik yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## ✨ Fitur Utama

### 1. **Navigation Bar**
   - Menu bar dengan links ke berbagai halaman
   - Mobile responsive dengan hamburger menu
   - Styling blue dengan hover effects
   - Links: Dashboard, Periode Akademik, Program Studi, Kurikulum, Mahasiswa, Setting

### 2. **Halaman Periode Akademik**
   - Breadcrumb navigation (Beranda > Setting > Periode Akademik)
   - Search dan filter data periode akademik
   - Tabel dengan kolom lengkap

### 3. **Tabel dengan Fitur Lengkap**
   - **Kolom**: Kode, Nama Periode, Tgl. Awal Kuliah, Tgl. Akhir Kuliah, Tgl. Awal UTS, Tgl. Awal UAS, Total Program Studi, Status Aktif, Aksi
   - **Bulk Selection**: Checkbox untuk select multiple rows
   - **Pagination**: Navigate antara halaman dengan tombol Previous/Next
   - **Status Icons**: Visual indicators untuk status aktif

### 4. **Search dan Filter**
   - Real-time search berdasarkan kode atau nama periode
   - Dropdown filter
   - Auto reset pagination saat search

### 5. **Modal Dialog**
   - Form tambah periode akademik
   - Input fields untuk kode, nama, dan tanggal
   - Validasi form
   - Tombol Batal dan Simpan

### 6. **Reusable Components**
   - Modal component
   - Button dengan variant (primary, success, danger, secondary)
   - Breadcrumb navigation
   - Navbar dengan mobile menu

### 7. **Custom Hooks**
   - `useModal`: Manage modal state (open, close, toggle)
   - `useTableState`: Manage table state (pagination, selection, search)

### 8. **Utility Functions**
   - Date formatting
   - Debounce
   - String truncation
   - Local storage utilities
   - ID generation

## 📁 Struktur Project

```
periode-akademik/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation bar dengan menu mobile
│   │   ├── Breadcrumb.tsx          # Breadcrumb navigation
│   │   ├── Layout.tsx              # Layout wrapper dengan Navbar & Footer
│   │   ├── PeriodeAkademikTable.tsx # Old table component (deprecated)
│   │   ├── Modal.tsx               # Reusable modal component
│   │   ├── Button.tsx              # Reusable button component
│   │   └── AddPeriodeModal.tsx      # Form modal untuk tambah periode
│   ├── pages/
│   │   └── PeriodeAkademikPage.tsx  # Halaman utama periode akademik
│   ├── hooks/
│   │   ├── useModal.ts             # Custom hook untuk modal state
│   │   └── useTableState.ts        # Custom hook untuk table state
│   ├── utils/
│   │   ├── helpers.ts              # Helper functions (format, debounce, etc)
│   │   └── storage.ts              # Local storage utilities
│   ├── constants/
│   │   └── index.ts                # Constants (menu items, columns, etc)
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles & tailwind directives
├── public/
│   └── index.html
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16 atau lebih tinggi
- npm atau yarn

### Installation

1. **Navigate to project directory**
```bash
cd periode-akademik
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 📦 Stack Teknologi

| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| React | 18.2.0 | UI library |
| TypeScript | 5.2.2 | Type safety |
| Vite | 5.0.0 | Build tool |
| Tailwind CSS | 3.3.6 | Utility-first CSS |
| Headless UI | 1.7.17 | Unstyled components |
| Heroicons | 2.0.18 | SVG icons |

## 🎨 Styling

### Color Scheme
- **Primary**: Blue (#1e40af)
- **Success**: Green (#059669)
- **Danger**: Red (#dc2626)
- **Warning**: Amber (#f59e0b)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Mobile menu dengan hamburger button
- Responsive table dengan overflow scroll

## 🔧 Build untuk Production

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📋 Available Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Start development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview production build |

## 💡 Tips Penggunaan

### Menambah Halaman Baru
1. Buat file di `src/pages/`
2. Import di `App.tsx`
3. Render dalam Layout

### Menambah Komponen Baru
1. Buat file di `src/components/`
2. Buat component dengan TypeScript
3. Export dan import di file yang membutuhkan

### Menggunakan Custom Hooks
```typescript
import { useModal } from '../hooks/useModal';

const { isOpen, open, close, toggle } = useModal();
```

### Menggunakan Utility Functions
```typescript
import { formatTanggal, debounce, truncateString } from '../utils/helpers';

const formatted = formatTanggal('2026-08-31'); // 31 Agu 2026
```

## 🎯 Fitur yang Dapat Dikembangkan

- [ ] Integrasi dengan API backend
- [ ] Authentication & Authorization
- [ ] Data export (PDF, Excel)
- [ ] Advanced filtering & sorting
- [ ] Date range picker
- [ ] Dashboard analytics
- [ ] User management
- [ ] Audit log
- [ ] Real-time notifications
- [ ] Dark mode

## 📝 Lisensi

MIT

## 👤 Author

Created for Mini Project Kuliah

## 🤝 Kontribusi

Untuk kontribusi, silakan buat pull request atau open issue

---

**Last Updated**: May 2026
