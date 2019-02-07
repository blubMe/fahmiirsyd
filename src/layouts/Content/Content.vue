<template>
  <content-style>
    <slot />
  </content-style>
</template>
<script>
import { ContentStyle } from './Content.styled.js'

export default {
  components: {
    'content-style': ContentStyle
  }
}
</script>
