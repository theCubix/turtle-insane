<template>
  <Layout>
    <div class="container has-margin-top">
      <h2>All Articles</h2>

      <section class="articles" v-for="edge in $page.articles.edges" :key="edge.node.id">
        <grid
          class="article"
        >
          <g-link :to="edge.node.slug" :title="edge.node.title">
            <responsive-image
              :src="edge.node.heroImage.url"
              :alt="edge.node.heroImage.alt"
              :aspect="1"
              class="rounded shadow" />
          </g-link>
          <div>
            <h3 class="article__title">
              <g-link :to="edge.node.slug" :title="edge.node.title">{{ edge.node.title }}</g-link>
            </h3>
            <g-link class="article__description" :to="edge.node.slug" :title="edge.node.title">
              <p>{{ edge.node.description }}</p>
            </g-link>
          </div>
        </grid>
      </section>

    </div>
  </Layout>
</template>

<script>
import Grid from '@/components/Grid.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'

export default {
 components: {
   Grid,
   ResponsiveImage
 }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.container.has-margin-top {
  margin-top: 3em;
}

.articles {
  margin-bottom: 5em;
}

.article__title > a {
  color: #212121;
  text-decoration: none;
}

.article__description {
  color: #424242;
  text-decoration: none;
}

.article:hover .article__title {
  text-decoration: underline;
}
</style>

<page-query>
query Articles {
  articles: allDatoCmsArticle {
    edges {
      node {
        title
        slug: path
        description
        heroImage {
          title
          alt
          url
        }
        introText
      }
    }
  }
}
</page-query>
