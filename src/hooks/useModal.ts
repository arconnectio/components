import { useState } from "react";

export function useModal(defaultOpen = false) {
  const [isOpen, setOpen] = useState(defaultOpen);

  return {
    isOpen,
    setOpen,
    bindings: {
      open: isOpen,
      setOpen
    }
  };
}
