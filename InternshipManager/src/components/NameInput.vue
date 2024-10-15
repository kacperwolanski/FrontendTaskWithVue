<template>
  <div class="inputContainer">
    <span class="label">First Name</span>
    <input
      class="nameInput"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'NameInput',
  props: {
    firstName: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.inputContainer {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.label {
  position: relative;

  font-size: 15px;
  margin-bottom: 10px;
}
.nameInput {
  position: relative;
  top: 0px;
  left: 0;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  outline: none;
  transition: all 0.3s ease;
}
</style>
