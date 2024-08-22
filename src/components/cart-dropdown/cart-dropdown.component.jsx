import "./cart-dropdown.styles.jsx"
import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
import CartItem from "../cart-item/cart-item.component"
import { Link } from "react-router-dom"
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles"

const CartDropdown = () =>{

    const {cartItems} = useContext(CartContext)
    
    return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? (cartItems.map((item)=>(
                    <CartItem cartItem={item}/>
                ))) : <EmptyMessage>Your cart is empty</EmptyMessage>
            }
            </CartItems>
        <Link to="/checkout"><Button>Go to Checkout</Button></Link>
        </CartDropdownContainer>
    )
}

export default CartDropdown