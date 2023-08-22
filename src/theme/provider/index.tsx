"use client";

import type { FC, PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { schema } from "@/theme/schema";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <MuiThemeProvider theme={schema}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};
