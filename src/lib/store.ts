import { create } from "zustand";

import { StoreInterface } from "@/utils/interfaces";

const useStore = create<StoreInterface>((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set({ isLoading: value })
}));

export default useStore;
