'use client';
import { NavBar } from '@/components/NavBar';
import { useAuthStore } from '../stores';
import withAuth from '../withAuth';
const DashboardPage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <div className="flex w-full flex-col">
        <NavBar />
      </div>
      <div className="flex w-full justify-center items-center bg-white rounded-[8px] h-4/6">
        <div className="relative flex items-center w-3/6 sm:w-2/5">
          <div className="w-full z-10">
            <div className="text-center">
              <div className="font-semibold text-3xl">
                <p>Dashboard</p>
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <div className="p-2">Email: {user?.username}</div>
                <div className="text-xl text-cyan-600">
                  Bienvenido Usuario: <span className="uppercase">{user?.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(DashboardPage);