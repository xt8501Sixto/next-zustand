"use client";
import { NavBar } from "@/components/NavBar";
import withAuth from "@/app/withAuth";
import "./styles.css";
import { useAsociarStore } from "@/app/stores/asociar/asociarStore";

const AsociarPage = () => {
  const {
    leftList,
    rightList,
    selectedLeft,
    selectedRight,
    handleSelectLeft,
    handleSelectRight,
    moveToRight,
    moveToLeft,
  } = useAsociarStore();

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
                <p>Asociar Rol</p>
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <div className="dual-list-container">
                  <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-start mb-3">Rol: seguridad</div>
                    <h3 className="mb-2">Permisos disponibles</h3>
                    <div className="list-container">
                      <ul>
                        {leftList.map(({ id, name }) => (
                          <li
                            key={id}
                            onClick={() => handleSelectLeft(id)}
                            style={{
                              background: selectedLeft.includes(id)
                                ? "lightblue"
                                : "white",
                            }}
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="buttons-container">
                    <button
                      type="button"
                      onClick={moveToRight}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                      <span className="sr-only">Icon description</span>
                    </button>
                    <button
                      type="button"
                      onClick={moveToLeft}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4 rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                      <span className="sr-only">Icon description</span>
                    </button>
                  </div>
                  <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h3 className="mb-2">Permisos asignados</h3>
                    <div className="list-container">
                      <ul>
                        {rightList.map(({ id, name }) => (
                          <li
                            key={id}
                            onClick={() => handleSelectRight(id)}
                            style={{
                              background: selectedRight.includes(id)
                                ? "lightblue"
                                : "white",
                            }}
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withAuth(AsociarPage);
