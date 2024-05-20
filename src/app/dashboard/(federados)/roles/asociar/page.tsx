"use client";
import { NavBar } from "@/components/NavBar";

import withAuth from "@/app/withAuth";

const AsociarPage = () => {
 

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
                
              </div>
              <div className="flex flex-col text-sm font-medium text-gray-400 justify-center my-5">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(AsociarPage);