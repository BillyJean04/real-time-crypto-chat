import type { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { MuiButtonBase } from "@/theme/schema/button";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        sm: false;
    }
}

const text = "#f4f4fb";
const background = "#080015";
const midgray = "#a29ea8";
const secondary = "#ef6f6c";

export const base = {} satisfies ThemeOptions;

export const palette = {
    palette: {
        background: {
            default: background,
        },
        text: {
            primary: text,
        },
        grey: {
            500: midgray,
        },
        secondary: { main: secondary },
    },
} satisfies ThemeOptions;
const components = {
    components: {
        MuiButtonBase,
    },
} satisfies ThemeOptions;

export const schema = createTheme({ ...base, ...palette, ...components });
