import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 0.75rem 2.8rem;
    margin-top: 0.7rem;

    font-size: ${(props) => props.theme.textSizes["components-button-g"]};
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.3rem;

    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.colors["base-white"]};
    background: ${(props) => props.theme.colors["brand-yellow"]};

    transition: .4s;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${(props) => props.theme.colors["brand-yellow-dark"]};
    }
`