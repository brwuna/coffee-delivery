import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCards } from "../CoffeeCards";
import { IntroTitle } from "../Intro/styles";
import { CoffeeList, TypeOfCoffeContainer } from "./styles";

export function TypeOfCoffe() {
    return (
        <TypeOfCoffeContainer className="container">
            <IntroTitle size="l" color="subtitle">
                Nossos cafés
            </IntroTitle>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCards key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeList>
        </TypeOfCoffeContainer>
    )
}