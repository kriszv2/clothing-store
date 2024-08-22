import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context'
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './navigation.styles'

const Navigation = () =>{

  const {currentUser} = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext) 
  
    return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        
        <NavLinks>
        <NavLink to='/shop'>
        SHOP
        </NavLink>
        {
          currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
          ) : 
          (<NavLink to='/auth'>
        SIGN IN
        </NavLink>)
        }
        <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
    )
  }

export default Navigation