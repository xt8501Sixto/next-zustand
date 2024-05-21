import { ShowHideAdd } from "@/app/dashboard/hooks/ShowHideAdd";
import { useForm } from "@/app/dashboard/hooks/useForm";
import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { useState } from "react";
type AppUserProps = {
  onNewUsers: (user: FormValues) => void;
};

export const UsersAdd: React.FC<AppUserProps> = ({ onNewUsers }) => {
  const [error, setError] = useState("");
  const { mostrarComponente, setMostrarComponente } = ShowHideAdd();

  const { formValues, setFormValues, onInputChange, isFormValid, onResetForm } = useForm({
    nombre: "",
    documento: "",
    usuario: "",
    roles: "",
    tipo: "",
    estado: "",
  });

  const onFormSubmit = (
    event: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ) => {
    event.preventDefault();

    if (isFormValid()) {
      const newUser = { ...formValues, id: new Date().getTime() };
      onNewUsers(newUser);
      setFormValues({
        nombre: "",
        documento: "",
        usuario: "",
        estado: "",
        roles: "",
        tipo: "",
      });
      setError("");
    } else {
      setError("Por favor, selecciona todos los campos");
    }
  };

  const onReset = () => {
    setMostrarComponente(!mostrarComponente)
    onResetForm();
    setError("");
  };

  return (
    <>
      <button
        onClick={onReset}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:w-auto md:w-44"
      >
        Agregar Usuarios
      </button>
      <div className={mostrarComponente ? "show-element" : "hide-element"}>
        <form onSubmit={onFormSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Nombre de la aplicacion"
                name="nombre"
                value={formValues.nombre}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Documento"
                name="documento"
                value={formValues.documento}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Usuario"
                name="usuario"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formValues.usuario}
                onChange={onInputChange}
              />
            </div>
            <div>
              <select
                onChange={onInputChange}
                name="estado"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue="">Estado</option>
                <option value={"A"}>Activo</option>
                <option value={"I"}>Inactivo</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Roles"
                name="roles"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formValues.roles}
                onChange={onInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Tipo"
                name="tipo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formValues.tipo}
                onChange={onInputChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agregar
          </button>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </form>
      </div>
    </>
  );
};
