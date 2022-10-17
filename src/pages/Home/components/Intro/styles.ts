import styled from "styled-components";
import introBackgroungImg from "../../../../assets/intro-background.png"
import { RegularText, TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;

    background: ${() => `url(${introBackgroungImg}) no-repeat center`};
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText as any)`
    margin-top: .5rem;
    /* margin-bottom: 1rem; */
`;

export const IntroSubtitle = styled(RegularText as any)`
    margin-top: .5rem;
`

export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`