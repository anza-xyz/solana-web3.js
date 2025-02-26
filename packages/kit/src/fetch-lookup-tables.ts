import {
    assertAccountsDecoded,
    assertAccountsExist,
    type FetchAccountsConfig,
    fetchJsonParsedAccounts,
} from '@solana/accounts';
import type { Address } from '@solana/addresses';
import type { GetMultipleAccountsApi, Rpc } from '@solana/rpc';
import { type AddressesByLookupTableAddress } from '@solana/transaction-messages';

type FetchedAddressLookup = {
    addresses: Address[];
};

export async function fetchAddressesForLookupTables(
    lookupTableAddresses: Address[],
    rpc: Rpc<GetMultipleAccountsApi>,
    config?: FetchAccountsConfig,
): Promise<AddressesByLookupTableAddress> {
    if (lookupTableAddresses.length === 0) {
        return {};
    }

    const fetchedLookupTables = await fetchJsonParsedAccounts<FetchedAddressLookup[]>(
        rpc,
        lookupTableAddresses,
        config,
    );

    assertAccountsDecoded(fetchedLookupTables);
    assertAccountsExist(fetchedLookupTables);

    return fetchedLookupTables.reduce<AddressesByLookupTableAddress>((acc, lookup) => {
        return {
            ...acc,
            [lookup.address]: lookup.data.addresses,
        };
    }, {});
}
