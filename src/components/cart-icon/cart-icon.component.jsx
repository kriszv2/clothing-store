import "./cart-icon.styles.scss"
import StorefrontIcon from '@mui/icons-material/Storefront';


export const CartIcon = () =>{
    return(
        <div className="cart-icon-container">
            <StorefrontIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}