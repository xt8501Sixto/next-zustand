import { useState } from "react";
import Link from "next/link";
import { useUsersStore } from "@/app/stores";

export const UsersItem = ({ users }: { users: any }) => {
  const {editUser, deleteUser} = useUsersStore()
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({ ...users });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    const newEstado = editValues.estado === "A" ? "I" : "A";
    setEditValues({
      ...editValues,
      estado: newEstado,
    });
  };

  const validateInputs = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!editValues.nombre) {
      tempErrors.nombre = "El nombre no puede estar vacío";
    }
    if (!editValues.documento) {
      tempErrors.documento = "El documento no puede estar vacío";
    }
    if (!editValues.usuario) {
      tempErrors.usuario = "El usuario no puede estar vacío";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleEditSubmit = () => {
    if (validateInputs()) {
      editUser(users.id as number, editValues);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    deleteUser(users.id as number);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="nombre"
              value={editValues.nombre}
              onChange={handleEditChange}
              className={`border ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              } rounded px-2 py-1`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre}</p>
            )}
          </>
        ) : (
          users.nombre
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="documento"
              value={editValues.documento}
              onChange={handleEditChange}
              className={`border ${
                errors.documento ? "border-red-500" : "border-gray-300"
              } rounded px-2 py-1`}
            />
            {errors.documento && (
              <p className="text-red-500 text-sm">{errors.documento}</p>
            )}
          </>
        ) : (
          users.documento
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="usuario"
              value={editValues.usuario}
              onChange={handleEditChange}
              className={`border ${
                errors.usuario ? "border-red-500" : "border-gray-300"
              } rounded px-2 py-1`}
            />
            {errors.usuario && (
              <p className="text-red-500 text-sm">{errors.usuario}</p>
            )}
          </>
        ) : (
          users.usuario
        )}
      </td>
      <td className="px-6 py-4">
        <input
          type="checkbox"
          checked={editValues.estado === "A"}
          onChange={handleCheckboxChange}
          disabled={!isEditing}
        />
      </td>
      <td className="px-6 py-4">{users.roles}</td>
      <td className="px-6 py-4">{users.tipo}</td>
      <td className="px-6 py-4 flex justify-start">
        <div className="flex">
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
        </div>
        <div className="flex px-2">
          <button
            onClick={handleDelete}
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};