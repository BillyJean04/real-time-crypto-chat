"use client";

import { SignedOut, SignInWithMetamaskButton } from "@clerk/clerk-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AuthPage = () => {
    return (
        <>
            <SignedOut>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100dvh"
                    flexDirection="column"
                    gap="25px"
                >
                    <Typography variant="h5" fontWeight="bold">
                        Sign in with metamask
                    </Typography>
                    <SignInWithMetamaskButton>
                        <Button>Connect MetaMask</Button>
                    </SignInWithMetamaskButton>
                </Box>
            </SignedOut>
        </>
    );
};

export default AuthPage;
