<template>
  <div class="namesContainer">
    <div class="inputsContainer">
      <NameInput />
      <LastNameInput />
    </div>
    <UpdateUserButton :title="title" />
  </div>
</template>

<script>
import LastNameInput from './LastNameInput.vue'
import NameInput from './NameInput.vue'
import UpdateUserButton from './UpdateUserButton.vue'

export default {
  name: 'NameInputForm',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    NameInput,
    LastNameInput,
    UpdateUserButton,
  },
}
</script>

<style scoped>
.namesContainer {
  display: flex;
  height: 100%;
  min-height: 260px;
  min-width: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}
.inputsContainer {
  display: flex;
  position: relative;
  gap: 25px;
  width: 100%;
}
@media (max-width: 550px) {
  .inputsContainer {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
