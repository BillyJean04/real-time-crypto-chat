import type { ThemeOptions } from "@mui/material";

export const MuiButton = {
    styleOverrides: {
        root: {
            backgroundColor: "#ef6f6c",
            color: "#ffff",
            padding: "10px",
            textTransform: "none",
            fontWeight: "700",
            "&:hover": {
                backgroundColor: "#ef6f6c",
            },
        },
    },
} satisfies NonNullable<ThemeOptions["components"]>["MuiButton"];
