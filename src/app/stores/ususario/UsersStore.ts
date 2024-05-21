import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  users: FormValues[];
  addUser: (user: FormValues) => void;
  editUser: (id: number, updatedUser: FormValues) => void;
  deleteUser: (id: number) => void;
}

const storeUser: StateCreator<UserState> = (set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),

  editUser: (id, updatedUser) => set((state) => ({
    users: state.users.map(user => 
      user.id === id ? { ...user, ...updatedUser } : user
    )
  })),
  
  deleteUser: (id) => set((state) => ({
    users: state.users.filter(user => user.id !== id)
  }))
});

export const useUsersStore = create<UserState>()(
  devtools(
    persist(storeUser, { name: "user-storage" })
  )
);