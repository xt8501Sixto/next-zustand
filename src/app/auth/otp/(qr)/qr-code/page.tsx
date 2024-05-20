"use client";
import { useRouter } from "next/navigation";
import { InputOtp } from "../../components/InputOtp";
import withAuth from "@/app/withAuth";

const QrCodePage = () => {
  const router = useRouter();

  async function VerificationCode(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.replace("/dashboard");
  }

  return (
    <div className="flex w-full justify-center items-center bg-white rounded-[8px]">
      <div className="relative flex items-center w-3/6 sm:w-2/5">
        <div className="w-full z-10">
          <div className="text-center">
            <div className="font-semibold text-3xl">
              <p>Codigo Code QR</p>
            </div>
            <div className="flex flex-row text-2xl text-gray-400 justify-center my-3">
              <p>Autenticación en dos pasos</p>
            </div>
            <div className="flex flex-row text-lg text-gray-400 justify-center my-2">
              <p>Ingresa código de autenticación</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400 justify-center my-3">
              <p>
                Ingresa el código de confirmación que ves en el app de
                autenticación
              </p>
            </div>
          </div>

          <form onSubmit={VerificationCode}>
            <div className="flex flex-col items-center mx-auto w-full max-w-lg">
              <InputOtp />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(QrCodePage);
