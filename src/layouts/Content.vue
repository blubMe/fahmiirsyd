<template>
  <div class="content-wrapper">
    <slot />
  </div>
</template>
<style scoped>
.content-wrapper {
  margin: 0 auto;
  padding: 80px 40px 0 40px;
  width: 1040px;
  max-width: 100%;
}
</style>
<script>
export default {
  metaInfo(){
    return {
      meta: [
        { key: 'image', name: 'image', content: '/images/favicon.png' },
        { key: 'og:image', property: 'og:image', content:  '/images/favicon.png'}
      ]
    }
  }
}
</script>


