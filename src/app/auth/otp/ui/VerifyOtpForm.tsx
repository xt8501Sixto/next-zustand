"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InputOtp } from "../components/InputOtp";
export const VerifyOtpForm = () => {
  const router = useRouter();
  async function VerificationCode(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.replace("/dashboard");
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={VerificationCode}>
      <div className="flex flex-col space-y-0">
        
        <div className="flex flex-col items-center mx-auto w-full max-w-lg">
          <InputOtp />
        </div>
        <div className="flex flex-col space-y-5 items-center">
          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500"></div>
          <Link
            className="flex flex-row items-center text-blue-600"
            href="/auth/otp/qr-app"
            rel="noopener noreferrer"
          >
            Obtener codigo por aplicacion
          </Link>
        </div>
      </div>
    </form>
  );
};
