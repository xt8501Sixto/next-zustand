import { DataDasboard } from "@/app/dashboard/interfaces/interfaces.dashboard";
import { PermisoItem } from "./PermisoItem";

export const PermisoList = ({ permiso }: { permiso: DataDasboard[] }) => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Código
            </th>
            <th scope="col" className="px-6 py-3">
              Descripción
            </th>
            <th scope="col" className="px-6 py-3">
              Estados
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {permiso.map((perm) => (
            <PermisoItem key={perm.id} permiso={perm} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
