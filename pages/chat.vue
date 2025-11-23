<template>
  <Head>
    <Title>Chat | {{ $config.public.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'Chat | ' + $config.public.projectMetadataTitle" />
    <Meta name="fc:miniapp" :content="JSON.stringify({
        version: '1',
        imageUrl: $config.public.previewImage,
        button: {
          title: 'Chat',
          action: {
            type: 'launch_miniapp',
            name: $config.public.projectName,
            url: `${$config.public.projectUrl}/chat`,
            splashImageUrl: $config.public.farcasterSplashImageUrl,
            splashBackgroundColor: $config.public.farcasterSplashBackgroundColor
          }
        }
      })" />
  </Head>

  <ChatFeed
    class="mt-1"
    :chatContext="$config.public.chat.contexts.general"
  />
</template>

<script>
import ChatFeed from '@/components/chat/ChatFeed.vue'

export default {
  name: 'ChatPage',

  components: {
    ChatFeed,
  },
}
</script>
