import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";


interface PermisoState {
  permisos: FormValues[];
  addPermiso: (permiso: FormValues) => void;
  editPermiso: (id: number, updatedPermiso: FormValues) => void;
  deletePermiso: (id: number) => void;
}

const storePermiso: StateCreator<PermisoState> = (set) => ({
  permisos: [],
  addPermiso: (permiso) => set((state) => ({ permisos: [...state.permisos, permiso] })),

  editPermiso: (id, updatedPermiso) => set((state) => ({
    permisos: state.permisos.map(permiso => 
      permiso.id === id ? { ...permiso, ...updatedPermiso } : permiso
    )
  })),
  
  deletePermiso: (id) => set((state) => ({
    permisos: state.permisos.filter(permiso => permiso.id !== id)
  }))
});

export const usePermisoStore = create<PermisoState>()(
  devtools(
    persist(storePermiso, { name: "permiso-storage" })
  )
);