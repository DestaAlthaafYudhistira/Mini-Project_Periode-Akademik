# 🚀 Quick Reference Guide

## Mulai Menggunakan Project

### 1️⃣ Install & Run (2 menit)
```bash
# Navigate to project
cd "c:\Users\User\Documents\Kuliah\Mini Project\periode-akademik"

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### 2️⃣ Struktur File Penting

```
src/
├── App.tsx                          # Entry point app
├── pages/
│   └── PeriodeAkademikPage.tsx      # ⭐ Halaman utama
├── components/
│   ├── Navbar.tsx                   # Menu navigation
│   ├── Layout.tsx                   # Layout wrapper
│   ├── AddPeriodeModal.tsx          # Form modal
│   └── Button.tsx                   # Button reusable
└── hooks/
    └── useTableState.ts            # State management
```

### 3️⃣ Common Tasks

#### Menambah Menu Item
**File**: `src/components/Navbar.tsx`
```typescript
const menuItems = [
  { label: 'Dashboard', href: '#' },
  { label: 'Menu Baru', href: '#new' },  // ← Tambah di sini
];
```

#### Mengubah Warna
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: '#3b82f6',        // ← Ubah warna di sini
  success: '#10b981',
  danger: '#ef4444',
}
```

#### Menambah Halaman Baru
```typescript
// 1. Buat file di src/pages/NewPage.tsx
import React from 'react';
const NewPage: React.FC = () => {
  return <div>New Page</div>;
};
export default NewPage;

// 2. Import di App.tsx
import NewPage from './pages/NewPage';

// 3. Gunakan dalam Layout
<Layout><NewPage /></Layout>
```

#### Menambah Data Awal
**File**: `src/pages/PeriodeAkademikPage.tsx`
```typescript
const [data, setData] = useState<AkademikData[]>([
  // Tambah data baru di sini
  {
    id: 11,
    kode: '20261',
    namaPeriode: 'Periode Baru',
    tglAwalKuliah: '01 Sep 2026',
    tglAkhirKuliah: '15 Dec 2026',
    tglAwalUTS: '01 Oct 2026',
    tglAwalUAS: '15 Dec 2026',
    totalProgram: '-',
    aktif: true,
  },
]);
```

## 📋 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build untuk production
npm run preview  # Preview production build
```

## 🎨 Component Usage Examples

### Menggunakan Modal Hook
```typescript
import { useModal } from '../hooks/useModal';

const MyComponent = () => {
  const { isOpen, open, close, toggle } = useModal();
  
  return (
    <>
      <button onClick={open}>Open Modal</button>
      {isOpen && <MyModal onClose={close} />}
    </>
  );
};
```

### Menggunakan Table State Hook
```typescript
import { useTableState } from '../hooks/useTableState';

const MyTable = () => {
  const tableState = useTableState();
  
  return (
    <>
      <input 
        value={tableState.searchTerm}
        onChange={(e) => tableState.setSearchTerm(e.target.value)}
      />
      <button onClick={() => tableState.toggleSelectRow(1)}>
        Toggle Row 1
      </button>
    </>
  );
};
```

### Menggunakan Button Component
```typescript
import Button from '../components/Button';

export const App = () => {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
      <Button variant="success" size="lg">Large Success Button</Button>
      <Button variant="danger" disabled>Disabled Button</Button>
    </>
  );
};
```

## 🔍 Debugging Tips

### Check Console for Errors
```
Press F12 → Console tab
```

### Check TypeScript Errors
```bash
npx tsc --noEmit
```

### Clear Cache
```bash
# Delete node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Quick Documentation Links

| Document | Purpose |
|----------|---------|
| `README.md` | Project overview |
| `SETUP_GUIDE.md` | Setup & troubleshooting |
| `DOCUMENTATION.md` | Detailed documentation |
| `PROJECT_OVERVIEW.md` | Architecture & features |
| `FILES_SUMMARY.md` | File listing |

## ⚡ Performance Tips

1. Use `useCallback` untuk meng-cache functions
2. Use `useMemo` untuk meng-cache computed values
3. Lazy load components dengan `React.lazy`
4. Optimize images
5. Use production build untuk deployment

## 🔐 Environment Variables

Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Edit variables sesuai kebutuhan:
```
VITE_APP_TITLE=Your App Title
VITE_API_URL=http://localhost:3000/api
```

Access dalam code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🎯 Common Issues & Solutions

### ❌ "npm is not recognized"
✅ Install Node.js dari https://nodejs.org/

### ❌ Port 5173 already in use
✅ Kill process atau gunakan port berbeda:
```bash
npm run dev -- --port 3000
```

### ❌ Module not found error
✅ Pastikan path import benar:
```typescript
// ✅ Correct
import Component from './components/Component';

// ❌ Wrong
import Component from './Component';
```

### ❌ TypeScript errors
✅ Pastikan types tersedia:
```bash
npm install --save-dev @types/react
```

## 📱 Responsive Breakpoints

```css
/* Tailwind breakpoints */
sm   → 640px   (mobile)
md   → 768px   (tablet)
lg   → 1024px  (desktop)
xl   → 1280px  (large desktop)
2xl  → 1536px  (extra large)
```

Usage:
```typescript
<div className="md:flex lg:grid">
  Responsive layout
</div>
```

## 🚀 Deployment Checklist

- [ ] Run `npm run build`
- [ ] Test with `npm run preview`
- [ ] Check console for errors
- [ ] Optimize images
- [ ] Update environment variables
- [ ] Deploy `dist/` folder
- [ ] Test in production

## 📖 Learning Path

1. Start with `README.md`
2. Follow `SETUP_GUIDE.md`
3. Explore `src/pages/PeriodeAkademikPage.tsx`
4. Read `DOCUMENTATION.md` for details
5. Customize components as needed
6. Deploy when ready

## 🤝 Project Structure Best Practices

```
✅ DO:
- Keep components small and focused
- Use TypeScript for type safety
- Use custom hooks for reusable logic
- Organize files by feature/type
- Use constants for magic strings

❌ DON'T:
- Put all logic in one component
- Use `any` type in TypeScript
- Create deeply nested folders
- Hardcode values in components
```

## 💡 Pro Tips

1. **Use browser DevTools**: F12 → React tab untuk debug
2. **Use TypeScript**: Catch errors early
3. **Reuse components**: DRY principle
4. **Write comments**: Explain complex logic
5. **Test locally**: Before deploying

---

**Need Help?** 
- Read the relevant documentation
- Check console for error messages
- Review code comments
- Google the specific error

**Good Luck! 🎉**
