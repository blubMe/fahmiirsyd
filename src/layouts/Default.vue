<template>
  <div>
    <Header />
    <Content>
      <slot/>
    </Content>
  </div>
</template>
<script>
import Header from './Header/Header.vue'
import Content from './Content/Content.vue'
import './Global.styled.js'

export default {
  components: { Header, Content }
}
</script>
