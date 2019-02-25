<template>
  <Layout>
    <div class="notfound">
      <h2 class="notfound__title">Sorry i didn't found the source you want.</h2>
      <div class="notfound__float">
        <img class="notfound__images" src="/images/404.png" alt="" >
        <h1>404</h1>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss" scoped>
.notfound {
  text-align: center;
  .notfound__float {
    position: relative;
    h1 {
      font-size: 20em;
      letter-spacing: 0.1em;
      color: #dadad9;
    }
  }
  .notfound__images {
    position: absolute;
    left: 35%;
    cursor: help;
  }
  .notfound__title {
    font-family: 'Libre Baskerville';
  }
}
</style>

