import { DataDasboard } from "@/app/dashboard/interfaces/interfaces.dashboard";
import Link from "next/link";

export const AppItem = ({ applications }: { applications: DataDasboard}) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4">{applications.nombre}</td>
      <td className="px-6 py-4">{applications.key}</td>
      <td className="px-6 py-4">
        {" "}
        <input
          type="checkbox"
          defaultChecked={applications.estado === "A" ? true : false}
        />
      </td>
      <td className="px-6 py-4">{applications.user_activos}</td>
      <td className="px-6 py-4">
        <Link
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Editar
        </Link>
      </td>
    </tr>
  );
};
