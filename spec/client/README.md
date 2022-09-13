# Client

## Introduction

The Client API allows an Application to interact with a Wallet and leverages it's features by implementing a bi-directonnal [JSON-RPC 2.0](https://www.jsonrpc.org/specification) server and implementing the specification of the Platform API defined [here](/spec/rpc/README.md).

The Client main role is to be integrated by any Application that wants to interact with a Ledger Wallet application (we are talking about a wallet client like Live, Vault or Connect).
It will communicate the Application's intents to the Server (hosted by the Wallet client) through the [JSON-RPC spec of the Platform API](/spec/rpc/README.md).
It will initiate a connection to a Server through a transport layer, format and forward Application requests to the Server and return responses or errors to the Application.

## Serialization and deserialization

## Errors
