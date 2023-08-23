import React from "react";
import AuthLayout from "@/layouts/auth";
import ClientOnly from "@/components/ClientOnly";

const AuthPage = () => {
    return (
        <ClientOnly>
            <AuthLayout />
        </ClientOnly>
    );
};

export default AuthPage;
