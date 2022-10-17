import { useCart } from "../../../../hooks/useCart";
import { IntroTitle } from "../../../Home/components/Intro/styles";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    const { cartItems } = useCart()

    return (
        <SelectedCoffeesContainer>
            <IntroTitle size="xs" color="subtitle">
                Cafés selecionados
            </IntroTitle>

            <DetailsContainer>
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item}/>
                ))}
                <ConfirmationSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}