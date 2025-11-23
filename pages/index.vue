<template>
</template>

<script>
export default {
  name: 'index',
  mounted() {
    const curComp = window.localStorage.getItem("currentNftPage");

    if (!curComp) {
      return this.$router.push({ path: '/nft' });
    } else {
      return this.$router.push({ path: curComp });
    }
  },
}
</script>
