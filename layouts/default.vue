<template>
  <div>
    <nav-bar></nav-bar>
    <main>
      <div class="container">
        <Nuxt />
     </div>
    </main>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

