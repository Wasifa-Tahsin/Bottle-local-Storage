import PropTypes from 'prop-types';
import './Cart.css'

const Card = ({cart}) => {
    return (
        <div>
            <h4>cart : {cart.length}</h4>
            <div className="cart-container">
                {cart.map(bottle=><img key={bottle.id} src={bottle.img}></img>)}
            </div>
        </div>
    );
};



Card.propTypes={
    cart:PropTypes.array.isRequired
    // handleRemoveFromCard:PropTypes.func.isRequired
}
export default Card;