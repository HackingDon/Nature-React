import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers : {
        addItem: (state,action) => {
            state.push(action.payload)
          },
        removeItem:(state,action) =>{
           const newstate =  state.filter(item=>item.title!=action.payload)
           return newstate;
        },
        addQuan:(state,action) =>{
            const title = action.payload
            const newstate = state.map(item=>item.title == title?{...item,quantity:item.quantity+1}:item.quantity)
            return newstate
        },
        decQuan:(state,action) =>{
            const title = action.payload
            const newstate = state.map(item=>item.title == title?{...item,quantity:item.quantity>1?item.quantity-1:item.quantity}:item.quantity)
            return newstate
        },
        clearItems:()=>[]
    }
})
export const {addItem,removeItem,addQuan,decQuan,clearItems} = cartSlice.actions

export default cartSlice.reducer