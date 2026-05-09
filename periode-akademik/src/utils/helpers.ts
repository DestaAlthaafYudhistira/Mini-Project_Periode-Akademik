/**
 * Format tanggal dari format YYYY-MM-DD ke format ID (DD MMM YYYY)
 */
export const formatTanggal = (dateString: string): string => {
  if (!dateString) return '-';

  const date = new Date(dateString);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

/**
 * Debounce function untuk menunda eksekusi
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Truncate string dengan ellipsis
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  }
  return str;
};

/**
 * Generate ID unik
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
