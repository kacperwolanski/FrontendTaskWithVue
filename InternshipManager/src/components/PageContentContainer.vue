<template>
  <div class="mainContainer">
    <h2 class="header">{{ header }}</h2>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContentContainer',
  props: {
    header: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.mainContainer {
  width: 100%;
}
.container {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 2px;
  min-height: 300px;
}
.header {
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
