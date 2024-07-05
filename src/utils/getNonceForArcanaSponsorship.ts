import { ethers, WebSocketProvider } from "ethers";

const VITE_APP_CONTRACT_ADDRESS_FOR_NONCE = import.meta.env
  .VITE_APP_CONTRACT_ADDRESS_FOR_NONCE;

async function getNonceForArcanaSponsorship(
  address: string,
  rpcUrl: string
): Promise<ethers.BigNumberish> {
  const provider = new WebSocketProvider(rpcUrl);

  const c = new ethers.Contract(
    VITE_APP_CONTRACT_ADDRESS_FOR_NONCE,
    [
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint192",
            name: "key",
            type: "uint192",
          },
        ],
        name: "getNonce",
        outputs: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    provider
  );

  const nonce = await c.getNonce(address, 0);
  await provider.destroy();
  return nonce;
}

export default getNonceForArcanaSponsorship;
