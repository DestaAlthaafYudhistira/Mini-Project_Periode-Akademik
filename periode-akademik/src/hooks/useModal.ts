import { useState, useCallback } from 'react';

interface UseModalOptions {
  initialState?: boolean;
}

export const useModal = (options: UseModalOptions = {}) => {
  const [isOpen, setIsOpen] = useState(options.initialState || false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev: boolean) => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
