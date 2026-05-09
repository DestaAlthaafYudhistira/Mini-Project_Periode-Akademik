import { useState } from 'react';
import Layout from './components/Layout';
import PeriodeAkademikPage from './pages/PeriodeAkademikPage';
import ReportPage from './pages/ReportPage';
import { AkademikData } from './types';

const initialAkademikData: AkademikData[] = [
  {
    id: 1,
    kode: '20261',
    tahunAjaran: '2026/2027',
    semester: 'Ganjil',
    namaPeriode: 'Periode 2026/2027 Ganjil',
    namaSingkat: '2026 Ganjil',
    tglAwalKuliah: '31 Agu 2026',
    tglAkhirKuliah: '18 Des 2026',
    tglAwalUTS: '13 Okt 2025',
    tglAkhirUTS: '20 Okt 2025',
    tglAwalUAS: '15 Des 2026',
    tglAkhirUAS: '18 Des 2026',
    ketuaUjian: 'Dr. Siti',
    jumlahPertemuan: '16',
    minimalPresensi: '75%',
    kuesionerLayanan: 'Tidak',
    totalProgram: '12',
    aktif: true,
  },
  {
    id: 2,
    kode: '20252',
    tahunAjaran: '2025/2026',
    semester: 'Genap',
    namaPeriode: 'Periode 2025/2026 Genap',
    namaSingkat: '2025 Genap',
    tglAwalKuliah: '2 Feb 2026',
    tglAkhirKuliah: '29 Mei 2026',
    tglAwalUTS: '6 Apr 2026',
    tglAkhirUTS: '13 Apr 2026',
    tglAwalUAS: '17 Jun 2026',
    tglAkhirUAS: '20 Jun 2026',
    ketuaUjian: 'Dr. Budi',
    jumlahPertemuan: '18',
    minimalPresensi: '80%',
    kuesionerLayanan: 'Ya',
    totalProgram: '10',
    aktif: true,
  },
  {
    id: 3,
    kode: '20251',
    tahunAjaran: '2025/2026',
    semester: 'Ganjil',
    namaPeriode: 'Periode 2025/2026 Ganjil',
    namaSingkat: '2025 Ganjil',
    tglAwalKuliah: '25 Agu 2025',
    tglAkhirKuliah: '12 Des 2025',
    tglAwalUTS: '13 Okt 2025',
    tglAkhirUTS: '20 Okt 2025',
    tglAwalUAS: '15 Des 2025',
    tglAkhirUAS: '18 Des 2025',
    ketuaUjian: 'Dr. Ani',
    jumlahPertemuan: '16',
    minimalPresensi: '75%',
    kuesionerLayanan: 'Tidak',
    totalProgram: '8',
    aktif: false,
  },
];

function App() {
  const [activePage, setActivePage] = useState<'akademik' | 'report'>('akademik');
  const [data, setData] = useState<AkademikData[]>(initialAkademikData);

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activePage === 'akademik' ? (
          <PeriodeAkademikPage data={data} setData={setData} />
        ) : (
          <ReportPage data={data} />
        )}
      </div>
    </Layout>
  );
}

export default App;
