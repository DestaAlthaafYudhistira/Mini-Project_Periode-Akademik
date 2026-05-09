export const MENU_ITEMS = [
  { label: 'Dashboard', href: '/' },
  { label: 'Periode Akademik', href: '/akademik' },
  { label: 'Program Studi', href: '/program' },
  { label: 'Kurikulum', href: '/kurikulum' },
  { label: 'Mahasiswa', href: '/mahasiswa' },
  { label: 'Setting', href: '/setting' },
];

export const TABLE_COLUMNS = [
  { key: 'kode', label: 'Kode' },
  { key: 'namaPeriode', label: 'Nama Periode' },
  { key: 'tglAwalKuliah', label: 'Tgl. Awal Kuliah' },
  { key: 'tglAkhirKuliah', label: 'Tgl. Akhir Kuliah' },
  { key: 'tglAwalUTS', label: 'Tgl. Awal UTS' },
  { key: 'tglAwalUAS', label: 'Tgl. Awal UAS' },
  { key: 'totalProgram', label: 'Total Program Studi' },
  { key: 'aktif', label: 'AktifP' },
  { key: 'aksi', label: 'Aksi' },
];

export const ITEMS_PER_PAGE = [10, 20, 50, 100];

export const DEFAULT_ITEMS_PER_PAGE = 10;
