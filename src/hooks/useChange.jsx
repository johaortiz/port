import { useRef } from "react";

function useChange() {
  const form = useRef();

  return [form];
}

export default useChange;
