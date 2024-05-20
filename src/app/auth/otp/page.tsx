"use client";
import { ShowEmailUser } from "./components/ShowEmailUser";
import { VerifyOtpForm } from "./ui";

import withAuth from "@/app/withAuth";

const OneTimePasswordPage = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center bg-white rounded-[8px]">
        <div className="relative flex items-center w-3/6 sm:w-2/5">
          <div className="w-full z-10">
            <div className="text-center">
              <div className="font-semibold text-3xl">
                <p>Verificación de Email</p>
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <div className="p-2">
                  Hemos enviado un código a tu correo electrónico
                </div>
                <div>
                  <ShowEmailUser />
                </div>
              </div>
            </div>

            <div>
              <VerifyOtpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(OneTimePasswordPage);
