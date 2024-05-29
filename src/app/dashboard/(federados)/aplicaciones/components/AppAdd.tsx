import { ShowHideAdd } from "@/app/dashboard/hooks/ShowHideAdd";
import { useForm } from "@/app/dashboard/hooks/useForm";
import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { useState } from "react";

type AppAddProps = {
  onNewApp: (app: FormValues) => void;
};

export const AppAdd: React.FC<AppAddProps> = ({ onNewApp }) => {
  const { mostrarComponente, setMostrarComponente } = ShowHideAdd();
  const [error, setError] = useState("");

  const { formValues, setFormValues, onInputChange, isFormValid, onResetForm } = useForm({
    nombre: "",
    key: "",
    user_activos: "",
    amplify: "",
    mfa: "",
    recaptcha: "",
    reintentos: "",
    caducidad: "",
    logitudMaxima: "",
    cambio: "",
    creacion: "",
    estado: "",
  });

  const onFormSubmit = (
    event: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ) => {
    event.preventDefault();

    if (isFormValid()) {
      const newApp = { ...formValues, id: new Date().getTime() };
      onNewApp(newApp);
      setFormValues({
        nombre: "",
        key: "",
        user_activos: "",
        estado: "",
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
        {mostrarComponente ? 'Ocultar Aplicación' : 'Agregar Aplicación' }
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
                placeholder="Key de la aplicacion"
                name="key"
                value={formValues.key}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Usuarios activos"
                name="user_activos"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formValues.user_activos}
                onChange={onInputChange}
              />
            </div>
            <div>
                <input
                  type="text"
                  placeholder="Amplify"
                  name="amplify"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formValues.amplify}
                  />
            </div>
            <div>
              <label>MFA</label>
              <input
                type="checkbox"
                placeholder="MFA"
                name="mfa"
                value={formValues.mfa}
                />
            </div>
            <div>
            <label>Recaptcha</label>
              <input
                type="checkbox"
                placeholder="Recaptcha"
                name="recaptcha"
                value={formValues.recaptcha}
                />
            </div>
            <div>
              <select
                onChange={onInputChange}
                name="estado"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultChecked>Estado</option>
                <option value={"A"}>Activo</option>
                <option value={"I"}>Inactivo</option>
              </select>
            </div>
            <div className="politicas">
              <h3>Politicas</h3>
             <div>
             <label>Reintentos</label>
              <input
                type="checkbox"
                placeholder="Reintentos"
                name="reintentos"
                value={formValues.reintentos}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
             </div>
             <div>
             <label>Caducidad</label>
              <input
                type="checkbox"
                placeholder="Caducidad"
                name="caducidad"
                value={formValues.caducidad}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
             </div>
             <div>
             <label>Longitud Maxima</label>
              <input
                type="checkbox"
                placeholder="Logitud maxima"
                name="logitudMaxima"
                value={formValues.logitudMaxima}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
             </div>
             <div>
             <label>1er Cambio contra</label>
              <input
                type="checkbox"
                placeholder="Cambio"
                name="cambio"
                value={formValues.cambio}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
             </div>
             <div>
             <label>Not. Cración</label>
              <input
                type="checkbox"
                placeholder="creacion"
                name="creacion"
                value={formValues.creacion}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onInputChange}
              />
             </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3"
          >
            Agregar
          </button>
          {error && <p className="text-red-500 mt-5">{error}</p>}
          </div>
        </form>
      </div>
    </>
  );
};
