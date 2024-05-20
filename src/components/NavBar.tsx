'use client';
import { useAuthStore } from '@/app/stores';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export const NavBar = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const onLogout = () => {
    logout();
    router.replace('/auth/login');
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mb-5">
        <Link
          href="/dashboard"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dashboard
          </span>
        </Link>
        <div className="w-full block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="!ml-0">
              {user?.role === "no-federado" && (
                <Link
                  href={"/dashboard/usuarios"}
                  className="block py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Usuarios
                </Link>
              )}

              {user?.role === "federado" && (
                <>
                  <Link
                    href={"/dashboard/aplicaciones"}
                    className="py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Aplicaciones
                  </Link>
                  <Link
                    href={"/dashboard/roles"}
                    className="py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Roles
                  </Link>
                  <Link
                    href={"/dashboard/permisos"}
                    className="py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Permisos
                  </Link>
                </>
              )}
            </li>
            <li className="!ml-0">
              <button
                onClick={onLogout}
                className="py-2 px-3 mx-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};