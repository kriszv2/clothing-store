import { useContext } from "react";
import "./cart-icon.styles"
import { CartContext } from "../../contexts/cart.context";
import Storefront from "@mui/icons-material/Storefront";
import {  CartIconContainer, ItemCount } from "./cart-icon.styles";





export const CartIcon = () =>{

    const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)


    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <Storefront/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}