import type { RawAlgorandTransaction } from "./families/algorand/types";
import type { RawBitcoinTransaction } from "./families/bitcoin/types";
import type { RawCosmosTransaction } from "./families/cosmos/types";
import type { RawCryptoOrgTransaction } from "./families/crypto_org/types";
import type { RawEthereumTransaction } from "./families/ethereum/types";
import type { RawPolkadotTransaction } from "./families/polkadot/types";
import type { RawRippleTransaction } from "./families/ripple/types";
import type { RawStellarTransaction } from "./families/stellar/types";
import type { RawTezosTransaction } from "./families/tezos/types";
import type { RawTronTransaction } from "./families/tron/types";

export type RawAccount = {
  id: string;
  name: string;
  address: string;
  currency: string;
  balance: string;
  spendableBalance: string;
  blockHeight: number;
  lastSyncDate: string;
};

export interface RawTransactionCommon {
  family: string;
  amount: string;
  recipient: string;
}

export type RawTransaction =
  | RawEthereumTransaction
  | RawBitcoinTransaction
  | RawAlgorandTransaction
  | RawCryptoOrgTransaction
  | RawRippleTransaction
  | RawCosmosTransaction
  | RawTezosTransaction
  | RawPolkadotTransaction
  | RawStellarTransaction
  | RawTronTransaction;

export type RawSignedTransaction = {
  operation: unknown;
  signature: string;
  signatureRaw?: unknown;
  expirationDate: string | null;
};
