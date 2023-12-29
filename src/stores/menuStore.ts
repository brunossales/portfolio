import { create } from 'zustand'

type State = {
  menuIsOpen: boolean
}

type Action = {
  updateMenuIsOpen: (menuIsOpen: boolean) => void
}

export const useMenuStore = create<State & Action>((set) => ({
  menuIsOpen: false,
  updateMenuIsOpen: (menuIsOpen) => set({ menuIsOpen }),
}))