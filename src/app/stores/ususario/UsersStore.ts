import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  users: FormValues[];
  addUser: (user: FormValues) => void;
}

const storeUser: StateCreator<UserState> = (set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
})

export const useUsersStore = create<UserState>()(
  devtools(
    persist(
      storeUser,
      {name: 'user-storage'}
    )
  )
);
