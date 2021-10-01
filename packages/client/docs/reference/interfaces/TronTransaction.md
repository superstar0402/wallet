[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / TronTransaction

# Interface: TronTransaction

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`TronTransaction`**

## Table of contents

### Properties

- [amount](TronTransaction.md#amount)
- [duration](TronTransaction.md#duration)
- [family](TronTransaction.md#family)
- [mode](TronTransaction.md#mode)
- [recipient](TronTransaction.md#recipient)
- [resource](TronTransaction.md#resource)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[types.ts:72](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L72)

___

### duration

• `Optional` **duration**: `number`

#### Defined in

[families/tron/types.ts:19](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tron/types.ts#L19)

___

### family

• `Readonly` **family**: [`TRON`](../enums/FAMILIES.md#tron)

#### Defined in

[families/tron/types.ts:16](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tron/types.ts#L16)

___

### mode

• **mode**: [`TronOperationMode`](../modules.md#tronoperationmode)

#### Defined in

[families/tron/types.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tron/types.ts#L17)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:76](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L76)

___

### resource

• `Optional` **resource**: [`TronResource`](../modules.md#tronresource)

#### Defined in

[families/tron/types.ts:18](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tron/types.ts#L18)
