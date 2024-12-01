/* eslint-disable no-unused-vars */
import {create} from 'zustand'

type Store = {
  count: number
  setCount: (newCount: number) => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  setCount: (newCount) => set({count: newCount}),
}))

export default useStore
