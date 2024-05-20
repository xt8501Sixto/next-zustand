"use client";
import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { RolesList } from "./components/RolesList";
import { RolesAdd } from "./components/RolesAdd";
import { FormValues } from "../../interfaces/formValue.interface";
import { useRolesStore } from "@/app/stores";
import withAuth from "@/app/withAuth";

const RolesPage = () => {
  const roles = useRolesStore((state) => state.roles);
  const { addRole } = useRolesStore();

  const handleNewRole = (role: FormValues) => {
    addRole(role);
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
                <p>Módulo de Roles</p>
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <RolesList roles={roles} />
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <RolesAdd onNewRole={handleNewRole} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(RolesPage);