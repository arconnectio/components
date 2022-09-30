import { ChangeEvent, useState } from "react";

export function useInput(val?: string) {
  const [state, setState] = useState(val);
  const [status, setStatus] = useState<InputStatus>("default");

  return {
    state,
    setState,
    setStatus,
    reset() {
      setState(val);
      setStatus("default");
    },
    bindings: {
      value: state,
      status,
      onChange(e: ChangeEvent<HTMLInputElement>) {
        setState(e.target.value);
      }
    }
  };
}

export type InputStatus = "default" | "success" | "error" | "warning";
