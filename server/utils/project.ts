import { createPublicClient, http, type Chain } from 'viem'
import { monadTestnet } from '@wagmi/vue/chains'

const customChain: Chain = {
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

const addressNftDirectory = "0x64a2489c6ECd8535BCC8E57DbB88ceB10b345766"; // TODO: enter the NFT directory contract address
const kindFeatured = "Featured";
const kindMusicNfts = "MusicNfts";
const kindNftCollection = "NftCollection";
const kindTradingVolumeDaily = "TradingVolumeDaily";
const kindTradingVolumeWeekly = "TradingVolumeWeekly";
const kindUserNfts = "UserNfts";
const kindVideoNfts = "VideoNfts";
const maxLimit = 16;
const nativeTokenCoingeckoId = "monad"; // TODO: change to the native token of the chain
const projectId = "monft-frontend"; // TODO: change to your project ID
const selectedChain = customChain; // TODO: change to the chain you are using

export function getAddressNftDirectory() {
  return addressNftDirectory;
}

export function getChainId() {
  return selectedChain.id;
}

export function getKindFeatured() {
  return kindFeatured;
}

export function getKindMusicNfts() {
  return kindMusicNfts;
}

export function getKindNftCollection() {
  return kindNftCollection;
}

export function getKindTradingVolumeDaily() {
  return kindTradingVolumeDaily;
}

export function getKindTradingVolumeWeekly() {
  return kindTradingVolumeWeekly;
}

export function getKindUserNfts() {
  return kindUserNfts;
}

export function getKindVideoNfts() {
  return kindVideoNfts;
}

export function getMaxLimit() {
  return maxLimit; // Maximum number of items to return in a single request
}

export function getNativeTokenCoingeckoId() {
  return nativeTokenCoingeckoId;
}

export function getProjectId() {
  return projectId;
}

// Create a shared public client for server-side blockchain interactions
export const publicClient = createPublicClient({
  chain: selectedChain,
  transport: http(),
})
