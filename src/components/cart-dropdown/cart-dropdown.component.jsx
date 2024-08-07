import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
import CartItem from "../cart-item/cart-item.component"
import { Link } from "react-router-dom"

const CartDropdown = () =>{

    const {cartItems} = useContext(CartContext)
    
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
                cartItems.map((item)=>{
                    return <CartItem cartItem={item}/>
                })
            }
            </div>
        <Link to="/checkout"><Button>Go to Checkout</Button></Link>
        </div>
    )
}

export default CartDropdown