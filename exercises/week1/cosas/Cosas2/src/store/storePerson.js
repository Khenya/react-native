import { create } from 'zustand'

const useStorePerson = create((set) => ({
    name: "Brenda",
    setName: (newName) => set({ name: newName }),
    clickCount: 0,
    incrementClickCount: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}))
const useStoreCont = create((set) => ({
    name: "Brenda",
    setName: (newName) => set({ name: newName }),
    clickCount: 0,
    incrementClickCount: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}))
export{useStorePerson, useStoreCont}