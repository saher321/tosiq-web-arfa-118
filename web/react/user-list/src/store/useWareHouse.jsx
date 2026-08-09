import { create } from 'zustand'

const useWareHouse = create(
    (set, get) => ({
        laysStock: 15,
        checkStock: () => {
            console.log(`Total lays is: ${get().laysStock}`)
        }
    })
)

export default useWareHouse