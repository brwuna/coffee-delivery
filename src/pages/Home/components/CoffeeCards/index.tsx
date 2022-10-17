import { QuantityInput } from "../../../../components/QuantityInput";
import { IntroSubtitle, IntroTitle } from "../Intro/styles";
import { AddCardWrapper, CardFooter, CoffeeCardContainer, Description, NameCoffee, Tags } from "./styles";
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;

}

interface CoffeeProps {
    coffee : Coffee;
}

export function CoffeeCards({ coffee }: CoffeeProps) {
    const [ quantity, setQuantity ] = useState(1);

    function handleIncrease() {
        setQuantity(state => state + 1);
    }

    function handleDecrease() {
        setQuantity(state => state - 1);
    }


    const { addCoffeeToCart } = useCart();  

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
    }


    const formattedPrice = formatMoney(coffee.price)
    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <NameCoffee>
                {coffee.name}
            </NameCoffee>
            <Description>
                {coffee.description}
            </Description>
            
            <CardFooter>
                <div>
                    <IntroSubtitle size="s">R$</IntroSubtitle>
                    <IntroTitle size="m" color="text" as="strong">
                        {formattedPrice}
                    </IntroTitle>
                </div>

                <AddCardWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity} 
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={20} weight="fill" />
                    </button>
                </AddCardWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}