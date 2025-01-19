import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      // @ts-ignore
      login: (params) => {
        set({ user: params });
      },
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage',
      // @ts-ignore
      getStorage: () => localStorage,
    }
  )
);

export { useAuthStore };
