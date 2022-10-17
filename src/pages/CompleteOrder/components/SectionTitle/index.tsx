import { ReactNode } from "react";
import { IntroSubtitle } from "../../../Home/components/Intro/styles";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
    title: string;
    subtitle: string;
    icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
    return (
        <SectionTitleContainer>
            {icon}
            <div>
                <IntroSubtitle color="subtitle">{title}</IntroSubtitle>
                <IntroSubtitle size="s">{subtitle}</IntroSubtitle>
            </div>
        </SectionTitleContainer>
    )
}