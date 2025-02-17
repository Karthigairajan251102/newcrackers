import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
  const initialState = {
    isVisible: false,
    quantity: 1 ,
    price : 100, 
    priceItem: 100,

  
    items: {
      item1:  { id: 1, name: "Ashoka Pots", image:"./src/assets/pots/ashoka.png", price: 200, },
      item2:  { id: 2, name: "Giant Pots", image:"./src/assets/pots/giants.png", price: 300,},
      item3:  { id: 3, name: "Small Pots", image:"./src/assets/pots/small.jpg", price: 100, },
      item4:  {id: 4,name: "Ashoka Chakkar" , image : "./src/assets/chakkar/ashoka.jpg", price: 300, },
      item5:  {id: 5,name: "Big Chakkar" , image : "./src/assets/chakkar/big.jpg", price: 200, },
      item6:  {id: 6,name: "Small Chakkar" , image : "./src/assets/chakkar/small.jpg", price: 100, },
      item7:  {id: 7,name: "Twingling Star Big" , image : "./src/assets/star/big.jpg", price: 50, },
      item8:  {id: 8,name: "Twingling Star Small" , image : "./src/assets/star/small.jpg", price: 40, },
      item9:  {id: 9,name: "Pencil" , image : "./src/assets/star/pencil.jpg", price: 50, },
      item10: {id: 10,name: "Big Rocket" , image : "./src/assets/rocket/big.jpg", price: 100, },
      item11: {id: 11,name: "Baby Rocket" , image : "./src/assets/rocket/baby.jpg", price: 50,},
      item12: {id: 12,name: "Cracking Rocket" , image : "./src/assets/rocket/fire.jpg", price: 150,},
      item13: {id: 13,name: "Red" , image : "./src/assets/sparklers/red.png", price: 40, },
      item14: {id: 14,name: "Green" , image : "./src/assets/sparklers/green.jpg", price: 40, },
      item15: {id: 15,name: "Yellow" , image : "./src/assets/sparklers/yellow.jpg", price: 30,},
      item16: {id: 16,name: "Kuruvi" , image : "./src/assets/bomb/kuruvi.png", price: 80, },
      item17: {id: 17,name: "Lakshmi" , image : "./src/assets/bomb/lakhshmi.jpg", price: 60,},
      item18: {id: 18,name: "Auto Bomb" , image : "./src/assets/bomb/auto.jpg", price: 120,},
      item19: {id: 19,name: "Yellow Fountain" , image : "./src/assets/fount/yellow.jpg", price: 200,},
      item20: {id: 20,name: "Electric Fountain" , image : "./src/assets/fount/electric.jpg", price: 200,},
      item21: {id: 21,name: "Blue Fountain" , image : "./src/assets/fount/blue.jpg", price: 200,},
      item22: {id: 22,name: "Single Shot" , image : "./src/assets/fancy/single.jpg", price: 100 ,},
      item23: {id: 23,name: "30 Shot" , image : "./src/assets/fancy/thirty.jpg", price: 200 ,},
      item24: {id: 24,name: "60 Shot" , image : "./src/assets/fancy/sixty.jpg", price: 400 ,},
      item25: {id: 25,name: "120 Shot" , image : "./src/assets/fancy/onetwenty.jpg", price: 600 ,},
      item26: {id: 26,name: "240 Shot" , image : "./src/assets/fancy/two40.jpg", price: 800 ,},
      item27: {id: 27,name: "520 Shot" , image : "./src/assets/fancy/five20.png", price: 1000 ,},
    },
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity:0,
    cartTotalAmount:0
  }
  
  const visibilitySlice = createSlice({
    name: 'visibility',
    initialState,
    reducers: {

      // FOR ADMIN VISIBILITY
      showElement: (state) => {
        state.isVisible = !state.isVisible;
      },
      

      // ADD TO CART
      addCart:(state,action) =>{
       const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id )

       if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity +=1;
        toast.info("increased product quantity",{
          position:'bottom-left'
        })
       }
       else{
        const tempProduct =  {...action.payload, cartQuantity: 1}
        state.cartItems.push(tempProduct)
        toast.success("adding new product in cart",{
          position:'bottom-left'
        })
       }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))  
      },


      // REMOVE FROM CART
      removeCart:(state, action) => {
       const nextCartItems =  state.cartItems.filter((cartItem) =>cartItem.id !== action.payload.id)
       state.cartItems = nextCartItems;
       localStorage.setItem("cartiItems", JSON.stringify(state.cartItems))

       toast.error("removing product in cart",{
        position:'bottom-left'
      })
      },


      // QUANTITY DECREASE
      decreaseCart: (state, action)=>{
        const itemIndex = state.cartItems.findIndex(
          cartItem => cartItem.id === action.payload.id
        )

        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        }
        else if(state.cartItems[itemIndex].cartQuantity === 1){
          const nextCartItems =  state.cartItems.filter((cartItem) =>cartItem.id !== action.payload.id)
          state.cartItems = nextCartItems;
          localStorage.setItem("cartiItems", JSON.stringify(state.cartItems))
       
        }
      },
  


      // QUANTITY INCREASE
      increaseCart: (state, action)=>{
        const itemIndex = state.cartItems.findIndex(
          cartItem => cartItem.id === action.payload.id
        )

        if (state.cartItems[itemIndex].cartQuantity >= 1) {
          state.cartItems[itemIndex].cartQuantity += 1;
        }
        else if(state.cartItems[itemIndex].cartQuantity === 1){
          const nextCartItems =  state.cartItems.filter((cartItem) =>cartItem.id !== action.payload.id)
          state.cartItems = nextCartItems;
          localStorage.setItem("cartiItems", JSON.stringify(state.cartItems))
       
        }
      },


      // CLEAR CART
      clearCart: (state, action)=>{
        state.cartItems = [];
        toast.error("clearing cart",{
          position:'bottom-left'
        })
        localStorage.setItem("cartiItems", JSON.stringify(state.cartItems))
      },


      // CALCULATE SUB TOTAL

      getTotals:(state, action)=>{
       let {total, quantity} = state.cartItems.reduce(
          (cartTotal, cartiItem)=>{
            const {price, cartQuantity} = cartiItem;
            const itemTotal = price * cartQuantity

            cartTotal.total +=itemTotal
            cartTotal.quantity += cartQuantity

            return cartTotal;
          },{
          total: 0,
          quantity: 0
        })

        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      }
    }
  });
  
  export const {showElement, addCart, removeCart, decreaseCart, increaseCart, clearCart, getTotals  } = visibilitySlice.actions;
  export default visibilitySlice.reducer;