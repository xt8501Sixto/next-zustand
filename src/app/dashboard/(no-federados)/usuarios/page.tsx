"use client";
import { NavBar } from "@/components/NavBar";
import { UsersList } from "./components/UsersList";
import { UsersAdd } from "./components/UsersAdd";
import { FormValues } from "../../interfaces/formValue.interface";
import { useUsersStore } from "@/app/stores";
import withAuth from "@/app/withAuth";

const UsersPage = () => {
  const users = useUsersStore((state) => state.users);
  const { addUser } = useUsersStore();

  const handleNewUser = (user: FormValues) => {
    addUser(user);
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
                <p>Módulo de Usuarios</p>
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <UsersList users={users} />
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                <UsersAdd onNewUsers={handleNewUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(UsersPage);
