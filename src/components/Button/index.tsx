import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | number;
}

export function Button({ text, ...props }:ButtonTextProps) {
    return (
        <ButtonContainer {...props}>
            {text}
        </ButtonContainer>
    )
}