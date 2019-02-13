<template>
  <Layout>
    <article class="journal">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="journal__date"> {{ $page.blogPost.date }} -- &#x270d; ditulis di <b>Banyuwangi, ID</b></p>
      <div v-if="!$page.blogPost.stable" class="journal__warn"><b>Note: </b>Artikel ini masih dalam masa review, kemungkinan masih ada perubahan konten.</div>
      <div v-if="$page.blogPost.image" class="preload-img__wrapper">
        <div class="preload-img">
          <g-image :src="$page.blogPost.image" />
        </div>
        <span class="preload-img__detail">{{$page.blogPost.imagedesc}}</span>
      </div>
      <div class="content content-img" v-html="$page.blogPost.content" />
    </article>
  </Layout>
</template>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title,
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { name: "Description", content: this.$page.blogPost.description },
        { property: "og:image", content: this.$page.blogPost.image.src },
        { property: 'og:image', content:  this.$page.blogPost.image.src}
      ]
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "MMMM DD, YYYY")
      content
      description
      image
      timeToRead
      imagedesc
      stable
    }
  }
</page-query>

<style lang="scss" scoped>
  .journal__warn {
    margin: 10px 0;
    border-radius: 3px;
    padding: 10px 15px;
    color: white;
    background-color: black;
    width: 100%;
  }
  article.journal {
    h1 {
      font-family: 'libre-v1';
      font-size: 60px;
    }
    p.journal__date {
      color: rgba(0, 0, 0, 0.8);
    }
    span.preload-img__detail {
      color: black;
      position: absolute;
      text-align: center;
      bottom: 10px;
      right: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.90);
      padding: 5px 15px;
      border-radius: 3px;
    }
  }
  .preload-img__wrapper {
    width: 100%;
    position: relative;
    height: 320px;
    overflow: hidden;
    border-radius: 3px;
    margin-bottom: 2rem;
  }

  .preload-img {
    display: block;
    background: #f7f7f7;
    background-position: 50%;
    background-size: cover;
    img {
      -webkit-user-drag: none;
    }
  }
  .content {
    font-size: 1.1rem;
    width: 780px;
    margin: 0 auto;
    color: #404040;
    line-height: 1.6;
  }
</style>
