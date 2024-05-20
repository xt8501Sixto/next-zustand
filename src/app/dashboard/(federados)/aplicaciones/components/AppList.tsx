import { DataDasboard } from "@/app/dashboard/interfaces/interfaces.dashboard";
import { AppItem } from "./AppItem";

export const AppList = ({ applications }: { applications: DataDasboard[] }) => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Key
            </th>
            <th scope="col" className="px-6 py-3">
              Activo
            </th>
            <th scope="col" className="px-6 py-3">
              Usuarios activos
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <AppItem key={app.id} applications={app} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
