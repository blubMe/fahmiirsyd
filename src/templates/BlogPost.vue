<template>
  <Layout>
    <article class="journal">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="journal__date">{{ $page.blogPost.date }} / &#x26FA; {{$page.blogPost.timeToRead}} menit membaca</p>
      <div v-if="$page.blogPost.image" class="preload-img__wrapper">
        <div class="preload-img">
          <g-image :src="$page.blogPost.image" />
        </div>
        <span class="preload-img__detail">{{$page.blogPost.imagedesc}}</span>
      </div>
      <div class="content" v-html="$page.blogPost.content" />
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
        { name: "Description", content: this.$page.blogPost.description }
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
    }
  }
</page-query>

<style lang="scss" scoped>
  article.journal {
    h1 {
      font-family: 'libre-v1';
      font-size: 60px;
    }
    p.journal__date {
      color: rgba(0, 0, 0, 0.54);
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
</style>
