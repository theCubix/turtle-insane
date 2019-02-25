<template>
  <div>
    <header class="header">
      <g-link class="header__title" :to="{ name: 'home' }">{{ $static.metaData.siteName }}</g-link>
      <nav>
        <g-link class="header__links" :to="{ name: 'home' }">Home</g-link>
        <g-link class="header__links" :to="{ name: 'about' }">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1 {
  line-height: 1em;
  margin: 0 0 0.5em 0;
  font-size: 48px;
  font-size: calc(48px + (96 - 48) * ((100vw - 320px) / (1920 - 320)));
}

h2 {
  line-height: 1em;
  margin: 0 0 0.8em 0;
  font-size: 40px;
  font-size: calc(40px + (76 - 40) * ((100vw - 320px) / (1920 - 320)));
}

h3 {
  line-height: 1.1em;
  margin: 0 0 1em 0;
  font-size: 30px;
  font-size: calc(30px + (54 - 30) * ((100vw - 320px) / (1920 - 320)));
}

h4 {
  line-height: 1em;
  margin: 0 0 1.4em 0;
  font-size: 18px;
  font-size: calc(18px + (42 - 18) * ((100vw - 320px) / (1920 - 320)));
}

p {
  font-weight: 300;
  font-size: 1.4em;
  line-height: 1.618em;
}

.shadow {
  box-shadow:
    0 2em 4em rgba(0, 0, 0, .15),
    0 0.2em 0.5em rgba(0, 0, 0, .1);
}

.rounded {
  border-radius: 3px;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
}

.header a {
  display: inline-block;
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
}

.header__title {
  background-color: #212121;
  color: white;
  font-weight: 800;
  padding: 25px 35px;
}

.header__links {
  color: #424242;
  display: inline-block;
  padding: 20px;
}

.header__links:first-child {
  margin-left: 20px;
}

section.has-margin {
  margin-bottom: 6em;
}

.container {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 1em;
  width: 840px;
}

.container.has-margin-top {
  margin-top: 3rem;
}

@media screen and (max-width: 468px) {
  .container {
    overflow: hidden;
  }

  .header {
    display: block;
  }

  .header__title {
    box-sizing: border-box;
    padding: 1.5rem 2rem;
    text-align: center;
    width: 100%;
  }

  .header__links {
    padding: 1rem 1rem;
    position: relative;
  }

  .header__links:first-child {
    margin-left: 0;
  }

  .header__links::after {
    content: '|';
    position: absolute;
    right: 0;
    opacity: .3;
  }

  .header__links:last-child::after {
    display: none;
  }
}

img {
  max-width: 100%;
}
</style>
