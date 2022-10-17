import { QuantityInput } from "../../../../components/QuantityInput";
import { IntroSubtitle } from "../../../Home/components/Intro/styles";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease")
    }

    function handleRemove() {
        removeCartItem(coffee.id)
    }

    const coffeeTotal = coffee.price * coffee.quantity;

    const formattedPrice = formatMoney(coffeeTotal);

    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />

                <div>
                    <IntroSubtitle color="subtitle">{coffee.name}</IntroSubtitle>
                    <ActionsContainer>
                        <QuantityInput 
                        size="small" 
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease} 
                        quantity={coffee.quantity} 
                        />
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}