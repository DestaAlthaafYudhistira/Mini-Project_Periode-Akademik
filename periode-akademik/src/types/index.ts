export interface AkademikData {
  id: number;
  kode: string;
  tahunAjaran: string;
  semester: string;
  namaPeriode: string;
  namaSingkat: string;
  tglAwalKuliah: string;
  tglAkhirKuliah: string;
  tglAwalUTS: string;
  tglAkhirUTS: string;
  tglAwalUAS: string;
  tglAkhirUAS: string;
  ketuaUjian: string;
  jumlahPertemuan: string;
  minimalPresensi: string;
  kuesionerLayanan: string;
  totalProgram: string;
  aktif: boolean;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TableColumn {
  key: string;
  label: string;
}
