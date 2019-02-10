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