import { useContext } from "react";
import "./cart-icon.styles.scss"
import StorefrontIcon from '@mui/icons-material/Storefront';
import { CartContext } from "../../contexts/cart.context";





export const CartIcon = () =>{

    const {isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)


    return(
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <StorefrontIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}