import PropTypes from 'prop-types';
import './Bottle.css'


const Bottle = ({bottle,handleAddToCard}) => {
    const {name,img,price}=bottle
    // console.log(bottle);
    return (
        <div className='bottle'>
            <h3>bottole ; {name}</h3>
            <img className='bottle-img' src={img} alt="" />
            <p>$ {price}</p>
            <button onClick={()=>handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes={
    bottle :PropTypes.object.isRequired
    
}

export default Bottle;