"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores";
import { RideButton, RideTextField, RidePasswordField, RideLink, RideCheckbox } from "@rimac-seguros/ride-system-components";

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
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} autoComplete="off">
        <input type="hidden" name="remember" value="true" />

        <RideTextField
          onChange={onChange}
          value={formState.username}
          name="username"
          label="Correo electrónico"
          required 
        />

        <RidePasswordField
          onChange={onChange}
          value={formState.password}
          onGlyphClick={(ev) => { ev.preventDefault() }}
          label="Contraseña"
          name="password"
          required
          type="password"
        />

        <div className="flex items-center justify-between">
          <RideCheckbox size="small" disabled>Recuerdame </RideCheckbox>

          <RideLink href="/auth/recovery" text="¿Olvidaste tu contraseña?" />
        </div>

        <div>
          <RideButton
            loading={loading}
            type="submit"
            className="w-full"
            text="Ingresar"
            size="large"
          >
            {loading ? "Espere..." : "Ingresar"}
          </RideButton>

          {error && (
            <div className="p-3 font-medium text-red-500 text-center">
              {error}
            </div>
          )}
        </div>
      </form>
  );
};
