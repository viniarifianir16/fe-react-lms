import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Definisikan tipe data untuk state
interface AuthState {
  user: { [key: string]: any } | null;
  login: (params: { [key: string]: any }) => void;
  logout: () => void;
}

const zustandLocalStorage = {
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (params) => {
        set({ user: params }); // Simpan data user ke state
      },
      logout: () => {
        set({ user: null }); // Hapus data user dari state
      },
    }),
    {
      name: 'auth-storage',
      storage: zustandLocalStorage,
    }
  )
);

export { useAuthStore };
