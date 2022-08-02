<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Payment</RouterLink>
      <RouterLink to="/done">Payment completed</RouterLink>
      <RouterLink to="/select">Select Contact</RouterLink>
      <RouterLink to="/method">Select Method</RouterLink>
      <RouterLink to="/contact">Add Contact</RouterLink>
      <RouterLink to="/add-card">Add Card</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView
      v-motion
      :initial="{ opacity: 0, x: 100 }"
      :enter="{ opacity: 1, x: 0, scale: 1 }"
      :delay="200"
    >
    </RouterView>
  </main>
</template>

<style lang="scss">
#app {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  scroll-behavior: smooth;

  header {
    display: flex;
    padding-bottom: 2rem;
    line-height: 1.5;
    place-content: center;

    nav {
      display: flex;
      flex-wrap: wrap;
      font-size: 1rem;
      place-items: center;
    }

    nav a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 3px solid var(--color-border);
    }

    nav a:first-of-type {
      border: 0;
    }
  }

  @media (min-width: 960px) {
    header {
      nav {
        margin-top: 1rem;
        padding: 1rem 0;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
}

a,
.green {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
