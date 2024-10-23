const getStoredCart=()=>{
    const StoredCartString=localStorage.getItem('cart')
    if(StoredCartString){
        return JSON.parse(StoredCartString)
    }
    return []
}


// save to localStorage
const saveCartToLS=(cart)=>{
    const cartStringified=JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}



const addToLS=(id)=>{
    const cart=getStoredCart()
    cart.push(id)
    saveCartToLS(cart)
    
}


// const removeFromLS=(id)=>{
//     const cart=getStoredCart()
//     // removing every id
//     const remaining=cart.filter(idx=>idx !==id)
//     saveCartToLS(remaining)
// }

export {addToLS,getStoredCart}