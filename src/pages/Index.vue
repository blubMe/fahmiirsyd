<template>
  <Layout>
    <Cover />
    <div class="arrow-down">
      <p>scroll down move.</p>
    </div>
    <div class="article-wrapper">
      <h3>Journal posts</h3>
      <ul>
        <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
          <g-link :to="node.path">
            <div class="journal-title">
              <g-image :key="node.path" :src="node.logo" alt="logo_tech"/>
              <h2 class="journal-title--h2" v-html="node.title" />
            </div>
            <div class="journal-desc" v-html="node.description"/>
          </g-link>
          <span v-html="node.date" />
        </li>
      </ul>
    </div>
    <!-- <div class="article-wrapper">
      <h3>My project labs</h3>
      <ul v-if="$page.allBlogPost.edgess">
        <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
          <g-link :to="node.path">
            <h2 v-html="node.title" />
          </g-link>
          <span v-html="node.date" />
        </li>
      </ul>
      <div id="no-labs" v-else>I didnt have any project</div>
    </div> -->
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
          logo
        }
      }
    }
  }
</page-query>

<script>
import Cover from '~/components/Cover.vue'

export default {
 components: {
   Cover
 }
}
</script>
<style lang="scss">
.arrow-down {
  p {
    text-align: center;
    font-weight: bold;
    cursor: s-resize;
  }
  padding-top: 3rem;
}
</style>
