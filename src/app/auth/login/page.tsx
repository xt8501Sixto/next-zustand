import { LoginForm } from "./ui";

export default function LoginPage() {
 
  return (
    <div className="flex w-full lg:w-1/2 justify-center items-center bg-white rounded-[8px]">
      <div className="relative flex items-center w-3/5">
        <div className="w-full z-10">
          <div className="text-wrap">
            <h2 className="font-bold ride-sys-text-title-8xlarge-default text-ride-sys-color-text-highlight">
             ¡Hola!
            </h2>
            <p className="mt-2 text-xl text-gray-600">
              Ingresa tus datos para inciar sesión
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
