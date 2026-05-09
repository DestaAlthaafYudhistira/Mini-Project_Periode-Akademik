import React, { useState, useCallback } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import { useTableState } from '../hooks/useTableState';
import { AkademikData } from '../types';

interface PeriodeAkademikPageProps {
  data: AkademikData[];
  setData: React.Dispatch<React.SetStateAction<AkademikData[]>>;
}

const PeriodeAkademikPage: React.FC<PeriodeAkademikPageProps> = ({ data, setData }) => {
  const [mode, setMode] = useState<'list' | 'view' | 'edit' | 'add'>('list');
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<AkademikData>>({});

  const tableState = useTableState({ initialItemsPerPage: 10 });
  const { currentPage, itemsPerPage, selectedRows, searchTerm } = tableState;

  const selectedItem = data.find(item => item.id === activeItemId);

  const filteredData = data.filter(item =>
    item.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.namaPeriode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tahunAjaran.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleStartAdd = useCallback(() => {
    setFormData({});
    setActiveItemId(null);
    setMode('add');
    tableState.clearSelection();
  }, [tableState]);

  const handleStartView = useCallback((id: number) => {
    setActiveItemId(id);
    setMode('view');
  }, []);

  const handleBackToList = useCallback(() => {
    setMode('list');
    setActiveItemId(null);
  }, []);

  const handleStartEdit = useCallback(() => {
    if (!selectedItem) return;
    setFormData(selectedItem);
    setMode('edit');
  }, [selectedItem]);

  const handleDeleteSelected = useCallback(() => {
    if (mode === 'view' && selectedItem) {
      setData(prev => prev.filter(item => item.id !== selectedItem.id));
      setMode('list');
      setActiveItemId(null);
      tableState.clearSelection();
      return;
    }

    if (selectedRows.length > 0) {
      setData(prev => prev.filter(item => !selectedRows.includes(item.id)));
      tableState.clearSelection();
    }
  }, [mode, selectedItem, selectedRows, tableState]);

  const handleDeleteItem = useCallback((id: number) => {
    setData(prev => prev.filter(item => item.id !== id));
    if (activeItemId === id) {
      setMode('list');
      setActiveItemId(null);
    }
  }, [activeItemId]);

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const target = e.target as HTMLInputElement | HTMLSelectElement;
      const { name, value, type } = target;
      const checked = type === 'checkbox' ? (target as HTMLInputElement).checked : undefined;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    },
    []
  );

  const handleSubmitAdd = useCallback(() => {
    const id = Math.max(...data.map(d => d.id), 0) + 1;
    setData(prev => [
      ...prev,
      {
        id,
        kode: formData.kode || '',
        tahunAjaran: formData.tahunAjaran || '',
        semester: formData.semester || '',
        namaPeriode: formData.namaPeriode || '',
        namaSingkat: formData.namaSingkat || '',
        tglAwalKuliah: formData.tglAwalKuliah || '',
        tglAkhirKuliah: formData.tglAkhirKuliah || '',
        tglAwalUTS: formData.tglAwalUTS || '',
        tglAkhirUTS: formData.tglAkhirUTS || '',
        tglAwalUAS: formData.tglAwalUAS || '',
        tglAkhirUAS: formData.tglAkhirUAS || '',
        ketuaUjian: formData.ketuaUjian || '',
        jumlahPertemuan: formData.jumlahPertemuan || '',
        minimalPresensi: formData.minimalPresensi || '',
        kuesionerLayanan: formData.kuesionerLayanan || '',
        totalProgram: formData.totalProgram || '',
        aktif: formData.aktif ?? false,
      },
    ]);
    tableState.resetPagination();
    setMode('list');
    setActiveItemId(null);
  }, [data, formData, tableState]);

  const handleSubmitEdit = useCallback(() => {
    if (!selectedItem) return;
    setData(prev =>
      prev.map(item =>
        item.id === selectedItem.id
          ? ({ ...item, ...formData } as AkademikData)
          : item
      )
    );
    setMode('view');
  }, [selectedItem, formData]);

  const breadcrumbItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Setting', href: '#' },
    { label: 'Periode Akademik', href: '#' },
    {
      label:
        mode === 'edit'
          ? 'Edit Data'
          : mode === 'view'
          ? 'View Data'
          : mode === 'add'
          ? 'Tambah Data'
          : 'Data Periode Akademik',
    },
  ];

  const renderField = (label: string, value: string) => (
    <div className="mb-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
        {label}
      </div>
      <div className="text-sm text-slate-800">{value || '-'}</div>
    </div>
  );

  const renderForm = () => (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kode Periode</label>
          <input
            name="kode"
            value={formData.kode || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Ajaran*</label>
          <select
            name="tahunAjaran"
            value={formData.tahunAjaran || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Pilih Tahun Ajaran</option>
            <option value="2026/2027">2026/2027</option>
            <option value="2025/2026">2025/2026</option>
            <option value="2024/2025">2024/2025</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Semester*</label>
          <select
            name="semester"
            value={formData.semester || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Pilih Semester</option>
            <option value="Ganjil">Ganjil</option>
            <option value="Genap">Genap</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Periode*</label>
          <input
            name="namaPeriode"
            value={formData.namaPeriode || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Singkat*</label>
          <input
            name="namaSingkat"
            value={formData.namaSingkat || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Awal Kuliah*</label>
          <input
            type="date"
            name="tglAwalKuliah"
            value={formData.tglAwalKuliah || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir Kuliah*</label>
          <input
            type="date"
            name="tglAkhirKuliah"
            value={formData.tglAkhirKuliah || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Awal UTS</label>
          <input
            type="date"
            name="tglAwalUTS"
            value={formData.tglAwalUTS || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir UTS</label>
          <input
            type="date"
            name="tglAkhirUTS"
            value={formData.tglAkhirUTS || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Awal UAS</label>
          <input
            type="date"
            name="tglAwalUAS"
            value={formData.tglAwalUAS || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir UAS</label>
          <input
            type="date"
            name="tglAkhirUAS"
            value={formData.tglAkhirUAS || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ketua Ujian</label>
          <input
            name="ketuaUjian"
            value={formData.ketuaUjian || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah Pertemuan Kuliah*</label>
          <input
            name="jumlahPertemuan"
            value={formData.jumlahPertemuan || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Minimal Presensi (Persentase)*</label>
          <input
            name="minimalPresensi"
            value={formData.minimalPresensi || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kuesioner Layanan</label>
          <select
            name="kuesionerLayanan"
            value={formData.kuesionerLayanan || ''}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Pilih Kuesioner Layanan --</option>
            <option value="Ya">Ya</option>
            <option value="Tidak">Tidak</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="aktif"
            checked={Boolean(formData.aktif)}
            onChange={handleFormChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm font-medium text-gray-700">Aktif?</label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="mb-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Periode Akademik</h1>
        <p className="text-gray-600">Kelola daftar periode akademik dengan menu tambah, view, edit, hapus, dan report.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center flex-1 max-w-2xl">
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
                  tableState.setSearchTerm(e.target.value);
                  tableState.resetPagination();
                }}
                className="flex-1 outline-none text-sm"
              />
            </div>
            <button className="ml-3 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {mode !== 'list' && (
              <Button variant="secondary" onClick={handleBackToList}>
                Kembali ke Daftar
              </Button>
            )}

            <Button variant="success" onClick={handleStartAdd}>
              + Tambah
            </Button>

            {mode === 'list' && (
              <Button
                variant="danger"
                onClick={handleDeleteSelected}
                disabled={selectedRows.length === 0}
              >
                Hapus
              </Button>
            )}

            {mode === 'view' && (
              <>
                <Button variant="warning" onClick={handleStartEdit}>
                  Edit
                </Button>
                <Button variant="danger" onClick={handleDeleteSelected}>
                  Hapus
                </Button>
              </>
            )}

            {(mode === 'add' || mode === 'edit') && (
              <>
                <Button variant="success" onClick={mode === 'add' ? handleSubmitAdd : handleSubmitEdit}>
                  Simpan
                </Button>
                {mode === 'edit' && (
                  <Button variant="secondary" onClick={handleBackToList}>
                    Batal
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {mode === 'list' ? (
        <>
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={currentData.length > 0 && currentData.every(item => selectedRows.includes(item.id))}
                      onChange={() => tableState.toggleSelectAll(currentData.map(d => d.id))}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Kode</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Nama Periode</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Tahun Ajaran</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Semester</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Tgl. Awal Kuliah</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Tgl. Akhir Kuliah</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => tableState.toggleSelectRow(item.id)}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm">{item.kode}</td>
                    <td className="px-4 py-3 text-sm">{item.namaPeriode}</td>
                    <td className="px-4 py-3 text-sm">{item.tahunAjaran}</td>
                    <td className="px-4 py-3 text-sm">{item.semester}</td>
                    <td className="px-4 py-3 text-sm">{item.tglAwalKuliah}</td>
                    <td className="px-4 py-3 text-sm">{item.tglAkhirKuliah}</td>
                    <td className="px-4 py-3 text-sm flex items-center gap-2">
                      <button
                        onClick={() => setData(prev => prev.map(row => row.id === item.id ? { ...row, aktif: !row.aktif } : row))}
                        className="inline-flex items-center justify-center rounded-md p-2 bg-green-100 text-green-700 hover:bg-green-200"
                        title={item.aktif ? 'Nonaktifkan' : 'Aktifkan'}
                      >
                        ✓
                      </button>
                      <button
                        onClick={() => handleStartView(item.id)}
                        className="inline-flex items-center justify-center rounded-md p-2 bg-blue-100 text-blue-700 hover:bg-blue-200"
                        title="View"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="inline-flex items-center justify-center rounded-md p-2 bg-red-100 text-red-700 hover:bg-red-200"
                        title="Hapus"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-b-lg px-6 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Hal {currentPage}/{totalPages} ({filteredData.length} data)
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <select
                value={itemsPerPage}
                onChange={(e) => tableState.setItemsPerPage(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
              >
                <option value={10}>10 baris</option>
                <option value={20}>20 baris</option>
                <option value={50}>50 baris</option>
              </select>
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  onClick={() => tableState.setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => tableState.setCurrentPage(page)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === page ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50'}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => tableState.setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : mode === 'add' ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tambah Data Periode Akademik</h2>
          {renderForm()}
        </div>
      ) : selectedItem ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          {mode === 'view' ? (
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                {renderField('Kode Periode', selectedItem.kode)}
                {renderField('Tahun Ajaran', selectedItem.tahunAjaran)}
                {renderField('Semester', selectedItem.semester)}
                {renderField('Nama Periode', selectedItem.namaPeriode)}
                {renderField('Nama Singkat', selectedItem.namaSingkat)}
                {renderField('Tanggal Awal Kuliah', selectedItem.tglAwalKuliah)}
                {renderField('Tanggal Akhir Kuliah', selectedItem.tglAkhirKuliah)}
                {renderField('Tanggal Awal UTS', selectedItem.tglAwalUTS)}
              </div>
              <div>
                {renderField('Tanggal Akhir UTS', selectedItem.tglAkhirUTS)}
                {renderField('Tanggal Awal UAS', selectedItem.tglAwalUAS)}
                {renderField('Tanggal Akhir UAS', selectedItem.tglAkhirUAS)}
                {renderField('Ketua Ujian', selectedItem.ketuaUjian)}
                {renderField('Jumlah Pertemuan Kuliah', selectedItem.jumlahPertemuan)}
                {renderField('Minimal Presensi (Persentase)', selectedItem.minimalPresensi)}
                {renderField('Kuesioner Layanan', selectedItem.kuesionerLayanan)}
                {renderField('Aktif?', selectedItem.aktif ? 'Ya' : 'Tidak')}
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Edit Data Periode Akademik</h2>
              {renderForm()}
            </>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Data tidak ditemukan.</p>
        </div>
      )}
    </div>
  );
};

export default PeriodeAkademikPage;
