<template>
  <Layout>
    <article class="journal">
      <h1>{{ $page.blogPost.title }}</h1>
      <span>{{ $page.blogPost.date }}</span>
      <g-image v-if="$page.blogPost.image" :src="$page.blogPost.image" />
      <br v-else/>
      <div class="content" v-html="$page.blogPost.content" />
    </article>
  </Layout>
</template>

<script>

export default {
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
