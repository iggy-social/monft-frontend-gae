<template>
  <Head>
    <Title>About | {{ $config.public.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'About | ' + $config.public.projectMetadataTitle" />

    <Meta name="fc:miniapp" :content="JSON.stringify({
        version: '1',
        imageUrl: $config.public.previewImage,
        button: {
          title: 'About ' + $config.public.projectName,
          action: {
            type: 'launch_miniapp',
            name: $config.public.projectName,
            url: `${$config.public.projectUrl}/about`,
            splashImageUrl: $config.public.farcasterSplashImageUrl,
            splashBackgroundColor: $config.public.farcasterSplashBackgroundColor
          }
        }
      })" />
  </Head>

  <div class="card border scroll-500">
    <div class="card-body">
      <p class="fs-3">
        <i @click="$router.back()" class="bi bi-arrow-left-circle cursor-pointer"></i>
      </p>

      <h3 class="mb-3 mt-3">Liquid NFTs on Monad</h3>

      <p class="text-break mt-3">
        MONFT is a platform where anyone can launch their own NFT collection and trade NFTs on Monad.
      </p>

      <p class="text-break mt-3">
        All NFTs on MONFT are always liquid because they have a built-in bonding curve. This means you can
        always sell your NFT back to the bonding curve at any time, ensuring continuous liquidity for all
        collections.
      </p>

      <p class="text-break mt-3">
        The only exception is when there's only 1 holder remaining, as each NFT must have at least 1 holder at
        all times.
      </p>

      <p class="text-break mt-3">
        MONFT is available both as a standalone web app on monft.xyz, as well as a mini app on Farcaster,
        giving you multiple ways to access and use the platform.
      </p>

      <p class="text-break mt-3">
        Brought to you by the
        <a target="_blank" href="https://punk.domains">Punk Domains</a> &
        <a target="_blank" href="https://iggy.social/">Iggy Social</a> team.
      </p>

      <h5>Useful links</h5>

      <ul>
        <li><a href="https://github.com/iggy-social/monft-contracts" target="_blank">MONFT Contracts GitHub</a></li>
        <li><a href="https://github.com/iggy-social/monft-frontend-gae" target="_blank">MONFT Frontend GitHub</a></li>
      </ul>

      <hr />

      <h5>Feedback</h5>

      <p class="text-break mt-3">Feel free to post ideas, features suggestions, rants directly in the MONFT chat.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
