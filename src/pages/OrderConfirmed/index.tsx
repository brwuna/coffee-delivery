import { IntroSubtitle, IntroTitle } from "../Home/components/Intro/styles";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import completeImg from "../../assets/completeorder.svg"
import { InfoWithIcon } from "../../components/infoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethod } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
    state: OrderData;
}

export function OrderConfirmed() {
    const { colors } = useTheme();

    const { state } = useLocation() as unknown as LocationType;
    const navigate = useNavigate();

    useEffect(() => {
        if(!state) {
            navigate("/")
        }
    }, []);

    if(!state) return <></>;


    return (
        <OrderConfirmedContainer className="container">
            <div>
                <IntroTitle size="l">Uhuuu! Pedido confirmado! :)</IntroTitle>
                <IntroSubtitle size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você
                </IntroSubtitle>
            </div>

            <section>
                <OrderDetailsContainer>
                    <InfoWithIcon
                        icon={<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                        <IntroSubtitle>
                            Entrega em <strong>{state.rua}, {state.number}</strong>
                            <br />
                            {state.bairro} - {state.cidade}, {state.uf}
                        </IntroSubtitle>
                    }
                    />

                    <InfoWithIcon
                        icon={<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <IntroSubtitle>
                                Previsão de entrega
                                <br/>
                                <strong>20min - 30min</strong>
                            </IntroSubtitle>
                        }
                    />

                    <InfoWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow-dark"]}
                        text={
                            <IntroSubtitle>
                                Pagamento na entrega
                                <br/>
                                <strong>{paymentMethod[state.paymentMethod].label}</strong>
                            </IntroSubtitle>
                        }
                    />
                </OrderDetailsContainer>
                <img src={completeImg} />
            </section>
        </OrderConfirmedContainer>
    );  
}