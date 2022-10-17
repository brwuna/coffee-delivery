import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { IntroSubtitle } from "../../../Home/components/Intro/styles";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal, cartQuantity } = useCart();

    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);


    return (
        <ConfirmationSectionContainer>
            <div>
                <IntroSubtitle size="s">Total de itens</IntroSubtitle>
                <IntroSubtitle>R$ {formattedItemsTotal}</IntroSubtitle>
            </div>

            <div>
                <IntroSubtitle size="s">Entrega</IntroSubtitle>
                <IntroSubtitle>R$ {formattedDeliveryPrice}</IntroSubtitle>
            </div>

            <div>
                <IntroSubtitle size="l" weight="700" color="subtitle">Total</IntroSubtitle>
                <IntroSubtitle size="l" weight="700" color="subtitle">R$ {formattedCartTotal}</IntroSubtitle>
            </div>
            <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit" />
        </ConfirmationSectionContainer>
    )
}