import { useState, useCallback } from 'react';

interface UseTableStateOptions {
  initialPage?: number;
  initialItemsPerPage?: number;
}

export const useTableState = (options: UseTableStateOptions = {}) => {
  const [currentPage, setCurrentPage] = useState(options.initialPage || 1);
  const [itemsPerPage, setItemsPerPage] = useState(
    options.initialItemsPerPage || 10
  );
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelectRow = useCallback((id: number) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(row => row !== id) : [...prev, id]
    );
  }, []);

  const toggleSelectAll = useCallback((ids: number[]) => {
    setSelectedRows(prev =>
      prev.length === ids.length ? [] : ids
    );
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedRows([]);
  }, []);

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    selectedRows,
    setSelectedRows,
    searchTerm,
    setSearchTerm,
    toggleSelectRow,
    toggleSelectAll,
    clearSelection,
    resetPagination,
  };
};
