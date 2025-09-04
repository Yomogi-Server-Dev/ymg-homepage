import { useCallback, useState } from 'react';

interface UseDialogProps<T> {
  initialItem?: T | null;
}

export function useDialog<T>({ initialItem = null }: UseDialogProps<T> = {}) {
  const [selectedItem, setSelectedItem] = useState<T | null>(initialItem);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = useCallback((item: T) => {
    setSelectedItem(item);
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setSelectedItem(null);
    setIsOpen(false);
  }, []);

  const toggleDialog = useCallback(
    (item?: T) => {
      if (isOpen) {
        closeDialog();
      } else if (item) {
        openDialog(item);
      }
    },
    [isOpen, openDialog, closeDialog],
  );

  return {
    selectedItem,
    isOpen,
    openDialog,
    closeDialog,
    toggleDialog,
  };
}
