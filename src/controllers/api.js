const axios = require('axios');
const { Connection, PublicKey } = require('@solana/web3.js');
const { Token } = require('@solana/spl-token');

// La URL del nodo RPC de Solana
const solanaUrl = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(solanaUrl, 'confirmed');

// Utiliza una variable para la dirección de Mint de USDC
const USDC_MINT_ADDRESS = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
const USDC_MINT = new PublicKey(USDC_MINT_ADDRESS);

const solanaEndpoints = {
  welcome(req, res) {
    const responseString = 'Hello Solana :)';
    console.log('Response:', responseString);
    res.send(responseString);
  },

  async getRecentBlockhash(req, res) {
    try {
      // Obtener el hash del bloque más reciente
      const blockhashData = await connection.getRecentBlockhash();
      const blockhash = blockhashData.blockhash;
      console.log('Response:', `Recent Blockhash: ${blockhash}`);
      res.send(`Recent Blockhash: ${blockhash}`);
    } catch (error) {
      console.error('Error obteniendo el bloque reciente:', error);
      res.status(500).send('Error obteniendo el bloque reciente');
    }
  },

  async getBalance(req, res) {
    try {
      const { address } = req.params;

      // Crear un objeto PublicKey a partir de la dirección
      const publicKey = new PublicKey(address);

      // Obtener el balance de la dirección en lamports
      const balanceLamports = await connection.getBalance(publicKey);

      // Convertir lamports a SOL
      const balanceSol = balanceLamports / 1_000_000_000;

      console.log('Response:', `Balance de la dirección ${address}: ${balanceSol} SOL`);
      res.send(`Balance de la dirección ${address}: ${balanceSol} SOL`);
    } catch (error) {
      console.error('Error obteniendo el balance:', error);
      res.status(500).send('Error obteniendo el balance');
    }
  },

  async getTokenBalance(req, res) {
    try {
      const { address } = req.params;

      // Crear un objeto PublicKey a partir de la dirección
      const publicKey = new PublicKey(address);

      // Obtener el balance del token específico
      const tokenBalance = await connection.getTokenAccountBalance(publicKey);

      console.log('Response:', 'tokenBalance:', tokenBalance);

      if (tokenBalance && tokenBalance.value) {
        const { amount, decimals } = tokenBalance.value;
        const balance = amount / 10 ** decimals; // Convertir el balance a la unidad correcta

        console.log('Response:', `Balance de USDC para la dirección ${address}: ${balance} USDC`);
        res.send(`Balance de USDC para la dirección ${address}: ${balance} USDC`);
      } else {
        console.error('Error obteniendo el balance de USDC: Respuesta inesperada');
        res.status(500).send('Error obteniendo el balance de USDC: Respuesta inesperada');
      }
    } catch (error) {
      console.error('Error obteniendo el balance de USDC:', error);
      res.status(500).send('Error obteniendo el balance de USDC');
    }
  }
  
};

module.exports = solanaEndpoints;
