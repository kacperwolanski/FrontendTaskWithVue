<template>
  <h2>User List</h2>
  <div class="container">
    <InputButtonContainer />
    <InternsTable />
  </div>
</template>

<script>
import InputButtonContainer from './InputButtonContainer.vue'
import InternsTable from './internsTable/InternsTable.vue'

export default {
  name: 'InternsList',
  components: {
    InputButtonContainer,
    InternsTable,
  },
}
</script>

<style scoped>
.container {
  background-color: #fefefe;
  padding: 20px;
}
h2 {
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
