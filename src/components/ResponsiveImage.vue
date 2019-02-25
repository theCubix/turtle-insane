<template>
  <!-- <p>{{ getHeight(desktop, aspect) }}</p> -->
  <picture>
    <source
    :srcset="`${src}?w=${desktop}${aspect ? `&h=${getHeight(desktop, aspect)}&fit=crop` : ''}`"
    media="(min-width: 1280px)"
    >
    <source
      :srcset="`${src}?w=${tablet}${aspect ? `&h=${getHeight(tablet, aspect)}&fit=crop` : ''}`"
      media="(min-width: 768px)"
    >
    <source
      :srcset="`${src}?w=${mobile}${aspect ? `&h=${getHeight(mobile, aspect)}&fit=crop` : ''}`"
      media="(min-width: 480px)"
    >
    <img :src="`${src}?w=${fallback}${aspect ? `&h=${getHeight(fallback, aspect)}&fit=crop` : ''}`" :alt="alt">
  </picture>
</template>

<script>
export default {
  props: {
    alt: String,
    src: String,
    aspect: Number
  },
  data() {
    return {
      desktop: 1280,
      tablet: 768,
      mobile: 568,
      fallback: 320
    }
  },
  methods: {
    getHeight (width, aspect) {
      return width * aspect
    }
  }
}
</script>

<style scoped>
picture {
  display: block;
  width: 100%;
}

picture * {
  width: 100%;
}

picture img {
  display: block;
}
</style>
