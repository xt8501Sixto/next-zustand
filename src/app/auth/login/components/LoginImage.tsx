import Image from "next/image";

export const LoginImage = () => {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw, 100vh"
      fill={true}
      priority
      style={{ objectFit: "cover" }}
      src="/corredor_login.png"
      alt="corredores"
    />
  );
};
