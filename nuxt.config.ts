import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: false, // disables Nuxt Webtools
  ssr: true, // server side rendering on Google App Engine
  nitro: {
    preset: 'node-server', // works for Google App Engine
  },
  modules: ['@wagmi/vue/nuxt'],
  css: ['vue-toastification/dist/index.css'],
  components: false,
  app: {
    head: {
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'fc:miniapp',
          content: JSON.stringify({
            version: "1",
            imageUrl: "https://monft.xyz/img/farcaster/fc-image.png",
            button: {
              title: "Open MONFT",
              action: {
                type: "launch_frame",
                name: "MONFT",
                url: "https://monft.xyz",
                splashImageUrl: "https://monft.xyz/img/farcaster/fc-icon.png",
                splashBackgroundColor: "#6E54FF"
              }
            }
          })
        }
      ],
      link: [
        {
          // Bootstrap
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        },
        {
          // Bootstrap icons
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
        },
        {
          // Custom
          rel: 'stylesheet',
          href: '/css/custom.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: '0x9DB741d9D906cf6e9d1B70A94e779dD7C719b2EF',
      airdropApAddress: '', // chat token claim for APs
      airdropClaimDomainsAddress: '', // chat token claim for domain holders
      arweaveAddress: process.env.ARWEAVE_ADDRESS,
      arweaveGateway: 'https://arweave.net/',
      arweaveMinBalance: 0.02, // minimum AR balance to upload files
      blockExplorerBaseUrl: 'https://monadscan.com',
      chat: {
        contexts: {
          general: '0x4Bc9611b5f324173e7Ae7AC5Eb6487BC98950103', // general discussion channel
          memesImages: '0x4Bc9611b5f324173e7Ae7AC5Eb6487BC98950103',
          shill: '0x4Bc9611b5f324173e7Ae7AC5Eb6487BC98950103',
          nftLaunchpad: '0xD2aD91025b4Fe67670580751d27DC4Fc3a8F81CB', // comments context
        },
        storage: 'arweave', // storage type: 'arweave' or 'ipfs'
      },
      chatTokenAddress: '', // chat token address
      chatTokenDecimals: 18,
      chatTokenImage: 'https://www.pngall.com/wp-content/uploads/8/Gold-Dollar-Coin-PNG-180x180.png', // chat token image
      chatTokenSymbol: 'DEMO', // chat token symbol or name
      domainRequiredToPost: true,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryMods: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryPfps: 1000 * 60 * 60 * 24 * 10, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      farcasterShareText: 'No.1 platform for launching and trading liquid NFTs on Monad. Check it out here 👇',
      farcasterSplashImageUrl: 'https://monft.xyz/img/farcaster/fc-icon.png',
      farcasterSplashBackgroundColor: '#6E54FF',
      favicon: '/img/favicon.svg',
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. Arweave)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadStorageType: "arweave", // "arweave" (or leave empty for no file uploads)
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || 'server', // "netlify", "server", or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 10, // number of posts to fetch
      governanceUrl: '', // governance url (snapshot, Tally, etc.)
      ipfsGateway: 'https://ipfs.io/ipfs/',
      ipfsGateway2: 'https://cloudflare-ipfs.com/ipfs/',
      ipfsGateway3: 'https://ipfs.filebase.io/ipfs/',
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || 'server', // "netlify", "vercel", "server", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: '', // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: 'LP tokens', // LP token symbol
      lpTokenDecimals: 18,
      marketplaceNftCollectionBaseUrl: 'https://opensea.io/collections/', // url (append nft address to it)
      newsletterLink: '',
      nftDefaultRatio: 420, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: '0x8f594531ae52618265d2BddF25A2d1B656151972', // NFT launchpad with bonding curve contract address
      nftLaunchpadFetchItems: 4, // number of NFTs to fetch from blockchain
      previewImage: '/img/covers/cover.png',
      previewImageAirdrop: '/img/covers/cover-airdrop.png',
      previewImageMusicNfts: '/img/covers/cover-music-nfts.png',
      previewImageVideoNfts: '/img/covers/cover-video-nfts.png',
      previewImageNftCollection: '/img/covers/cover-nft-collection.png',
      previewImageNftCreate: '/img/covers/cover-nft-create.png',
      previewImageNftLaunchpad: '/img/covers/cover-nft-launchpad.png',
      previewImagePost: '/img/covers/cover-post.png',
      previewImageProfile: '/img/covers/cover-profile.png',
      previewImageStake: '/img/covers/cover-stake.png',
      projectMetadataTitle: 'MONFT - Liquid NFTs on Monad',
      projectName: 'MONFT',
      projectDescription: 'No.1 platform for launching and trading liquid NFTs on Monad.',
      projectTwitter: '@iggysocial',
      projectUrl: 'https://monft.xyz',
      punkMinterAddress: '0x7D5561394Abb16aa400FB2E2543499f5fd9a23cF', // punk domain minter contract address
      punkNumberOfPrices: 5, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: '0x6aaFe10424C5CF9734cAF9d251aE339c45d251E2', // punk domain TLD address
      showFeatures: {
        // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        activityPoints: true,
        airdrop: false,
        governance: false,
        newsletter: false,
        nftLaunchpad: true,
        swap: false,
        stake: false,
        sendTokens: true,
      },
      sidebarLeftSticky: false, // make the left sidebar sticky (always visible)
      stakingContractAddress: '', // this is also the stake/gov token address
      stakeTokenDecimals: 18,
      stakeTokenSymbol: '', // stake token symbol (governance token symbol)
      supportedChainId: 143,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: '', // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || '',
      tldName: '.monft',
      tokenAddress: undefined, // leave undefined if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: 'MON',
    }
  },
  compatibilityDate: '2025-06-21',
  vite: {
    server: {
      allowedHosts: true
    }
  },
})