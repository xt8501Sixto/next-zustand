"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores";

const initialFormState = {
  username: "",
  password: "",
};

export const LoginForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      const { username, password } = formState;
      const user = await login(username, password);

      if (user) {
        if (user.role === "federado") {
          router.replace("/dashboard");
        } else {
          router.replace("/auth/otp");
        }
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" value="true" />
        <div className="relative">
          <input
            className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type="text"
            name="username"
            value={formState.username}
            onChange={onChange}
            placeholder="Correo electrónico"
            autoComplete="off"
          />
        </div>

        <div className="mt-8 content-center">
          <input
            className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type="password"
            name="password"
            value={formState.password}
            onChange={onChange}
            placeholder="Contraseña"
            autoComplete="off"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-500 hover:text-indigo-500"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
            disabled={
              formState.username === "" || formState.password === "" || loading
            }
          >
            {loading ? "Espere..." : "Ingresar"}
          </button>
          {error && (
            <div className="p-3 font-medium text-red-500 text-center">
              {error}
            </div>
          )}
        </div>
      </form>
    </>
  );
};
