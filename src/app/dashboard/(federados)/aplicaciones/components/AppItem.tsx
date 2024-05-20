import { DataDasboard } from "@/app/dashboard/interfaces/interfaces.dashboard";
import { useAppStore } from "@/app/stores";
import Link from "next/link";
import { useState } from "react";

export const AppItem = ({ applications }: { applications: DataDasboard }) => {
  const { editApp, deleteApp } = useAppStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({ ...applications });

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value,
    });
  };

  const handleEditSubmit = () => {
    editApp(applications.id as number, editValues);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteApp(applications.id as number);
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="nombre"
            value={editValues.nombre}
            onChange={handleEditChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        ) : (
          applications.nombre
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="key"
            value={editValues.key}
            onChange={handleEditChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        ) : (
          applications.key
        )}
      </td>
      <td className="px-6 py-4">
        <input
          type="checkbox"
          checked={applications.estado === "A"}
          onChange={() =>
            editApp(applications.id as number, {
              ...applications,
              estado: applications.estado === "A" ? "I" : "A",
            })
          }
        />
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="user_activos"
            value={editValues.user_activos}
            onChange={handleEditChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        ) : (
          applications.user_activos
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <button
            onClick={handleEditSubmit}
            className="font-medium text-green-600 dark:text-green-500 hover:underline"
          >
            Guardar
          </button>
        ) : (
          <Link
            href="#"
            onClick={() => setIsEditing(true)}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Editar
          </Link>
        )}
      </td>
      <td className="px-6 py-4">
        <button
          onClick={handleDelete}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
