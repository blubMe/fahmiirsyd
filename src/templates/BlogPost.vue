<template>
  <Layout>
    <article class="journal">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="journal__date">{{ $page.blogPost.date }} / &#x26FA; {{$page.blogPost.timeToRead}} menit membaca</p>
      <div v-if="$page.blogPost.image" class="preload-img__wrapper">
        <div class="preload-img">
          <g-image :src="$page.blogPost.image" />
        </div>
        <span class="preload-img__detail">photo taken by thedesignest.net</span>
      </div>
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
      date (format: "MMMM DD, YYYY")
      content
      image
      timeToRead
    }
  }
</page-query>