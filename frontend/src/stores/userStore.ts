import { create } from "zustand";
import {
  login,
  logout,
  getUser,
  refreshToken,
  signUp,
  forgotPassword,
  activateAccount,
  resetPassword,
} from "../api/auth";
import type { AuthState } from "../types/user";

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: false,
  initialized: false,

  setUser: (user) => set({ user }),

  fetchUser: async () => {
    set({ loading: true });
    try {
      const res = await getUser();
      set({ user: res.data });
    } catch (error) {
      set({ user: null });
      throw error;
    } finally {
      set({ loading: false, initialized: true });
    }
  },

  checkAuth: async (): Promise<boolean> => {
    set({ loading: true });
    try {
      await get().fetchUser();
      return true;
    } catch (error: any) {
      if (error.response?.status === 401) {
        try {
          await refreshToken();
          await get().fetchUser();
          return true;
        } catch {
          set({ user: null });
          return false;
        }
      }
      return false;
    } finally {
      set({ loading: false, initialized: true });
    }
  },

  signIn: async (email, password) => {
    set({ loading: true });
    try {
      await login(email, password);
      await get().fetchUser();
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    try {
      await logout();
    } catch (error) {
      console.warn("logout failed: ", error);
    }
    set({ user: null });
  },

  signUp: async (username, email, password, confirmPassword) => {
    set({ loading: true });
    try {
      await signUp(email, username, password, confirmPassword);
    } finally {
      set({ loading: false });
    }
  },

  forgotPassword: async (email) => {
    set({ loading: true });
    try {
      await forgotPassword(email);
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  activateAccount: async (uid, token) => {
    set({ loading: true });
    try {
      await activateAccount(uid, token);
    } finally {
      set({ loading: false });
    }
  },

  resetPassword: async (uid, token, newPassword, reNewPassword) => {
    set({ loading: true });
    try {
      await resetPassword(uid, token, newPassword, reNewPassword);
    } finally {
      set({ loading: false });
    }
  },
}));
