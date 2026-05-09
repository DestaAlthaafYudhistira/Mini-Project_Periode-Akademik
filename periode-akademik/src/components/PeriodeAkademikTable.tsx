import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import Breadcrumb from './Breadcrumb';

interface AkademikData {
  id: number;
  kode: string;
  namaPeriode: string;
  tglAwalKuliah: string;
  tglAkhirKuliah: string;
  tglAwalUTS: string;
  tglAwalUAS: string;
  totalProgram: string;
  aktif: boolean;
}

const PeriodeAkademikTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const itemsPerPage = 10;

  const data: AkademikData[] = [
    {
      id: 1,
      kode: '20261',
      namaPeriode: 'Periode 2026/2027 Ganjil',
      tglAwalKuliah: '31 Agu 2026',
      tglAkhirKuliah: '18 Des 2026',
      tglAwalUTS: '-',
      tglAwalUAS: '-',
      totalProgram: '-',
      aktif: true,
    },
    {
      id: 2,
      kode: '20252',
      namaPeriode: 'Periode 2025/2026 Genap',
      tglAwalKuliah: '2 Feb 2026',
      tglAkhirKuliah: '29 Mei 2026',
      tglAwalUTS: '6 Apr 2026',
      tglAwalUAS: '17 Jun 2026',
      totalProgram: '-',
      aktif: true,
    },
    {
      id: 3,
      kode: '20251',
      namaPeriode: 'Periode 2025/2026 Ganjil',
      tglAwalKuliah: '25 Agu 2025',
      tglAkhirKuliah: '12 Des 2025',
      tglAwalUTS: '13 Okt 2025',
      tglAwalUAS: '15 Des 2025',
      totalProgram: '-',
      aktif: false,
    },
    {
      id: 4,
      kode: '20243',
      namaPeriode: 'Semester Pendek 2024/2025',
      tglAwalKuliah: '23 Jun 2025',
      tglAkhirKuliah: '8 Agu 2025',
      tglAwalUTS: '14 Jul 2025',
      tglAwalUAS: '11 Agu 2025',
      totalProgram: '-',
      aktif: false,
    },
    {
      id: 5,
      kode: '20242',
      namaPeriode: 'Periode 2024/2025 Genap',
      tglAwalKuliah: '3 Feb 2025',
      tglAkhirKuliah: '30 Mei 2025',
      tglAwalUTS: '24 Mar 2025',
      tglAwalUAS: '2 Jun 2025',
      totalProgram: '-',
      aktif: false,
    },
    {
      id: 6,
      kode: '20241',
      namaPeriode: 'Periode 2024/2025 Ganjil',
      tglAwalKuliah: '26 Agu 2024',
      tglAkhirKuliah: '13 Des 2024',
      tglAwalUTS: '14 Okt 2024',
      tglAwalUAS: '16 Des 2024',
      totalProgram: '-',
      aktif: false,
    },
    {
      id: 7,
      kode: '20233',
      namaPeriode: '2023/2024 Pendek',
      tglAwalKuliah: '18 Jun 2024',
      tglAkhirKuliah: '5 Agu 2024',
      tglAwalUTS: '15 Jul 2024',
      tglAwalUAS: '6 Agu 2024',
      totalProgram: '-',
      aktif: false,
    },
    {
      id: 8,
      kode: '20232',
      namaPeriode: 'Periode 2023/2024 Genap',
      tglAwalKuliah: '25 Jan 2024',
      tglAkhirKuliah: '17 Mei 2024',
      tglAwalUTS: '18 Mar 2024',
      tglAwalUAS: '27 Mei 2024',
      totalProgram: '-',
      aktif: false,
    },
    {
      id: 9,
      kode: '20231',
      namaPeriode: 'Periode 2023/2024 Ganjil',
      tglAwalKuliah: '28 Agu 2023',
      tglAkhirKuliah: '14 Des 2023',
      tglAwalUTS: '16 Okt 2023',
      tglAwalUAS: '18 Des 2023',
      totalProgram: '-',
      aktif: false,
    },
    {
      id: 10,
      kode: '20223',
      namaPeriode: '2022/2023 Pendek',
      tglAwalKuliah: '14 Jun 2023',
      tglAkhirKuliah: '3 Agu 2023',
      tglAwalUTS: '6 Jul 2023',
      tglAwalUAS: '7 Agu 2023',
      totalProgram: '-',
      aktif: false,
    },
  ];

  const filteredData = data.filter(item =>
    item.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.namaPeriode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const toggleSelectRow = (id: number) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(row => row !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === currentData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentData.map(item => item.id));
    }
  };

  const handleDelete = () => {
    if (selectedRows.length > 0) {
      alert(`Menghapus ${selectedRows.length} data periode akademik`);
      setSelectedRows([]);
    }
  };

  const breadcrumbItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Setting', href: '#' },
    { label: 'Periode Akademik' },
  ];

  return (
    <div className="w-full bg-gray-50 p-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Periode Akademik</h1>
        <p className="text-gray-600">Daftar Periode Akademik</p>
      </div>

      {/* Search dan Buttons */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center flex-1">
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white mr-3">
              <option>-- Semua --</option>
            </select>
            <div className="flex-1 flex items-center border border-gray-300 rounded-md px-3 py-2">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Cari Periode Akademik"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="flex-1 outline-none text-sm"
              />
            </div>
            <button className="ml-3 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium text-sm">
              + Tambah
            </button>
            <button
              onClick={handleDelete}
              disabled={selectedRows.length === 0}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium text-sm flex items-center gap-2"
            >
              <TrashIcon className="h-4 w-4" />
              Hapus
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === currentData.length && currentData.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 cursor-pointer"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">Kode</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Nama Periode</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Tgl. Awal Kuliah</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Tgl. Akhir Kuliah</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Tgl. Awal UTS</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Tgl. Awal UAS</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Total Program Studi</th>
              <th className="px-4 py-3 text-left text-sm font-medium">AktifP</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => toggleSelectRow(item.id)}
                    className="w-4 h-4 cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 text-sm">{item.kode}</td>
                <td className="px-4 py-3 text-sm">{item.namaPeriode}</td>
                <td className="px-4 py-3 text-sm">{item.tglAwalKuliah}</td>
                <td className="px-4 py-3 text-sm">{item.tglAkhirKuliah}</td>
                <td className="px-4 py-3 text-sm">{item.tglAwalUTS}</td>
                <td className="px-4 py-3 text-sm">{item.tglAwalUAS}</td>
                <td className="px-4 py-3 text-sm">{item.totalProgram}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex gap-2">
                    {item.aktif ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        ✕
                      </span>
                    ) : null}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      📋
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      🗑
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-b-lg px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-600">
          Hal 1/{totalPages} ({filteredData.length} data, 0.0007 detik)
        </div>
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
            <option>10 baris</option>
            <option>20 baris</option>
            <option>50 baris</option>
          </select>
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodeAkademikTable;
