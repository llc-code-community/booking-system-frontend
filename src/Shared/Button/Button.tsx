import { FC, PropsWithChildren } from "react";
import { ButtonInner } from "./Button.styled";

export const Button: FC<PropsWithChildren> = ({children}) => {
    return <ButtonInner>
        {children}
    </ButtonInner>
};