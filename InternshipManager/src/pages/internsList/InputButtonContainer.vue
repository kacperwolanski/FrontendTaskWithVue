<template>
  <div class="inputButtonContainer">
    <SearchForUserInput />
    <AddUserButton />
  </div>
</template>

<script>
import AddUserButton from '@/components/AddUserButton.vue'
import SearchForUserInput from '@/components/SearchForUserInput.vue'

export default {
  name: 'InputButtonContainer',
  components: {
    AddUserButton,
    SearchForUserInput,
  },
}
</script>

<style>
.inputButtonContainer {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid rgb(223, 221, 221);
}
@media (max-width: 400px) {
  .inputButtonContainer {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}
</style>
