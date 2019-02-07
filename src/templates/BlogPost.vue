<template>
  <Layout>
    <article-style>
      <h1>{{ $page.blogPost.title }}</h1>
      <span>{{ $page.blogPost.date }}</span>
      <g-image v-if="$page.blogPost.image" :src="$page.blogPost.image" />
      <br v-else/>
      <div class="content" v-html="$page.blogPost.content" />
    </article-style>
  </Layout>
</template>

<script>
import ArticlePost from './BlogPost.styled.js'

export default {
  components: {
    'article-style': ArticlePost
  },
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "MMM DD YYYY")
      content
      image
    }
  }
</page-query>
