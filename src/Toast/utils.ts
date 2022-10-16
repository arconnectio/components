import { createContext, ReactNode, useContext } from "react";
import { ToastAction, ToastType } from "./index";

export interface ToastData {
  duration: number;
  content: ReactNode;
  type?: ToastType;
  action?: ToastAction;
}

export interface ToastDataWithID extends ToastData {
  id: string;
  addedAt: number;
}

export const ToastsContext = createContext<{
  toasts: ToastDataWithID[];
  setToast: (toast: ToastData) => void;
}>({
  toasts: [],
  setToast() {}
});

export const useToasts = () => useContext(ToastsContext);
