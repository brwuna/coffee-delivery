import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1 {
        color: ${(props) => props.theme.colors["brand-yellow"]};
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const OrderDetailsContainer = styled.div`
    padding: 2.5rem;
    min-width: 32rem;

    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme.colors["base-background"]};

    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
        z-index: -1;
    }
`