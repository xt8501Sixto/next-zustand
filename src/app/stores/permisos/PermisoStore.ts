import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import {StateCreator, create} from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PermisoState {
  permiso: FormValues[];
  addPermiso: (permiso: FormValues) => void;
}

const storePermiso: StateCreator<PermisoState> = (set) => ({
  permiso: [],
  addPermiso: (permiso) => set((state) => ({ permiso: [...state.permiso, permiso] })),
})

export const usePermisoStore = create<PermisoState>()(
  devtools(
    persist(
      storePermiso,
      {name: 'permiso-storage'}
    )
  )
);
