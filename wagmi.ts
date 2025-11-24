import { farcasterMiniApp } from '@farcaster/miniapp-wagmi-connector'
import { http, cookieStorage, createConfig, createStorage } from '@wagmi/vue'
import { injected, metaMask, walletConnect } from '@wagmi/vue/connectors'
import type { Chain } from 'viem'

export const customChain: Chain = {
  id: 143,
  name: 'Monad Mainnet',
  nativeCurrency: {
    name: 'Monad',
    symbol: 'MON',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        'https://rpc.monad.xyz',
        'https://rpc1.monad.xyz',
        'https://rpc3.monad.xyz',
        'https://rpc-mainnet.monadinfra.com',
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'MonadScan',
      url: 'https://monadscan.com',
      apiUrl: 'https://api.etherscan.io/v2/api',
    },
  },
  testnet: false,
}

export const config = createConfig({
  chains: [customChain],
  connectors: [
    injected(),
    farcasterMiniApp(),
    metaMask(),
    /*
    walletConnect({
      projectId: import.meta.env.VITE_WC_PROJECT_ID,
    }),
    */
  ],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [customChain.id]: http(),
  },
})

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
