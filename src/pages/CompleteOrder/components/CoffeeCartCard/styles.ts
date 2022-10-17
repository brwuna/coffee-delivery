import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};

    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    > div{
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 4rem;
            height: 4rem;
        }
    }

    > p {
        font-weight: 700;
        align-self: flex-start;
    }
`

export const ActionsContainer = styled.div`
    margin-top: 0.5rem;
    height: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    > div {
        max-width: 4.5rem;
        height: 100%;
    }
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    height: 100%;

    font-size: 0.75rem;
    border: none;
    border-radius: 6px;
    padding: 0 0.5rem;

    background:  ${(props) => props.theme.colors["base-button"]};
    color: ${(props) => props.theme.colors["base-text"]};

    transition: .4s;

    &:hover {
        background:  ${(props) => props.theme.colors["base-hover"]};
    }

    svg {
        color: ${(props) => props.theme.colors["brand-purple"]};
    }

`