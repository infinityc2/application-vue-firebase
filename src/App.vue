<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return (
        this.$store.getters.getUser !== null &&
        this.$store.getters.getUser !== undefined
      )
    }
  }
}
</script>
