"use client";
import withAuth from "@/app/withAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const QrPage = () => {
  const router = useRouter();
  const goToQrcode = () => {
    router.replace("/auth/otp/qr-code");
  };

  return (
    <div className="flex w-full justify-center items-center bg-white rounded-[8px]">
      <div className="relative flex items-center w-3/6 sm:w-2/5">
        <div className="w-full z-10">
          <div className="text-center">
            <div className="font-semibold text-3xl">
              <p>Codigo QR image</p>
            </div>
            <div className="flex flex-row text-2xl text-gray-400 justify-center my-4">
              <p>Autenticación en dos pasos</p>
            </div>
            <div className="flex flex-row text-lg text-gray-400 justify-center my-2">
              <p>Usa una app de autenticación de terceros</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400 justify-center my-3">
              <p>
                usa una app de autenticación (por ejemplo DUO o Google de
                Authenticator)
                <br />
                para escanear este código QR
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-lg">
                <Image
                  src={"/QR-image.png"}
                  width={300}
                  height={300}
                  alt="QR"
                />
              </div>
              <div className="flex w-full gap-3 justify-between">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
                  Cancelar
                </button>
                <button
                  onClick={goToQrcode}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withAuth(QrPage);
