import { create } from "zustand";

import type { Store } from "@/utils/interfaces";

const useStore = create<Store>((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set({ isLoading: value })
}));

export default useStore;
