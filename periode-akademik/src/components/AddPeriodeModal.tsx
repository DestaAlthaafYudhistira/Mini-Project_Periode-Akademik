import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

interface AddPeriodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: PeriodeData) => void;
}

interface PeriodeData {
  kode: string;
  namaPeriode: string;
  tglAwalKuliah: string;
  tglAkhirKuliah: string;
  tglAwalUTS: string;
  tglAwalUAS: string;
}

const AddPeriodeModal: React.FC<AddPeriodeModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [formData, setFormData] = useState<PeriodeData>({
    kode: '',
    namaPeriode: '',
    tglAwalKuliah: '',
    tglAkhirKuliah: '',
    tglAwalUTS: '',
    tglAwalUAS: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      kode: '',
      namaPeriode: '',
      tglAwalKuliah: '',
      tglAkhirKuliah: '',
      tglAwalUTS: '',
      tglAwalUAS: '',
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Tambah Periode Akademik"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Batal
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Simpan
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kode
          </label>
          <input
            type="text"
            name="kode"
            value={formData.kode}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: 20261"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Periode
          </label>
          <input
            type="text"
            name="namaPeriode"
            value={formData.namaPeriode}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: Periode 2026/2027 Ganjil"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tgl. Awal Kuliah
            </label>
            <input
              type="date"
              name="tglAwalKuliah"
              value={formData.tglAwalKuliah}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tgl. Akhir Kuliah
            </label>
            <input
              type="date"
              name="tglAkhirKuliah"
              value={formData.tglAkhirKuliah}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tgl. Awal UTS
            </label>
            <input
              type="date"
              name="tglAwalUTS"
              value={formData.tglAwalUTS}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tgl. Awal UAS
            </label>
            <input
              type="date"
              name="tglAwalUAS"
              value={formData.tglAwalUAS}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddPeriodeModal;
