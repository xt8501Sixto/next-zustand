import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface RoleState {
  roles: FormValues[];
  addRole: (role: FormValues) => void;
  editRole: (id: number, updatedRole: FormValues) => void;
  deleteRole: (id: number) => void;
}

const storeRole: StateCreator<RoleState> = (set) => ({
  roles: [],
  addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),

  editRole: (id, updatedRole) => set((state) => ({
    roles: state.roles.map(role => 
      role.id === id ? { ...role, ...updatedRole } : role
    )
  })),
  
  deleteRole: (id) => set((state) => ({
    roles: state.roles.filter(role => role.id !== id)
  }))
});

export const useRolesStore = create<RoleState>()(
  devtools(
    persist(storeRole, { name: "role-storage" })
  )
);