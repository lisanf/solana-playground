# solana-playground

## Solana Blockchain API Endpoints

This repository contains Node.js endpoints for interacting with the Solana blockchain using JavaScript. The endpoints utilize the `@solana/web3.js` and `@solana/spl-token` libraries for communication and token operations.

### Endpoints:

#### Get Recent Blockhash

- **Endpoint:** `/getRecentBlockhash`
- **Description:** Retrieves the hash of the most recent block in the Solana blockchain.
- **Example:** `GET /getRecentBlockhash`
- **Response:** `"Recent Blockhash: <blockhash>"`

#### Get Balance

- **Endpoint:** `/getBalance/:address`
- **Description:** Retrieves the SOL balance of a specified wallet address.
- **Example:** `GET /getBalance/your-wallet-address`
- **Response:** `"Balance of the address <address>: <balance> SOL"`

#### Get Token Balance

- **Endpoint:** `/getTokenBalance/:address`
- **Description:** Retrieves the token balance (USDC in this example) of a specified wallet address.
- **Example:** `GET /getTokenBalance/your-wallet-address`
- **Response:** `"Balance of USDC for the address <address>: <balance> USDC"`

### Additional Notes

- Ensure you have a connection to a Solana node (in this code, it connects to the mainnet-beta node by default).
- Modify the `USDC_MINT_ADDRESS` variable to match the Mint address of your specific token if needed.
