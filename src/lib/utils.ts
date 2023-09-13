export function separateAddress(address: string): string {
    return address.slice(0, 10) + "..." + address.slice(35, 42);
}
