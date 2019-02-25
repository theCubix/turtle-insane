<template>
  <Layout>

    <section class="has-margin hero-wrapper">
      <div class="article__title-wrapper center z-up flex-column-flip">
        <div class="container">
          <h1 class="article__title">{{ $page.article.title }}</h1>
        </div>
      </div>
      <div class="center">
        <responsive-image
          :src="$page.article.heroImage.url"
          :alt="$page.article.heroImage.alt"
          :aspect="0.3"
        />
      </div>
    </section>

    <div class="container article__container">
      
      <section
        class="has-margin article__intro"
        v-if="$page.article.introText"
        v-html="$page.article.introText"
      ></section>
      
      <section
        class="has-margin"
        v-for="(item, index) in $page.article.body"
        :key="index">

        <template v-if="item">

          <div v-if="item.isType === 'youtubeVideo'" class="video">
            <div class="video__wrapper rounded shadow">
              <iframe
                class="video__iframe"
                width="560"
                height="315"
                :src="`https://www.youtube.com/embed/${item.youtubeId}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div
            v-if="item.isType === 'textBlock'"
            v-html="item.text"
          ></div>

          <div
            v-if="item.isType === 'image'">
            <responsive-image
              :src="item.file.url"
              :alt="item.file.alt"
              class="image__file rounded shadow"
            />
            <!-- <img :src="item.file.url" :alt="item.file.alt" class="image__file rounded shadow"> -->
            <p class="image__description">Image: {{ item.file.title }} &ndash; {{ item.file.alt }}</p>
          </div>

          <div class="quote" v-if="item.isType === 'quote'">
            <p class="quote__text">{{ item.quote }}</p>
            <p class="quote__author">{{ item.author }}</p>
          </div>

        </template>
      </section>
    </div>
  </Layout>
</template>

<script>
import ResponsiveImage from '@/components/ResponsiveImage'
export default {
  components: {
    ResponsiveImage
  }
}
</script>

<style scoped>
.hero-wrapper {
  padding-top: 30%;
  position: relative;
}

.hero-wrapper .center {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}

.hero-wrapper::after {
    content: '';
    display: block;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.article__title {
  color: white;
}

.article__intro {
  color: #424242;
  font-size: 1.3em;
  line-height: 1.618;
  margin: 3em 0;
}

.z-up {
  z-index: 100;
}

.flex-column-flip {
  display: flex;
  flex-direction: column-reverse;
}

.image__description {
  font-size: 0.8rem;
  padding-left: 1em;
  padding-right: 1em;
  opacity: 0.6;
}

.video {
  width: 100%;
}

.video__wrapper {
  padding-top: 56.25%;
  position: relative;
}

.video__iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.quote {
  padding: 0 1.1em;
}

.quote__text {
  color: #707070;
  font-size: 2em;
  font-weight: 800;
  line-height: 1em;
  margin: 0;
}

.quote__text::before,
.quote__text::after {
  font-size: 3em;
  margin-left: -1.5rem;
  opacity: 0.1;
  position: absolute;
  z-index: -1;
}

.quote__text::before {
  content: '«';
  margin-top: -1rem;
}

.quote__text::after {
  content: '»';
}

.quote__author {
  margin: 0.8em 0;
  padding-left: 2em;
}

.quote__author::before {
  content: '– ';
}

@media screen and (max-width: 468px) {
  .article__title-wrapper.center {
    position: relative;
  }

  .hero-wrapper.has-margin {
    margin-bottom: 0;
  }

  .article__title {
    color: #212121;
    hyphens: auto;
    margin: 2rem 0 0 0;
  }

  .hero-wrapper::after {
    display: none;
  }

  .article__intro {
    margin-top: 0;
  }
}

</style>

<page-query>
query Article ($path: String!) {
  article: datoCmsArticle(path: $path) {
    title
    slug
    path
    introText
    heroImage {
      url
      alt
    }
    body {
      ... on DatoCmsTextBlock {
        isType
        text
      }
      ... on DatoCmsYouTubeVideo {
        isType
        youtubeId
      }
      ... on DatoCmsImage {
        isType
        file {
          title
          alt
          url
        }
      }
      ... on DatoCmsQuote {
        isType
        quote
        author
      }
    }
  }
}
</page-query>
