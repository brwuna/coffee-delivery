import { Intro } from "./components/Intro";
import { TypeOfCoffe } from "./components/TypesOfCoffee";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Intro />
            <TypeOfCoffe />
        </HomeContainer>
    )
}