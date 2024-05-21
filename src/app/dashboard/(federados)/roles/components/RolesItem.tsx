import { useState } from "react";
import { DataDasboard } from "@/app/dashboard/interfaces/interfaces.dashboard";
import Link from "next/link";
import { useRolesStore } from "@/app/stores";

export const RolesItem = ({ roles }: { roles: DataDasboard }) => {
  const {editRole, deleteRole} = useRolesStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({ ...roles });
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
    if (!editValues.codigo) {
      tempErrors.codigo = "El código no puede estar vacío";
    }
    if (!editValues.descripcion) {
      tempErrors.descripcion = "La descripción no puede estar vacía";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleEditSubmit = () => {
    if (validateInputs()) {
      editRole(roles.id as number, editValues);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    deleteRole(roles.id as number);
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
          roles.nombre
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="codigo"
              value={editValues.codigo}
              onChange={handleEditChange}
              className={`border ${
                errors.codigo ? "border-red-500" : "border-gray-300"
              } rounded px-2 py-1`}
            />
            {errors.codigo && (
              <p className="text-red-500 text-sm">{errors.codigo}</p>
            )}
          </>
        ) : (
          roles.codigo
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="descripcion"
              value={editValues.descripcion}
              onChange={handleEditChange}
              className={`border ${
                errors.descripcion ? "border-red-500" : "border-gray-300"
              } rounded px-2 py-1`}
            />
            {errors.descripcion && (
              <p className="text-red-500 text-sm">{errors.descripcion}</p>
            )}
          </>
        ) : (
          roles.descripcion
        )}
      </td>
      <td className="px-6 py-4">
      {isEditing ? (
          <>
            <input
              type="text"
              name="permisos"
              value={editValues.permisos}
              onChange={handleEditChange}
              className={`border ${
                errors.permisos ? "border-red-500" : "border-gray-300"
              } rounded px-2 py-1`}
            />
            {errors.permisos && (
              <p className="text-red-500 text-sm">{errors.permisos}</p>
            )}
          </>
        ) : (
          <Link href="./roles/asociar" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{roles.permisos}</Link>
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
            <button
              onClick={() => setIsEditing(true)}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Editar
            </button>
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