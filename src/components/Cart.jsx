import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector(store => store.cart.items) //this is the place where we say where were are subscribing to
    //subscribe to the item need from store donot subscribe to whole store

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <h1>Cart items</h1>
            <button onClick={() => handleClearCart}>clear Cart</button>
            <div className="flex">
                {cartItems.map((item) => {
                    return (<CartItem {...cartItems} />)
                })}
            </div>
        </div>
    )
}

const CartItem = ({ name, price }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
        </div>
    )
}
export default Cart;