import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import {StateCreator, create} from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  applications: FormValues[];
  addApp: (app: FormValues) => void;
}

const storeApp: StateCreator<AppState> = (set) => ({
  applications: [],
  addApp: (app) => set((state) => ({ applications: [...state.applications, app] })),
})

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      storeApp,
      {name: 'app-storage'}
    )
  )
);

