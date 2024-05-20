import { LoginForm } from "./ui";

export default function LoginPage() {
 
  return (
    <div className="flex w-full lg:w-1/2 justify-center items-center bg-white rounded-[8px]">
      <div className="relative flex items-center w-3/5">
        <div className="w-full z-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
             ¡Hola!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Ingresa tus datos para inciar sesión
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
