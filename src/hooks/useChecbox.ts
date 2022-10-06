import { useState } from "react";

export function useCheckbox(val: boolean = false) {
  const [state, setState] = useState(val);

  return {
    state,
    setState,
    reset: () => setState(val),
    bindings: {
      checked: state,
      onChange: (newVal: boolean) => setState(newVal)
    }
  };
}
