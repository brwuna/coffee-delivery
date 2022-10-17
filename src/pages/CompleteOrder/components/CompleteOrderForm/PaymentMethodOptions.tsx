import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { IntroSubtitle } from "../../../Home/components/Intro/styles";
import { PaymentMethodInput } from "../PaymentMethod";
import { PaymentMethodOptionsContainer } from "./styles";

export const paymentMethod = {
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16} />
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16} />
    },
    pix: {
        label: "Pix",
        icon: <Money size={16} />
    },
}


export function PaymentMethodOptions() {
    const { register, formState: { errors } } = useFormContext();

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;
    return (
        <PaymentMethodOptionsContainer>
            {Object.entries(paymentMethod).map(([key, { label, icon }]) => (
            <PaymentMethodInput
                key={label}
                id={key}
                icon={icon}
                label={label}
                value={key}
                {...register("paymentMethod")}
            />
            ))}
            {paymentMethodError && <IntroSubtitle>{paymentMethodError}</IntroSubtitle>}
        </PaymentMethodOptionsContainer>
    )
}