<template>
  <div>
    <Header />
    <Content>
      <slot/>
    </Content>
  </div>
</template>
<script>
import Header from './Header.vue'
import Content from './Content.vue'
import './Global.styled.js'

export default {
  components: { Header, Content }
}
</script>

