"use client";

import { useMetaMask } from "@/hooks/useMetaMask";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const AuthLayout = () => {
    const { wallet, hasProvider, isConnecting, connectMetaMask } =
        useMetaMask();

    useAuthGuard();
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100dvh"
        >
            {!hasProvider && (
                <Button>
                    <a href="https://metamask.io" target="_blank">
                        Install MetaMask
                    </a>
                </Button>
            )}
            {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
                <Button disabled={isConnecting} onClick={connectMetaMask}>
                    Connect MetaMask
                </Button>
            )}
        </Box>
    );
};

export default AuthLayout;
