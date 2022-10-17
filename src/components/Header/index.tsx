import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg"
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
    const { cartQuantity } = useCart();
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={26} weight="fill" />
                        Salvador, BA
                    </HeaderButton>
                    <NavLink to="/completeorder">
                        <HeaderButton variant="yellow">
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={26} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}