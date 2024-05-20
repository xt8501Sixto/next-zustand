import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import {StateCreator, create} from "zustand";
import { devtools, persist } from "zustand/middleware";

interface RoleState {
  roles: FormValues[];
  addRole: (role: FormValues) => void;
}

const storeRole: StateCreator<RoleState> = (set) => ({
  roles: [],
  addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
})

export const useRolesStore = create<RoleState>()(
  devtools(
    persist(
      storeRole,
      {name: 'role-storage'}
    )
  )
);
