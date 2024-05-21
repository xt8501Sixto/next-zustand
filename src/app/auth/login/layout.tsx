import { LoginImage } from "./components/LoginImage";

type LoginLayoutProps = {
  children: React.ReactNode;
};

export default async function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="card w-full h-screen p-0">
      <div className="card-body w-full h-screen p-0">
        <div className="view login-view" style={{ display: "block" }}>
          <div className="h-screen flex">
            <div className="login-img-section lg:flex w-full lg:w-1/2 justify-around items-center">
              <div className="w-full mx-auto px-20 flex-col items-center space-y-6 relative h-screen">
                <LoginImage />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
