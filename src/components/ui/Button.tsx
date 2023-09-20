import { ButtonBase, ButtonBaseProps } from "@mui/material";
import { FC } from "react";

const Button: FC<ButtonBaseProps> = ({ children, ...props }) => {
    return <ButtonBase {...props}>{children}</ButtonBase>;
};

export default Button;
