import { create } from "zustand";
import { IBoardSlice, BoardSlice } from "@/stores/board-slice";

interface IStore extends IBoardSlice {
  // GLOBAL
}

const useStore = create<IStore>()((...a) => ({
  ...BoardSlice(...a),
}));

export default useStore;
