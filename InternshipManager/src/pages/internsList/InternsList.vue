<template>
  <h2>User List</h2>
  <InputButtonContainer />
  <InternsTable />
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

<style>
h2 {
  font-weight: 400;
  font-size: 30px;
}
</style>
