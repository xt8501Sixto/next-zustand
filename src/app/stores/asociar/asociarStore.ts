// store.ts
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Item {
    id: string;
    name: string;
  }

interface AsociarState {
  leftList: Item[];
  rightList: Item[];
  selectedLeft: string[];
  selectedRight: string[];
  handleSelectLeft: (id: string) => void;
  handleSelectRight: (id: string) => void;
  moveToRight: () => void;
  moveToLeft: () => void;
  addItemsToLeft: (items: string[]) => void;
  addItemsToRight: (items: string[]) => void;
}

const generateUniqueId = (): string => `${Date.now()}-${Math.random()}`;

const storeAsociar: StateCreator<AsociarState> = (set) => ({
  leftList: [
    { id: generateUniqueId(), name: 'Item 1' },
    { id: generateUniqueId(), name: 'Item 2' },
    { id: generateUniqueId(), name: 'Item 3' },
  ],
  rightList: [],
  selectedLeft: [],
  selectedRight: [],
  handleSelectLeft: (id: string) =>
    set((state) => ({
      selectedLeft: state.selectedLeft.includes(id)
        ? state.selectedLeft.filter((i) => i !== id)
        : [...state.selectedLeft, id],
    })),
  handleSelectRight: (id: string) =>
    set((state) => ({
      selectedRight: state.selectedRight.includes(id)
        ? state.selectedRight.filter((i) => i !== id)
        : [...state.selectedRight, id],
    })),
  moveToRight: () =>
    set((state) => ({
      rightList: [
        ...state.rightList,
        ...state.leftList.filter((item) => state.selectedLeft.includes(item.id)),
      ],
      leftList: state.leftList.filter((item) => !state.selectedLeft.includes(item.id)),
      selectedLeft: [],
    })),
  moveToLeft: () =>
    set((state) => ({
      leftList: [
        ...state.leftList,
        ...state.rightList.filter((item) => state.selectedRight.includes(item.id)),
      ],
      rightList: state.rightList.filter((item) => !state.selectedRight.includes(item.id)),
      selectedRight: [],
    })),
  addItemsToLeft: (items: string[]) =>
    set((state) => ({
      leftList: [
        ...state.leftList,
        ...items.map((item) => ({ id: generateUniqueId(), name: item })),
      ],
    })),
  addItemsToRight: (items: string[]) =>
    set((state) => ({
      rightList: [
        ...state.rightList,
        ...items.map((item) => ({ id: generateUniqueId(), name: item })),
      ],
    })),
});

export const useAsociarStore = create<AsociarState>()(
  devtools(
    persist(storeAsociar, { name: 'asociar-storage' })
  )
);