"use client";
import { NavBar } from "@/components/NavBar";
import { PermisoList } from "./components/PermisoList";
import { PermisoAdd } from "./components/PermisoAdd";
import { FormValues } from "../../interfaces/formValue.interface";
import { usePermisoStore } from "@/app/stores";
import withAuth from "@/app/withAuth";

const PermissionsPage = () => {
  const permisos = usePermisoStore((state) => state.permisos);
  const { addPermiso } = usePermisoStore();

  const handleNewPermiso = (permiso: FormValues) => {
    addPermiso(permiso);
  };

  return (
    <>
      <div className="flex w-full flex-col">
        <NavBar />
      </div>

      <div className="flex w-full justify-center items-center bg-white rounded-[8px] h-auto">
        <div className="relative flex items-center w-11/12">
          <div className="w-full z-10">
            <div className="text-center">
              <div className="font-semibold text-3xl">
                <p>Módulo de Permisos</p>
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <PermisoList permiso={permisos} />
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <PermisoAdd onNewPermiso={handleNewPermiso} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(PermissionsPage);
