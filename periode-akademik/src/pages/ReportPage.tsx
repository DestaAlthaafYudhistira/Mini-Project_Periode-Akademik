import React, { useState, useCallback, useEffect } from 'react';
import { ArrowDownTrayIcon, PrinterIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { AkademikData } from '../types';

interface ReportPageProps {
  data: AkademikData[];
}

const exportReportCsv = (data: AkademikData[]) => {
  const rows = [
    ['Kode', 'Nama Periode', 'Awal Kuliah', 'Akhir Kuliah', 'Awal UTS', 'Awal UAS', 'Total Program Studi', 'Aktif'],
    ...data.map((item) => [
      item.kode,
      item.namaPeriode,
      item.tglAwalKuliah,
      item.tglAkhirKuliah,
      item.tglAwalUTS,
      item.tglAwalUAS,
      item.totalProgram,
      item.aktif ? 'Ya' : 'Tidak',
    ]),
  ];

  const csvContent = rows
    .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'laporan-periode-akademik.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ReportPage: React.FC<ReportPageProps> = ({ data }) => {
  const [filters, setFilters] = useState({
    tglAwalKuliah: '',
    tglAkhirKuliah: '',
    tglAwalUTS: '',
    tglAwalUAS: '',
    status: 'all',
  });
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<AkademikData[]>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handlePrint = useCallback(() => {
    setIsPrintModalOpen(true);
  }, []);

  const handleExport = useCallback(() => {
    exportReportCsv(filteredData);
  }, [filteredData]);

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    const result = data.filter((item) => {
      const matchAwalKuliah = filters.tglAwalKuliah ? item.tglAwalKuliah === filters.tglAwalKuliah : true;
      const matchAkhirKuliah = filters.tglAkhirKuliah ? item.tglAkhirKuliah === filters.tglAkhirKuliah : true;
      const matchAwalUTS = filters.tglAwalUTS ? item.tglAwalUTS === filters.tglAwalUTS : true;
      const matchAwalUAS = filters.tglAwalUAS ? item.tglAwalUAS === filters.tglAwalUAS : true;
      const matchStatus = filters.status === 'all' ? true : filters.status === 'aktif' ? item.aktif : !item.aktif;
      return matchAwalKuliah && matchAkhirKuliah && matchAwalUTS && matchAwalUAS && matchStatus;
    });
    setFilteredData(result);
  };

  const handlePrintConfirm = () => {
    setIsPrintModalOpen(false);
    window.print();
  };

  const breadcrumbItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Setting', href: '#' },
    { label: 'Periode Akademik', href: '#' },
    { label: 'Report' },
  ];

  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="mb-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Report</h1>
        <p className="text-gray-600">Laporan periode akademik dengan filter dan cetak/export.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6 border border-gray-200">
        <div className="grid gap-4 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tgl. Awal Kuliah</label>
            <input
              type="date"
              value={filters.tglAwalKuliah}
              onChange={(e) => handleFilterChange('tglAwalKuliah', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tgl. Akhir Kuliah</label>
            <input
              type="date"
              value={filters.tglAkhirKuliah}
              onChange={(e) => handleFilterChange('tglAkhirKuliah', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tgl. Awal UTS</label>
            <input
              type="date"
              value={filters.tglAwalUTS}
              onChange={(e) => handleFilterChange('tglAwalUTS', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tgl. Awal UAS</label>
            <input
              type="date"
              value={filters.tglAwalUAS}
              onChange={(e) => handleFilterChange('tglAwalUAS', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">Semua</option>
              <option value="aktif">Aktif</option>
              <option value="nonaktif">Non Aktif</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="flex gap-2">
            <Button variant="primary" onClick={handleSearch}>
              <MagnifyingGlassIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="secondary" onClick={() => setFilters({ tglAwalKuliah: '', tglAkhirKuliah: '', tglAwalUTS: '', tglAwalUAS: '', status: 'all' })}>
              Reset
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={handlePrint}>
              <PrinterIcon className="h-4 w-4 mr-2" />
              Cetak
            </Button>
            <Button variant="success" onClick={handleExport}>
              <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
              Export Excel/CSV
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-x-auto mb-6 border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Kode</th>
              <th className="px-4 py-3 text-left font-medium">Nama Periode</th>
              <th className="px-4 py-3 text-left font-medium">Tgl. Awal Kuliah</th>
              <th className="px-4 py-3 text-left font-medium">Tgl. Akhir Kuliah</th>
              <th className="px-4 py-3 text-left font-medium">Tgl. Awal UTS</th>
              <th className="px-4 py-3 text-left font-medium">Tgl. Awal UAS</th>
              <th className="px-4 py-3 text-left font-medium">Total Program Studi</th>
              <th className="px-4 py-3 text-left font-medium">Aktif?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">{item.kode}</td>
                <td className="px-4 py-3 text-gray-900">{item.namaPeriode}</td>
                <td className="px-4 py-3 text-gray-900">{item.tglAwalKuliah}</td>
                <td className="px-4 py-3 text-gray-900">{item.tglAkhirKuliah}</td>
                <td className="px-4 py-3 text-gray-900">{item.tglAwalUTS}</td>
                <td className="px-4 py-3 text-gray-900">{item.tglAwalUAS}</td>
                <td className="px-4 py-3 text-gray-900">{item.totalProgram}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${item.aktif ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {item.aktif ? 'Ya' : 'Tidak'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        title="Cetak Laporan"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsPrintModalOpen(false)}>
              Batal
            </Button>
            <Button variant="success" onClick={handlePrintConfirm}>
              Print
            </Button>
          </>
        }
      >
        <p>Anda akan mencetak laporan periode akademik. Lanjutkan untuk membuka dialog cetak browser.</p>
      </Modal>
    </div>
  );
};

export default ReportPage;
