<template>
  <div class="inputContainer">
    <span class="label">Last Name</span>
    <input
      class="lastName"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'LastNameInput',
  props: {
    lastName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.inputContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.label {
  position: relative;
  font-size: 15px;
  margin-bottom: 10px;
}
.lastName {
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
