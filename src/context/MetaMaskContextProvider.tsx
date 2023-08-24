"use client";
import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import detectEthereumProvider from "@metamask/detect-provider";

interface WalletState {
    accounts: any[];
    chainId: string;
}

interface MetaMaskContextData {
    wallet: WalletState;
    hasProvider: boolean | null;
    error: boolean;
    errorMessage: string;
    isConnecting: boolean;
    connectMetaMask: () => void;
    clearError: () => void;
}

const disconnectedState: WalletState = {
    accounts: [],
    chainId: "",
};

export const MetaMaskContext = createContext<MetaMaskContextData>(
    {} as MetaMaskContextData
);

export const MetaMaskContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [hasProvider, setHasProvider] = useState<boolean | null>(null);

    const [isConnecting, setIsConnecting] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const clearError = () => setErrorMessage("");

    const [wallet, setWallet] = useState(disconnectedState);
    const _updateWallet = useCallback(async (providedAccounts?: any) => {
        const accounts =
            providedAccounts ||
            (await window.ethereum.request({ method: "eth_accounts" }));

        if (accounts.length === 0) {
            setWallet(disconnectedState);
            return;
        }

        const chainId = (await window.ethereum.request({
            method: "eth_chainId",
        })) as string;

        setWallet({ accounts, chainId });
    }, []);

    const updateWalletAndAccounts = useCallback(
        () => _updateWallet(),
        [_updateWallet]
    );
    const updateWallet = useCallback(
        (accounts: any) => _updateWallet(accounts),
        [_updateWallet]
    );

    useEffect(() => {
        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            setHasProvider(Boolean(provider));

            if (provider) {
                await updateWalletAndAccounts();
                window.ethereum.on("accountsChanged", updateWallet);
                window.ethereum.on("chainChanged", updateWalletAndAccounts);
            }
        };

        getProvider();

        return () => {
            window.ethereum?.removeListener("accountsChanged", updateWallet);
            window.ethereum?.removeListener(
                "chainChanged",
                updateWalletAndAccounts
            );
        };
    }, [updateWallet, updateWalletAndAccounts]);

    const connectMetaMask = async () => {
        setIsConnecting(true);

        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            clearError();
            await updateWallet(accounts);
        } catch (err: any) {
            setErrorMessage(err.message);
        }
        setIsConnecting(false);
    };

    return (
        <MetaMaskContext.Provider
            value={{
                wallet,
                hasProvider,
                error: !!errorMessage,
                errorMessage,
                isConnecting,
                connectMetaMask,
                clearError,
            }}
        >
            {children}
        </MetaMaskContext.Provider>
    );
};
