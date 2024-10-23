import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottoles.css'
import { addToLS, getStoredCart } from "../../Utilities/localStorage";
import Card from "../Card/Card";

const Bottoles = () => {

    const [bottoles,setBottles]=useState([])
    // cart state
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('bottoles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])


    // load cart from local storage
    useEffect(()=>{
        console.log( 'call the useeffect', bottoles.length);
        if(bottoles.length>0){
            const storeCart=getStoredCart()
        console.log(storeCart,bottoles);

        const saveCard=[]
        for(const id of storeCart){
            console.log(id);
            const bottle=bottoles.find(bottle=>bottle.id===id)
            if(bottle){
                saveCard.push(bottle)
            }
        }

        console.log('save card',saveCard);
        setCart(saveCard)
        }
    },[bottoles])


// eventhandler add
    const handleAddToCard=bottle=>{
        const newcart=[...cart,bottle]
        setCart(newcart);
        addToLS(bottle.id)
    }



    // remove from card
    // const handleRemoveFromCard=(id)=>{
    //     // visual card remove
    //     // remove from  LS 
    //     removeFromLS(id)
    // }
    
    return (
        <div>
            <h2>Bottles Available : {bottoles.length} </h2>

            {/* cart add */}
            <Card cart={cart }></Card>



            <div className="bottle-container">
            {
                bottoles.map(bottle=><Bottle key={bottle.id} bottle={bottle}
                    handleAddToCard={handleAddToCard}></Bottle> )
            }
            </div>
        </div>
    );
};

export default Bottoles;