<template>
  <div :class="`grid ${alternate ? 'grid--reverse' : ''}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    alternate: Boolean
  }
}
</script>


<style scoped>
.grid {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin: -2rem;
}

.grid--reverse {
  flex-direction: row-reverse;
}

@media screen and (max-width: 468px) {
  .grid--reverse {
    flex-direction: initial;
  }
}

.grid > * {
  flex-basis: 17rem;
  flex-grow: 1;
  margin: 1rem 2rem;
}

</style>
