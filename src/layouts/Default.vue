<template>
  <div>
    <Header />
    <Content>
      <slot/>
    </Content>
    <Footer />
  </div>
</template>
<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  components: { Header, Content, Footer }
}
</script>

