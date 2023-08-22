import type { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { MuiButton } from "@/theme/schema/button";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        sm: false;
    }
}

const text = "#f4f4fb";
const background = "#160d26";

export const base = {} satisfies ThemeOptions;

export const palette = {
    palette: {
        background: {
            default: background,
        },
        text: {
            primary: text,
        },
    },
} satisfies ThemeOptions;
const components = {
    components: {
        MuiButton,
    },
} satisfies ThemeOptions;

export const schema = createTheme({ ...base, ...palette, ...components });
