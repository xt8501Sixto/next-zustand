import type { AuthStatus, User } from "@/app/interfaces";
import { AuthService } from "@/services/auth.service";
import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface AuthState {
  status: AuthStatus;
  user?: User;
  token?: string;

  login: (username: string, password: string) => Promise<User | undefined>;
  logout: () => void;
}

const storeAuth: StateCreator<AuthState> = (set) => ({
  status: "pending",
  user: undefined,

  login: async (username: string, password: string) => {
    try {
      const user = await AuthService.login(username, password);
      set({ status: "authorized", user: user as User });
      return user;
    } catch (error) {
      set({ status: "unauthorized", user: undefined });
      throw error;
    }
  },
  logout: () => {
    localStorage.clear();
    set({ status: "unauthorized", user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(storeAuth, {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    })
  )
);
