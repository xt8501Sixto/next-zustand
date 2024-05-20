"use client";

import { ChangeEvent, useRef } from "react";

export const useInputOtp = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    // Solo permitir números o valor vacío
    if (!isNaN(Number(value)) || value === "") {
      inputRefs.current[index]!.value = value;
      if (value !== "") {
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1]!.focus(); // Mover el foco al siguiente input si se ha ingresado un dígito
        }
      } else {
        if (index > 0) {
          inputRefs.current[index - 1]!.focus(); // Mover el foco al input anterior si se ha eliminado un dígito
        }
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData("text");
    if (pastedText && !/^\d+$/.test(pastedText)) {
      // Si el texto pegado no es un número, evita que se pegue
      event.preventDefault();
    }
  };
  return {
    handleInputChange,
    handlePaste,
    inputRefs,
  };
};
