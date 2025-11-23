import { farcasterMiniApp } from '@farcaster/miniapp-wagmi-connector'
import { http, cookieStorage, createConfig, createStorage } from '@wagmi/vue'
import { injected, metaMask, walletConnect } from '@wagmi/vue/connectors'
import { monadTestnet } from '@wagmi/vue/chains'
import type { Chain } from 'viem'

export const customChain: Chain = {
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: {
    name: 'Monad',
    symbol: 'MON',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        'https://testnet-rpc.monad.xyz',
        'https://rpc.ankr.com/monad_testnet',
        'https://rpc-testnet.monadinfra.com',
        'https://monad-testnet.drpc.org',
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'MonadScan',
      url: 'https://testnet.monadscan.com',
      apiUrl: 'https://api.etherscan.io/v2/api',
    },
  },
  testnet: true,
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
