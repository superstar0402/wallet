import { z } from "zod";
import { schemaRawAlgorandTransaction } from "./algorand/validation";
import { schemaRawBitcoinTransaction } from "./bitcoin/validation";
import { schemaRawCeloTransaction } from "./celo/validation";
import { schemaRawCosmosTransaction } from "./cosmos/validation";
import { schemaRawCryptoOrgTransaction } from "./crypto_org/validation";
import { schemaRawEthereumTransaction } from "./ethereum/validation";
import { schemaRawNearTransaction } from "./near/validation";
import { schemaRawNeoTransaction } from "./neo/validation";
import { schemaRawPolkadotTransaction } from "./polkadot/validation";
import { schemaRawRippleTransaction } from "./ripple/validation";
import { schemaRawStellarTransaction } from "./stellar/validation";
import { schemaRawTezosTransaction } from "./tezos/validation";
import { schemaRawTronTransaction } from "./tron/validation";
import { schemaRawHederaTransaction } from "./hedera/validation";
import { schemaRawFilecoinTransaction } from "./filecoin/validation";
import { schemaRawElrondTransaction } from "./elrond/validation";

export const schemaRawTransaction = z.discriminatedUnion("family", [
  schemaRawAlgorandTransaction,
  schemaRawBitcoinTransaction,
  schemaRawCeloTransaction,
  schemaRawCosmosTransaction,
  schemaRawCryptoOrgTransaction,
  schemaRawEthereumTransaction,
  schemaRawHederaTransaction,
  schemaRawFilecoinTransaction,
  schemaRawNearTransaction,
  schemaRawNeoTransaction,
  schemaRawPolkadotTransaction,
  schemaRawRippleTransaction,
  schemaRawStellarTransaction,
  schemaRawTezosTransaction,
  schemaRawTronTransaction,
  schemaRawElrondTransaction,
]);
