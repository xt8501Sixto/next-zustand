import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { StateCreator, create } from "zustand";
import {
  devtools,
  persist,
} from "zustand/middleware";
import { customSessionStorage } from "../storages/session-storage";

interface AppState {
  applications: FormValues[];
  addApp: (app: FormValues) => void;
  editApp: (id: number, updatedApp: FormValues) => void;
  deleteApp: (id: number) => void;
}

const storeApp: StateCreator<AppState> = (set) => ({
  applications: [],
  addApp: (app) =>
    set((state) => ({ applications: [...state.applications, app] })),

    editApp: (id, updatedApp) => set((state) => ({
      applications: state.applications.map(app => 
        app.id === id ? { ...app, ...updatedApp } : app
      )
    })),
  
    deleteApp: (id) => set((state) => ({
      applications: state.applications.filter(app => app.id !== id)
    }))
});

export const useAppStore = create<AppState>()(
  devtools(
    persist(storeApp, { name: "app-storage", storage: customSessionStorage })
  )
);
