import React, { useState } from "react";
import { useInputOtp } from "../hooks/useInputOtp";
import Link from "next/link";
import { useCheckbox } from "../hooks/useCheckbox";
import { useRouter } from "next/navigation";

const initialFormState = {
  code: "",
};

export const InputOtp = () => {
  const [formState, setformState] = useState(initialFormState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setCheckbox, checkbox } = useCheckbox();
  const { handleInputChange, inputRefs, handlePaste } = useInputOtp();
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setformState(() => ({ ...formState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    router.replace('/dashboard')
    setTimeout(() => {
      setLoading(false);
      setError("Código OTP incorrecto");
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-between items-center gap-2 w-auto h-14 rounded-sm">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
            ref={(el) => {
              if (el && !inputRefs.current.includes(el)) {
                inputRefs.current[index] = el;
              }
            }}
            type="text"
            name="code"
            maxLength={1}
            onChange={(e) => [handleInputChange(e, index), onChange(e)]}
            onKeyUp={(e) => {
              if (isNaN(Number(e.key)) && e.key !== "Backspace") {
                e.preventDefault();
              } else if (
                e.key === "Enter" &&
                index < inputRefs.current.length - 1
              ) {
                inputRefs.current[index + 1]!.focus();
              }
            }}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <div className="flex flex-row m-4 items-center">
        <input
          disabled={formState.code === "" || loading}
          name="remember"
          type="checkbox"
          defaultChecked={false}
          onChange={() => setCheckbox(true)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
        />
        <label
          htmlFor="defaultCheckbox"
          className="ms-2 text-sm font-medium text-blue-600 dark:text-gray-300"
        >
          No volver a preguntar en este dispositivo
        </label>
      </div>
      <div className="flex flex-col text-center">
        {checkbox ? "dispositivo recordado" : ""}
      </div>
      <div className="flex w-full m-4">
        <button
          type="button"
          disabled={formState.code === "" || loading}
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded w-full ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleSubmit}
        >
          {loading ? "Verificando..." : "Verificar"}{" "}
        </button>
      </div>
      <div className="flex flex-col font-medium text-indigo-500 text-center">
        {error}
      </div>
      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
        <Link
          className="flex flex-row items-center text-blue-600"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reenviar
        </Link>
        <p>¿No recibiste el código?</p>{" "}
      </div>
    </>
  );
};
