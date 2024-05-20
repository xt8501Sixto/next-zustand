"use client";
import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { AppList } from "./components/AppList";
import { AppAdd } from "./components/AppAdd";
import { FormValues } from "../../interfaces/formValue.interface";
import { useAppStore } from "@/app/stores";
import withAuth from "@/app/withAuth";

const ApplicationsPage = () => {
  const applications = useAppStore((state) => state.applications);
  const { addApp } = useAppStore();

  const handleNewApp = (app: FormValues) => {
    addApp(app);
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
                <p>Módulo de Aplicaciones</p>
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <AppList applications={applications} />
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <AppAdd onNewApp={handleNewApp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ApplicationsPage);
